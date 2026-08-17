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
      before: 'Employers increasingly seek ',
      accent: 'professionals',
      after: ' who can think critically, understand operations, and contribute from day one.',
    },
  },
  {
    badge: 'The Industry Gap',
    text: {
      before: 'We equip emerging ',
      accent: 'engineers',
      after: ' with practical knowledge, hands-on exposure, and confidence to thrive in industry.',
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
        { value: '2700+', label: 'Graduates Developed' },
        { value: '8,564', label: 'Training Hours' },
        { value: '25', label: 'Seasoned Trainers' },
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
      title: 'School of Oil & Gas Production Operations',
      description:
        'Build practical expertise in oil and gas operations, production, and systems',
    },
    {
      id: 'process-prod',
      variant: 'dark',
      icon: 'process-prod',
      title: 'School of Mechanical & Asset Integrity Engineering',
      description:
        'Build practical expertise in equipment reliability, maintenance, and asset integrity',
    },
    {
      id: 'hse',
      variant: 'gray',
      icon: 'hse',
      title: 'School of Renewable Energy Systems',
      description:
        'Build practical skills for modern renewable energy and sustainable power systems',
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
      imageKey: 'amos',
      quote:
        "The tutoring was exceptional. My tutor didn't just explain the theory, she connected it to real engineering practice in a way that finally made everything click. I felt far more prepared for my assessments and much more confident in my understanding.",
      name: 'Amos O.',
      role: 'GRADUATE MECHANICAL ENGINEER',
      initials: 'AO',
    },
    {
      id: 'akpan',
      imageKey: 'mercy',
      quote:
        "What stood out most was the real-world perspective. The sessions were structured, practical, and incredibly relevant to the challenges I face in industry. It was clear I was learning from someone with genuine technical depth and experience.",
      name: 'Mercy A.',
      role: 'GRADUATE INSTRUMENTATION ENGINEER',
      initials: 'MA',
    },
    {
      id: 'thompson',
      imageKey: 'bright',
      quote:
        "I came in struggling, but the support I received was patient, clear, and highly effective. The tutor helped me build a strong foundation. I've made more progress in a few sessions than I expected to make in months.",
      name: 'Bright T.',
      role: 'CHEMICAL ENGINEER STUDENT',
      initials: 'BT',
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
      title: 'What Makes an Engineer Valuable Beyond Technical Knowledge',
    },
    {
      id: 'res-2',
      type: 'News',
      variant: 'dark',
      date: '2nd June, 2026',
      title: 'How to Prepare for Your First Engineering Role',
    },
    {
      id: 'res-3',
      type: 'Publication',
      variant: 'light',
      date: '2nd June, 2026',
      title: 'Developing Confidence in Technical Environments',
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
      slug: 'prepare-for-your-first-engineering-role',
      date: '2nd June, 2026',
      title: 'How to Prepare for Your First Engineering Role',
      image: 'https://picsum.photos/seed/bezimeni-eng/900/600',
    },
    {
      id: 'feat-2',
      type: 'Publication',
      slug: 'valuable-engineer',
      date: '2nd June, 2026',
      title: "What Makes an Engineer Valuable Beyond Technical Knowledge",
      image: 'https://picsum.photos/seed/bezimeni-conf/900/600',
    },
  ],
  grid: [
    { id: 'g1', type: 'Publication', variant: 'green', slug: 'valuable-engineer', date: '2nd June, 2026', title: 'What Makes an Engineer Valuable Beyond Technical Knowledge' },
    { id: 'g2', type: 'News', variant: 'dark', slug: 'prepare-first-engineering-role', date: '2nd June, 2026', title: 'How to Prepare for Your First Engineering Role' },
    { id: 'g3', type: 'Publication', variant: 'light', slug: 'developing-confidence-in-technical-environments', date: '2nd June, 2026', title: 'Developing Confidence in Technical Environments' },
    
  ],
  event: {
    badge: 'Upcoming Events',
    heading: { pre: 'Discover ', accent1: 'Community', mid: ' Events That Keep You ', accent2: 'Connected' },
    // legacy single item (used by UpcomingEvents)
    item: {
      counter: '01 / 02',
      title: 'Bezimeni Industry Connect: Graduate Networking',
      date: 'TBD',
      time: '10:00AM Prompt',
      venue: 'AXARI HOTELS AND SUITES, HIGHWAY, CALABAR',
      rsvp: '#events',
      image: 'https://picsum.photos/seed/bezimeni-event/480/320',
    },
    // multi-event array (used by IndustryEvents)
    items: [
      {
        title: 'Bezimeni Industry Connect: Graduate Networking',
        date: 'TBD',
        time: '10:00AM Prompt',
        venue: 'AXARI HOTELS AND SUITES, HIGHWAY, CALABAR',
        rsvp: '#events',
      },
      {
        title: 'Technical Skills Workshop: Process Safety Basics',
        date: 'TBD',
        time: '9:00AM Prompt',
        venue: 'AXARI HOTELS AND SUITES, HIGHWAY, CALABAR',
        rsvp: '#events',
      },
    ],
  },
  newsletter: {
    badge: 'No Noise, Just Valuable Content',
    text: 'Receive practical insights, learning opportunities, technical resources, and updates from Bezimeni directly in your inbox.',
    placeholder: 'Email Address',
    cta: 'Subscribe',
  },
}

