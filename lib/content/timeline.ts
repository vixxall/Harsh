export type Era = 'Ancient' | 'Medieval' | 'Modern'

export type TimelineEvent = {
  id: string
  title: string
  period: string
  startYear: number // negative = BCE
  era: Era
  image: string
  summary: string
  details: string[]
  highlights: string[]
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'indus-valley',
    title: 'Indus Valley Civilization',
    period: 'c. 3300 – 1300 BCE',
    startYear: -3300,
    era: 'Ancient',
    image: '/images/timeline/indus-valley.png',
    summary:
      'One of the world’s earliest urban cultures, famed for planned cities, drainage systems and standardized weights.',
    details: [
      'Flourished across the north-western regions of the Indian subcontinent along the Indus and Ghaggar-Hakra rivers.',
      'Major cities like Harappa and Mohenjo-daro featured grid-planned streets, granaries, public baths and advanced sanitation.',
      'A still-undeciphered script, standardized weights and long-distance trade point to a sophisticated, organized society.',
    ],
    highlights: ['Great Bath of Mohenjo-daro', 'Grid city planning', 'Undeciphered Indus script'],
  },
  {
    id: 'vedic-period',
    title: 'Vedic Period',
    period: 'c. 1500 – 500 BCE',
    startYear: -1500,
    era: 'Ancient',
    image: '/images/timeline/vedic-period.png',
    summary:
      'The age of the Vedas that shaped early Hindu philosophy, society and the Sanskrit literary tradition.',
    details: [
      'Composition of the four Vedas — Rigveda, Samaveda, Yajurveda and Atharvaveda — transmitted orally with remarkable precision.',
      'Society gradually shifted from pastoral tribes to settled agrarian kingdoms (janapadas).',
      'Foundational ideas of dharma, ritual and cosmology later blossomed in the Upanishads.',
    ],
    highlights: ['The four Vedas', 'Rise of janapadas', 'Upanishadic philosophy'],
  },
  {
    id: 'maurya-empire',
    title: 'Maurya Empire',
    period: 'c. 321 – 185 BCE',
    startYear: -321,
    era: 'Ancient',
    image: '/images/timeline/maurya-empire.png',
    summary:
      'India’s first great pan-subcontinental empire, reaching its zenith under Ashoka the Great.',
    details: [
      'Founded by Chandragupta Maurya with the counsel of the strategist Chanakya (Kautilya).',
      'After the bloody Kalinga war, Ashoka embraced Buddhism and spread messages of dharma via rock and pillar edicts.',
      'A centralized administration, vast road network and thriving trade unified much of the subcontinent.',
    ],
    highlights: ['Ashoka’s edicts', 'Lion Capital of Sarnath', 'Spread of Buddhism'],
  },
  {
    id: 'gupta-empire',
    title: 'Gupta Empire',
    period: 'c. 320 – 550 CE',
    startYear: 320,
    era: 'Ancient',
    image: '/images/timeline/gupta-empire.png',
    summary:
      'The classical “Golden Age” of India, celebrated for breakthroughs in science, mathematics and the arts.',
    details: [
      'Mathematician Aryabhata proposed the concept of zero and calculated the value of pi and the length of the solar year.',
      'Sanskrit literature flourished with Kalidasa; temple architecture and sculpture reached new heights.',
      'Relative peace and prosperity supported flourishing universities such as Nalanda.',
    ],
    highlights: ['Concept of zero', 'Kalidasa’s poetry', 'Nalanda University'],
  },
  {
    id: 'delhi-sultanate',
    title: 'Delhi Sultanate',
    period: 'c. 1206 – 1526 CE',
    startYear: 1206,
    era: 'Medieval',
    image: '/images/timeline/delhi-sultanate.png',
    summary:
      'Five successive dynasties ruled North India from Delhi, blending Persian and Indian art and administration.',
    details: [
      'Included the Mamluk, Khalji, Tughlaq, Sayyid and Lodi dynasties across three centuries.',
      'Introduced Indo-Islamic architecture — the Qutub Minar rose as an enduring symbol.',
      'Administrative and revenue reforms reshaped medieval North Indian statecraft.',
    ],
    highlights: ['Qutub Minar', 'Indo-Islamic architecture', 'Five ruling dynasties'],
  },
  {
    id: 'mughal-empire',
    title: 'Mughal Empire',
    period: 'c. 1526 – 1857 CE',
    startYear: 1526,
    era: 'Medieval',
    image: '/images/timeline/mughal-empire.png',
    summary:
      'A vast, wealthy empire renowned for cultural synthesis and some of the finest architecture ever built.',
    details: [
      'Founded by Babur after the First Battle of Panipat; consolidated by Akbar’s policy of tolerance.',
      'Shah Jahan commissioned the Taj Mahal, a peak of Indo-Islamic architecture.',
      'At its height it was among the largest economies in the world.',
    ],
    highlights: ['Taj Mahal', 'Akbar’s tolerance', 'Red Fort & Fatehpur Sikri'],
  },
  {
    id: 'maratha-empire',
    title: 'Maratha Empire',
    period: 'c. 1674 – 1818 CE',
    startYear: 1674,
    era: 'Medieval',
    image: '/images/timeline/maratha-empire.png',
    summary:
      'Founded by Chhatrapati Shivaji Maharaj, the Marathas rose to dominate much of the subcontinent.',
    details: [
      'Shivaji built a strong navy and a network of hill forts, pioneering guerrilla warfare (Ganimi Kava).',
      'The Confederacy expanded across western and central India under the Peshwas.',
      'The Marathas were the leading Indian power until the rise of British dominance.',
    ],
    highlights: ['Hill forts', 'Swarajya', 'Maratha navy'],
  },
  {
    id: 'british-rule',
    title: 'British Rule',
    period: 'c. 1757 – 1947 CE',
    startYear: 1757,
    era: 'Modern',
    image: '/images/timeline/british-rule.png',
    summary:
      'From Company rule to the British Raj, nearly two centuries of colonial control transformed the subcontinent.',
    details: [
      'The Battle of Plassey (1757) marked the East India Company’s political ascendancy.',
      'After the Revolt of 1857, the British Crown assumed direct rule (the Raj).',
      'Railways, telegraph and English education arrived alongside economic exploitation and famine.',
    ],
    highlights: ['Battle of Plassey', 'The British Raj', 'Railways & telegraph'],
  },
  {
    id: 'freedom-movement',
    title: 'Indian Freedom Movement',
    period: 'c. 1857 – 1947 CE',
    startYear: 1857,
    era: 'Modern',
    image: '/images/timeline/freedom-movement.png',
    summary:
      'A decades-long struggle of sacrifice and satyagraha that won India its independence.',
    details: [
      'From the Revolt of 1857 to the Quit India Movement, generations resisted colonial rule.',
      'Gandhi’s non-violent satyagraha mobilized millions across the country.',
      'Revolutionaries like Bhagat Singh and Subhas Chandra Bose pursued the goal by other means.',
    ],
    highlights: ['Salt March', 'Quit India', 'Non-violent satyagraha'],
  },
  {
    id: 'independent-india',
    title: 'Independent India',
    period: '1947 CE – Present',
    startYear: 1947,
    era: 'Modern',
    image: '/images/timeline/independent-india.png',
    summary:
      'A free nation adopts a democratic constitution and charts its own course as the world’s largest democracy.',
    details: [
      'India gained independence on 15 August 1947 and became a republic on 26 January 1950.',
      'The Constitution, drafted under Dr. B. R. Ambedkar, guaranteed fundamental rights to all citizens.',
      'India grew into the world’s largest democracy and a rising global power.',
    ],
    highlights: ['Independence 1947', 'Constitution 1950', 'World’s largest democracy'],
  },
]
