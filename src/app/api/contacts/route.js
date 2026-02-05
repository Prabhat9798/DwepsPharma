import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(request) {
  try {
    // 1. Connect to Database
    await connectDB();

    // 2. Parse the incoming JSON data
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    // 3. Validation (Optional, but good practice)
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // 4. Create the new contact entry in the database
    const newContact = await Contact.create({
      fullName,
      email,
      phone,
      message
    });

    // 5. Return success response
    return NextResponse.json(
      { success: true, data: newContact, message: "Message sent successfully!" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error: Failed to send message." },
      { status: 500 }
    );
  }
}