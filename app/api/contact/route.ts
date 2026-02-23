import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb/client';
import Message from '@/lib/mongodb/models/Message';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // اعتبارسنجی ساده
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const newMessage = await Message.create({
      name,
      email,
      message
    });

    return NextResponse.json(
      { success: true, data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}