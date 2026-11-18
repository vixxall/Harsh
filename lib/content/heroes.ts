export type Hero = {
  id: string
  name: string
  title: string
  lifespan: string
  category: string
  image: string
  bio: string
  achievements: string[]
  related: string
  participants?: {
    name: string
    role: string
    info: string
  }[]
}

export const heroes: Hero[] = [
  {
    id: 'somnath-sharma',
    name: 'Major Somnath Sharma',
    title: 'First Param Vir Chakra Recipient',
    lifespan: '1923 – 1950',
    category: 'Modern Warriors',
    image: '/images/heroes/Major_Somnath_Sharma.jpg',
    bio: 'Major Somnath Sharma was a legendary officer of the 4th Kumaon Regiment who displayed exceptional courage and leadership during the Korean War. He became the first recipient of the Param Vir Chakra, India\'s highest gallantry award, posthumously awarded for his supreme sacrifice during the Battle of Unkuli in 1950.',
    achievements: [
      'First recipient of the Param Vir Chakra, India\'s highest gallantry award',
      'Led the 4th Kumaon Regiment with extraordinary courage during the Korean War',
      'Organized the defense and withdrawal of his battalion under intense enemy fire at Unkuli',
      'Remained at his post despite severe wounds, ensuring the safety of his troops before making the ultimate sacrifice',
      'Established a legacy of valour that inspired generations of Indian soldiers',
    ],
    related: 'Korean War · Param Vir Chakra · 4th Kumaon Regiment · Battle of Unkuli',
    participants: [
      {
        name: '4th Kumaon Regiment',
        role: 'Military Unit',
        info: 'The regiment commanded by Sharma, known for its bravery and dedication to duty during the Korean campaign.',
      },
      {
        name: 'Indian Army in Korea',
        role: 'Contingent',
        info: 'The larger Indian military force that played a crucial role in the United Nations operations in Korea.',
      },
      {
        name: 'Jawans of the Battalion',
        role: 'Soldiers',
        info: 'Troops led by Major Sharma who fought alongside him and survived the battle due to his leadership.',
      },
    ],
  },
  {
    id: 'vikram-batra',
    name: 'Captain Vikram Batra',
    title: 'Kargil War Hero',
    lifespan: '1974 – 1999',
    category: 'Modern Warriors',
    image: '/images/Vikram_Batra_PVC.jpg',
    bio: 'A courageous Indian Army officer honoured for his bravery during the Kargil War, remembered for his rallying cry “Yeh Dil Maange More”.',
    achievements: [
      'Led the capture of Point 5140 during the Kargil conflict',
      'Awarded India’s highest wartime gallantry award, the Param Vir Chakra',
      'Inspired his unit with fearless leadership under enemy fire',
      'Became an enduring symbol of modern military heroism',
    ],
    related: 'Kargil War · Param Vir Chakra · Indian Army',
    participants: [
      {
        name: 'Lt. Arun Khetrapal',
        role: 'Inspiration',
        info: 'A fellow officer whose bravery and sacrifice symbolize the courage of India’s armed forces.',
      },
      {
        name: 'Indian Army',
        role: 'Unit',
        info: 'The group of soldiers who fought alongside him during the Kargil operations.',
      },
    ],
  },
  {
    id: 'sam-manekshaw',
    name: 'Field Marshal Sam Hormusji Framji Jamshedji Manekshaw',
    title: 'Chief of Army Staff & Field Marshal',
    lifespan: '1914 – 2008',
    category: 'Modern Leaders',
    image: '/images/heroes/Field_marshal_SHFJ_Manekshaw.jpg',
    bio: 'The legendary Indian Army commander who led India to victory in the 1971 war and later became the country’s first Field Marshal for his extraordinary leadership and strategic vision.',
    achievements: [
      'Served as Chief of Army Staff from 1969 to 1973',
      'Directed Indian military strategy during the 1971 Indo-Pak War',
      'Oversaw the liberation of Bangladesh with a decisive 13-day campaign',
      'Awarded the rank of Field Marshal in 1973 for his exceptional service',
    ],
    related: '1971 War · Bangladesh Liberation · Indian Army · Field Marshal',
    participants: [
      {
        name: 'Indira Gandhi',
        role: 'Prime Minister of India',
        info: 'Collaborated closely with Manekshaw in planning and executing the 1971 war strategy.',
      },
      {
        name: 'Lieutenant General Jagjit Singh Aurora',
        role: 'Eastern Command Leader',
        info: 'Commanded the Eastern Front and accepted the Pakistani surrender in Dhaka.',
      },
      {
        name: 'Indian Army',
        role: 'Force',
        info: 'The army units that executed the swift and successful campaign under Manekshaw’s direction.',
      },
    ],
  },
  {
    id: 'jaswant-singh-rawat',
    name: 'Rifleman Jaswant Singh Rawat',
    title: 'Hero of the 1962 Sino-Indian War',
    lifespan: '1941 – 1962',
    category: 'Modern Warriors',
    image: '/images/heroes/Martyr_Jaswant_Singh_Rawat.jpg',
    bio: 'A brave rifleman of the Garhwal Rifles whose legendary defence of Nuranang in Arunachal Pradesh became a symbol of courage and sacrifice during the 1962 Sino-Indian War.',
    achievements: [
      'Held off vastly superior Chinese forces for 72 hours at Nuranang',
      'Destroyed several enemy tanks with a 3-inch mortar under intense fire',
      'Refused orders to retreat, choosing to fight to the last man',
      'Remembered by the Indian Army with the title "Yeh Dil Maange More" of 1962 heroes',
    ],
    related: '1962 Sino-Indian War · Nuranang · Garhwal Rifles · Arunachal Pradesh',
    participants: [
      {
        name: 'Sepoy Rifleman Gopal Singh Gusain',
        role: 'Comrade',
        info: 'Fought alongside Rawat at Nuranang and shared in the desperate defence of the post.',
      },
      {
        name: '3-inch Mortar Team',
        role: 'Fire Support',
        info: 'Delivered crucial mortar fire that delayed the Chinese advance during the battle.',
      },
      {
        name: 'Indian Army',
        role: 'Unit',
        info: 'The Garhwal Rifles unit that recorded Rawat’s gallantry and later commemorated his sacrifice.',
      },
    ],
  },
  {
    id: 'manoj-kumar-pandey',
    name: 'Captain Manoj Kumar Pandey',
    title: 'Param Vir Chakra (Posthumous)',
    lifespan: '1975 – 1999',
    category: 'Modern Warriors',
    image: '/images/heroes/Manoj_Kumar_Pandey_PVC.jpg',
    bio: 'A young and valiant officer of the Indian Army who led frontal attacks against entrenched enemy positions during the Kargil War and was awarded the Param Vir Chakra posthumously for supreme bravery.',
    achievements: [
      'Displayed extraordinary courage during the Kargil conflict while leading an assault on enemy strongpoints',
      'Engaged the enemy at close quarters and continued to fight despite sustaining fatal injuries',
      'Posthumously awarded the Param Vir Chakra, India’s highest military decoration for valour',
      'Remembered as a symbol of selfless leadership and sacrifice among modern Indian soldiers',
    ],
    related: 'Kargil War · Param Vir Chakra · Indian Army',
    participants: [
      {
        name: 'Platoon & Company Members',
        role: 'Comrades',
        info: 'Fought alongside Captain Pandey during the assaults and witnessed his leadership and sacrifice.',
      },
      {
        name: 'Indian Army',
        role: 'Force',
        info: 'The wider military formation that conducted the Kargil operations and later honoured his bravery.',
      },
    ],
  },
  {
    id: 'arun-khetrapal',
    name: '2nd Lt. Arun Khetrapal',
    title: 'Tank Commander — Battle of Basantar',
    lifespan: 'd. 1971',
    category: 'Modern Warriors',
    image: '/images/heroes/Arun_Khetarpal_PVC.jpg',
    bio: 'A gallant armoured corps officer of the Poona Horse who fought bravely during the 1971 Indo-Pak War at the Battle of Basantar, earning the Param Vir Chakra posthumously for his exceptional courage.',
    achievements: [
      'Led counter-attacks against enemy armour during the Battle of Basantar',
      'Displayed conspicuous gallantry while operating tanks under intense fire',
      'Refused to abandon his tank despite severe damage, engaging enemy forces until he was killed in action',
      'Posthumously awarded the Param Vir Chakra, India’s highest gallantry award',
    ],
    related: '1971 Indo-Pak War · Battle of Basantar · Poona Horse · Param Vir Chakra',
    participants: [
      {
        name: 'Poona Horse',
        role: 'Armoured Regiment',
        info: 'The regiment to which Khetrapal belonged, noted for its decisive actions during Basantar.',
      },
      {
        name: 'Indian Armoured Corps',
        role: 'Armour Support',
        info: 'Provided crucial armoured strength during the offensive that led to India’s victory in the western theatre.',
      },
      {
        name: 'Infantry units',
        role: 'Support',
        info: 'Worked alongside armoured regiments to secure objectives during the Basantar operations.',
      },
    ],
  },
  {
    id: 'sandeep-unnikrishnan',
    name: 'Major Sandeep Unnikrishnan',
    title: 'National Security Guard Officer (Ashok Chakra)',
    lifespan: '1977 – 2008',
    category: 'Modern Warriors',
    image: '/images/heroes/Sandeep_Unnikrishnan.jpg',
    bio: 'An NSG (National Security Guard) officer who led the counter-terrorism operation during the 26/11 Mumbai attacks; he displayed exceptional courage while clearing the Taj Mahal Palace Hotel and was martyred in action. He was posthumously awarded the Ashok Chakra for his gallantry.',
    achievements: [
      'Led the NSG assault team tasked with rescuing hostages and neutralising terrorists at the Taj Mahal Palace Hotel during the 2008 Mumbai attacks',
      'Conducted multiple close-quarters engagements to protect civilians and flush out attackers',
      'Displayed leadership under fire while coordinating team movements and rescue efforts',
      'Posthumously awarded the Ashok Chakra, India’s highest peacetime gallantry award',
    ],
    related: '2008 Mumbai attacks · National Security Guard · Taj Mahal Palace Hotel · Ashok Chakra',
    participants: [
      {
        name: 'National Security Guard (NSG)',
        role: 'Counter-terror unit',
        info: 'The elite force that conducted the coordinated response and rescue operation in Mumbai.',
      },
      {
        name: 'Taj Mahal Palace Hotel staff and guests',
        role: 'Civilians rescued',
        info: 'People who were sheltered, rescued or protected during the NSG operation.',
      },
      {
        name: 'Fellow NSG commandos',
        role: 'Team',
        info: 'Operatives who worked alongside Major Unnikrishnan during the clearance and rescue operations.',
      },
    ],
  },
  {
    id: 'gunjan-saxena',
    name: 'Flight Lieutenant Gunjan Saxena',
    title: 'First Female Combat Pilot of Indian Air Force',
    lifespan: 'born 1975',
    category: 'Modern Warriors',
    image: '/images/heroes/gunjan.avif',
    bio: 'Flight Lieutenant Gunjan Saxena is a pioneering Indian Air Force officer and the first female combat pilot in the history of the Indian Armed Forces. She served with distinction during the Kargil War in 1999, flying combat missions in a Helicopters unit and demonstrating exceptional courage and professionalism, breaking gender barriers in a male-dominated military aviation field.',
    achievements: [
      'First female combat pilot in the Indian Air Force and armed forces',
      'Participated in combat operations during the 1999 Kargil War',
      'Flew helicopter missions providing support during active combat operations',
      'Demonstrated exceptional flying skills and courage under challenging operational conditions',
      'Paved the way for women pilots in the Indian military through her groundbreaking service',
      'Received recognition and awards for her valor and professional excellence',
    ],
    related: 'Kargil War · Indian Air Force · Female Combat Pilot · Women in Military',
    participants: [
      {
        name: 'Indian Air Force',
        role: 'Military Service',
        info: 'The organization where Saxena served as a pioneering female combat pilot, contributing to air operations during the Kargil conflict.',
      },
      {
        name: 'Helicopter Squadron',
        role: 'Combat Unit',
        info: 'The helicopter unit in which Saxena served, providing crucial air support during the Kargil War operations.',
      },
      {
        name: 'Women Pilots and Officers',
        role: 'Inspiration',
        info: 'Subsequent generations of women who joined the armed forces, inspired by Saxena\'s groundbreaking achievement and service.',
      },
    ],
  },
  {
    id: 'nirmal-jit-singh-sekhon',
    name: 'Flying Officer Nirmal Jit Singh Sekhon',
    title: 'First Air Force Param Vir Chakra Recipient',
    lifespan: '1941 – 1971',
    category: 'Modern Warriors',
    image: '/images/heroes/fly off nirmal.jpg',
    bio: 'Flying Officer Nirmal Jit Singh Sekhon was a legendary Indian Air Force pilot and the first recipient of the Param Vir Chakra from the Air Force. During the 1971 Indo-Pakistani War, he displayed extraordinary courage and skill, shooting down five Pakistani aircraft in a single engagement on December 14, 1971, before being killed in action. His fearless leadership and sacrifice made him an immortal symbol of aerial valor.',
    achievements: [
      'First recipient of the Param Vir Chakra from the Indian Air Force',
      'Shot down five Pakistani aircraft in aerial combat during the 1971 war',
      'Displayed exceptional flying skills and tactical excellence in dogfighting',
      'Refused to eject despite being outnumbered and outgunned, continuing to engage enemy aircraft',
      'Sacrificed his life to protect Indian airspace and civilians below',
      'Inspired a generation of pilots with his bravery and selfless service',
    ],
    related: '1971 Indo-Pakistani War · Param Vir Chakra · Indian Air Force · Aerial Combat',
    participants: [
      {
        name: 'Indian Air Force',
        role: 'Military Service',
        info: 'The air arm of the Indian military where Sekhon served as a fighter pilot with exceptional skill and dedication.',
      },
      {
        name: '14 Squadron (Winged Arrows)',
        role: 'Fighter Squadron',
        info: 'The squadron to which Sekhon was assigned, known for its valorous operations during the 1971 conflict.',
      },
      {
        name: 'Ground Personnel and Command',
        role: 'Support Team',
        info: 'The ground crew and squadron commanders who supported Sekhon\'s operations and bore witness to his extraordinary courage.',
      },
    ],
  },
  {
  id: 'saurabh-kalia',
  name: 'Captain Saurabh Kalia',
  title: 'Indian Army Officer (4 Jat Regiment)',
  lifespan: '1976 – 1999',
  category: 'Modern Warriors',
  image: '/images/heroes/kar.avif',
  bio: 'Captain Saurabh Kalia was an Indian Army officer of the 4 Jat Regiment who became one of the earliest heroes of the Kargil War in 1999. While leading a patrol in the Kaksar sector, he and five soldiers were captured by Pakistani forces. They endured severe torture before being martyred. His courage, sacrifice, and unwavering dedication to the nation made him a symbol of patriotism and military honour.',

  achievements: [
    'Commissioned into the Indian Army in December 1998 as an officer of the 4 Jat Regiment',
    'Led a reconnaissance patrol in the Kaksar sector during the opening phase of the 1999 Kargil War',
    'Displayed exceptional courage while defending Indian territory against enemy infiltration',
    'Remembered nationwide for his sacrifice and steadfast commitment to duty during the Kargil conflict',
  ],

  related: 'Kargil War (1999) · Operation Vijay · 4 Jat Regiment · Kaksar Sector',

  participants: [
    {
      name: '4 Jat Regiment',
      role: 'Indian Army Infantry Regiment',
      info: 'The regiment in which Captain Saurabh Kalia served after being commissioned.',
    },
    {
      name: 'Patrol Team',
      role: 'Fellow Soldiers',
      info: 'Captain Kalia led a six-member patrol that included Sepoys Arjun Ram, Bhanwar Lal Bagaria, Bhika Ram, Moola Ram, and Naresh Singh.',
    },
    {
      name: 'Indian Army',
      role: 'Defending Force',
      info: 'Conducted Operation Vijay to reclaim Indian territory occupied during the Kargil conflict.',
    },
  ],
},
{
  id: 'shaitan-singh',
  name: 'Major Shaitan Singh',
  title: 'Indian Army Officer (Param Vir Chakra)',
  lifespan: '1924 – 1962',
  category: 'Modern Warriors',
  image: '/images/heroes/Shaitan_Singh_PVC.jpg',
  bio: 'Major Shaitan Singh Bhati was an Indian Army officer of the 13 Kumaon Regiment who displayed extraordinary bravery during the Battle of Rezang La in the Sino-Indian War of 1962. Despite being heavily outnumbered by Chinese forces, he inspired his men to fight until the last man and the last bullet. Mortally wounded while moving between platoon positions under intense enemy fire, he continued directing the defence until his final moments. He was posthumously awarded the Param Vir Chakra, India’s highest military decoration for valour.',

  achievements: [
    'Commanded C Company, 13 Kumaon Regiment, during the Battle of Rezang La in the 1962 Sino-Indian War',
    'Led approximately 120 soldiers against thousands of attacking Chinese troops in one of India’s greatest last stands',
    'Moved between defensive positions under heavy enemy fire to motivate and direct his troops',
    'Posthumously awarded the Param Vir Chakra, India’s highest wartime gallantry award',
  ],

  related: 'Battle of Rezang La · Sino-Indian War (1962) · 13 Kumaon Regiment · Param Vir Chakra',

  participants: [
    {
      name: '13 Kumaon Regiment',
      role: 'Infantry Regiment',
      info: 'The Indian Army regiment whose C Company was commanded by Major Shaitan Singh during the Battle of Rezang La.',
    },
    {
      name: 'C Company',
      role: 'Defending Force',
      info: 'Around 120 soldiers who fought courageously under Major Shaitan Singh against overwhelming Chinese forces.',
    },
    {
      name: 'Indian Army',
      role: 'Defending Force',
      info: 'Defended Indian positions in Ladakh during the Sino-Indian War of 1962.',
    },
  ],
},
]
