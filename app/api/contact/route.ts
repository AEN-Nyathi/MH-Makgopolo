'use server'

import { NextResponse } from "next/server";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, course_interest, message } = body;

    if (!full_name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const submission = {
      full_name,
      email,
      phone,
      course_interest: course_interest || null,
      message,
      source: 'Website Contact Form',
      status: 'new',
      created_at: serverTimestamp(),
    };

    await addDoc(collection(db, 'contact_submissions'), submission);

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
