export type SceneId = 'ashoka-pillar' | 'sanchi-stupa' | 'taj-mahal' | 'maratha-fort' | 'konark-wheel'

export type Scene = {
  id: SceneId
  title: string
  subtitle: string
  period: string
  description: string
  facts: string[]
}

export const scenes: Scene[] = [
  {
    id: 'ashoka-pillar',
    title: 'Ashoka Pillar & Lion Capital',
    subtitle: 'The emblem of a nation',
    period: 'c. 3rd century BCE',
    description:
      'Ashoka erected polished sandstone pillars across his empire, crowned with animal capitals. The Lion Capital of Sarnath became independent India’s national emblem.',
    facts: [
      'Four Asiatic lions stand back to back atop the capital',
      'The Ashoka Chakra beneath appears on the national flag',
      'Pillars were carved and polished to a mirror-like shine',
    ],
  },
  {
    id: 'sanchi-stupa',
    title: 'Sanchi Stupa',
    subtitle: 'A dome of devotion',
    period: 'c. 3rd century BCE',
    description:
      'Commissioned by Ashoka, the Great Stupa is a hemispherical mound enshrining relics, encircled by railings and four carved gateways (toranas).',
    facts: [
      'One of the oldest stone structures in India',
      'The four toranas depict scenes from the Buddha’s life',
      'The dome symbolizes the cosmic mountain',
    ],
  },
  {
    id: 'taj-mahal',
    title: 'Taj Mahal',
    subtitle: 'A teardrop on the cheek of time',
    period: 'c. 1632 – 1653 CE',
    description:
      'Built by Shah Jahan in memory of Mumtaz Mahal, the Taj is a perfectly symmetrical marble mausoleum flanked by four minarets and topped with a great onion dome.',
    facts: [
      'Built from gleaming white Makrana marble',
      'Perfectly symmetrical along its central axis',
      'One of the New Seven Wonders of the World',
    ],
  },
  {
    id: 'maratha-fort',
    title: 'Maratha Hill Fort',
    subtitle: 'Shivaji’s strongholds',
    period: '17th century CE',
    description:
      'Chhatrapati Shivaji Maharaj built and captured a vast network of hill forts. Perched on steep ridges with tiered ramparts and bastions, they anchored Maratha power.',
    facts: [
      'Forts like Raigad served as Maratha capitals',
      'Steep approaches made them nearly impregnable',
      'Central to guerrilla warfare (Ganimi Kava)',
    ],
  },
  {
    id: 'konark-wheel',
    title: 'Konark Chariot Wheel',
    subtitle: 'A wheel that tells time',
    period: 'c. 13th century CE',
    description:
      'The Sun Temple at Konark was built as a colossal chariot for the Sun God. Its intricately carved stone wheels double as remarkably accurate sundials.',
    facts: [
      'The temple has 24 carved chariot wheels',
      'Each wheel functions as a working sundial',
      'Drawn by seven stone horses representing the week',
    ],
  },
]
