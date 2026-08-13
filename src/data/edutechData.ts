import { Course, TrackInfo, Testimonial, WonderTouchTier, DaycareScheduleItem, HiringPartner } from '../types';

export const HIRING_PARTNERS: HiringPartner[] = [
  { name: 'Cyient', type: 'Tech & Engineering', logoText: 'CYIENT', color: 'from-blue-600 to-brand-purple-700' },
  { name: 'Skyroot Aerospace', type: 'DeepTech', logoText: 'SKYROOT', color: 'from-slate-800 to-blue-900' },
  { name: 'Mahindra', type: 'Enterprise Systems', logoText: 'MAHINDRA', color: 'from-red-600 to-red-800' },
  { name: 'Maruti Suzuki India Ltd.', type: 'CAD & Automotive', logoText: 'MARUTI SUZUKI', color: 'from-blue-800 to-brand-purple-900' },
  { name: 'Boeing', type: 'Aeronautics & Systems', logoText: 'BOEING', color: 'from-sky-700 to-blue-900' },
  { name: 'Dawn High School', type: 'Edu Partner', logoText: 'DAWN HIGH', color: 'from-emerald-600 to-teal-800' },
  { name: 'VIP International School', type: 'Edu Partner', logoText: 'VIP INT.', color: 'from-purple-600 to-brand-purple-800' },
  { name: 'Khaleeji Bank', type: 'Fintech & Analytics', logoText: 'KHALEEJI BANK', color: 'from-amber-600 to-orange-700' },
  { name: 'Hindustan Aeronautics Ltd.', type: 'Defense & CAD', logoText: 'HAL INDIA', color: 'from-cyan-700 to-blue-900' }
];

