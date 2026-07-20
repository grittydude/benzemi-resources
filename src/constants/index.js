// All static content lives here.
// This keeps components clean and makes copy changes trivial.

export const NAV_LINKS = [
  { label: 'ABOUT US', href: '/about' },
  { label: 'TRAINING', href: '/training' },
  { label: 'INDUSTRY SOLUTIONS', href: '/industry-solutions' },
  { label: 'RESOURCES', href: '/resources' },
  { label: 'CONTACT US', href: '/contact' },
]

export const SITE_NAME = 'Bezimeni Resources'

export const WHAT_WE_DO = {
  badge: 'What We Do',
  heading: {
    line1: 'Building Capability Across',
    line2: 'People, Projects and Industry',
  },
  description:
    "We provide practical training, mentoring and project support led by experienced tutors who bring real industry insight. Our proven teaching methods are designed to build confidence, strengthen capability and deliver learning that is relevant to today's workplace.",
  cta: { label: 'Get Started', href: '#get-started' },
  cards: [
    {
      id: 'people',
      variant: 'green',
      title: 'Develop People',
      description: 'Equip emerging professionals with practical industry skills and confidence.',
    },
    {
      id: 'projects',
      variant: 'dark',
      title: 'Deliver Projects',
      description: 'Build capability that supports future engineering and technical execution.',
    },
    {
      id: 'industry',
      variant: 'gray',
      title: 'Drive Industry',
      description: 'Create long-term value through talent development and industrial impact.',
    },
  ],
}

export const INDUSTRY_GAP_SLIDES = [
  {
    badge: 'The Industry Gap',
    text: {
      before: 'Many ',
      accent: 'graduates',
      after: ' leave school equipped with theory but limited exposure to the realities of industrial work.',
    },
  },
  {
    badge: 'The Industry Gap',
    text: {
      before: 'Employers spend months ',
      accent: 'onboarding',
      after: ' new engineers on skills that should have been developed long before their first day on the job.',
    },
  },
  {
    badge: 'The Industry Gap',
    text: {
      before: 'The distance between ',
      accent: 'education',
      after: ' and industry expectations keeps widening — and it is graduates who bear the cost.',
    },
  },
]

export const WHY_BEZIMENI = {
  badge: 'Why Bezimeni?',
  heading: {
    line1: 'Built for Practical Learning',
    line2: { prefix: 'and ', accent: 'Industry', suffix: ' Relevance' },
  },
  slides: [
    {
      id: 'impact',
      counter: '01',
      total: '02',
      title: 'Our Impact',
      type: 'stats',
      stats: [
        { value: '2500+', label: 'Graduates Developed' },
        { value: '8,564', label: 'Training Hours' },
        { value: '65',    label: 'Seasoned Trainers' },
      ],
    },
    {
      id: 'pedigree',
      counter: '02',
      total: '02',
      title: 'Our Pedigree',
      type: 'logos',
      description:
        'Cumulative of 175 years of experience in the oil and gas industry with:',
    },
  ],
}

export const FEATURED_PROGRAMMES = {
  badge: 'Training Programmes',
  heading: { plain: 'Featured ', accent: 'Training', suffix: ' Programmes' },
  cta: { label: 'See All Programmes', href: '#training' },
  programmes: [
    {
      id: 'oil-gas',
      variant: 'green',
      icon: 'oil-gas',
      title: 'Oil & Gas Industry Fundamentals',
      description:
        'Equip emerging professionals with practical industry skills and confidence.',
    },
    {
      id: 'process-prod',
      variant: 'dark',
      icon: 'process-prod',
      title: 'Process & Production Operations',
      description:
        'Build capability that supports future engineering and technical execution.',
    },
    {
      id: 'hse',
      variant: 'gray',
      icon: 'hse',
      title: 'HSE & Operational Excellence',
      description:
        'Create long-term value through talent development and industrial impact.',
    },
  ],
}

