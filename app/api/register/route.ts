
import { NextResponse } from "next/server";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, idNumber, course } = body;

    if (!fullName || !email || !phone || !idNumber || !course) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const submission = {
      fullName,
      email,
      phone,
      idNumber,
      course,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, 'registrations'), submission);

    return NextResponse.json(
      { success: true, message: 'Registration submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing registration:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
