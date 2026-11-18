import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { timelineEvents } from "@/lib/content/timeline"

const eraColor: Record<string, string> = {
  Ancient: "text-gold border-gold/40",
  Medieval: "text-primary border-primary/40",
  Modern: "text-accent-foreground border-border",
}

export function TimelinePreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">The Grand Arc</span>
            <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl text-balance">
              Five millennia, one continuous story
            </h2>
          </div>
          <Link
            href="/timeline"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            View full timeline <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {timelineEvents.map((e, i) => (
          <Reveal key={e.id} delay={(i % 3) * 80}>
            <Link
              href={`/timeline#${e.id}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ${eraColor[e.era]}`}
                >
                  {e.era}
                </span>
                <span className="text-xs text-muted-foreground">{e.period}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold group-hover:text-primary">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{e.summary}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