export const TESTIMONIALS = {
  badge: 'Unique Results',
  headline: [
    { text: "We've helped " },
    { text: 'graduates', accent: true },
    { text: ' become industry ready and kickstart their ' },
    { text: 'careers', accent: true },
    { text: '.' },
  ],
  items: [
    {
      id: 'abia',
      quote:
        "The tutoring was exceptional. My tutor didn't just explain the theory, she connected it to real engineering practice in a way that finally made everything click. I felt far more prepared for my assessments and much more confident in my understanding.",
      name: 'Abia, J.',
      role: 'Graduate Process Engineer',
      initials: 'AJ',
    },
    {
      id: 'akpan',
      quote:
        "What stood out most was the real-world perspective. The sessions were structured, practical, and incredibly relevant to the challenges I face in industry. It was clear I was learning from someone with genuine technical depth and experience.",
      name: 'Akpan M.',
      role: 'Instrumentation Engineer',
      initials: 'AM',
    },
    {
      id: 'thompson',
      quote:
        "I came in struggling, but the support I received was patient, clear, and highly effective. The tutor helped me build a strong foundation. I've made more progress in a few sessions than I expected to make in months.",
      name: 'Thompson, B.',
      role: 'Mechanical Engineering Student',
      initials: 'TB',
    },
  ],
}

export const INDUSTRY_RESOURCES = {
  badge: 'Resources and Industry Solutions',
  heading: 'Industry Resources',
  cta: { label: 'See All Resources', href: '#resources' },
  resources: [
    {
      id: 'res-1',
      type: 'Publication',
      variant: 'green',
      date: '2nd June, 2026',
      title: 'Understanding Hydrocarbon Dewpointing in Natural Gas Processing Systems',
    },
    {
      id: 'res-2',
      type: 'News',
      variant: 'dark',
      date: '2nd June, 2026',
      title: 'Understanding Hydrocarbon Dewpointing in Natural Gas Processing Systems',
    },
    {
      id: 'res-3',
      type: 'Publication',
      variant: 'light',
      date: '2nd June, 2026',
      title: 'Understanding Hydrocarbon Dewpointing in Natural Gas Processing Systems',
    },
  ],
}

export const GROWING_CTA = {
  badge: 'Industry Solutions',
  text: 'As Bezimeni grows, we are expanding into technical support, workforce development, and engineering solutions that drive industrial progress.',
  cta: { label: 'Industry Solutions', href: '#solutions' },
}

export const SITE_FOOTER = {
  button: { label: 'Get Started Today!', href: '#get-started' },
  connect: [
    { label: 'LinkedIn', href: '#linkedin' },
    { label: 'X', href: '#x' },
  ],
  copyright: '© 2026 Bezimeni Resources. All rights reserved.',
}

// ── Resources listing page ──────────────────────────────────────
export const RESOURCES_PAGE = {
  hero: {
    tags: ['Insights', 'Resources', 'Community'],
    heading: { prefix: 'Learn ', accent: 'Beyond', suffix: ' the Classroom' },
  },
  featured: [
    {
      id: 'feat-1',
      type: 'News',
      slug: 'engineering-graduates-beyond-technical',
      date: '2nd June, 2026',
      title: 'Understanding Hydrocarbon Dewpointing in Natural Gas Processing Systems',
      image: 'https://picsum.photos/seed/bezimeni-eng/900/600',
    },
    {
      id: 'feat-2',
      type: 'Publication',
      slug: 'nigeria-oil-climate-change',
      date: '2nd June, 2026',
      title: "Nigeria's Future as an Oil Producing Nation and Climate Change",
      image: 'https://picsum.photos/seed/bezimeni-conf/900/600',
    },
  ],
  grid: [
    { id: 'g1', type: 'Publication', variant: 'green',  slug: 'process-flow-diagrams',          date: '2nd June, 2026', title: 'Understanding Process Flow Diagrams: A Practical Introduction' },
    { id: 'g2', type: 'News',        variant: 'dark',   slug: 'prepare-first-engineering-role', date: '2nd June, 2026', title: 'How to Prepare for Your First Engineering Role' },
    { id: 'g3', type: 'Publication', variant: 'light',  slug: 'engineer-valuable',              date: '2nd June, 2026', title: 'What Makes an Engineer Valuable Beyond Technical Knowledge' },
    { id: 'g4', type: 'News',        variant: 'green',  slug: 'academic-vs-industrial',         date: '2nd June, 2026', title: 'The Difference Between Academic Learning and Industrial Execution' },
    { id: 'g5', type: 'Publication', variant: 'dark',   slug: 'hydrocarbon-dewpointing',        date: '2nd June, 2026', title: 'Understanding Hydrocarbon Dewpointing in Natural Gas Processing Systems' },
    { id: 'g6', type: 'Publication', variant: 'light',  slug: 'confidence-technical',           date: '2nd June, 2026', title: 'Understanding Hydrocarbon Dewpointing in Natural Gas Processing Systems' },
  ],
  event: {
    badge: 'Upcoming Events',
    heading: { pre: 'Discover ', accent1: 'Community', mid: ' Events That Keep You ', accent2: 'Connected' },
    // legacy single item (used by UpcomingEvents)
    item: {
      counter: '01 / 02',
      title: 'Bezimeni Industry Connect: Graduate Networking',
      date: '2nd June, 2026',
      time: '10:00AM Prompt',
      venue: 'Villa Marina Hotels and Suites, Ekiti',
      rsvp: '#events',
      image: 'https://picsum.photos/seed/bezimeni-event/480/320',
    },
    // multi-event array (used by IndustryEvents)
    items: [
      {
        title: 'Bezimeni Industry Connect: Graduate Networking',
        date: '2nd June, 2026',
        time: '10:00AM Prompt',
        venue: 'Villa Marina Hotels and Suites, Ekiti',
        rsvp: '#events',
      },
      {
        title: 'Technical Skills Workshop: Process Safety Basics',
        date: '15th July, 2026',
        time: '9:00AM Prompt',
        venue: 'Resource Centre, Lagos',
        rsvp: '#events',
      },
    ],
  },
  newsletter: {
    badge: 'No Noise, Just Valuable Content',
    text: 'Receive practical insights, learning opportunities, technical resources, and updates from Bezimeni directly in your inbox.',
    placeholder: 'First Name',
    cta: 'Subscribe',
  },
}

