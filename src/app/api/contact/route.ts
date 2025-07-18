import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    let res =  await fetch(
      'https://script.google.com/macros/s/AKfycbxlIjwPb2HhtZyNJLOiNh0XHqkSpo8GvqxDO96U6JMJJlj9M-xV-ap2wDijsVh5IxwkTw/exec',
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    if (responseData.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ success: false }, { status: res.status });
    }
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}