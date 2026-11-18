import { Reveal } from "@/components/reveal"

const stats = [
  { value: "5000+", label: "Years of History" },
  { value: "10+", label: "Major Dynasties" },
  { value: "15+", label: "Great Personalities" },
  { value: "10+", label: "Iconic Monuments" },
  { value: "10+", label: "Indian Army Warriors" },
  { value: "10+", label: "Decisive Battles" },
]

export function StatsBand() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="flex flex-col items-center gap-1 px-4 py-10 text-center">
              <span className="font-serif text-3xl font-semibold text-primary md:text-4xl">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
