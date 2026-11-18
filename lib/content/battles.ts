export type BattlePerson = {
  name: string
  role: string
  info: string
}

export type Battle = {
  id: string
  name: string
  year: string
  startYear: number
  location: string
  combatants: string
  outcome: string
  summary: string
  significance: string
  videoUrl?: string
  participants?: BattlePerson[]
}

export const battles: Battle[] = [
  {
    id: 'hydaspes',
    name: 'Battle of Hydaspes',
    year: '326 BCE',
    startYear: -326,
    location: 'Jhelum River, Punjab',
    combatants: 'Alexander the Great vs King Porus',
    outcome: 'Macedonian victory; Porus retained his kingdom',
    summary:
      'Alexander’s hardest-fought battle, waged across the monsoon-swollen Hydaspes against Porus’ war elephants.',
    significance:
      'Marked the easternmost extent of Alexander’s conquests; his troops soon refused to march further.',
    videoUrl: 'https://youtube.com/shorts/DlqWdPr-BbU?si=XC-WXVFDtkdCjSEe',
  },
  {
    id: 'kalinga',
    name: 'Battle of Kalinga',
    year: 'c. 261 BCE',
    startYear: -261,
    location: 'Kalinga (Odisha)',
    combatants: 'Maurya Empire (Ashoka) vs Kalinga',
    outcome: 'Mauryan victory',
    summary:
      'A devastatingly bloody war whose carnage transformed Ashoka from conqueror to apostle of peace.',
    significance:
      'Ashoka’s remorse led him to embrace Buddhism and spread it across Asia.',
    videoUrl: 'https://youtube.com/shorts/v9mffHv2c60?si=fDycPceaWC_oXMxV',
  },
  {
    id: 'tarain',
    name: 'Battles of Tarain',
    year: '1191 & 1192 CE',
    startYear: 1191,
    location: 'Tarain, near Thanesar',
    combatants: 'Prithviraj Chauhan vs Muhammad of Ghor',
    outcome: 'Rajput win (1191), Ghurid win (1192)',
    summary:
      'Two decisive clashes; Prithviraj triumphed first but was defeated a year later.',
    significance:
      'The second battle opened North India to sustained Ghurid and later Delhi Sultanate rule.',
    videoUrl: 'https://youtube.com/shorts/yQns2bdr67A?si=KxC71MEq8MQ5_xWw',
  },
  {
    id: 'panipat-1',
    name: 'First Battle of Panipat',
    year: '1526 CE',
    startYear: 1526,
    location: 'Panipat, Haryana',
    combatants: 'Babur vs Ibrahim Lodi',
    outcome: 'Mughal victory',
    summary:
      'Babur’s skilful use of field artillery and the tulughma tactic shattered the Lodi army.',
    significance:
      'Founded the Mughal Empire in India, ending the Delhi Sultanate.',
    videoUrl: 'https://youtu.be/y6lXfljvO6U?si=I9pTUtEwa_HeRgF3',
  },
  {
    id: 'panipat-2',
    name: 'Second Battle of Panipat',
    year: '1556 CE',
    startYear: 1556,
    location: 'Panipat, Haryana',
    combatants: 'Akbar (Bairam Khan) vs Hemu',
    outcome: 'Mughal victory',
    summary:
      'A chance arrow felled the Hindu general Hemu, turning near-certain victory into defeat.',
    significance:
      'Secured the young Akbar’s throne and consolidated Mughal rule.',
  },
  {
    id: 'haldighati',
    name: 'Battle of Haldighati',
    year: '1576 CE',
    startYear: 1576,
    location: 'Haldighati, Rajasthan',
    combatants: 'Maharana Pratap vs Mughal forces under Man Singh I of Amber',
    outcome: 'Tactical Mughal advantage, but no decisive territorial gain',
    summary:
      'The Battle of Haldighati was fought in the steep mountain pass of Haldighati in June 1576. Maharana Pratap led a largely light cavalry force of Mewar against the numerically superior Mughal army commanded by Raja Man Singh I. Though the Mughals held the field at the end of the day, Pratap withdrew in good order and retained the spirit of resistance that kept Mewar unconquered for years.',
    significance:
      'The battle became a symbol of Rajput defiance and Guerrero resilience. It prevented the Mughals from fully conquering Mewar, allowing Maharana Pratap to continue guerilla warfare and eventually reclaim much of his territory.',
    videoUrl: 'https://youtube.com/shorts/BvdRf_7AOVU?si=KaFUoERTCNcK_24E',
  },
  {
    id: 'panipat-3',
    name: 'Third Battle of Panipat',
    year: '1761 CE',
    startYear: 1761,
    location: 'Panipat, Haryana',
    combatants: 'Maratha Empire vs Ahmad Shah Abdali',
    outcome: 'Afghan victory',
    summary:
      'One of the largest 18th-century battles, a costly Maratha defeat with enormous casualties.',
    significance:
      'Checked Maratha expansion northwards and reshaped the balance of power in India.',
  },
  {
    id: 'plassey',
    name: 'Battle of Plassey',
    year: '1757 CE',
    startYear: 1757,
    location: 'Plassey, Bengal',
    combatants: 'East India Company (Clive) vs Nawab Siraj-ud-Daulah',
    outcome: 'British victory through betrayal',
    summary:
      'Robert Clive won largely through the treachery of the Nawab’s commander Mir Jafar.',
    significance:
      'Began the political dominance of the East India Company in India.',
  },
  {
    id: 'buxar',
    name: 'Battle of Buxar',
    year: '1764 CE',
    startYear: 1764,
    location: 'Buxar, Bihar',
    combatants: 'East India Company vs allied Indian rulers',
    outcome: 'Decisive British victory',
    summary:
      'The Company defeated the combined forces of the Nawab of Awadh, the Mughal emperor and Mir Qasim.',
    significance:
      'Granted the Company the Diwani (revenue rights) of Bengal, Bihar and Odisha.',
  },
  {
    id: 'revolt-1857',
    name: 'Revolt of 1857',
    year: '1857 – 1858 CE',
    startYear: 1857,
    location: 'Meerut, Delhi, Jhansi & beyond',
    combatants: 'Indian sepoys & rulers vs East India Company',
    outcome: 'Suppressed by the British',
    summary:
      'A widespread uprising, often called the First War of Independence, that shook colonial rule.',
    significance:
      'Ended Company rule; the British Crown assumed direct control of India.',
    participants: [
      {
        name: 'Mangal Pandey',
        role: 'Sepoy in the 34th Bengal Native Infantry',
        info: 'His attack on British officers in March 1857 helped ignite the wider rebellion and made him a martyr figure in later Indian nationalist memory.',
      },
      {
        name: 'Nana Sahib',
        role: 'Leader of Kanpur rebels',
        info: 'The adopted son of the last Peshwa, Nana Sahib led the insurgents at Kanpur and became one of the most prominent leaders of the uprising.',
      },
      {
        name: 'Rani Lakshmi Bai',
        role: 'Ruler of Jhansi and rebel commander',
        info: 'The queen of Jhansi who led her forces fiercely against the British, becoming a symbol of resistance for her courage and leadership.',
      },
      {
        name: 'Bahadur Shah Zafar II',
        role: 'Last Mughal emperor',
        info: 'Proclaimed as the symbolic leader of the rebellion by Indian sepoys and rebels, though his actual power was limited.',
      },
      {
        name: 'General Hugh Wheeler',
        role: 'British commander at Cawnpore',
        info: 'He commanded the British entrenchment at Cawnpore and was killed when the rebels broke through the siege.',
      },
    ],
  },
  {
    id: 'saragarhi',
    name: 'Battle of Saragarhi',
    year: '12 September 1897',
    startYear: 1897,
    location: 'Saragarhi, North-West Frontier Province (now Khyber Pakhtunkhwa, Pakistan)',
    combatants:
      '21 soldiers of the 36th Sikhs (British Indian Army) vs 10,000–15,000 Pashtun tribesmen',
    outcome: 'Last stand by the Sikhs; heavily outweighed defenders killed on the field',
    summary:
      'A small British Indian outpost of 21 Sikh soldiers defended Saragarhi against thousands of Afghan tribesmen. The defenders held their ground long enough to send warnings to nearby forts, fighting to the death in an act of extraordinary bravery.',
    significance:
      'Celebrated as one of the greatest last stands in military history, Saragarhi became a symbol of courage and sacrifice for the Sikh Regiment and the British Indian Army.',
    videoUrl: 'https://youtu.be/HMQrdEMBbW4?si=Okg4vASwqB2K8vsm',
  },
  {
  id: 'kargil-war',

  name: 'Kargil War (Operation Vijay)',

  year: '3 May – 26 July 1999',

  startYear: 1999,

  location: 'Kargil, Dras, Batalik, Mushkoh Valley, and surrounding areas of Ladakh, India',

  combatants:
    'India (Indian Army & Indian Air Force) vs Pakistan (Pakistan Army and armed infiltrators)',

  outcome:
    'Decisive Indian victory; Indian Armed Forces recaptured nearly all occupied positions, forcing Pakistani troops to withdraw.',

  summary:
    'The Kargil War was fought between India and Pakistan after Pakistani soldiers and militants secretly crossed the Line of Control (LoC) and occupied strategic mountain peaks on the Indian side in the Kargil sector of Ladakh. The conflict began in May 1999 when local shepherds reported suspicious activity. India launched Operation Vijay to evict the intruders, while the Indian Air Force supported the operation under Operation Safed Sagar. Fighting took place at altitudes above 16,000–18,000 feet in extremely harsh weather. After nearly three months of intense combat, India successfully recaptured key positions including Tiger Hill, Tololing, Point 4875, and several other strategic peaks. Under increasing international pressure, Pakistan withdrew its forces, and India declared Operation Vijay a success on 26 July 1999, a day now commemorated as Kargil Vijay Diwas.',

  significance:
    'The Kargil War demonstrated the courage, determination, and professionalism of the Indian Armed Forces under some of the most challenging battlefield conditions in the world. It strengthened India’s military preparedness, intelligence coordination, and border surveillance. The conflict highlighted the importance of high-altitude warfare and remains one of the most significant military victories in modern Indian history.',

  },
]