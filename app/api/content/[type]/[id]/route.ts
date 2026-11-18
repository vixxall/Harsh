 import { NextResponse } from 'next/server'
import { getContentCollection } from '@/lib/api-data'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ type: string; id: string }> },
) {
  const { type, id } = await params
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

  const item = collection.find((entry: { id?: string }) => entry.id === id)

  if (!item) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Item not found.',
      },
      { status: 404 },
    )
  }

  // Support returning only specific fields via query param, e.g. ?fields=location
  try {
    const url = new URL(_request.url)
    const fields = url.searchParams.get('fields')

    if (fields && fields.trim().toLowerCase() === 'location') {
      // Only return the location field if it exists on the item
      if (Object.prototype.hasOwnProperty.call(item, 'location')) {
        // normalize shape to remain consistent with other endpoints
        return NextResponse.json({ ok: true, type, id, data: { location: (item as any).location } })
      }

      return NextResponse.json({ ok: false, error: 'Field not available on this item.' }, { status: 400 })
    }
  } catch (e) {
    // on any URL parsing error, fall back to returning full item
  }

  return NextResponse.json({ ok: true, type, id, data: item })
}
