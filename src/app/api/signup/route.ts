import { NextResponse } from "next/server";
import { appendToJsonFile } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, vehicleType, area, dailyUsage, preferredStation } = body;

    // Basic validation
    if (!name || !phone || !vehicleType || !area || !dailyUsage || !preferredStation) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const driver = {
      id: crypto.randomUUID(),
      name,
      phone,
      vehicleType,
      area,
      dailyUsage,
      preferredStation,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    // Store the signup
    await appendToJsonFile("signups.json", driver);

    return NextResponse.json(
      { message: "Signup successful!", driver },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