// ── Article detail page ─────────────────────────────────────────
export const ARTICLE_PAGE = {
  type: 'Publication',
  date: 'January 27, 2026',
  slug: 'prepare-first-engineering-role',
  title: 'How to Prepare for Your First Engineering Role',
  intro:
    'Starting your first engineering role can feel exciting and overwhelming at the same time. While technical knowledge remains important, success in industry often depends on your ability to learn quickly, communicate clearly, and apply theory to real operational environments. Preparing intentionally before your first day can make the transition smoother and help you build confidence early.',
  share: { linkedin: '#linkedin', x: '#x' },
  author: 'Bezimeni Resources',
  image: 'https://picsum.photos/seed/bezimeni-office/1200/630',
  pullQuote: {
    text: '“Industry does not expect graduates to know everything, it expects them to be curious, teachable, and capable of turning knowledge into action.”',
    attribution: '— Valentine Agba, Senior Operations Specialist',
  },
  introSection: {
    heading: 'Introduction',
    paragraphs: [
      'Graduating with an engineering degree is a major achievement—but entering industry is where a different type of learning begins.',
      'Many early-career engineers discover that the workplace demands more than solving calculations or passing exams. Industrial environments require decision-making, collaboration, awareness of safety, adaptability, and an understanding of how technical work connects to larger business and operational goals.',
      'Preparing ahead gives you a stronger foundation and helps you contribute more effectively from the beginning.',
    ],
  },
  numberedSections: [
    {
      num: 1,
      heading: 'Strengthen Your Fundamentals',
      body: 'You do not need to know everything before your first role, but you should understand core principles within your discipline. Revisit the concepts you are most likely to encounter and focus on understanding rather than memorisation.',
    },
    {
      num: 2,
      heading: 'Learn How Industry Actually Works',
      body: 'Spend time understanding industrial workflows, equipment, terminology, and operations. Read technical content, watch plant walkthroughs, and become familiar with how engineering decisions affect safety, production, and reliability.',
    },
    {
      num: 3,
      heading: 'Develop Professional Habits',
      body: 'Strong engineers communicate clearly, ask thoughtful questions, document their work, and take ownership of their learning. Build habits that make you dependable and easy to work with.',
    },
    {
      num: 4,
      heading: 'Stay Curious',
      body: 'Your first role is not about proving expertise. It is about accelerating growth.',
    },
  ],
  conclusion: {
    heading: 'Conclusion',
    body: 'Your first engineering role is not the finish line of your education—it is the beginning of applied learning. Focus on building practical understanding, professional confidence, and a mindset of continuous improvement. The engineers who grow fastest are often not the ones who know the most on day one—they are the ones willing to learn consistently and adapt quickly.',
  },
  related: [
    { id: 'rel-1', type: 'Publication', variant: 'green', date: '2nd June, 2026', title: 'Understanding Process Flow Diagrams: A Practical Introduction',  slug: 'process-flow-diagrams' },
    { id: 'rel-2', type: 'News',        variant: 'dark',  date: '2nd June, 2026', title: 'How to Prepare for Your First Engineering Role',                  slug: 'prepare-first-engineering-role' },
    { id: 'rel-3', type: 'Publication', variant: 'light', date: '2nd June, 2026', title: 'What Makes an Engineer Valuable Beyond Technical Knowledge',       slug: 'engineer-valuable' },
  ],
}

