import { battles } from './content/battles'
import { dynasties } from './content/dynasties'
import { heroes } from './content/heroes'
import { monuments } from './content/monuments'
import { personalities } from './content/personalities'
import { searchDocs } from './content/search'
import { timelineEvents } from './content/timeline'

export const contentCollections = {
  battles,
  dynasties,
  heroes,
  monuments,
  personalities,
  timeline: timelineEvents,
  events: timelineEvents,
  search: searchDocs,
} as const

export type ContentType = keyof typeof contentCollections

const aliases: Record<string, ContentType> = {
  battle: 'battles',
  battles: 'battles',
  dynasty: 'dynasties',
  dynasties: 'dynasties',
  hero: 'heroes',
  heroes: 'heroes',
  monument: 'monuments',
  monuments: 'monuments',
  personality: 'personalities',
  personalities: 'personalities',
  event: 'events',
  events: 'events',
  timeline: 'timeline',
  search: 'search',
}

export function getContentCollection(type: string | null | undefined) {
  if (!type) return null

  const normalized = type.trim().toLowerCase()
  const key = aliases[normalized]

  if (!key) return null

  return contentCollections[key]
}
