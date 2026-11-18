'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { Monument } from '@/lib/content/monuments'

export function FeaturedMonuments() {
  const [featured, setFeatured] = useState<Monument[]>([])

  useEffect(() => {
    let active = true

    async function loadFeaturedMonuments() {
      try {
        const response = await fetch('/api/content?type=monuments', { cache: 'no-store' })
        const data = await response.json()

        if (active) {
          setFeatured((data?.data ?? []).slice(0, 4))
        }
      } catch {
        if (active) {
          setFeatured([])
        }
      }
    }

    loadFeaturedMonuments()

    return () => {
      active = false
    }
  }, [])

  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Wonders in Stone</span>
              <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl text-balance">
                Monuments that outlived empires
              </h2>
            </div>
            <Link
              href="/monuments"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Explore all monuments <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((m, i) => (
            <Reveal key={m.id} delay={(i % 4) * 70}>
              <Link
                href={`/monuments#${m.id}`}
                className="group block overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.image || '/placeholder.svg'}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-serif text-lg font-semibold leading-tight">{m.name}</h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {m.location}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
