import { timelineEvents } from './timeline'
import { dynasties } from './dynasties'
import { personalities } from './personalities'
import { monuments } from './monuments'
import { battles } from './battles'

export type SearchType = 'Event' | 'Dynasty' | 'Personality' | 'Monument' | 'Battle'

export type SearchDoc = {
  id: string
  title: string
  type: SearchType
  subtitle: string
  description: string
  href: string
  keywords: string
}

export const searchDocs: SearchDoc[] = [
  ...timelineEvents.map((t) => ({
    id: `event-${t.id}`,
    title: t.title,
    type: 'Event' as const,
    subtitle: t.period,
    description: t.summary,
    href: `/timeline#${t.id}`,
    keywords: `${t.title} ${t.era} ${t.highlights.join(' ')}`,
  })),
  ...dynasties.map((d) => ({
    id: `dynasty-${d.id}`,
    title: d.name,
    type: 'Dynasty' as const,
    subtitle: `${d.period} · ${d.region}`,
    description: d.summary,
    href: `/dynasties#${d.id}`,
    keywords: `${d.name} ${d.category} ${d.region} ${d.landmark}`,
  })),
  ...personalities.map((p) => ({
    id: `person-${p.id}`,
    title: p.name,
    type: 'Personality' as const,
    subtitle: `${p.title} · ${p.lifespan}`,
    description: p.bio,
    href: `/personalities#${p.id}`,
    keywords: `${p.name} ${p.title} ${p.category} ${p.related}`,
  })),
  ...monuments.map((m) => ({
    id: `monument-${m.id}`,
    title: m.name,
    type: 'Monument' as const,
    subtitle: m.location,
    description: m.history,
    href: `/monuments#${m.id}`,
    keywords: `${m.name} ${m.location} ${m.builtBy} ${m.era}`,
  })),
  ...battles.map((b) => ({
    id: `battle-${b.id}`,
    title: b.name,
    type: 'Battle' as const,
    subtitle: `${b.year} · ${b.location}`,
    description: b.summary,
    href: `/battles#${b.id}`,
    keywords: `${b.name} ${b.combatants} ${b.location} ${b.outcome}`,
  })),
]

export const searchTypes: SearchType[] = [
  'Event',
  'Dynasty',
  'Personality',
  'Monument',
  'Battle',
]
