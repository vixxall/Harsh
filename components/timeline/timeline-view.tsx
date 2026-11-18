"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Era, TimelineEvent } from "@/lib/content/timeline"

const eras: (Era | "All")[] = ["All", "Ancient", "Medieval", "Modern"]

const eraDot: Record<Era, string> = {
  Ancient: "bg-gold",
  Medieval: "bg-primary",
  Modern: "bg-accent",
}

export function TimelineView() {
  const [active, setActive] = useState<(typeof eras)[number]>("All")
  const [open, setOpen] = useState<string | null>(null)
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let activeRequest = true

    async function loadTimeline() {
      try {
        const response = await fetch('/api/content?type=timeline', { cache: 'no-store' })
        const data = await response.json()

        if (activeRequest) {
          setTimelineEvents(data?.data ?? [])
        }
      } catch {
        if (activeRequest) {
          setTimelineEvents([])
        }
      } finally {
        if (activeRequest) {
          setLoading(false)
        }
      }
    }

    loadTimeline()

    return () => {
      activeRequest = false
    }
  }, [])

  useEffect(() => {
    if (!timelineEvents.length) return
    setOpen((current) => current ?? timelineEvents[0].id)
  }, [timelineEvents])

  const events = active === "All" ? timelineEvents : timelineEvents.filter((e) => e.era === active)

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {eras.map((e) => (
          <button
            key={e}
            onClick={() => setActive(e)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === e
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {e}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="rounded-3xl border border-border bg-card p-6 text-sm text-muted-foreground">
          Loading timeline from the backend...
        </div>
      ) : (
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border md:left-1/2" aria-hidden="true" />

          <ol className="space-y-8">
            {events.map((e, i) => {
              const isOpen = open === e.id
              const left = i % 2 === 0
              return (
                <li
                  key={e.id}
                  id={e.id}
                  className={cn(
                    "relative scroll-mt-28 pl-10 md:w-1/2",
                    left ? "md:pr-10 md:pl-0 md:text-right" : "md:ml-auto md:pl-10",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-[9px] top-6 z-10 size-3.5 rounded-full ring-4 ring-background md:left-auto",
                      left ? "md:-right-[7px]" : "md:-left-[7px]",
                      eraDot[e.era],
                    )}
                    aria-hidden="true"
                  />

                  <article className="overflow-hidden rounded-xl border border-border bg-card">
                    <button
                      onClick={() => setOpen(isOpen ? null : e.id)}
                      className="flex w-full items-center gap-4 p-4 text-left md:flex-row"
                      aria-expanded={isOpen}
                    >
                      <div className="relative size-16 shrink-0 overflow-hidden rounded-lg">
                        <Image src={e.image || "/placeholder.svg"} alt={e.title} fill className="object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-wide text-gold">{e.period}</p>
                        <h3 className="mt-0.5 font-serif text-lg font-semibold leading-tight">{e.title}</h3>
                      </div>
                      <ChevronDown
                        className={cn(
                          "size-5 shrink-0 text-muted-foreground transition-transform",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-border p-4 text-left md:text-left">
                        <p className="text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
                        <ul className="mt-4 space-y-2">
                          {e.details.map((d, idx) => (
                            <li key={idx} className="flex gap-2 text-sm leading-relaxed">
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {e.highlights.map((h) => (
                            <span
                              key={h}
                              className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      )}
    </div>
  )
}
