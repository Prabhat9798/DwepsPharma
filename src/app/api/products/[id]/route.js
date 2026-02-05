import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Medicine from "@/models/Medicine";

export async function GET(request, { params }) {
  try {
    await connectDB();

    // 1. Get the ID from the URL (await is required in newer Next.js versions)
    const { id } = await params;

    // 2. Search the database for this specific ID
    const medicine = await Medicine.findById(id);

    // 3. Handle case where ID doesn't exist
    if (!medicine) {
      return NextResponse.json(
        { success: false, error: "Medicine not found" },
        { status: 404 }
      );
    }

    // 4. Return the specific medicine data
    return NextResponse.json({ success: true, data: medicine });

  } catch (error) {
    console.error("Error fetching single medicine:", error);
    return NextResponse.json(
      { success: false, error: "Invalid ID or Server Error" },
      { status: 500 }
    );
  }
}