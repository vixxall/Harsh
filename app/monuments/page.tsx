'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PageHeader } from '@/components/page-header'
import type { Monument } from '@/lib/content/monuments'

export default function MonumentsPage() {
  const [monuments, setMonuments] = useState<Monument[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadMonuments() {
      try {
        const response = await fetch('/api/content?type=monuments', { cache: 'no-store' })
        const data = await response.json()

        if (active) {
          setMonuments(data?.data ?? [])
        }
      } catch {
        if (active) {
          setMonuments([])
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadMonuments()

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Monuments"
        title="India’s grand heritage in living stone"
        description="Explore the histories, architecture and fascinating facts behind India’s most iconic monuments."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        {loading ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
            Loading monuments from the backend...
          </div>
        ) : (
          <div className="grid gap-10">
            {monuments.map((monument) => (
              <article
                key={monument.id}
                id={monument.id}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="grid gap-6 lg:grid-cols-[420px_minmax(0,1fr)]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                      src={monument.image}
                      alt={monument.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1">
                        {monument.location}
                      </span>
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1">
                        {monument.builtBy}
                      </span>
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1">
                        {monument.era}
                      </span>
                    </div>

                    <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">
                      {monument.name}
                    </h2>

                    <div className="mt-8 space-y-8 text-sm leading-7 text-muted-foreground">
                      <div>
                        <h3 className="text-base font-semibold text-foreground">History</h3>
                        <p className="mt-3">{monument.history}</p>
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-foreground">Architecture</h3>
                        <p className="mt-3">{monument.architecture}</p>
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-foreground">Did you know?</h3>
                        <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
                          {monument.facts.map((fact) => (
                            <li key={fact} className="list-disc pl-5">
                              {fact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
