export type Monument = {
  id: string
  name: string
  location: string
  coords: [number, number]
  builtBy: string
  era: string
  image: string
  history: string
  architecture: string
  facts: string[]
}

export const monuments: Monument[] = [
  {
    id: 'meenakshi',
    name: 'Meenakshi Temple',
    location: 'Madurai, Tamil Nadu',
    coords: [9.9195, 78.1193],
    builtBy: 'Pandya & Nayak rulers',
    era: 'Rebuilt 16th–17th c. CE',
    image: '/images/monuments/meenakshi.png',
    history:
      'An ancient temple dedicated to Goddess Meenakshi and Lord Sundareswarar, expanded to its present grandeur under the Nayak rulers.',
    architecture:
      'A vast Dravidian complex with 14 soaring gopurams covered in thousands of vividly painted sculptures.',
    facts: [
      'Home to an estimated 33,000 sculptures',
      'The Hall of a Thousand Pillars is a highlight',
      'A major pilgrimage and cultural centre of Tamil Nadu',
    ],
  },
  {
    id: 'jallianwala-bagh',
    name: 'Jallianwala Bagh',
    location: 'Amritsar, Punjab',
    coords: [31.6206, 74.8807],
    builtBy: 'Memorial (Republic of India)',
    era: 'Memorial est. 1951',
    image: '/images/monuments/jallianwala-bagh.png',
    history:
      'A public garden and national memorial marking the 1919 massacre where British troops fired on a peaceful gathering.',
    architecture:
      'A landscaped memorial garden with an eternal flame, bullet-marked walls and a martyrs’ well.',
    facts: [
      'Site of the 1919 massacre under General Dyer',
      'Bullet marks are still preserved on the walls',
      'A turning point in the freedom struggle',
    ],
  },
  {
    id: 'kailasa',
    name: 'Kailasa Temple',
    location: 'Ellora, Maharashtra',
    coords: [20.0263, 75.1779],
    builtBy: 'Rashtrakuta dynasty',
    era: 'c. 8th c. CE',
    image: '/images/monuments/kailasa.png',
    history:
      'Kailasa Temple, carved into the side of a basalt cliff at Ellora, is one of the most astonishing feats of ancient Indian engineering. Built under the Rashtrakuta king Krishna I, it was dedicated to Lord Shiva and stands as a masterpiece of rock-cut architecture from the medieval period.',
    architecture:
      'The temple is a vast monolithic structure carved from a single rock, with a grand courtyard, shrines, pillared halls, gateways, and sculptural panels that mirror a fully formed architectural city. Its execution reflects extraordinary planning, precision, and artistic sophistication.',
    facts: [
      'It is the largest monolithic rock-cut temple in the world',
      'The entire complex was carved from a single rock, top to bottom, without the use of modern machinery',
      'It is part of the Ellora Caves UNESCO World Heritage Site',
      'The temple architecture closely resembles a free-standing palace-temple complex',
    ],
  },
  {
    id: 'brihadeeswarar',
    name: 'Brihadeeswarar Temple',
    location: 'Thanjavur, Tamil Nadu',
    coords: [10.7828, 79.1318],
    builtBy: 'Raja Raja Chola I',
    era: 'c. 1010 CE',
    image: '/images/monuments/brihadeeswarar.png',
    history:
      'A masterpiece of Chola architecture built by Raja Raja Chola I, dedicated to Lord Shiva.',
    architecture:
      'A towering granite vimana rises about 66 metres, crowned by a single massive capstone.',
    facts: [
      'Also called the “Big Temple”',
      'Built entirely of granite over 1,000 years ago',
      'A UNESCO Great Living Chola Temple',
    ],
  },
  {
    id: 'gateway-of-india',
    name: 'Gateway of India',
    location: 'Mumbai, Maharashtra',
    coords: [18.922, 72.8347],
    builtBy: 'British Raj (George Wittet)',
    era: 'Completed 1924',
    image: '/images/monuments/gateway-of-india.png',
    history:
      'An arch-monument built to commemorate the visit of King George V; the last British troops departed through it in 1948.',
    architecture:
      'An Indo-Saracenic basalt arch about 26 metres high, blending Hindu and Islamic styles.',
    facts: [
      'Overlooks the Arabian Sea in Mumbai',
      'Symbolic exit point of the last British troops',
      'One of Mumbai’s most iconic landmarks',
    ],
  },
  {
    id: 'konark',
    name: 'Konark Sun Temple',
    location: 'Konark, Odisha',
    coords: [19.8876, 86.0945],
    builtBy: 'King Narasimhadeva I (Eastern Ganga)',
    era: 'c. 13th c. CE',
    image: '/images/monuments/konark.png',
    history:
      'A grand temple dedicated to Surya, the Sun God, conceived as his celestial chariot.',
    architecture:
      'Designed as a colossal chariot with 24 carved wheels and seven horses; the wheels act as sundials.',
    facts: [
      'Shaped like the Sun God’s chariot',
      'Its stone wheels function as accurate sundials',
      'A UNESCO World Heritage Site',
    ],
  },
  {
    id: 'ajanta',
    name: 'Ajanta Caves',
    location: 'Aurangabad, Maharashtra',
    coords: [20.5519, 75.7033],
    builtBy: 'Satavahana & Vakataka patrons',
    era: '2nd c. BCE – 6th c. CE',
    image: '/images/monuments/ajanta.png',
    history:
      'Thirty rock-cut Buddhist caves famous for their exquisite murals and sculptures.',
    architecture:
      'Chaityas and viharas cut into a horseshoe cliff, adorned with masterful frescoes.',
    facts: [
      'Contains some of the finest ancient Indian paintings',
      'Rediscovered by a British officer in 1819',
      'A UNESCO World Heritage Site',
    ],
  },
  {
    id: 'ellora',
    name: 'Ellora Caves',
    location: 'Ellora, Maharashtra',
    coords: [20.0268, 75.1785],
    builtBy: 'Kalachuri, Chalukya & Rashtrakuta',
    era: '6th – 10th c. CE',
    image: '/images/monuments/ellora.png',
    history:
      'A complex of 34 caves representing Buddhist, Hindu and Jain faiths side by side.',
    architecture:
      'Rock-cut monasteries and temples spanning three religions, crowned by the Kailasa Temple.',
    facts: [
      'Buddhist, Hindu and Jain caves in one site',
      'Reflects centuries of religious harmony',
      'A UNESCO World Heritage Site',
    ],
  },
  {
    id: 'sanchi',
    name: 'Sanchi Stupa',
    location: 'Sanchi, Madhya Pradesh',
    coords: [23.4795, 77.7396],
    builtBy: 'Emperor Ashoka',
    era: 'c. 3rd c. BCE onward',
    image: '/images/monuments/sanchi.png',
    history:
      'One of the oldest stone structures in India, commissioned by Ashoka to enshrine relics of the Buddha.',
    architecture:
      'A hemispherical dome encircled by railings and four ornately carved toranas (gateways).',
    facts: [
      'Among the oldest stone structures in India',
      'Its carved toranas depict Jataka tales',
      'A UNESCO World Heritage Site',
    ],
  },
  {
    id: 'mahabodhi',
    name: 'Mahabodhi Temple',
    location: 'Bodh Gaya, Bihar',
    coords: [24.695, 84.991],
    builtBy: 'Emperor Ashoka (original), later Gupta and subsequent patrons',
    era: 'Original shrine c. 3rd c. BCE; present temple 5th–6th c. CE',
    image: '/images/monuments/mahabodhi.jpg',
    history:
      'Mahabodhi Temple marks the sacred place where Siddhartha Gautama attained enlightenment and became the Buddha. The original shrine was commissioned by Emperor Ashoka in the 3rd century BCE, and the present temple was rebuilt and expanded during the Gupta period, making it one of the most important Buddhist pilgrimage centres in the world.',
    architecture:
      'A magnificent Mahayana Buddhist temple built in the classical Indian style, with a pyramidal shikhara, a central spire, and a sacred Bodhi tree enclosure. Its design reflects the architectural elegance of early Indian temple traditions and later Gupta refinement.',
    facts: [
      'A UNESCO World Heritage Site and one of the most sacred Buddhist pilgrimage destinations',
      'The temple complex surrounds the Bodhi Tree, under which the Buddha is believed to have attained enlightenment',
      'It is one of the oldest surviving temple structures in the world associated with Buddhism',
      'The site has drawn pilgrims from India, Sri Lanka, China, Japan, Tibet, and other Buddhist countries for centuries',
    ],
  },
  {
    id: 'somnath',
    name: 'Somnath Temple',
    location: 'Prabhas Patan, Gujarat',
    coords: [20.888, 70.402],
    builtBy: 'Various rulers over centuries, notably the Solanki dynasty',
    era: 'Ancient shrine; present temple rebuilt in 1951',
    image: '/images/monuments/somnath.png',
    history:
      'One of the twelve Jyotirlinga shrines of Lord Shiva, Somnath has been destroyed and rebuilt many times through Indian history. It has long stood as a symbol of resilience, faith, and cultural continuity.',
    architecture:
      'The current temple is a grand sandstone shrine with a soaring shikhara, a large mandapa, and a sacred pilgrimage complex set along the Arabian Sea coast.',
    facts: [
      'Regarded as one of the holiest Shiva temples in India',
      'The temple’s location by the sea adds to its spiritual and scenic significance',
      'It has been reconstructed several times, most notably after independence under Sardar Vallabhbhai Patel',
      'A major centre of Shaivism and pilgrimage in Gujarat',
    ],
  },
  {
    id: 'nalanda',
    name: 'Nalanda University',
    location: 'Nalanda, Bihar',
    coords: [25.135, 85.443],
    builtBy: 'Kumaragupta I of the Gupta Empire',
    era: 'c. 5th – 12th c. CE',
    image: '/images/monuments/nalanda.jpg',
    history:
      'One of the world’s first great centres of learning, Nalanda flourished as a renowned university from the Gupta period until it was destroyed in the 12th century. It attracted scholars from across Asia and became a symbol of India’s intellectual tradition.',
    architecture:
      'The university complex consisted of monasteries, lecture halls, dormitories, temples, and libraries, arranged in a carefully planned academic landscape.',
    facts: [
      'A historic centre of Buddhist studies, philosophy, mathematics, astronomy and medicine',
      'Famous scholars such as Xuanzang and Dharmapala were associated with it',
      'Its ruins are now a UNESCO World Heritage Site',
      'It is remembered as one of the greatest ancient universities in the world',
    ],
  },
  {
    id: 'hampi',
    name: 'Hampi',
    location: 'Anegundi, Karnataka',
    coords: [15.349, 76.387],
    builtBy: 'The Vijayanagara Empire',
    era: '14th – 16th c. CE',
    image: '/images/monuments/Hampi_karnataka.jpg',
    history:
      'Ahampi, also known as the ruins of the Vijayanagara capital, was once a grand imperial centre and the site of the legendary city of Hampi. It flourished as the heart of the Vijayanagara Empire before being abandoned after its fall in the 16th century.',
    architecture:
      'The landscape is filled with sacred temples, mandapas, bazaars, fortifications, and royal enclosures, reflecting the city’s urban and ceremonial grandeur.',
    facts: [
      'A UNESCO World Heritage Site and one of India’s most important archaeological landscapes',
      'Known for its massive temple complexes, markets, and royal remains',
      'Its ruins offer a vivid picture of the wealth and culture of the Vijayanagara Empire',
      'The site is especially famous for the Virupaksha Temple, the Stone Chariot, and the bazaar streets',
    ],
  },
  {
  id: 'vijay-stambh',
  name: 'Vijay Stambha (Victory Tower)',
  location: 'Chittorgarh, Rajasthan',
  coords: [24.8879, 74.6453],
  builtBy: 'Maharana Kumbha',
  era: '1448 CE',
  image: '/images/monuments/vijay-stambha-tower-chittor-fort-chittorgarh-vijaya-means-victory-monument-city-rajasthan-state-india-186514404.webp',
  history:
    'Vijay Stambha, or the Victory Tower, was built by Maharana Kumbha of Mewar to commemorate his victory over Sultan Mahmud Khalji of Malwa in 1448 CE. It stands as a timeless symbol of Rajput courage, military excellence, and devotion to Lord Vishnu.',
  architecture:
    'A magnificent nine-storey sandstone tower standing about 37 metres (122 feet) tall, richly decorated with intricate carvings of Hindu deities, inscriptions, and scenes from the Ramayana and Mahabharata. A narrow spiral staircase of 157 steps leads to the top, offering panoramic views of Chittorgarh Fort.',
  facts: [
    'Built in 1448 CE by Maharana Kumbha to celebrate his victory over Mahmud Khalji.',
    'Located inside the UNESCO World Heritage Site of Chittorgarh Fort.',
    'The tower rises approximately 37 metres (122 feet) and has nine storeys.',
    'Dedicated to Lord Vishnu and adorned with detailed sculptures and inscriptions.',
  ],
},
  {
    id: 'temple_upload',
    name: 'Uploaded Monument',
    location: 'Unknown',
    coords: [0, 0],
    builtBy: 'Unknown',
    era: 'Unknown',
    image: '/images/monuments/temple_upload.jpg',
    history: 'Image uploaded by user; replace details as needed.',
    architecture: 'Replace with monument architecture details.',
    facts: ['Image added from user upload.'],
  },
]
