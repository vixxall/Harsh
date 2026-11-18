export type PersonalityCategory =
  | 'Ancient Rulers'
  | 'Medieval Rulers'
  | 'Warriors & Queens'
  | 'Freedom Fighters'
  | 'Nation Builders'

export type PersonalityParticipant = {
  name: string
  role: string
  info: string
}

export type Personality = {
  id: string
  name: string
  title: string
  lifespan: string
  category: PersonalityCategory
  image: string
  bio: string
  achievements: string[]
  related: string
  videoUrl?: string
  participants?: PersonalityParticipant[]
}

export const personalities: Personality[] = [
  {
    id: 'ashoka',
    name: 'Ashoka the Great',
    title: 'Mauryan Emperor',
    lifespan: 'c. 304 – 232 BCE',
    category: 'Ancient Rulers',
    image: '/images/people/ashoka.png',
    bio: 'The third Mauryan emperor whose transformation after the Kalinga war made him one of history’s most influential rulers and a champion of dharma.',
    achievements: [
      'Unified nearly the entire Indian subcontinent',
      'Renounced war after Kalinga and embraced Buddhism',
      'Spread Buddhism across Asia through missions',
      'Left rock and pillar edicts promoting welfare and tolerance',
    ],
    related: 'Maurya Empire · Kalinga War · Sanchi Stupa',
  },
  {
    id: 'porus',
    name: 'Porus',
    title: 'King of the Pauravas',
    lifespan: 'fl. 326 BCE',
    category: 'Ancient Rulers',
    image: '/images/people/porus.png',
    bio: 'The Paurava king who fought Alexander the Great at the Hydaspes and won admiration for his courage even in defeat.',
    achievements: [
      'Confronted Alexander at the Battle of the Hydaspes',
      'Deployed war elephants against the Macedonian army',
      'Earned Alexander’s respect and retained his kingdom',
      'Symbol of defiant valour in Indian memory',
    ],
    related: 'Battle of Hydaspes · Punjab',
  },
  {
    id: 'chandragupta',
    name: 'Chandragupta Maurya',
    title: 'Founder of the Maurya Empire',
    lifespan: 'c. 340 – 297 BCE',
    category: 'Ancient Rulers',
    image: '/images/people/chandragupta.png',
    bio: 'Guided by the strategist Chanakya, he overthrew the Nandas and forged India’s first great empire.',
    achievements: [
      'Founded the Maurya Empire',
      'Overthrew the Nanda dynasty with Chanakya’s help',
      'Repelled Seleucus and secured the north-west',
      'Built a centralized imperial administration',
    ],
    related: 'Maurya Empire · Chanakya · Nanda Dynasty',
  },
  {
    id: 'akbar',
    name: 'Akbar the Great',
    title: 'Mughal Emperor',
    lifespan: '1542 – 1605 CE',
    category: 'Medieval Rulers',
    image: '/images/people/akbar.png',
    bio: 'The third Mughal emperor whose policy of religious tolerance and administrative genius consolidated the empire.',
    achievements: [
      'Expanded the Mughal Empire across North India',
      'Introduced the tolerant policy of Sulh-i-Kul',
      'Reformed revenue with the mansabdari & zabt systems',
      'Founded the city of Fatehpur Sikri',
    ],
    related: 'Mughal Empire · Fatehpur Sikri · Battle of Haldighati',
  },
  {
    id: 'prithviraj',
    name: 'Prithviraj Chauhan',
    title: 'Rajput King of Ajmer & Delhi',
    lifespan: 'c. 1166 – 1192 CE',
    category: 'Medieval Rulers',
    image: '/images/people/prithviraj.png',
    bio: 'The valiant Chauhan king celebrated in legend, whose battles at Tarain marked a turning point in North Indian history.',
    achievements: [
      'United Rajput clans against invasion',
      'Won the First Battle of Tarain (1191)',
      'Immortalized in the epic Prithviraj Raso',
      'A lasting symbol of Rajput chivalry',
    ],
    related: 'Battles of Tarain · Delhi · Ajmer',
    videoUrl: 'https://youtube.com/shorts/k09WYpBdjS0?si=qn99IwiWARkr8YWh',
  },
  {
    id: 'maharana-pratap',
    name: 'Maharana Pratap',
    title: 'Rana of Mewar',
    lifespan: '1540 – 1597 CE',
    category: 'Warriors & Queens',
    image: '/images/people/maharana-pratap.png',
    bio: 'The Rajput ruler of Mewar who refused to submit to the Mughals and fought fiercely at Haldighati.',
    achievements: [
      'Resisted Mughal dominance for decades',
      'Fought the Battle of Haldighati (1576)',
      'Reclaimed much of Mewar late in life',
      'Enduring emblem of freedom and honour',
    ],
    related: 'Battle of Haldighati · Mewar · Akbar',
    videoUrl: 'https://youtube.com/shorts/VeEFxvHZh9o?si=f2YhGcUacir_4ovy',
  },
  {
    id: 'shivaji',
    name: 'Chhatrapati Shivaji Maharaj',
    title: 'Founder of the Maratha Empire',
    lifespan: '1630 – 1680 CE',
    category: 'Warriors & Queens',
    image: '/images/people/shivaji.png',
    bio: 'The visionary founder of the Maratha Empire, master of guerrilla warfare and builder of a formidable navy.',
    achievements: [
      'Founded the Maratha Swarajya',
      'Pioneered guerrilla tactics (Ganimi Kava)',
      'Built a strong navy and network of hill forts',
      'Crowned Chhatrapati at Raigad in 1674',
    ],
    related: 'Maratha Empire · Raigad Fort · Hill forts',
    videoUrl: 'https://youtu.be/N67Rw600-kc?si=DvO-iQpQL_wxELGK',
    participants: [
      {
        name: 'Dadoji Kondadev',
        role: 'Guardian and mentor',
        info: 'Raised Shivaji after his father’s death and helped train him in horseback riding, hunting, and early administration.',
      },
      {
        name: 'Shambhaji Shirke',
        role: 'Mother',
        info: 'A member of the Shirke family who supported Shivaji’s early upbringing and maintained family ties among the Deccan nobles.',
      },
      {
        name: 'Tanaji Malusare',
        role: 'Commander and warrior',
        info: 'Led the famous assault on Kondhana fort (later Sinhagad) and died heroically during the capture, becoming a Maratha legend.',
      },
      {
        name: 'Sambhaji Bhosale',
        role: 'Younger brother',
        info: 'Shared early campaigns with Shivaji and later succeeded him as Chhatrapati of the Maratha Empire.',
      },
      {
        name: 'Kanhoji Jedhe',
        role: 'Noble ally',
        info: 'A powerful Maratha chieftain who provided military support and helped Shivaji establish control in western Maharashtra.',
      },
    ],
  },
  {
    id: 'sambhaji',
    name: 'Sambhaji Maharaj',
    title: 'Second Chhatrapati of the Maratha Empire',
    lifespan: '1657 – 1689 CE',
    category: 'Warriors & Queens',
    image: '/images/people/sm.png',
    bio: 'The elder son of Shivaji Maharaj who took up the struggle against Aurangzeb and became a martyr of the Maratha resistance.',
    achievements: [
      'Led Maratha forces during the early Mughal campaigns after Shivaji’s death',
      'Defended Maratha territory from Aurangzeb’s invasions',
      'Maintained Maratha morale through brave resistance and raids',
      'Became a symbol of sacrifice after his capture and martyrdom',
    ],
    related: 'Maratha Empire · Aurangzeb · Panhalgad',
    videoUrl: 'https://youtu.be/fOCxR5dJz30?si=HDMOXTuPf6sjAYoS',
    participants: [
      {
        name: 'Aurangzeb',
        role: 'Mughal Emperor',
        info: 'The main adversary who sought to crush the Maratha uprising and captured Sambhaji after a prolonged campaign.',
      },
      {
        name: 'Ramchandra Pant Amatya',
        role: 'Chief minister and advisor',
        info: 'A trusted Maratha statesman who helped manage the kingdom’s affairs while Sambhaji waged war against the Mughals.',
      },
      {
        name: 'Kavi Kalash',
        role: 'Close aide and poet',
        info: 'A loyal companion of Sambhaji who was captured and executed alongside him, becoming a symbol of devotion.',
      },
      {
        name: 'Parshuram Pant Pratinidhi',
        role: 'Military leader',
        info: 'Played a major role in Maratha resistance and later helped protect the empire after Sambhaji’s death.',
      },
    ],
  },
  {
    id: 'laxmibai',
    name: 'Rani Lakshmibai',
    title: 'Queen of Jhansi',
    lifespan: '1828 – 1858 CE',
    category: 'Warriors & Queens',
    image: '/images/people/laxmibai.png',
    bio: 'The fearless queen of Jhansi who became a leading figure of the Revolt of 1857 and a symbol of resistance.',
    achievements: [
      'Led the defence of Jhansi in 1857',
      'Became an icon of the first war of independence',
      'Fought on horseback to her last breath',
      'Immortalized in poetry and national memory',
    ],
    related: 'Revolt of 1857 · Jhansi · Gwalior',
    videoUrl: 'https://youtube.com/shorts/YiItc683pY4?si=_RChCKCyFffYImtN',
  },
  {
    id: 'mangal-pandey',
    name: 'Mangal Pandey',
    title: 'Sepoy & Revolutionary',
    lifespan: '1827 – 1857 CE',
    category: 'Freedom Fighters',
    image: '/images/people/mangal-pandey.png',
    bio: 'The sepoy whose act of defiance at Barrackpore is often seen as the spark of the Revolt of 1857.',
    achievements: [
      'Rebelled against the East India Company army',
      'Helped ignite the Revolt of 1857',
      'Became an early martyr of the freedom struggle',
      'Remembered as a symbol of resistance',
    ],
    related: 'Revolt of 1857 · Barrackpore',
    videoUrl: 'https://youtu.be/TAQNX4HrdvQ?si=dAFLxDNSaTQFec1U',
  },
  {
    id: 'bhagat-singh',
    name: 'Bhagat Singh',
    title: 'Revolutionary Freedom Fighter',
    lifespan: '1907 – 1931 CE',
    category: 'Freedom Fighters',
    image: '/images/people/bhagat-singh.png',
    bio: 'A charismatic revolutionary whose fearless activism and martyrdom at 23 inspired a generation.',
    achievements: [
      'Co-founded the Hindustan Socialist Republican Association',
      'Protested repressive laws in the Central Assembly',
      'Wrote influential political essays from prison',
      'Martyred in 1931, inspiring millions',
    ],
    related: 'Freedom Movement · Lahore Conspiracy Case',
  },
  {
    id: 'udham-singh',
    name: 'Sardar Udham Singh',
    title: 'Revolutionary',
    lifespan: '1899 – 1940 CE',
    category: 'Freedom Fighters',
    image: '/images/people/udham-singh.png',
    bio: 'The revolutionary who avenged the Jallianwala Bagh massacre, becoming a lasting symbol of resolve.',
    achievements: [
      'Witnessed the Jallianwala Bagh massacre',
      'Carried out his vow of retribution in London (1940)',
      'Embraced martyrdom for the cause',
      'Honoured as Shaheed-i-Azam Sardar Udham Singh',
    ],
    related: 'Jallianwala Bagh · Freedom Movement',
    videoUrl: 'https://youtube.com/shorts/Ry1l5vT8-Es?si=_kVhXRkHXSgr73_b',
  },
  {
    id: 'gandhi',
    name: 'Mahatma Gandhi',
    title: 'Father of the Nation',
    lifespan: '1869 – 1948 CE',
    category: 'Nation Builders',
    image: '/images/people/gandhi.png',
    bio: 'The leader whose philosophy of non-violent satyagraha mobilized millions and guided India to freedom.',
    achievements: [
      'Led the Non-Cooperation and Civil Disobedience movements',
      'Championed the Salt March of 1930',
      'Launched the Quit India Movement in 1942',
      'Pioneered non-violent resistance worldwide',
    ],
    related: 'Freedom Movement · Salt March · Quit India',
  },
  {
    id: 'ambedkar',
    name: 'Dr. B. R. Ambedkar',
    title: 'Architect of the Constitution',
    lifespan: '1891 – 1956 CE',
    category: 'Nation Builders',
    image: '/images/people/ambedkar.png',
    bio: 'The chief architect of the Indian Constitution and a tireless campaigner for social justice and equality.',
    achievements: [
      'Chaired the drafting committee of the Constitution',
      'Championed the rights of the marginalized',
      'First Law Minister of independent India',
      'A leading economist, jurist and social reformer',
    ],
    related: 'Constitution of India · Social Reform',
    participants: [
      {
        name: 'Mahatma Gandhi',
        role: 'Leader of the Indian National Movement',
        info: 'Worked with Ambedkar during the Round Table Conferences and engaged in debates over Hindu law reform and separate electorates.',
      },
      {
        name: 'Jawaharlal Nehru',
        role: 'Future Prime Minister and Congress leader',
        info: 'Supported Ambedkar’s constitutional work and later collaborated with him on the legal foundations of independent India.',
      },
      {
        name: 'C. Rajagopalachari',
        role: 'Statesman and Congress leader',
        info: 'A close associate in Parliament who later worked with Ambedkar on constitutional and administrative issues.',
      },
      {
        name: 'Bhimrao Ramji Ambedkar',
        role: 'Self',
        info: 'A leader of Dalit rights whose scholarship and legal expertise shaped the constitutional guarantee of equality and justice.',
      },
      {
        name: 'Lal Bahadur Shastri',
        role: 'Congress politician and minister',
        info: 'Worked alongside Ambedkar in the early years of independent India, especially on social reform and labour law.',
      },
    ],
  },
  {
    id: 'bose',
    name: 'Subhas Chandra Bose',
    title: 'Netaji',
    lifespan: '1897 – 1945 CE',
    category: 'Nation Builders',
    image: '/images/people/bose.png',
    bio: 'The fiery nationalist who founded the Indian National Army and pursued freedom through armed struggle.',
    achievements: [
      'Led the Indian National Army (Azad Hind Fauj)',
      'Coined the rallying cry “Give me blood, and I will give you freedom”',
      'Formed the Azad Hind provisional government',
      'A defining figure of militant nationalism',
    ],
    related: 'Freedom Movement · Indian National Army',
    videoUrl: 'https://youtube.com/shorts/7ZWFtLUVp_A?si=Gfs9rJ5WpK7mT3EH',
  },
]

export const personalityCategories: PersonalityCategory[] = [
  'Ancient Rulers',
  'Medieval Rulers',
  'Warriors & Queens',
  'Freedom Fighters',
  'Nation Builders',
]
