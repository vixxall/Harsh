'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PageHeader } from '@/components/page-header'
import VideoPlayer from '@/components/ui/video-player'
import type { Personality } from '@/lib/content/personalities'

export default function PersonalitiesPage() {
  const [personalities, setPersonalities] = useState<Personality[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadPersonalities() {
      try {
        const response = await fetch('/api/content?type=personalities', { cache: 'no-store' })
        const data = await response.json()

        if (active) {
          setPersonalities(data?.data ?? [])
        }
      } catch {
        if (active) {
          setPersonalities([])
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadPersonalities()

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Personalities"
        title="The leaders who shaped India’s story"
        description="Explore the lives, achievements and key collaborators of India’s greatest historical figures."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        {loading ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
            Loading personalities from the backend...
          </div>
        ) : (
          <div className="grid gap-10">
            {personalities.map((person) => (
              <article
                key={person.id}
                id={person.id}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
                  <div className="relative overflow-hidden bg-muted">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1">{person.title}</span>
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1">{person.lifespan}</span>
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1">{person.category}</span>
                    </div>

                    <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">{person.name}</h2>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{person.bio}</p>

                    <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
                      <div>
                        <h3 className="text-base font-semibold text-foreground">Achievements</h3>
                        <ul className="mt-3 grid gap-2 list-disc pl-5">
                          {person.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-foreground">Related</h3>
                        <p className="mt-3">{person.related}</p>
                      </div>

                      {person.participants?.length ? (
                        <div>
                          <h3 className="text-base font-semibold text-foreground">People involved</h3>
                          <ul className="mt-4 grid gap-3">
                            {person.participants.map((item) => (
                              <li key={item.name} className="rounded-2xl border border-border bg-background/80 p-4">
                                <p className="font-semibold text-foreground">{item.name}</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.role}</p>
                                <p className="mt-2 text-sm text-muted-foreground">{item.info}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {person.videoUrl ? (
                        <div className="rounded-3xl border border-border bg-background/70 p-4">
                          <h3 className="text-base font-semibold text-foreground">Video</h3>
                          <div className="mt-4">
                            <VideoPlayer src={person.videoUrl} />
                          </div>
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