// ── About page ──────────────────────────────────────────────────
export const ABOUT_PAGE = {
  hero: {
    tags: ['About Us'],
    heading: { prefix: 'Developing ', accent: 'Industry-Ready\n', suffix: 'Professionals for Success' },
    cta: { label: 'Explore Programmes', href: '/training' },
    image: 'https://picsum.photos/seed/bezimeni-about-hero/1440/580',
  },
  story: {
    badge: 'Our Story',
    heading: { prefix: 'Shaped by a ', accent: 'Practical Need' },
    paragraphs: [
      'Too many capable graduates leave university with strong theoretical foundations but limited exposure to how industry truly operates.',
      'We created Bezimeni Resources to help close that gap. Our goal is to create learning experiences that move beyond theory and prepare people to think critically, solve problems confidently, and contribute meaningfully in real industrial environments.',
      'Today, that begins through training and capability development. Tomorrow, it grows into broader technical and industrial impact.',
    ],
    cta: { label: 'Get Started', href: '/training' },
  },
  whyWeBuild: {
    badge: 'Why We Exist',
    heading: { prefix: 'Because ', accent1: 'Potential', mid: ' Deserves\nPractical ', accent2: 'Opportunity' },
    description: 'Education creates possibility, but industry requires application.\n\nBezimeni was founded to help learners build practical understanding, develop confidence, and transition more successfully into engineering, technical and professional environments.',
    image: 'https://picsum.photos/seed/bezimeni-team-photo/420/340',
    pillars: [
      { id: 'w1', label: 'Learn', variant: 'green', description: 'Gain practical knowledge through structured, industry-relevant learning experiences.' },
      { id: 'w2', label: 'Build', variant: 'dark', description: 'Develop confidence, capability, and technical understanding through hands-on practice.' },
      { id: 'w3', label: 'Apply', variant: 'gray', description: "Use what you've learned to solve real problems and contribute meaningfully in industry." },
    ],
  },
  mission: {
    tabs: ['Our Mission', 'Our Vision', 'Our Values'],
    content: {
      'Our Mission': {
        type: 'text',
        text: 'To develop capable professionals through practical learning experiences that connect education with industry and prepare people for meaningful careers.',
      },
      'Our Vision': {
        type: 'text',
        text: 'To become a trusted platform for developing technical capability, delivering practical solutions, and contributing to industrial growth.',
      },
      'Our Values': {
        type: 'cards',
        cards: [
          { id: 'v1', variant: 'white', title: 'People First', description: 'Development begins with investing in people.' },
          { id: 'v2', variant: 'green', title: 'Practical Excellence', description: 'Learning should create practical, lasting capability.' },
          { id: 'v3', variant: 'gray',  title: 'Growth Mindset',       description: 'Progress happens through continuous improvement.' },
        ],
      },
    },
  },
  team: {
    badge: 'Team',
    heading: { prefix: 'Built by ', accent: 'Professionals', suffix: ' Who\nUnderstand the Industry' },
    members: [
      { id: 't1', name: 'Valentine Agba', title: 'Chief Executive Officer and Co-Founder', image: 'https://picsum.photos/seed/bezimeni-ceo1/360/360', href: '#' },
      { id: 't2', name: 'Valentine Agba', title: 'Chief Executive Officer and Co-Founder', image: 'https://picsum.photos/seed/bezimeni-ceo2/360/360', href: '#' },
      { id: 't3', name: 'Valentine Agba', title: 'Chief Executive Officer and Co-Founder', image: 'https://picsum.photos/seed/bezimeni-ceo3/360/360', href: '#' },
    ],
  },
}

