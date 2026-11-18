import Link from 'next/link'
import { Landmark } from 'lucide-react'
import { navItems } from '@/lib/nav'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Landmark className="size-5" />
              </span>
              <span className="font-serif text-lg font-semibold">History Explorer</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              An interactive journey through five millennia of Indian history — dynasties, monuments,
              great personalities, decisive battles and the road to freedom.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">About</h4>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Built as an educational resource. Historical dates are approximate and follow widely
              accepted scholarship. Maps show indicative regions, not exact modern borders.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} History Explorer. For educational use.</p>
          <p className="font-serif italic text-gold-soft">
            &ldquo;A people without knowledge of their history is like a tree without roots.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  )
}
