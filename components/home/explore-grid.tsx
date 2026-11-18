import Link from "next/link"
import { Crown, Landmark, Swords, Boxes, MapPinned, ImageIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"

const cards = [
  {
    href: "/dynasties",
    title: "Dynasties",
    desc: "the great ruling houses mapped across the subcontinent.",
    icon: Crown,
  },
  {
    href: "/personalities",
    title: "Great Personalities",
    
    desc: "Emperors, warriors and reformers who shaped the nation.",
    icon: Landmark,
  },
  {
    href: "/battles",
    title: "Decisive Battles",
    desc: "Turning points that redrew the map of India.",
    icon: Swords,
  },
  
]

export function ExploreGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Ways to Explore</span>
          <h2 className="mx-auto mt-2 max-w-2xl font-serif text-3xl font-semibold md:text-4xl text-balance">
           Door ways into India&apos;s past
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 80}>
            <Link
              href={c.href}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold group-hover:text-primary">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
