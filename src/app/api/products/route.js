import { NextResponse } from 'next/server';
// Keep your existing imports
import Product from '../../../../models/Product';
import connectDB from '../../../../lib/mongodb';

// GET all products
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: products }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}


// POST: Create a new product
export async function POST(request) {
  try {
    // 1. Connect to the database
    await connectDB();

    // 2. Get the data sent from the frontend
    const body = await request.json();
    const { name, description, image, packageInfo } = body;

    // 3. (Optional) Basic validation
    if (!name || !description) {
        return NextResponse.json(
            { success: false, error: "Name and Description are required" },
            { status: 400 }
        );
    }

    // 4. Create the product using your Mongoose model
    const newProduct = await Product.create({
      name,
      description,
      image,
      packageInfo,
    });

    // 5. Return the success response
    return NextResponse.json(
      { success: true, data: newProduct },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error in POST:", error); // Log error for debugging
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}