// ── Training page ────────────────────────────────────────────────
export const TRAINING_PAGE = {
  hero: {
    tags: ['Training Academy'],
    heading: { prefix: 'Build Skills That ', accent: 'Translate', suffix: '\nBeyond the Classroom' },
  },
  programmes: [
    {
      id: 'p1', variant: 'dark', slug: 'oil-gas-fundamentals',
      title: 'Oil & Gas Industry Fundamentals',
      description: 'Build foundational understanding of upstream, midstream, and downstream operations and how value is created across the industry.',
      price: '₦208,564',
      duration: '4–6 Weeks', type: 'In-Person/Virtual', outcome: 'Industry Awareness',
    },
    {
      id: 'p2', variant: 'light', slug: 'oil-gas-fundamentals-2',
      title: 'Oil & Gas Industry Fundamentals',
      description: 'Build foundational understanding of upstream, midstream, and downstream operations and how value is created across the industry.',
      price: '₦208,564',
      duration: '4–6 Weeks', type: 'In-Person/Virtual', outcome: 'Industry Awareness',
    },    
    {
      id: 'p4', variant: 'green', slug: 'oil-gas-fundamentals-4',
      title: 'Oil & Gas Industry Fundamentals',
      description: 'Build foundational understanding of upstream, midstream, and downstream operations and how value is created across the industry.',
      price: '₦208,564',
      duration: '4–6 Weeks', type: 'In-Person/Virtual', outcome: 'Industry Awareness',
    },
    {
      id: 'p3', variant: 'white', slug: 'oil-gas-fundamentals-3',
      title: 'Oil & Gas Industry Fundamentals',
      description: 'Build foundational understanding of upstream, midstream, and downstream operations and how value is created across the industry.',
      price: '₦208,564',
      duration: '4–6 Weeks', type: 'In-Person/Virtual', outcome: 'Industry Awareness',
    },
  ],
  learningExperience: {
    badge: 'Learning Experience',
    heading: { prefix: '', accent: 'Training', suffix: ' that matches\nIndustry Reality' },
    description: 'Our approach combines structured learning with practical contact to help learners understand how knowledge translates into action.',
    points: [
      { num: '01', total: '04', label: 'Industry-Led Sessions' },
      { num: '02', total: '04', label: 'Applied Case Discussions' },
      { num: '03', total: '04', label: 'Technical Exposure' },
      { num: '04', total: '04', label: 'Professional Development' },
    ],
  },
  faq: [
    { id: 'f1', q: 'Who can apply?', a: 'Our programs are open to students, recent graduates, and early-career professionals who want to build practical industry knowledge and strengthen their technical confidence.' },
    { id: 'f2', q: 'How can I apply?', a: 'You can apply by completing the application form on our website or by contacting our team directly for guidance on the next available cohort.' },
    { id: 'f3', q: 'Will I get a certificate after training?', a: 'Yes. Participants who successfully complete a program receive a certificate of completion.' },
    { id: 'f4', q: 'Do I need experience?', a: 'No prior experience is required for most programs. Each course is designed to support learners at different stages, from beginners to those looking to deepen existing knowledge.' },
    { id: 'f5', q: 'Is training virtual or physical?', a: 'Training format may vary by program. Some sessions are delivered virtually, while others may be physical or hybrid depending on the learning experience.' },
    { id: 'f6', q: 'How long are programs?', a: 'Program duration varies depending on the course, but most run between 2 and 8 weeks.' },
  ],
}