// ── Article detail pages ────────────────────────────────────────
export const ARTICLES = {
  'valuable-engineer': {
    type: 'Article',
    date: 'August 10, 2026',
    slug: 'valuable-engineer',
    title: 'What Makes an Engineer Valuable Beyond Technical Knowledge',
    intro:
      'Technical knowledge is important, but it is only one part of becoming a valuable engineer. In real industrial environments, engineers are expected to communicate clearly, solve problems, work with others, make sound decisions, and understand how their work affects the wider operation. Developing these qualities early can make the transition from graduate to professional much easier.',
    share: { linkedin: '#linkedin', x: '#x' },
    author: 'Bezimeni Resources',
    pullQuote: {
      text: '”A valuable engineer is not simply someone who knows the answer, but someone who can understand the problem, communicate the solution, and help others move forward.”',
      attribution: '— Adeniran Babalola, Operations Supervisor',
    },
    introSection: {
      heading: 'Introduction',
      paragraphs: [
        'An engineering degree gives you the technical foundation to enter the profession, but industry demands more than knowing equations, processes, and design principles.',
        'Engineers work with people, equipment, procedures, deadlines, and business objectives. The ability to apply technical knowledge effectively and communicate that knowledge to others is what often separates a technically competent engineer from a valuable one.',
        'The most effective engineers continue learning while developing the professional habits that allow them to contribute meaningfully to their teams.',
      ],
    },
    numberedSections: [
      {
        num: 1,
        heading: 'Communicate Clearly',
        body: [
          'Engineering solutions are rarely developed in isolation. You may need to explain a technical issue to an operator, present findings to management, or collaborate with another engineering discipline.',
          'Clear communication ensures that good technical work can actually be understood and acted upon.',
        ],
      },
      {
        num: 2,
        heading: 'Think Beyond Your Discipline',
        body: [
          'Understanding how your work affects the wider system is critical.',
          'A process change may affect equipment reliability. A design decision may affect maintenance. A production target may have implications for safety. Valuable engineers learn to consider these connections rather than focusing only on their immediate task.',
        ],
      },
      {
        num: 3,
        heading: 'Take Ownership',
        body: [
          'Industry values engineers who can be trusted with responsibility.',
          'Taking ownership means following through on assigned work, asking questions when necessary, documenting your findings, and communicating issues before they become bigger problems.',
        ],
      },
      {
        num: 4,
        heading: 'Keep Learning',
        body: [
          'Engineering does not stop at graduation.',
          'Standards evolve, technologies change, and every facility has its own processes and operating philosophy. Engineers who remain curious and actively seek new knowledge become increasingly valuable over time.',
        ],
      },
    ],
    conclusion: {
      heading: 'Conclusion',
      body: [
        'Technical competence gets you into engineering, but professional competence helps you grow.',
        'The engineers who create the greatest value combine technical knowledge with communication, ownership, curiosity, teamwork, and an understanding of the bigger picture. These are the qualities that turn engineering knowledge into meaningful impact.',
      ],
    },
    related: [
      { id: 'rel-1', type: 'Publication', variant: 'dark', slug: 'prepare-first-engineering-role', date: 'January 27, 2026', title: 'How to Prepare for Your First Engineering Role' },
      { id: 'rel-2', type: 'Publication', variant: 'light', slug: 'developing-confidence-in-technical-environments', date: 'August 13, 2026', title: 'Developing Confidence in Technical Environments' },
    ],
  },

  'developing-confidence-in-technical-environments': {
    type: 'Article',
    date: 'August 13, 2026',
    slug: 'developing-confidence-in-technical-environments',
    title: 'Developing Confidence in Technical Environments',
    intro:
      'Entering an unfamiliar technical environment can be intimidating. New equipment, unfamiliar terminology, experienced colleagues, and high expectations can make even capable engineers question themselves. Confidence, however, is not about knowing everything. It comes from preparation, curiosity, and gradually learning how to contribute.',
    share: { linkedin: '#linkedin', x: '#x' },
    author: 'Bezimeni Resources',
    pullQuote: {
      text: '”Confidence in engineering does not come from knowing everything. It comes from knowing how to learn, when to ask, and how to act.”',
      attribution: '— Adeniran Babalola, Operations Supervisor',
    },
    introSection: {
      heading: 'Introduction',
      paragraphs: [
        'The first few weeks in an industrial environment can feel very different from university.',
        'You may find yourself standing beside equipment you have only seen in textbooks, listening to conversations filled with unfamiliar terminology, or being asked questions you cannot immediately answer.',
        'This is normal. Confidence is developed through exposure and experience, not assumed from the beginning.',
        'The goal is not to appear knowledgeable at all times. It is to become comfortable learning, asking questions, and taking responsibility for your work.',
      ],
    },
    numberedSections: [
      {
        num: 1,
        heading: 'Prepare Before You Arrive',
        body: [
          'Preparation gives you a stronger starting point.',
          'Research the company, understand its operations, review relevant engineering concepts, and familiarise yourself with common equipment, terminology, and safety practices.',
          'The more familiar the environment feels, the easier it becomes to focus on learning.',
        ],
      },
      {
        num: 2,
        heading: 'Ask Better Questions',
        body: [
          'Asking questions is not a weakness. It is an important engineering skill.',
          'Instead of simply asking for an answer, try to understand the reasoning behind a decision. Ask why a particular procedure is followed, what could cause a failure, or how a system responds to changing conditions.',
          'Good questions accelerate learning.',
        ],
      },
      {
        num: 3,
        heading: 'Learn From the People Around You',
        body: [
          'Technical environments contain knowledge that may not appear in textbooks.',
          'Operators understand how equipment behaves in practice. Technicians know how systems fail. Experienced engineers understand why certain decisions were made.',
          'Listen carefully, observe how people work, and learn from their experience.',
        ],
      },
      {
        num: 4,
        heading: 'Build Confidence Through Action',
        body: [
          'Confidence grows when knowledge is applied repeatedly.',
          'Start with small responsibilities. Document your observations. Participate in discussions. Volunteer for tasks within your competence and learn from feedback.',
          'Every successful experience becomes evidence that you are capable of handling the next challenge.',
        ],
      },
    ],
    conclusion: {
      heading: 'Conclusion',
      body: [
        'You do not need to walk into your first technical environment knowing everything.',
        'You need the willingness to learn, the discipline to prepare, and the courage to ask questions. With consistent exposure and deliberate practice, unfamiliar systems become familiar, technical conversations become easier, and confidence naturally follows.',
        'The objective is not to eliminate uncertainty, it is to become capable of navigating it.',
      ],
    },
    related: [
      { id: 'rel-1', type: 'Publication', variant: 'green', slug: 'valuable-engineer', date: 'August 10, 2026', title: 'What Makes an Engineer Valuable Beyond Technical Knowledge' },
      { id: 'rel-2', type: 'Publication', variant: 'dark', slug: 'prepare-first-engineering-role', date: 'January 27, 2026', title: 'How to Prepare for Your First Engineering Role' },
    ],
  },

  'prepare-first-engineering-role': {
    type: 'Publication',
    date: 'January 27, 2026',
    slug: 'prepare-first-engineering-role',
    title: 'How to Prepare for Your First Engineering Role',
    intro:
      'Starting your first engineering role can feel exciting and overwhelming at the same time. While technical knowledge remains important, success in industry often depends on your ability to learn quickly, communicate clearly, and apply theory to real operational environments. Preparing intentionally before your first day can make the transition smoother and help you build confidence early.',
    share: { linkedin: '#linkedin', x: '#x' },
    author: 'Bezimeni Resources',
    pullQuote: {
      text: '”Industry does not expect graduates to know everything, it expects them to be curious, teachable, and capable of turning knowledge into action.”',
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
      { id: 'rel-1', type: 'Publication', variant: 'green', slug: 'valuable-engineer', date: 'August 10, 2026', title: 'What Makes an Engineer Valuable Beyond Technical Knowledge' },
      { id: 'rel-2', type: 'Publication', variant: 'light', slug: 'developing-confidence-in-technical-environments', date: 'August 13, 2026', title: 'Developing Confidence in Technical Environments' },
    ],
  },
}

