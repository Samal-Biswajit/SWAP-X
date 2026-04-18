import { NextResponse } from "next/server";
import { appendToJsonFile } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { phone, station, preferredTime, batteryType } = body;

    // Basic validation
    if (!phone || !station || !batteryType) {
      return NextResponse.json(
        { error: "Phone, station, and battery type are required." },
        { status: 400 }
      );
    }

    const booking = {
      id: crypto.randomUUID(),
      phone,
      station,
      preferredTime: preferredTime || "ASAP",
      batteryType,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // Store the booking
    await appendToJsonFile("bookings.json", booking);

    return NextResponse.json(
      { message: "Booking received!", booking },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
