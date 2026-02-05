import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Medicine from '@/models/Medicine';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
      return NextResponse.json({ success: true, data: [] });
    }

    // Search logic: matches Name OR Category OR Form (case-insensitive)
    const products = await Medicine.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
        { form: { $regex: query, $options: 'i' } },
      ],
    })
    .select('name form category imageUrl') // Only get necessary fields
    .limit(5); // Limit results to 5 for the dropdown

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}