// Backward-compat alias
export const ARTICLE_PAGE = ARTICLES['prepare-first-engineering-role']

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
          { id: 'v3', variant: 'gray', title: 'Growth Mindset', description: 'Progress happens through continuous improvement.' },
        ],
      },
    },
  },
  team: {
    badge: 'Team',
    heading: { prefix: 'Built by ', accent: 'Professionals', suffix: ' Who\nUnderstand the Industry' },
    members: [
      {
        id: 't1',
        name: 'Engr. Valentine Martins Agba',
        fullName: 'Engr. Valentine Martins Agba, MNSE, MNIMechE, COREN',
        title: 'Managing Director/Chief Executive Officer',
        image: 'https://picsum.photos/seed/bezimeni-ceo1/360/360',
        href: '#',
        bio: [
          'Engr. Valentine Martins Agba is the Founder and Managing Director of BEZIMENI RESOURCES LIMITED and the visionary behind BEZIMENI Engineering Academy.',
          'He is a Mechanical Engineer with a Bachelor of Engineering (Second Class Honours, Upper Division) in Mechanical Engineering from the Cross River University of Technology, Calabar. He also holds a Postgraduate Diploma in Petroleum Engineering from the University of Uyo and is currently pursuing a Master of Engineering (M.Eng.) degree in Mechanical Engineering at the University of Cross River State.',
          'He is a registered engineer with the Council for the Regulation of Engineering in Nigeria (COREN), a Corporate Member of the Nigerian Society of Engineers (NSE), and a member of the Nigerian Institution of Mechanical Engineers (NIMechE).',
          'Throughout his professional career, Engr. Agba has acquired extensive experience across natural gas production and processing, hydrocarbon dew point control, crude oil stabilisation, gas conditioning, production operations, pipeline systems, process monitoring, plant surveillance, equipment isolation, operational troubleshooting, facility commissioning, turnaround maintenance, and production optimisation.',
          'His experience extends beyond process operations into mechanical systems, industrial electrical systems, instrumentation, process automation, programmable logic controllers (PLC), Human Machine Interface (HMI), Supervisory Control and Data Acquisition (SCADA), and first-line troubleshooting of mechanical, electrical, and instrumentation systems.',
          'Prior to establishing BEZIMENI RESOURCES LIMITED, he gained valuable industrial experience supporting power generation systems, rotating equipment, compressors, pumps, valves, engine monitoring systems, and maintenance operations, strengthening his multidisciplinary understanding of industrial engineering practice.',
          'Throughout his career, safety, operational reliability, and continuous improvement have remained central to his professional philosophy. He has actively contributed to emergency response planning, operational risk reduction, maintenance improvement initiatives, process optimisation, operational procedure development, and engineering best practices.',
          'His vision for BEZIMENI Engineering Academy is to establish a nationally recognised institution that bridges the gap between engineering education and industrial practice by producing engineers who possess technical competence, practical experience, ethical leadership, and professional confidence.',
        ],
      },
      {
        id: 't2',
        name: 'Mrs. Josephine Belenye Abbey',
        fullName: 'Mrs. Josephine Belenye Abbey',
        title: 'Head of Administration & Accounts',
        image: 'https://picsum.photos/seed/bezimeni-ceo2/360/360',
        href: '#',
        bio: [
          'Josephine Abbey serves as the Head of Administration & Accounts, bringing a wealth of experience in administrative leadership, financial management, and operational coordination. She is responsible for overseeing the organisation\'s administrative and financial functions, ensuring that internal operations remain efficient, transparent, and aligned with the Company\'s strategic objectives.',
          'With extensive experience in administration, financial management, and business operations, Josephine specialises in financial reporting, bookkeeping, procurement coordination, and operational administration. She is committed to strengthening organisational efficiency, ensuring financial integrity, and implementing effective administrative systems that support sustainable growth and operational excellence.',
          'Known for her attention to detail, professionalism, and strong organisational skills, Josephine plays a key role in maintaining operational excellence while fostering a culture of accountability and continuous improvement. She works closely with management, clients, vendors, and technical teams to ensure seamless coordination and the successful delivery of organisational objectives.',
          'She is proficient in Microsoft Office Suite, Google Workspace, financial reporting, data management, and modern administrative systems, leveraging technology to streamline processes and improve decision-making.',
          'As Head of Administration & Accounts, Josephine is committed to building efficient administrative structures, promoting sound financial practices, and providing the operational support necessary for the organization to deliver high-quality training, consulting, and workforce development services. Her dedication to excellence and continuous professional development contributes significantly to the organisation\'s mission of developing competent professionals and supporting industry growth.',
        ],
      },
      {
        id: 't3',
        name: 'Dr. Samuel Oliver Effiom',
        fullName: 'Dr. Samuel Oliver Effiom',
        title: 'Head of Faculty',
        image: 'https://picsum.photos/seed/bezimeni-ceo3/360/360',
        href: '#',
        bio: [
          'Dr. Samuel Oliver Effiom is a distinguished Engineering Consultant with extensive experience in developing sustainable energy and gas-to-power projects across sub-Saharan Africa. Combining academic and industry expertise, he excels in:',
          '• Engineering education, research, & academic administration\n• Sustainable energy technologies and applications\n• Power plant project development, execution, & solutions\n• OEM Gas turbine packages & Application engineering\n• Turnkey EPC requirements & business development\n• Reliability engineering and condition monitoring\n• Rotating equipment troubleshooting and maintenance\n• Data analytics and visualisation',
          'He is currently the Deputy Dean, Faculty of Engineering, Cross River State University, Nigeria.',
        ],
      },
      {
        id: 't4',
        name: 'Engr. Victor Samuel Solomon',
        fullName: 'Engr. Victor Samuel Solomon',
        title: 'Programmes Coordinator',
        image: 'https://picsum.photos/seed/bezimeni-ceo3/360/360',
        href: '#',
        bio: [
          'Engr. Victor Samuel Solomon coordinates the planning, implementation, monitoring, and continuous improvement of the Academy\'s training programmes.',
          'Working closely with faculty members, industry partners, and management, he ensures that academic programmes remain aligned with current engineering practices, emerging technologies, industry expectations, and quality assurance standards.',
          'His responsibilities include curriculum coordination, instructor scheduling, programme evaluation, learner engagement, and collaboration with external stakeholders to strengthen the Academy\'s educational offerings.',
        ],
      },
      {
        id: 't5',
        name: 'Mr. Joseph Abia',
        fullName: 'Mr. Joseph Abia',
        title: 'Digital Content Lead',
        image: 'https://picsum.photos/seed/bezimeni-ceo3/360/360',
        href: '#',
        bio: [
          'Joseph Abia leads digital content and communications at Bezimeni Resources, combining his background in Chemical Engineering, product design, and digital technology to communicate complex engineering concepts in clear, engaging, and accessible ways.',
          'Working closely with the Academy, instructors, and management, he develops content that strengthens Bezimeni\'s digital presence, showcases its training programmes, and connects emerging professionals with relevant industry knowledge.',
          'His responsibilities include content strategy, website and editorial content, digital communications, and the development of educational and industry-focused resources that support Bezimeni\'s mission of developing industry-ready professionals.',
        ],
      },
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
      id: 'p1', variant: 'dark', slug: 'mechanical-asset-integrity',
      title: 'School of Mechanical & Asset Integrity Engineering',
      description: 'Build practical expertise in equipment reliability, maintenance, and asset integrity',
      price: '₦1,5000,000',
      duration: '12 Months', type: 'In-Person/Virtual', outcome: 'training, cv REVAMP and employment positioning',
    },
    {
      id: 'p2', variant: 'light', slug: 'electrical-power-industrial-systems',
      title: 'School of Electrical Power & Industrial Systems Engineering',
      description: 'Develop practical skills in industrial power systems, controls, and electrical maintenance',
      price: '₦1,5000,000',
      duration: '12 Months', type: 'In-Person/Virtual', outcome: 'training, cv REVAMP and employment positioning',
    },
    {
      id: 'p3', variant: 'white', slug: 'civil-infrastructure-engineering',
      title: 'School of Civil & Infrastructure Engineering',
      description: 'Develop practical expertise in infrastructure design, construction, inspection, and maintenance',
      price: '₦1,5000,000',
      duration: '12 Months', type: 'In-Person/Virtual', outcome: 'training, cv REVAMP and employment positioning',
    },
    {
      id: 'p4', variant: 'green', slug: 'renewable-energy-systems',
      title: 'School of Renewable Energy Systems',
      description: 'Build practical skills for modern renewable energy and sustainable power systems',
      price: '₦1,5000,000',
      duration: '12 Months', type: 'In-Person/Virtual', outcome: 'training, cv REVAMP and employment positioning',
    },
    {
      id: 'p5', variant: 'dark', slug: 'process-automation-instrumentation',
      title: 'School of Process Automation & Instrumentation Engineering',
      description: 'Develop practical expertise in industrial instrumentation, automation, and process control',
      price: '₦1,5000,000',
      duration: '12 Months', type: 'In-Person/Virtual', outcome: 'training, cv REVAMP and employment positioning',
    },
    {
      id: 'p6', variant: 'light', slug: 'oil-gas-production-operations',
      title: 'School of Oil & Gas Production Operations',
      description: 'Build practical expertise in oil and gas operations, production, and process systems',
      price: '₦1,5000,000',
      duration: '12 Months', type: 'In-Person/Virtual', outcome: 'training, cv REVAMP and employment positioning',
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
    { id: 'f1', q: 'Who can benefit from BEZIMENI\'s training programmes?', a: 'Our programmes are designed for engineering students, graduates, technicians, operators, interns, young professionals, and experienced industry personnel seeking practical technical knowledge.' },
    { id: 'f2', q: 'Are your courses theoretical or practical?', a: 'Our approach combines technical theory with practical, industry-oriented application through case studies, process scenarios, equipment familiarization, troubleshooting exercises, simulations, demonstrations, and practical examples.' },
    { id: 'f3', q: 'Who delivers BEZIMENI\'s training?', a: 'Our programmes are delivered by qualified instructors and subject-matter professionals with relevant academic, technical, engineering, and industry experience.' },
    { id: 'f4', q: 'Are there prerequisites for your courses?', a: 'Some programmes may have educational, professional, or experience requirements. Any applicable prerequisites will be stated in the information provided for each course.' },
    { id: 'f5', q: 'How do I know which course is right for me?', a: 'You can contact our team with details about your educational background, current role, experience, and career objectives, and we can help identify programmes that align with your goals.' },
    { id: 'f6', q: 'Do you offer online training?', a: 'Yes. Selected programmes can be delivered through online learning platforms, depending on the course structure and requirements.' },
    {id:'7', q:'Will I receive a certificate after completing a course?', a:'Participants who satisfy the applicable course completion requirements may receive a certificate of completion or participation, depending on the programme.'},
    {id:'8', q:'Will BEZIMENI\'s training help me get a job?', a:'Our training can strengthen your technical knowledge, practical understanding, and professional profile. However, completing a course does not guarantee employment.'}
  ],
}

