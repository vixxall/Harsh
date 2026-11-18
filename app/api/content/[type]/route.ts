import { NextResponse } from 'next/server'
import { getContentCollection } from '@/lib/api-data'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ type: string }> },
) {
  const { type } = await params
  const collection = getContentCollection(type)

  if (!collection) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Unsupported content type.',
      },
      { status: 400 },
    )
  }

  return NextResponse.json({
    ok: true,
    type,
    count: collection.length,
    data: collection,
  })
}
