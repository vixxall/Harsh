import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Panorama of India's greatest heritage monuments at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <span className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur">
            <Compass className="size-3.5" />
            5,000 Years of Heritage
          </span>
          <h1 className="fade-up mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Journey Through <span className="text-gold">Indian History</span>
          </h1>
          <p className="fade-up mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Explore dynasties, monuments, heroes, legendary personalities and decisive battles — brought
            alive through interactive timelines.
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="/timeline">
                Explore the Timeline
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
