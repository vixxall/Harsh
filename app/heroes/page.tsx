'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Hero } from '@/lib/content/heroes'

export default function HeroesPage() {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadHeroes() {
      try {
        const response = await fetch('/api/content?type=heroes', { cache: 'no-store' })
        const data = await response.json()

        if (active) {
          setHeroes(data?.data ?? [])
        }
      } catch {
        if (active) {
          setHeroes([])
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadHeroes()

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ima.avif"
            alt="Indian Military Academy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
            <p className="fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Heroes
            </p>
            <h1 className="fade-up mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              Discover India's greatest heroes
            </h1>
            <p className="fade-up mt-4 max-w-2xl text-pretty text-base leading-relaxed text-gray-100 md:text-lg">
              Explore iconic leaders, warriors and reformers whose actions changed the course of Indian history.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        {loading ? (
          <div className="rounded-3xl border border-border bg-card p-12 text-center shadow-sm text-sm text-muted-foreground">
            Loading heroes from the backend...
          </div>
        ) : heroes.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card p-12 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">No heroes have been added yet</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Add new hero data to <code className="rounded-md bg-muted px-2 py-1 font-mono text-xs">lib/content/heroes.ts</code> and it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-10">
            {heroes.map((hero) => (
              <article
                key={hero.id}
                id={hero.id}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
                  <div className="relative overflow-hidden bg-muted">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={hero.image}
                        alt={hero.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1">{hero.title}</span>
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1">{hero.lifespan}</span>
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1">{hero.category}</span>
                    </div>

                    <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">{hero.name}</h2>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{hero.bio}</p>

                    <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
                      <div>
                        <h3 className="text-base font-semibold text-foreground">Achievements</h3>
                        <ul className="mt-3 grid gap-2 list-disc pl-5">
                          {hero.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-foreground">Related topics</h3>
                        <p className="mt-3">{hero.related}</p>
                      </div>

                      {hero.participants?.length ? (
                        <div>
                          <h3 className="text-base font-semibold text-foreground">Key collaborators</h3>
                          <ul className="mt-4 grid gap-3">
                            {hero.participants.map((member) => (
                              <li key={member.name} className="rounded-2xl border border-border bg-background/80 p-4">
                                <p className="font-semibold text-foreground">{member.name}</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{member.role}</p>
                                <p className="mt-2 text-sm text-muted-foreground">{member.info}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
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