// ── Training detail pages (keyed by slug) ────────────────────────
const OIL_GAS_DETAIL = {
  slug: 'oil-gas-fundamentals',
  badge: 'Training Programme',
  title: 'Oil & Gas Industry Fundamentals',
  intro:
    'Build practical understanding of how the oil and gas industry operates—from value chain fundamentals to operational awareness and real-world industry context. Through guided sessions, industry discussions, and applied learning, participants gain the context needed to navigate industrial environments with greater confidence.',
  sidebar: {
    duration: '4–6 Weeks',
    format: 'Virtual / Hybrid',
    level: 'Beginner–Intermediate',
    certificate: 'Included',
    enrollHref: '/contact',
  },
  whoFor: {
    heading: 'Who is this Programme for?',
    intro: 'This course is designed for learners at different stages of their journey. Ideal Participants are:',
    items: [
      'Engineering Students',
      'Recent Graduates',
      'Early-Career Engineers',
      'Technical Professionals Transitioning Industries',
      'Young Professionals Seeking Industry Exposure',
    ],
  },
  whatYouLearn: {
    heading: 'What you will learn',
    intro: 'By the end of this program, participants should be able to:',
    items: [
      'Understand the oil and gas value chain',
      'Interpret basic industry terminology',
      'Explain operational workflows',
      'Recognise roles across engineering disciplines',
      'Apply technical thinking to practical environments',
      'Build greater confidence for industry conversations',
    ],
  },
  curriculum: {
    heading: 'Course Curriculum',
    intro: 'Structured modules designed to progressively build understanding.',
    modules: [
      {
        num: 1,
        title: 'Introduction to Oil & Gas',
        items: ['Industry Overview', 'Energy Landscape', 'Industry Terminology', 'Value Creation'],
      },
      {
        num: 2,
        title: 'Understanding Operations',
        items: ['Upstream', 'Midstream', 'Downstream', 'Production Systems'],
      },
      {
        num: 3,
        title: 'Engineering Disciplines',
        items: ['Process Engineering', 'Mechanical Systems', 'Instrumentation', 'HSE Fundamentals'],
      },
      {
        num: 4,
        title: 'Industry Readiness',
        items: ['Professional Conduct', 'Technical Communication', 'Industry Terminology', 'Value Creation'],
      },
    ],
  },
  howYouLearn: {
    heading: 'How you will learn',
    intro: 'Our sessions are designed to connect concepts with application.',
    items: [
      'Instructor-Led Sessions',
      'Industry Case Discussions',
      'Group Exercises',
      'Practical Frameworks',
      'Live Q&A',
      'Resources & Templates',
    ],
  },
  ctaBox: {
    heading: 'Take the Next Step Toward Industry Readiness',
    body: 'Build practical understanding, strengthen your technical confidence, and learn through industry-focused experiences.',
    note: 'LIMITED SPACES AVAILABLE PER COHORT',
  },
}

export const TRAINING_DETAIL = {
  'oil-gas-fundamentals':   OIL_GAS_DETAIL,
  'oil-gas-fundamentals-2': { ...OIL_GAS_DETAIL, slug: 'oil-gas-fundamentals-2' },
  'oil-gas-fundamentals-3': { ...OIL_GAS_DETAIL, slug: 'oil-gas-fundamentals-3' },
  'oil-gas-fundamentals-4': { ...OIL_GAS_DETAIL, slug: 'oil-gas-fundamentals-4' },
}

// ── Industry Solutions page ──────────────────────────────────────
export const INDUSTRY_SOLUTIONS_PAGE = {
  hero: {
    tags: ['Industry Solutions'],
    heading: { prefix: 'Delivering Expert\n', accent: 'Engineering Solutions', suffix: '' },
    cta: { label: 'Partner With Us', href: '/contact' },
    image: 'https://picsum.photos/seed/bezimeni-industry-hero/1440/580',
  },
  approach: {
    badge: 'Our Approach',
    heading: { prefix: 'Developing ', accent1: 'Capability', mid: ' Through\nPractical ', accent2: 'Experience' },
    description: 'We believe strong engineering outcomes begin with capable people. Our approach combines training, technical understanding, and real-world exposure to create a foundation for future engineering support services.',
    pillars: [
      { id: 'a1', variant: 'green', icon: 'develop',       title: 'Develop People', description: 'Equip individuals with practical knowledge, technical confidence, and industry-ready skills.' },
      { id: 'a2', variant: 'dark',  icon: 'buildCapacity', title: 'Build Capability', description: 'Strengthen the systems, processes, and expertise needed to support future growth and performance.' },
      { id: 'a3', variant: 'gray',  icon: 'deliver',       title: 'Deliver Value', description: 'Translate capability into meaningful outcomes for clients, partners, and the industries we serve.' },
    ],
  },
  solutionAreas: {
    badge: 'Solution Areas',
    heading: { prefix: 'Areas We Are ', accent: 'Building', suffix: ' Toward' },
    description: 'As Bezimeni grows, these focus areas represent the capabilities we are intentionally developing to support clients and industry partners.',
    areas: [
      { id: 's1', variant: 'dark',  icon: 'programmeIcon',               title: 'Technical Training & Workforce Development', description: 'Industry-focused learning experiences that build technical capability for practical environments.' },
      { id: 's2', variant: 'gray',  icon: 'engrSupport',         title: 'Engineering Support Services', description: 'Technical assistance and engineering support intended to improve operational understanding and project readiness.' },
      { id: 's3', variant: 'gray',  icon: 'programmeIcon',               title: 'Research and Development', description: 'Advancing ideas, testing concepts, and developing innovative solutions that support future growth.' },
      { id: 's4', variant: 'green', icon: 'industryPartnership', title: 'Industry Partnerships', description: 'Collaborating with organisations to strengthen talent pipelines and capability development.' },
    ],
  },
  sectors: {
    badge: 'Industries We Support',
    heading: { prefix: 'Built for Real-World\n', accent: 'Industry', suffix: ' Needs' },
    description: 'Our learning and capability approach is informed by sectors where technical excellence, operational awareness, and practical execution matter most.',
    items: [
      { num: '01', total: '04', label: 'Energy, Oil & Gas' },
      { num: '02', total: '04', label: 'Engineering Services' },
      { num: '03', total: '04', label: 'Manufacturing' },
      { num: '04', total: '04', label: 'Industrial Operations' },
    ],
  },
  partnerCta: {
    badge: 'Partner With Us',
    heading: { prefix: 'Build Capability ', accent: 'Together' },
    description: 'Whether you are interested in workforce development, collaboration opportunities, or future technical initiatives, we welcome conversations with organisations that share our commitment to growth and practical impact.',
    cta: { label: 'Partner With Us', href: '/contact' },
  },
  darkStrip: {
    badge: 'Training Programmes',
    text: 'Explore how Bezimeni is building the foundation for stronger capability, meaningful partnerships, and long-term industrial impact.',
    cta: { label: 'Explore Trainings', href: '/training' },
  },
}