export const TRACKS: TrackInfo[] = [
  {
    id: 'tech',
    title: 'Tech & Software Dev',
    subtitle: 'Software Development',
    iconSymbol: '</>',
    color: 'from-brand-pink to-brand-purple-700',
    accentBg: 'bg-brand-purple-50 border-brand-purple-200 text-brand-purple-700',
    textColor: 'text-brand-purple-600',
    borderColor: 'border-brand-purple-500',
    description: 'Master full-stack engineering, modern JS frameworks, UI/UX design, and cloud backend architecture.',
    programsList: ['MERN Stack', 'Full Stack Java', 'MEAN Stack', 'UI/UX Design', 'Python Full Stack'],
    bannerImage: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Low-Code',
    subtitle: 'Enterprise Systems',
    iconSymbol: '⚙',
    color: 'from-slate-700 to-cyan-700',
    accentBg: 'bg-cyan-50 border-cyan-200 text-cyan-800',
    textColor: 'text-cyan-700',
    borderColor: 'border-cyan-500',
    description: 'Specialized enterprise PLM tools, Siemens Polarion, Teamcenter, Siemens CAD, and rapid Mendix apps.',
    programsList: ['Polarion ALM', 'Teamcenter PLM', 'Mendix Low-Code', 'CAD / CAM Systems'],
    bannerImage: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'business',
    title: 'Business & Data Tools',
    subtitle: 'Business and data tools',
    iconSymbol: '📊',
    color: 'from-emerald-600 to-teal-700',
    accentBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
    description: 'Transform raw data into business intelligence with Advanced Excel, Power BI dashboards, and Digital Marketing.',
    programsList: ['Advanced Excel', 'Power BI Analytics', 'Digital Marketing', 'Data Science Prep'],
    bannerImage: 'https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'softskills',
    title: 'Soft Skills & Test Prep',
    subtitle: 'Communication and soft skills',
    iconSymbol: '🗣',
    color: 'from-amber-500 to-orange-600',
    accentBg: 'bg-amber-50 border-amber-200 text-amber-800',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-500',
    description: 'Acknowledge corporate fluency, ace global English proficiency exams, and conquer interview rounds with confidence.',
    programsList: ['IELTS Band 7+ Prep', 'TOEFL Masterclass', 'Corporate English', 'Interview BootCamp'],
    bannerImage: 'https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'kids',
    title: 'Maqsusi Kids Track',
    subtitle: 'Maqsusi Kids programs',
    iconSymbol: '★',
    color: 'from-pink-500 via-purple-500 to-amber-500',
    accentBg: 'bg-pink-50 border-pink-200 text-pink-700',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-500',
    description: 'Playful, interactive and outcome-driven learning for young minds — coding, robotics, and foundation courses.',
    programsList: ['Code For Kidz', 'IIT Foundational', 'IAS/IPS Foundational', 'WonderTouch Interactive'],
    bannerImage: 'https://images.pexels.com/photos/30858451/pexels-photo-30858451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  }
];

export const COURSES: Course[] = [
  {
    id: 'mern-stack',
    title: 'MERN Stack Development',
    category: 'tech',
    categoryLabel: 'MERN STACK',
    badgeTag: 'HOT & PLACEMENT READY',
    rating: 4.9,
    ratingCount: 382,
    price: '₹34,999',
    originalPrice: '₹49,999',
    duration: '16 Weeks',
    mode: 'Hybrid',
    isPopular: true,
    shortDesc: 'Complete mastery over MongoDB, Express.js, React, Node.js with live capstone projects and placement guarantee support.',
    fullDesc: 'Build high-performance web applications from scratch. Deep dive into React 19, Redux Toolkit, RESTful APIs, JWT Auth, Microservices, and Cloud Deployment on AWS.',
    skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'AWS', 'Git & GitHub'],
    targetAudience: 'Engineering graduates, job seekers, and developers looking for salary upgrades.',
    curriculum: [
      { module: 'Module 1: Modern JS & Web Foundations', topics: ['ES6+, HTML5, CSS3, Tailwind CSS, DOM Manipulation'] },
      { module: 'Module 2: React Core & Advanced UI', topics: ['Components, Hooks, Redux Toolkit, Routing, State Management'] },
      { module: 'Module 3: Node.js & Backend Architecture', topics: ['Express Routing, Middleware, Authentication, REST APIs'] },
      { module: 'Module 4: Database & Cloud Deployment', topics: ['MongoDB Aggregations, Mongoose ORM, AWS EC2, Vercel CI/CD'] }
    ],
    iconName: 'Code',
    image: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'ielts-coaching',
    title: 'IELTS Coaching — Band 7+',
    category: 'softskills',
    categoryLabel: 'TEST PREP',
    badgeTag: 'HIGH BAND ASSURANCE',
    rating: 4.8,
    ratingCount: 290,
    price: '₹12,999',
    originalPrice: '₹18,000',
    duration: '6 Weeks',
    mode: 'Live Online',
    isPopular: true,
    shortDesc: 'Comprehensive preparation across Listening, Reading, Writing, and Speaking with individual mock feedback sessions.',
    fullDesc: 'Get trained by certified British Council & IDP trainers. Includes 25+ full length mock tests, 1-on-1 speaking evaluation, and personalized essay reviews.',
    skills: ['Band 7+ Vocabulary', 'Essay Structuring', 'Phonetics & Speaking', 'Skimming & Scanning'],
    targetAudience: 'Students planning abroad studies and professionals aiming for global migration.',
    curriculum: [
      { module: 'Module 1: Listening & Reading Strategies', topics: ['Audio maps, Speed reading, Question pattern analysis'] },
      { module: 'Module 2: Task 1 & Task 2 Writing Masterclass', topics: ['Grammar structure, Cohesion, Dynamic charts & Argumentative essays'] },
      { module: 'Module 3: Speaking Cue Card & Confidence', topics: ['1-on-1 interview simulations, Fluency drills, Accent neutralization'] }
    ],
    iconName: 'BookOpen',
    image: 'https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'mendix-lowcode',
    title: 'Mendix Low-Code Development',
    category: 'enterprise',
    categoryLabel: 'LOW-CODE',
    badgeTag: 'ENTERPRISE DEMAND',
    rating: 4.6,
    ratingCount: 145,
    price: '₹29,999',
    originalPrice: '₹42,000',
    duration: '10 Weeks',
    mode: 'Hybrid',
    isPopular: true,
    shortDesc: 'Rapid enterprise app development platform training certified by industry low-code engineering leaders.',
    fullDesc: 'Mendix is taking global enterprise IT by storm. Learn to build enterprise mobile and web applications 10x faster using microflows, domain models, and native widgets.',
    skills: ['Mendix Studio Pro', 'Microflows', 'Domain Modeling', 'REST Integrations', 'XPath Queries'],
    targetAudience: 'IT graduates and software professionals switching to rapid low-code engineering roles.',
    curriculum: [
      { module: 'Module 1: Mendix Fundamentals', topics: ['Data modeling, Entity relationships, UI widgets'] },
      { module: 'Module 2: Logic & Automation', topics: ['Microflows, Nanoflows, Validations, Security roles'] },
      { module: 'Module 3: Enterprise Integration', topics: ['REST API consumption, Custom Java actions, Mobile responsiveness'] }
    ],
    iconName: 'Cpu',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'java-fullstack',
    title: 'Full Stack Java & Enterprise Systems',
    category: 'tech',
    categoryLabel: 'JAVA FULLSTACK',
    badgeTag: 'TELANGANA PARTNER FAV',
    rating: 4.9,
    ratingCount: 420,
    price: '₹39,999',
    originalPrice: '₹55,000',
    duration: '20 Weeks',
    mode: 'Classroom',
    isPopular: false,
    shortDesc: 'Enterprise-grade Java Spring Boot, Hibernate, Microservices, Angular, and Polarion integration for top tech giants.',
    fullDesc: 'Become an enterprise-ready Java architect with deep hands-on expertise in Core Java, Spring Boot microservices, Angular, MySQL, and DevOps tools.',
    skills: ['Java 21', 'Spring Boot', 'Hibernate', 'Microservices', 'Angular', 'Docker & CI/CD'],
    targetAudience: 'B.Tech/BE, MCA, and job seekers aiming for high-paying product firm positions.',
    curriculum: [
      { module: 'Module 1: Java Core & OOPs Mastery', topics: ['Multithreading, Collections, Streams API, Design Patterns'] },
      { module: 'Module 2: Spring Boot & Microservices', topics: ['Spring Cloud, REST API, Spring Security, JWT'] },
      { module: 'Module 3: Frontend & Database', topics: ['Angular 17, TypeScript, MySQL, Redis Caching'] }
    ],
    iconName: 'Server',
    image: 'https://images.pexels.com/photos/5483148/pexels-photo-5483148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'code-for-kidz',
    title: 'Code For Kidz & Scratch Robotics',
    category: 'kids',
    categoryLabel: 'MAQSUSI KIDS',
    badgeTag: 'AGE 6–14 YEARS',
    rating: 5.0,
    ratingCount: 512,
    price: '₹14,999',
    originalPrice: '₹22,000',
    duration: '12 Weeks',
    mode: 'Classroom',
    isPopular: true,
    shortDesc: 'Fun, block-based coding, game building, mobile app creation, and hands-on robotics logic for school kids.',
    fullDesc: 'Unleash your child’s creative superpower! Kids learn computational thinking through Scratch, MIT App Inventor, basic Python games, and physical electronic logic.',
    skills: ['Block Coding', 'Scratch 3.0', 'Game Logic', 'Python Turtle', 'Mobile Apps', 'Robotics Basics'],
    targetAudience: 'Children in Classes 1st to 9th who love games, puzzles, and problem solving.',
    curriculum: [
      { module: 'Level 1: Game Creation in Scratch', topics: ['Animations, Characters, Gravity, Score counters'] },
      { module: 'Level 2: App Building for Android', topics: ['Buttons, Canvas, Sound effects, Sensor controls'] },
      { module: 'Level 3: Intro to Real Code (Python)', topics: ['Variables, Loops, Turtle Graphics, Mini Arcade game'] }
    ],
    iconName: 'Sparkles',
    image: 'https://images.pexels.com/photos/29545228/pexels-photo-29545228.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'iit-foundation-kids',
    title: 'IIT Foundational & Analytical Science',
    category: 'kids',
    categoryLabel: 'MAQSUSI KIDS',
    badgeTag: 'CLASSES 6th TO 10th',
    rating: 4.8,
    ratingCount: 198,
    price: '₹18,999',
    originalPrice: '₹26,000',
    duration: 'Academic Year',
    mode: 'Hybrid',
    isPopular: false,
    shortDesc: 'Early conceptual clarity in Physics, Chemistry, and Mathematics built around Olympiad & competitive logic.',
    fullDesc: 'Construct rock-solid scientific concepts with hands-on experiments, visual proofs, and speed mathematics tricks to excel in future JEE & NEET examinations.',
    skills: ['Analytical Physics', 'Speed Math', 'Olympiad Questions', 'Logical Reasoning', 'Visual Proofs'],
    targetAudience: 'Ambitious middle school students preparing for top competitive milestones.',
    curriculum: [
      { module: 'Physics Fundamentals', topics: ['Mechanics, Motion, Optics, Electricity through kits'] },
      { module: 'Maths Mastery', topics: ['Vedic Math, Algebraic intuition, Geometry proofs'] }
    ],
    iconName: 'Atom',
    image: 'https://images.pexels.com/photos/5905890/pexels-photo-5905890.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  {
    id: 'powerbi-business-analytics',
    title: 'Power BI & Advanced Data Analytics',
    category: 'business',
    categoryLabel: 'DATA TOOLS',
    badgeTag: 'HIGH CAREER IMPACT',
    rating: 4.7,
    ratingCount: 230,
    price: '₹18,999',
    originalPrice: '₹28,000',
    duration: '8 Weeks',
    mode: 'Hybrid',
    isPopular: false,
    shortDesc: 'Master DAX formulas, interactive dashboards, SQL querying, and executive data reporting.',
    fullDesc: 'Empower businesses with visual analytics! Learn Power BI Desktop, DAX language, ETL pipelines, Power Query, and SQL integration for business strategy.',
    skills: ['Power BI Desktop', 'DAX Language', 'SQL Querying', 'Data Modeling', 'Excel Macros'],
    targetAudience: 'Business analysts, managers, sales leads, and finance graduates.',
    curriculum: [
      { module: 'Module 1: Excel & SQL Basics', topics: ['VLOOKUP, Pivot Tables, SQL Joins, Aggregations'] },
      { module: 'Module 2: Power BI Architecture', topics: ['Data cleaning in Power Query, Relationship modeling'] },
      { module: 'Module 3: Advanced DAX & Dashboards', topics: ['Calculated measures, Time intelligence, Publishing to Power BI Service'] }
    ],
    iconName: 'BarChart3',
    image: 'https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  }
];

export const WONDERTOUCH_TIERS: WonderTouchTier[] = [
  {
    id: 'lite',
    name: 'wonderTouch LITE',
    tagline: 'Bring your own device solution for compact budget setups.',
    badge: 'Budget Friendly',
    priceNote: 'Contact for pricing',
    features: [
      'Works seamlessly with your Android Phone or Tablet',
      'Budget HD ultra-portable projector & ceiling mount included',
      'No expensive desktop PC required',
      'Full Hotspot Offline Content Library (Nursery - UKG)',
      'Touch pen & optical calibration kit',
      'Self-install guide & video orientation'
    ],
    hardwareIncludes: ['Optical Touch Receiver', 'HD Projector + Mount', 'Android Hotspot Hub', 'Interactive Stylus Pens (2)'],
    recommendedFor: 'Small playschools, home preschools, and tuition centers.',
    colorGradient: 'from-amber-300 to-brand-gold',
    buttonText: 'Request LITE Quote'
  },
  {
    id: 'standard',
    name: 'wonderTouch STANDARD',
    tagline: 'Full turnkey classroom kit built for daily heavy school usage.',
    badge: 'MOST POPULAR',
    isPopular: true,
    priceNote: 'Contact for pricing',
    features: [
      'Dedicated Windows PC system unit pre-loaded with interactive software',
      'High-grade InfraRed Multi-Touch Frame + Ultra Short Throw Projector',
      'Built specifically for daily rigorous classroom interactions',
      'Full offline hotspot content library with quarterly syllabus updates',
      'Interactive phonics, rhyme walls, alphabet games, and math drag-and-drop',
      'On-site installation and teacher training support'
    ],
    hardwareIncludes: ['Windows Mini PC', 'Ultra-Short Throw HD Projector', 'IR Multi-Touch Bezel', 'Wall Mount Kit', 'Dual Stylus + Pointer'],
    recommendedFor: 'Established Kindergartens, Primary Schools, and Franchise Preschools.',
    colorGradient: 'from-amber-500 via-orange-500 to-red-500',
    buttonText: 'Request Standard Quote'
  },
  {
    id: 'premium',
    name: 'wonderTouch PREMIUM',
    tagline: 'Advanced multi-touch wall with classroom AI analytics.',
    badge: 'COMING SOON',
    isComingSoon: true,
    priceNote: 'Join the waitlist',
    features: [
      '10-point simultaneous multi-touch for group activity learning',
      'Expanded multi-subject interactive curriculum library (Nursery to Class 2)',
      'Advanced classroom engagement analytics dashboard for school principal',
      'Cloud synced progress tracking per student',
      'AR sound & motion sensing integration',
      'VIP priority tech support within 4 hours'
    ],
    hardwareIncludes: ['AI Workstation Unit', 'Laser Ultra HD Projector', '10-Point Touch Sensor Wall', 'Smart Audio System'],
    recommendedFor: 'International Schools, Smart Campuses, and Innovation Labs.',
    colorGradient: 'from-brand-red via-brand-pink to-brand-purple-800',
    buttonText: 'Join Waitlist'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ravi Kumar',
    role: 'Full Stack Developer at Cyient',
    course: 'Full Stack Java, 2025',
    year: '2025',
    rating: 5,
    quote: 'The Full Stack Java program got me interview-ready in three months. The mentors actually cared about outcomes and walked through live microservice deployments with me!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    categoryTag: 'Tech Track'
  },
  {
    id: '2',
    name: 'Sunita P.',
    role: 'Parent of Ananya (Class 4)',
    course: 'Maqsusi Kids Code For Kidz',
    year: '2025',
    rating: 5,
    quote: 'My daughter loves the Code For Kidz sessions — genuinely fun, not just screen time! She built her own interactive cartoon story and showed it proudly to her grandparents.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    isParent: true,
    categoryTag: 'Maqsusi Kids'
  },
  {
    id: '3',
    name: 'Ayesha M.',
    role: 'Admitted to Univ of Manchester',
    course: 'IELTS Coaching, 2025',
    year: '2025',
    rating: 5,
    quote: 'Went from Band 5.5 to Band 7.5 in six weeks of IELTS coaching. Structured and honest about my weak areas — especially speaking cue cards and essay structure!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    categoryTag: 'Test Prep'
  },
  {
    id: '4',
    name: 'Mohammed Imran',
    role: 'PLM Engineer at Mahindra',
    course: 'Mendix & Polarion Track, 2024',
    year: '2024',
    rating: 5,
    quote: 'Maqsusi EduTech is one of the very few institutes offering genuine Siemens Polarion & Mendix enterprise practicals. Got hired right after project submission.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    categoryTag: 'Enterprise Track'
  }
];

export const DAYCARE_SCHEDULE: DaycareScheduleItem[] = [
  { time: '08:30 AM - 09:30 AM', activity: 'Morning Welcome & Free Play', description: 'Warm greeting, health check, story circle, and soft toy play.', icon: 'Sun', category: 'play' },
  { time: '09:30 AM - 10:15 AM', activity: 'Nutritious Breakfast Break', description: 'Freshly prepared organic snack, warm milk, and fruit bowl.', icon: 'Utensils', category: 'meal' },
  { time: '10:15 AM - 11:30 AM', activity: 'wonderTouch Interactive Session', description: 'Alphabet rhymes, animal sounds, and digital touch wall puzzles.', icon: 'Tv', category: 'learning' },
  { time: '11:30 AM - 01:00 PM', activity: 'Outdoor / Gym Kinetic Games', description: 'Balance beam, ball pit, slide play, and fine motor skills activities.', icon: 'Smile', category: 'play' },
  { time: '01:00 PM - 02:00 PM', activity: 'Balanced Lunch & Hygiene', description: 'Warm home-style lunch followed by hand washing and teeth brushing routine.', icon: 'Soup', category: 'meal' },
  { time: '02:00 PM - 04:00 PM', activity: 'Quiet Nap Time / Rest', description: 'Cozy climate-controlled sleeping nursery with soft lullabies.', icon: 'Moon', category: 'rest' },
  { time: '04:00 PM - 05:00 PM', activity: 'Afternoon Snack & Homework Help', description: 'Fresh juice, biscuits, and dedicated after-school tuition assistance.', icon: 'BookOpen', category: 'learning' },
  { time: '05:00 PM - 06:30 PM', activity: 'Creative Crafts & Parent Pickup', description: 'Drawing, clay modeling, board games, and smooth pickup handover.', icon: 'Heart', category: 'play' }
];

export const INSTITUTION_STATS = [
  { label: 'LEARNERS TRAINED', value: 12000, suffix: '+', icon: 'GraduationCap', color: 'from-brand-purple-500 to-brand-purple-700' },
  { label: 'HIRING PARTNERS', value: 85, suffix: '+', icon: 'Building2', color: 'from-emerald-500 to-teal-600' },
  { label: 'PROGRAMS OFFERED', value: 22, suffix: '', icon: 'BookMarked', color: 'from-amber-500 to-orange-600' },
  { label: 'AVERAGE RATING', value: 4.7, suffix: '/5', icon: 'Star', color: 'from-purple-500 to-pink-600' }
];

export const FAQS = [
  {
    q: 'Is Maqsusi EduTech officially recognized by the Telangana Government?',
    a: 'Yes! Maqsusi EduTech is an official Telangana Skill Development Partner. Our programs align with state skill standards and industry workforce demands.'
  },
  {
    q: 'What is the wonderTouch classroom system?',
    a: 'wonderTouch is our proprietary touch-based interactive learning product for Nursery–UKG classrooms. It converts any flat wall or whiteboard into a full-scale hands-on learning surface using short-throw projection and optical/IR touch sensors.'
  },
  {
    q: 'How does the Maqsusi Kidz Play Zone & Daycare work?',
    a: 'Located in Malakpet, Hyderabad, our daycare provides structured care, daily wonderTouch learning, nutritious meals, trained verified caretakers, and LIVE parent CCTV mobile streaming access so you can watch your child in real-time.'
  },
  {
    q: 'Do you offer job placement assistance for adult career programs?',
    a: 'Yes, all our tech, enterprise, and data courses include end-to-end placement support — resume building, mock HR & technical interviews, portfolio hosting, and direct interview scheduling with our 85+ hiring partners.'
  }
];
