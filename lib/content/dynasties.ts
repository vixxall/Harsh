export type DynastyCategory =
  | 'Ancient'
  | 'Classical'
  | 'Medieval'
  | 'Early Modern'
  | 'Regional'

export type Dynasty = {
  id: string
  name: string
  period: string
  category: DynastyCategory
  region: string
  // approximate center of power [lat, lng]
  center: [number, number]
  // indicative radius of influence in km (for map circle)
  radiusKm: number
  color: string
  summary: string
  landmark: string
}

export const dynasties: Dynasty[] = [
  // Ancient
  {
    id: 'nanda',
    name: 'Nanda Dynasty',
    period: 'c. 345 – 321 BCE',
    category: 'Ancient',
    region: 'Magadha (Bihar)',
    center: [25.0, 85.4],
    radiusKm: 450,
    color: '#d9a441',
    summary:
        'Maintained approximately 200,000 infantry, around 20,000 cavalry, about 3,000 war elephants, and nearly 2,000 war chariots. Capital: Pataliputra. Last ruler: Dhana Nanda.',

    landmark: 'Pataliputra capital',
  },
  {
    id: 'maurya',
    name: 'Maurya Dynasty',
    period: 'c. 321 – 185 BCE',
    category: 'Ancient',
    region: 'Most of the subcontinent',
    center: [25.6, 85.1],
    radiusKm: 1100,
    color: '#e0b34d',
    summary:
      'India’s first great empire; under Ashoka it spread Buddhism and erected the famed pillar edicts.',
    landmark: 'Sanchi Stupa, Ashokan pillars',
  },
  {
    id: 'shunga',
    name: 'Shunga Dynasty',
    period: 'c. 185 – 73 BCE',
    category: 'Ancient',
    region: 'Central & Eastern India',
    center: [23.5, 79.9],
    radiusKm: 500,
    color: '#c98f37',
    summary:
      'Succeeded the Mauryas and championed a Brahmanical revival alongside notable stupa art.',
    landmark: 'Bharhut Stupa railings',
  },
  {
    id: 'satavahana',
    name: 'Satavahana Dynasty',
    period: 'c. 1st c. BCE – 3rd c. CE',
    category: 'Ancient',
    region: 'Deccan',
    center: [18.5, 77.0],
    radiusKm: 650,
    color: '#c47f2e',
    summary:
      'Deccan power that thrived on Roman trade and patronized Buddhist cave architecture.',
    landmark: 'Amaravati Stupa',
  },
  // Classical
  {
    id: 'gupta',
    name: 'Gupta Dynasty',
    period: 'c. 320 – 550 CE',
    category: 'Classical',
    region: 'Northern India',
    center: [26.5, 82.0],
    radiusKm: 850,
    color: '#e6c25a',
    summary:
      'The Golden Age of India — advances in mathematics, astronomy, literature and temple art.',
    landmark: 'Dashavatara Temple, Deogarh',
  },
  {
    id: 'vakataka',
    name: 'Vakataka Dynasty',
    period: 'c. 250 – 500 CE',
    category: 'Classical',
    region: 'Central India / Deccan',
    center: [20.9, 78.6],
    radiusKm: 500,
    color: '#bf8a3c',
    summary:
      'Great patrons of art whose reign saw the finest painted caves of Ajanta take shape.',
    landmark: 'Ajanta Cave paintings',
  },
  {
    id: 'pallava',
    name: 'Pallava Dynasty',
    period: 'c. 275 – 897 CE',
    category: 'Classical',
    region: 'Tamil region',
    center: [12.8, 79.7],
    radiusKm: 350,
    color: '#d4952f',
    summary:
      'Pioneers of Dravidian temple architecture, carving monuments from living rock at Mahabalipuram.',
    landmark: 'Shore Temple, Mahabalipuram',
  },
  {
    id: 'chalukya',
    name: 'Chalukya Dynasty',
    period: 'c. 543 – 1189 CE',
    category: 'Classical',
    region: 'Deccan',
    center: [16.0, 75.9],
    radiusKm: 500,
    color: '#cf9a45',
    summary:
      'Deccan rulers famed for rock-cut and structural temples at Badami, Aihole and Pattadakal.',
    landmark: 'Badami cave temples',
  },
  {
    id: 'rashtrakuta',
    name: 'Rashtrakuta Dynasty',
    period: 'c. 753 – 982 CE',
    category: 'Classical',
    region: 'Deccan',
    center: [18.0, 75.7],
    radiusKm: 600,
    color: '#c88a2f',
    summary:
      'Commissioned the astonishing monolithic Kailasa Temple carved from a single rock at Ellora.',
    landmark: 'Kailasa Temple, Ellora',
  },
  // Medieval
  {
    id: 'chola',
    name: 'Chola Dynasty',
    period: 'c. 9th – 13th c. CE',
    category: 'Medieval',
    region: 'South India',
    center: [10.8, 79.1],
    radiusKm: 550,
    color: '#e8b84b',
    summary:
      'A maritime superpower whose navy reached Southeast Asia and whose temples defined Dravidian grandeur.',
    landmark: 'Brihadeeswarar Temple, Thanjavur',
  },
  {
    id: 'pandya',
    name: 'Pandya Dynasty',
    period: 'c. 6th c. BCE – 14th c. CE',
    category: 'Medieval',
    region: 'South India',
    center: [9.9, 78.1],
    radiusKm: 300,
    color: '#d09a3a',
    summary:
      'Ancient Tamil dynasty rich from the pearl and spice trade, patrons of Tamil Sangam culture.',
    landmark: 'Meenakshi Temple, Madurai',
  },
  {
    id: 'hoysala',
    name: 'Hoysala Dynasty',
    period: 'c. 10th – 14th c. CE',
    category: 'Medieval',
    region: 'Karnataka',
    center: [13.2, 76.1],
    radiusKm: 300,
    color: '#c98f37',
    summary:
      'Renowned for intricately sculpted star-shaped temples of soapstone.',
    landmark: 'Chennakesava Temple, Belur',
  },
  {
    id: 'delhi-sultanate',
    name: 'Delhi Sultanate',
    period: 'c. 1206 – 1526 CE',
    category: 'Medieval',
    region: 'North India',
    center: [28.6, 77.2],
    radiusKm: 800,
    color: '#d98f2f',
    summary:
      'Five successive dynasties that introduced Indo-Islamic art and administration to North India.',
    landmark: 'Qutub Minar, Delhi',
  },
  // Early Modern
  {
    id: 'vijayanagara',
    name: 'Vijayanagara Empire',
    period: 'c. 1336 – 1646 CE',
    category: 'Early Modern',
    region: 'South India',
    center: [15.3, 76.5],
    radiusKm: 700,
    color: '#e6bd52',
    summary:
      'A prosperous South Indian empire whose capital Hampi dazzled foreign travellers.',
    landmark: 'Hampi ruins, Virupaksha Temple',
  },
  {
    id: 'mughal',
    name: 'Mughal Dynasty',
    period: 'c. 1526 – 1857 CE',
    category: 'Early Modern',
    region: 'Most of the subcontinent',
    center: [27.2, 78.0],
    radiusKm: 1000,
    color: '#eac758',
    summary:
      'Brought centralization, refined arts and monuments like the Taj Mahal and Red Fort.',
    landmark: 'Taj Mahal, Red Fort',
  },
  {
    id: 'maratha',
    name: 'Maratha Confederacy',
    period: 'c. 1674 – 1818 CE',
    category: 'Early Modern',
    region: 'Western & Central India',
    center: [18.5, 74.0],
    radiusKm: 800,
    color: '#e0a544',
    summary:
      'Founded by Shivaji Maharaj; a network of states that dominated much of India before the British.',
    landmark: 'Raigad Fort, Shaniwar Wada',
  },
  // Regional
  {
    id: 'pala',
    name: 'Pala Dynasty',
    period: 'c. 750 – 1174 CE',
    category: 'Regional',
    region: 'Bengal & Bihar',
    center: [24.8, 87.9],
    radiusKm: 500,
    color: '#c88a2f',
    summary:
      'Buddhist patrons of learning who sustained the great university of Nalanda.',
    landmark: 'Nalanda Mahavihara',
  },
  {
    id: 'pratihara',
    name: 'Pratihara Dynasty',
    period: 'c. 730 – 1036 CE',
    category: 'Regional',
    region: 'North India',
    center: [26.9, 75.8],
    radiusKm: 550,
    color: '#cf9a45',
    summary:
      'North Indian power that long resisted Arab expansion into the subcontinent.',
    landmark: 'Teli ka Mandir, Gwalior',
  },
  {
    id: 'chandela',
    name: 'Chandela Dynasty',
    period: 'c. 9th – 13th c. CE',
    category: 'Regional',
    region: 'Central India',
    center: [24.85, 79.93],
    radiusKm: 300,
    color: '#d4952f',
    summary:
      'Builders of the exquisitely sculpted temples of Khajuraho, a UNESCO World Heritage Site.',
    landmark: 'Khajuraho temples',
  },
  {
    id: 'sena',
    name: 'Sena Dynasty',
    period: 'c. 11th – 12th c. CE',
    category: 'Regional',
    region: 'Bengal',
    center: [23.7, 88.4],
    radiusKm: 350,
    color: '#c47f2e',
    summary:
      'Bengal dynasty and patrons of Sanskrit learning and the revival of orthodox Hinduism.',
    landmark: 'Dhakeshwari Temple tradition',
  },
]

export const dynastyCategories: DynastyCategory[] = [
  'Ancient',
  'Classical',
  'Medieval',
  'Early Modern',
  'Regional',
]
