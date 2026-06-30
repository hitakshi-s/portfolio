export interface Stat {
  value: string
  label: string
}

export interface Experience {
  role: string
  company: string
  companyUrl: string
  location: string
  period: string
  narrative: string
  tags: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Certification {
  name: string
  issuer: string
  featured?: boolean
}

export interface Education {
  degree: string
  institution: string
  location: string
  year: string
}

export const resume = {
  name: 'Hitakshi Sharma',
  phone: '+91-7490945841',
  email: 'hitakshisharma.business@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hitakshisharma',
  headline: 'D2C Brand Strategist · 6+ Years',
  taglines: ['Brand Builder', 'Campaign Architect', 'Team Leader', 'D2C Strategist'] as string[],
  summary:
    'D2C professional with 6+ years of experience leading digital growth across social media and content. Skilled in building strong organic brand presence through high-impact campaigns, audience engagement, and scalable strategies aligned with core business goals.',

  about: {
    pullQuote: "I don't just manage social media — I build the brand behind it.",
    paragraphs: [
      "My journey in brand building started on the shop floor — as a Customer Sales Executive, I discovered that great sales isn't about pushing products, it's about telling the right story to the right person. That insight has guided every role since.",
      'At Spectalook, I took that belief to its natural limit: co-developing a D2C brand from the ground up alongside the Co-founder. Four years of end-to-end ownership — from social strategy and Shopify operations to marketplace management on Amazon and Flipkart — taught me that a great brand is a living system, not a campaign.',
      'Today, as a Brand Manager and Social Media Strategist, I partner with D2C and FMCG brands to build that same living presence: organic strategies that scale, influencer programs that convert, and teams that execute with purpose.',
    ],
    stats: [
      { value: '6+', label: 'Years Experience' },
      { value: '5', label: 'Platforms Mastered' },
      { value: '3', label: 'D2C Brands Built' },
      { value: '2', label: 'IIM Certifications' },
    ] as Stat[],
  },

  experience: [
    {
      role: 'Brand Manager & Social Media Strategist',
      company: 'Biodale',
      companyUrl: 'https://biodale.com/',
      location: 'Ahmedabad, Gujarat',
      period: 'Dec 2025 — Jul 2026',
      narrative:
        'Owned end-to-end social media strategy, execution, and performance tracking across all brand touchpoints. Led influencer campaigns from onboarding and barter negotiation to scripting and execution. Oversaw Shopify website operations and managed marketplace listings on Amazon and Flipkart. Partnered with 2 FMCG client brands to drive growth through integrated digital and on-store strategies.',
      tags: ['Instagram', 'Shopify', 'Amazon', 'Flipkart', 'Influencer Marketing', 'FMCG'],
    },
    {
      role: 'Team Lead — Senior Social Media Executive',
      company: 'BabyOrgano',
      companyUrl: 'https://www.babyorgano.com/',
      location: 'Ahmedabad, Gujarat',
      period: 'Apr 2024 — Jul 2025',
      narrative:
        'Owned social media strategy across Instagram, LinkedIn, Twitter, Pinterest, and Telegram for a fast-growing D2C baby care brand. Created viral campaigns, podcast concepts, and content calendars while managing and training the full social media team. Scripted videos and visual storytelling content, coordinated outdoor shoots and CEO-led D2C panel discussions, and optimised content using AI tools, trend analysis, and user insights.',
      tags: ['Instagram', 'LinkedIn', 'Twitter', 'Pinterest', 'Podcast', 'AI Content', 'Team Lead'],
    },
    {
      role: 'D2C Brand Manager · Digital Marketing Manager',
      company: 'Spectalook',
      companyUrl: 'https://spectalook.com/',
      location: 'Ahmedabad, Gujarat',
      period: 'Mar 2020 — Apr 2024',
      narrative:
        'Co-developed the D2C eyewear brand Spectalook with the Co-founder — from zero. Led social media strategy, Shopify website management, and paid advertising on Google and Facebook. Managed three marketplace channels (Amazon, Flipkart, Meesho), handled WhatsApp marketing and lead generation, and oversaw payment and logistics integrations with Razorpay and ShipRocket. Represented the brand at expos and coordinated professional product shoots.',
      tags: ['Shopify', 'Google Ads', 'Facebook Ads', 'Amazon', 'Flipkart', 'Meesho', 'Razorpay', 'ShipRocket'],
    },
    {
      role: 'Customer Sales Executive',
      company: 'Vision Eye Plus',
      companyUrl: '#',
      location: 'Ahmedabad, Gujarat',
      period: 'Aug 2017 — Dec 2019',
      narrative:
        'Conducted front-end customer sales and built long-term client relationships through consistent follow-up and after-sales support. Delivered product knowledge training sessions and developed team capability through structured role plays.',
      tags: ['Sales', 'Customer Engagement', 'Training', 'Client Relations'],
    },
    {
      role: 'Sales Associate',
      company: 'Heet Healthcare',
      companyUrl: 'https://www.heethealthcare.com/',
      location: 'Ahmedabad, Gujarat',
      period: 'Jan 2019 — Apr 2019',
      narrative:
        'Managed documentation for online healthcare software, handled billing and Excel-based record keeping, and submitted daily sales reports verified by management.',
      tags: ['Healthcare', 'Documentation', 'Sales Reporting'],
    },
  ] as Experience[],

  skills: [
    {
      category: 'Strategy',
      skills: ['Social Media Strategy', 'Campaign Planning', 'Brand Positioning', 'KPI Management', 'Trend Analysis'],
    },
    {
      category: 'Execution',
      skills: ['Content Ideation', 'Influencer Marketing', 'Scripting', 'Event & Shoot Management', 'Community Management'],
    },
    {
      category: 'Platforms',
      skills: ['Instagram', 'LinkedIn', 'Twitter', 'Pinterest', 'Telegram', 'Shopify'],
    },
    {
      category: 'Tools & Tech',
      skills: ['Google Ads', 'Facebook Ads', 'Amazon Seller', 'Razorpay', 'ShipRocket', 'AI Content Tools', 'WhatsApp Marketing'],
    },
    {
      category: 'Leadership',
      skills: ['Team Training', 'Cross-functional Collaboration', 'Client Communication', 'Agency Coordination'],
    },
    {
      category: 'Analytics',
      skills: ['Performance Tracking', 'ROI Reporting', 'Competitor Analysis', 'User Insights'],
    },
  ] as SkillCategory[],

  certifications: [
    { name: 'Leadership Skills', issuer: 'IIM Ahmedabad', featured: true },
    { name: 'AI in Digital and Social Media Marketing', issuer: 'IIM Bangalore', featured: true },
    { name: 'Business Communication, Interpersonal Skills & Time Management', issuer: 'Skillephant' },
    { name: 'Amazon Account Management Services', issuer: 'Amazon' },
    { name: 'Stock Market Introduction', issuer: 'LearnTube' },
    { name: 'Introduction To AI Social Media Mastery', issuer: 'LearnTube' },
    { name: 'Techniques to Write Social Media Content Using ChatGPT', issuer: 'LearnTube' },
    { name: 'Simplifying Social Media Management with AI', issuer: 'LearnTube' },
    { name: 'Creating Social Media Visuals with AI', issuer: 'LearnTube' },
    { name: 'Strategically Build and Engage Your Network on LinkedIn', issuer: 'Coursera' },
  ] as Certification[],

  education: [
    { degree: 'Masters in Commerce', institution: 'Neeldeep Comm. College', location: 'Ahmedabad, Gujarat', year: '2021' },
    { degree: 'Digital Marketing Certification', institution: 'Career Ninja, LearnTube', location: 'Online', year: '2021' },
    { degree: 'Bachelors in Commerce', institution: 'New LJ Comm. College', location: 'Ahmedabad, Gujarat', year: '2019' },
  ] as Education[],
}
