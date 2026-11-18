import { NextRequest, NextResponse } from 'next/server'
import { contentCollections, getContentCollection } from '@/lib/api-data'

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type')

  if (!type || type === 'all') {
    return NextResponse.json({
      ok: true,
      data: Object.fromEntries(
        Object.entries(contentCollections).map(([key, value]) => [key, value]),
      ),
      counts: Object.fromEntries(
        Object.entries(contentCollections).map(([key, value]) => [key, value.length]),
      ),
    })
  }

  const collection = getContentCollection(type)

  if (!collection) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Unsupported content type.',
        validTypes: Object.keys(contentCollections),
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
