import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from Next.js API Route!",
    timestamp: new Date().toISOString(),
    features: [
      "Server-side API handler",
      "JSON response",
      "Full-stack capability",
    ],
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  return NextResponse.json({
    message: "POST request received",
    received: body,
    processed: true,
  });
}