// ── Training detail pages (keyed by slug) ────────────────────────

// Shared data — identical across all 6 programmes
const _TRAINING_SIDEBAR = {
  duration: '12 Months',
  format: 'Virtual / Hybrid',
  level: 'Beginner-Intermediate',
  certificate: 'Included',
  enrollHref: '/contact',
}

const _WHO_FOR = {
  heading: 'Who is this Programme for?',
  intro: 'This course is designed for learners at different stages of their journey. Ideal Participants are:',
  items: [
    'Engineering Students',
    'Recent Graduates',
    'Early-Career Engineers',
    'Technical Professionals Transitioning Industries',
    'Young Professionals Seeking Industry Exposure',
  ],
}

const _HOW_YOU_LEARN = {
  heading: 'Learning Delivery Model',
  intro: 'The Academy delivers training through an integrated learning approach designed to maximise technical understanding and practical competence. Instruction is delivered using:',
  items: [
    'Live instructor-led lectures',
    'Interactive virtual classrooms',
    'Engineering case studies',
    'Practical demonstrations',
    'Industrial simulations',
    'Technical workshops',
    'Equipment familiarisation',
    'Guided assignments',
    'Group projects',
    'Engineering seminars',
    'Continuous assessments',
    'Industrial field exposure',
  ],
  outro: 'This blended methodology ensures that learning extends beyond theoretical concepts into practical engineering application.',
}

