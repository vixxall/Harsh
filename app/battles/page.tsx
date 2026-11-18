'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PageHeader } from '@/components/page-header'
import VideoPlayer from '@/components/ui/video-player'
import type { Battle } from '@/lib/content/battles'

export default function BattlesPage() {
  const [battles, setBattles] = useState<Battle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadBattles() {
      try {
        const response = await fetch('/api/content?type=battles', { cache: 'no-store' })
        const data = await response.json()

        if (active) {
          setBattles((data?.data ?? []).slice().sort((a: Battle, b: Battle) => a.startYear - b.startYear))
        }
      } catch {
        if (active) {
          setBattles([])
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadBattles()

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/battle.jpg"
            alt="Key Battles in Indian History"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
            <p className="fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Battles
            </p>
            <h1 className="fade-up mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              Key battles that shaped Indian history
            </h1>
            <p className="fade-up mt-4 max-w-2xl text-pretty text-base leading-relaxed text-gray-100 md:text-lg">
              Explore major battles, their outcomes, and embedded videos that bring each one to life.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        {loading ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
            Loading battles from the backend...
          </div>
        ) : (
          <div className="grid gap-10">
            {battles.map((battle) => (
              <article
                key={battle.id}
                id={battle.id}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap items-start gap-4 text-sm text-muted-foreground">
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1">{battle.year}</span>
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1">{battle.location}</span>
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1">{battle.outcome}</span>
                  </div>

                  <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">{battle.name}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{battle.summary}</p>

                  <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">Combatants</h3>
                      <p className="mt-3">{battle.combatants}</p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">Significance</h3>
                      <p className="mt-3">{battle.significance}</p>
                    </div>
                    {battle.participants?.length ? (
                      <div>
                        <h3 className="text-base font-semibold text-foreground">Key people involved</h3>
                        <ul className="mt-3 grid gap-3">
                          {battle.participants.map((person) => (
                            <li key={person.name} className="rounded-2xl border border-border bg-background/80 p-4">
                              <p className="font-semibold text-foreground">{person.name}</p>
                              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{person.role}</p>
                              <p className="mt-2 text-sm text-muted-foreground">{person.info}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  {battle.videoUrl ? (
                    <div className="mt-10 rounded-3xl border border-border bg-background/70 p-4">
                      <h3 className="text-base font-semibold text-foreground">Watch</h3>
                      <div className="mt-4">
                        <VideoPlayer src={battle.videoUrl} />
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