// ── Contact page ─────────────────────────────────────────────────
export const CONTACT_PAGE = {
  hero: {
    tags: ['Contact', 'Partnerships and Events'],
    heading: { prefix: 'Start the ', accent: 'Conversation', suffix: ',\nContact Bezimeni Resources' },
  },
  contact: {
    email: 'hello@bezimeniresources.com',
    phone: '+234 803 8474 3774',
    social: [
      { label: 'LinkedIn', href: '#linkedin' },
      { label: 'X', href: '#x' },
    ],
  },
  enquiryHeading: {
    prefix: 'Select the option that fits your enquiry.',
    accent: '\nHow can we help?',
  },
  enquiryTypes: [
    {
      id: 'enrolment',
      label: 'Student Enrolment',
      variant: 'lime',
      description: "Interested in building practical industry skills? Tell us about yourself and we'll guide you to the right path.",
      cta: 'Apply for Training',
      badge: 'Student Enrolment',
      formDescription: 'Apply to Join a Program',
    },
    {
      id: 'partnership',
      label: 'Partnership Opportunities',
      variant: 'dark',
      description: 'Looking to collaborate, support workforce development, or explore future initiatives? Start the conversation here.',
      cta: 'Partner With Us',
      badge: 'Partnerships',
      formDescription: "Tell us about your organisation and how you'd like to collaborate.",
    },
    {
      id: 'rsvp',
      label: 'Event RSVP',
      variant: 'gray',
      description: 'Register your interest in upcoming workshops, sessions, and community events.',
      cta: 'Reserve a Spot',
      badge: 'Reserve Your Spot',
      formDescription: "Register your interest and we'll share event details and confirmations.",
    },
  ],
  faq: [
    { id: 'cf1', q: 'How quickly will I receive a response?', a: 'We aim to respond within 24 hours, depending on the nature of your enquiry.' },
    { id: 'cf2', q: 'Can I apply for multiple programs?', a: "If you're interested in more than one program, you can indicate that in your application and our team will guide you on the best fit." },
    { id: 'cf3', q: 'Do partnerships require existing experience?', a: 'Not necessarily. We welcome organisations at different stages of collaboration and are happy to explore opportunities based on your goals.' },
    { id: 'cf4', q: 'Are events open to everyone?', a: 'Most of our events are open to students, professionals, partners, and community members, though some sessions may have specific eligibility or capacity limits.' },
  ],
}

export const HERO = {
  badge: "Ready for tomorrow's industry, today!",
  heading: {
    plain1: 'Build',
    accent: 'Industry Skills',
    plain2: 'That Move Engineering Careers Forward.',
  },
  description:
    'Bezimeni Resources equips science and engineering graduates with practical knowledge, technical exposure, and industry-focused training designed to bridge the gap between education and real-world execution.',
  cta: {
    primary: 'Get Started',
    href: '#get-started',
  },
}