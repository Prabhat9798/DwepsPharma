import connectDB from '@/lib/db';
import Medicine from '@/models/Medicine';
import { NextResponse } from 'next/server';


// GET: Fetch all medicines
export async function GET() {
  try {
    await connectDB();
    
    // Fetch all medicines and sort by newest first
    const medicines = await Medicine.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: medicines }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch medicines: " + error.message },
      { status: 500 }
    );
  }
}

// POST: Add a new medicine (API Version)
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    // Destructure the fields matching your Schema
    const { 
      name, 
      imageUrl, 
      about, 
      form, 
      category, 
      description // This contains { whatIsIt, whenAndHow, keyUses }
    } = body;

    // Basic Validation
    if (!name || !imageUrl || !about || !form) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, image, about, form)" },
        { status: 400 }
      );
    }

    const newMedicine = await Medicine.create({
      name,
      imageUrl,
      about,
      form,
      category,
      description
    });

    return NextResponse.json(
      { success: true, data: newMedicine },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error in POST:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}