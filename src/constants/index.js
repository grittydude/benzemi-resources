// All static content lives here.
// This keeps components clean and makes copy changes trivial.

export const NAV_LINKS = [
  { label: 'ABOUT US', href: '#about' },
  { label: 'TRAINING', href: '#training' },
  { label: 'INDUSTRY SOLUTIONS', href: '#solutions' },
  { label: 'RESOURCES', href: '#resources' },
  { label: 'CONTACT US', href: '#contact' },
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
        'Equip emerging professionals with foundational oil and gas knowledge and real-world operational awareness.',
    },
    {
      id: 'process-prod',
      variant: 'dark',
      icon: 'process-prod',
      title: 'Process & Production Operations',
      description:
        'Build practical capability in process operations, production systems, and field-ready engineering skills.',
    },
    {
      id: 'hse',
      variant: 'gray',
      icon: 'hse',
      title: 'HSE & Operational Excellence',
      description:
        'Develop a safety-first mindset and the operational discipline required to meet industry compliance standards.',
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