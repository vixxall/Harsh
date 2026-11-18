'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Dynasty } from '@/lib/content/dynasties'

export default function DynastiesPage() {
  const [dynasties, setDynasties] = useState<Dynasty[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadDynasties() {
      try {
        const response = await fetch('/api/content?type=dynasties', { cache: 'no-store' })
        const data = await response.json()

        if (active) {
          setDynasties(data?.data ?? [])
        }
      } catch {
        if (active) {
          setDynasties([])
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadDynasties()

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mahal.jpg"
            alt="Indian Dynasties Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
            <p className="fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Dynasties
            </p>
            <h1 className="fade-up mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              Major dynasties of Indian history
            </h1>
            <p className="fade-up mt-4 max-w-2xl text-pretty text-base leading-relaxed text-gray-100 md:text-lg">
              Explore the great dynasties that shaped India's culture, architecture and political landscape over centuries.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        {loading ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
            Loading dynasties from the backend...
          </div>
        ) : (
          <div className="grid gap-10">
            {dynasties.map((dynasty) => (
              <article
                key={dynasty.id}
                id={dynasty.id}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1">{dynasty.category}</span>
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1">{dynasty.period}</span>
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1">{dynasty.region}</span>
                  </div>

                  <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">
                    {dynasty.name}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{dynasty.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1">Landmark: {dynasty.landmark}</span>
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1">Influence radius: {dynasty.radiusKm} km</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
