import { monuments } from './monuments'
import { personalities } from './personalities'
import { timelineEvents } from './timeline'

export type GalleryCategory = 'Monuments' | 'Personalities' | 'Eras'

export type GalleryItem = {
  id: string
  title: string
  caption: string
  image: string
  category: GalleryCategory
}

export const galleryCategories: GalleryCategory[] = ['Monuments', 'Personalities', 'Eras']

export const galleryItems: GalleryItem[] = [
  ...monuments.map((m) => ({
    id: `mon-${m.id}`,
    title: m.name,
    caption: m.location,
    image: m.image,
    category: 'Monuments' as const,
  })),
  ...personalities.map((p) => ({
    id: `per-${p.id}`,
    title: p.name,
    caption: p.title,
    image: p.image,
    category: 'Personalities' as const,
  })),
  ...timelineEvents.map((t) => ({
    id: `era-${t.id}`,
    title: t.title,
    caption: t.period,
    image: t.image,
    category: 'Eras' as const,
  })),
]
