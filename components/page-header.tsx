export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="border-b border-border bg-hero-grad">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <p className="fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </p>
        <h1 className="fade-up mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="fade-up mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
