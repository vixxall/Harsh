import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'Bharat backend is running',
    timestamp: new Date().toISOString(),
  })
}