const _CTA_BOX = {
  heading: 'Take the Next Step Toward Industry Readiness',
  body: 'Build practical understanding, strengthen your technical confidence, and learn through industry-focused experiences.',
  note: 'LIMITED SPACES AVAILABLE PER COHORT',
}

export const TRAINING_DETAIL = {
  'mechanical-asset-integrity': {
    slug: 'mechanical-asset-integrity',
    badge: 'Training Programme',
    title: 'School of Mechanical & Asset Integrity Engineering',
    intro: [
      'The School of Mechanical & Asset Integrity Engineering prepares engineers for careers involving the design, operation, maintenance, inspection, reliability, and integrity management of mechanical systems across the oil and gas, manufacturing, power, marine, mining, and process industries.',
      'Participants develop competencies in rotating equipment, pressure systems, piping systems, static equipment, maintenance engineering, reliability engineering, inspection methodologies, corrosion management, condition monitoring, and engineering standards.',
      'Graduates are equipped to support the safe and reliable operation of industrial facilities while contributing to equipment performance, operational efficiency, and asset life extension.',
    ],
    sidebar: _TRAINING_SIDEBAR,
    whoFor: _WHO_FOR,
    howYouLearn: _HOW_YOU_LEARN,
    ctaBox: _CTA_BOX,
  },

  'electrical-power-industrial-systems': {
    slug: 'electrical-power-industrial-systems',
    badge: 'Training Programme',
    title: 'School of Electrical Power & Industrial Systems Engineering',
    intro: [
      'This School develops engineers with the practical knowledge required for industrial electrical systems, power generation, power distribution, motor control, protection systems, electrical maintenance, and energy management.',
      'Training emphasises electrical safety, industrial installations, power system operation, motor control centres, transformers, switchgear, generators, electrical troubleshooting, and preventive maintenance.',
      'The programme prepares participants for engineering roles within manufacturing facilities, utilities, power plants, industrial complexes, and energy infrastructure projects.',
    ],
    sidebar: _TRAINING_SIDEBAR,
    whoFor: _WHO_FOR,
    howYouLearn: _HOW_YOU_LEARN,
    ctaBox: _CTA_BOX,
  },

  'civil-infrastructure-engineering': {
    slug: 'civil-infrastructure-engineering',
    badge: 'Training Programme',
    title: 'School of Civil & Infrastructure Engineering',
    intro: [
      'The School of Civil & Infrastructure Engineering provides specialised training in the planning, construction, inspection, maintenance, and management of civil engineering assets.',
      'Participants gain practical understanding of structural systems, highways, foundations, construction materials, project execution, quality assurance, infrastructure inspection, and engineering standards applicable to modern construction projects.',
      'The School prepares graduates for careers in construction, transportation, infrastructure development, consulting engineering, and public works.',
    ],
    sidebar: _TRAINING_SIDEBAR,
    whoFor: _WHO_FOR,
    howYouLearn: _HOW_YOU_LEARN,
    ctaBox: _CTA_BOX,
  },

  'renewable-energy-systems': {
    slug: 'renewable-energy-systems',
    badge: 'Training Programme',
    title: 'School of Renewable Energy Systems',
    intro: [
      'The transition towards sustainable energy presents significant opportunities for engineering professionals. The School of Renewable Energy Systems equips participants with practical knowledge of solar photovoltaic systems, wind energy technologies, battery storage, hybrid energy systems, energy efficiency, and sustainable power solutions.',
      'The School will be supported by qualified renewable energy instructors and industry mentors with practical experience in Solar PV systems, energy storage, hybrid systems, commissioning, troubleshooting, and sustainable power solutions.',
      'The curriculum combines engineering fundamentals with hands-on applications, enabling graduates to participate in the rapidly expanding renewable energy sector and contribute to Nigeria\'s energy transition objectives.',
    ],
    sidebar: _TRAINING_SIDEBAR,
    whoFor: _WHO_FOR,
    howYouLearn: _HOW_YOU_LEARN,
    ctaBox: _CTA_BOX,
  },

  'process-automation-instrumentation': {
    slug: 'process-automation-instrumentation',
    badge: 'Training Programme',
    title: 'School of Process Automation & Instrumentation Engineering',
    intro: [
      'Modern industrial facilities depend heavily on automation, instrumentation, and digital process control.',
      'This School prepares participants to understand, operate, maintain, and troubleshoot process instrumentation and automation systems used across the energy, manufacturing, utilities, and chemical industries.',
      'Training includes process measurement, transmitters, control valves, instrumentation loops, programmable logic controllers (PLCs), human-machine interfaces (HMIs), supervisory control and data acquisition (SCADA), distributed control systems (DCS), industrial communication networks, and process optimisation principles.',
      'Graduates develop competencies that support reliable plant operations, process efficiency, and industrial automation initiatives.',
    ],
    sidebar: _TRAINING_SIDEBAR,
    whoFor: _WHO_FOR,
    howYouLearn: _HOW_YOU_LEARN,
    ctaBox: _CTA_BOX,
  },

  'oil-gas-production-operations': {
    slug: 'oil-gas-production-operations',
    badge: 'Training Programme',
    title: 'School of Oil & Gas Production Operations',
    intro: [
      'Nigeria\'s oil and gas industry continues to require technically competent professionals capable of operating complex production facilities safely and efficiently.',
      'This School provides industry-focused training covering upstream production operations, natural gas processing, crude oil stabilisation, hydrocarbon dew point control, process separation, gas compression, utility systems, pipeline operations, plant surveillance, production optimisation, process troubleshooting, emergency response, and operational safety.',
      'Drawing upon current industry practices, the programme provides participants with practical insight into field operations, production facilities, process equipment, and operational decision-making within modern oil and gas installations.',
    ],
    sidebar: _TRAINING_SIDEBAR,
    whoFor: _WHO_FOR,
    howYouLearn: _HOW_YOU_LEARN,
    ctaBox: _CTA_BOX,
  },

  // Backward-compat alias for any old links
  'oil-gas-fundamentals': {
    slug: 'oil-gas-fundamentals',
    badge: 'Training Programme',
    title: 'School of Oil & Gas Production Operations',
    intro: [
      'Nigeria\'s oil and gas industry continues to require technically competent professionals capable of operating complex production facilities safely and efficiently.',
      'This School provides industry-focused training covering upstream production operations, natural gas processing, crude oil stabilisation, hydrocarbon dew point control, process separation, gas compression, utility systems, pipeline operations, plant surveillance, production optimisation, process troubleshooting, emergency response, and operational safety.',
      'Drawing upon current industry practices, the programme provides participants with practical insight into field operations, production facilities, process equipment, and operational decision-making within modern oil and gas installations.',
    ],
    sidebar: _TRAINING_SIDEBAR,
    whoFor: _WHO_FOR,
    howYouLearn: _HOW_YOU_LEARN,
    ctaBox: _CTA_BOX,
  },
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
      { id: 'a1', variant: 'green', icon: 'develop', title: 'Develop People', description: 'Equip individuals with practical knowledge, technical confidence, and industry-ready skills.' },
      { id: 'a2', variant: 'dark', icon: 'buildCapacity', title: 'Build Capability', description: 'Strengthen the systems, processes, and expertise needed to support future growth and performance.' },
      { id: 'a3', variant: 'gray', icon: 'deliver', title: 'Deliver Value', description: 'Translate capability into meaningful outcomes for clients, partners, and the industries we serve.' },
    ],
  },
  solutionAreas: {
    badge: 'Solution Areas',
    heading: { prefix: 'Areas We Are ', accent: 'Building', suffix: ' Toward' },
    description: 'As Bezimeni grows, these focus areas represent the capabilities we are intentionally developing to support clients and industry partners.',
    areas: [
      { id: 's1', variant: 'dark', icon: 'programmeIcon', title: 'Technical Training & Workforce Development', description: 'Industry-focused learning experiences that build technical capability for practical environments.' },
      { id: 's2', variant: 'gray', icon: 'engrSupport', title: 'Engineering Support Services', description: 'Technical assistance and engineering support intended to improve operational understanding and project readiness.' },
      { id: 's3', variant: 'gray', icon: 'programmeIcon', title: 'Research and Development', description: 'Advancing ideas, testing concepts, and developing innovative solutions that support future growth.' },
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
    { id: 'cf1', q: 'What services does BEZIMENI Resources offer?', a: 'We provide technical training, workforce development, engineering support, technical consultancy, competency development, and other services within our professional capabilities.' },
    { id: 'cf2', q: 'Can training be customized for my organization?', a: "Yes. Corporate training can be customized according to your organization's technical requirements, workforce competency gaps, operating environment, and desired learning outcomes." },
    { id: 'cf3', q: 'Can you organize training at our company\'s facility?', a: 'Yes. We can develop and deliver customized in-house training programmes based on your personnel, equipment, processes, operational requirements, and competency objectives.' },
    { id: 'cf4', q: "Can you assess employees' competency gaps?", a: 'Yes. Where included within the agreed scope, we can support organizations in identifying training needs and developing competency-focused programmes.' },
    { id: 'cf5', q: 'Can BEZIMENI support industrial projects?', a: 'Yes. Depending on the project scope and required competencies, BEZIMENI Resources can provide engineering, technical, training, and professional support services.' },
    { id: 'cf6', q: 'Can I request a customized quotation?', a: 'Yes. Contact us with your requirements, number of participants, preferred delivery method, location, and desired training scope, and our team can prepare an appropriate quotation.' },
    { id: 'cf7', q: 'How can I become a partner or collaborate with BEZIMENI?', a: 'Organizations, professionals, instructors, consultants, educational institutions, and industry partners interested in collaboration can contact us with details of the proposed partnership.' },
    { id: 'cf8', q: 'How can I contact BEZIMENI Resources?', a: 'You can reach us through the contact details provided on our website. Our team can assist with course enquiries, corporate training, engineering services, quotations, partnerships, and general enquiries.' },
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