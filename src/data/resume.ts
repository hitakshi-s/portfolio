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
  link?: string
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
  taglines: ['Team Leader', 'Brand Manager', 'Organic Social Media Strategist'] as string[],
  summary:
    'D2C Growth Specialist | Digital Marketing | Brand Management | Social Media Strategy | Full-Stack Organic | 300% Organic Growth | Consumer Behavior | Product Launch Strategy',

  about: {
    pullQuote: 'I don’t just manage brands, I build them.',
    paragraphs: [
      'D2C marketing professional with 6+ years of experience in brand management, organic marketing, social media strategy, content marketing, influencer collaborations, and marketplace management. Passionate about building brands through strategic storytelling, community-first content, and scalable organic growth. Successfully achieved over 300% organic growth for a D2C brand by developing data-driven social media strategies, high-impact campaigns, and audience engagement initiatives.',
      'Proficient in leveraging AI-powered tools such as ChatGPT, Claude, Gemini, Perplexity, Figma AI, Canva AI, Meta AI, InVideo, VEED, Pictory AI, Lovable, ManyChat, and other automation platforms to streamline content creation, campaign planning, research, workflow automation, and marketing operations.',
      'Experienced in managing brands across Shopify, Amazon, Flipkart, and multiple social media platforms while aligning marketing initiatives with business objectives.',
    ],
    stats: [
      { value: '6+', label: 'Years Experience' },
      { value: '5', label: 'Platforms Mastered' },
      { value: '3', label: 'D2C Brands Built' },
      { value: '1', label: 'IIM Certification' },
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
      role: 'Sales Associate',
      company: 'Heet Healthcare',
      companyUrl: 'https://www.heethealthcare.com/',
      location: 'Ahmedabad, Gujarat',
      period: 'Jan 2019 — Apr 2019',
      narrative:
        'Managed documentation for online healthcare software, handled billing and Excel-based record keeping, and submitted daily sales reports verified by management.',
      tags: ['Healthcare', 'Documentation', 'Sales Reporting'],
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
      skills: ['Canva', 'Figma', 'Manychat', 'Flipkart Seller', 'Amazon Seller', 'Razorpay', 'ShipRocket', 'AI Content Tools', 'WhatsApp Marketing'],
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
    {
      name: 'Leadership Skills',
      issuer: 'IIM Ahmedabad',
      featured: true,
      link: 'https://www.coursera.org/account/accomplishments/verify/CUGODDA6N5SW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    },
    { name: 'Business Communication, Interpersonal Skills & Time Management', issuer: 'Skillephant' },
    { name: 'Amazon Account Management Services', issuer: 'Amazon' },
    {
      name: 'Stock Market Introduction',
      issuer: 'LearnTube',
      link: 'https://learntube.ai/verify/certificate/b8d9de40-c56b-40b3-ab69-6ddc4e496124',
    },
    {
      name: 'Introduction To AI Social Media Mastery',
      issuer: 'LearnTube',
      link: 'https://learntube.ai/verify/certificate/a71e8a86-d164-4cb1-b510-43b38eb632d8',
    },
    {
      name: 'Techniques to Write Social Media Content Using ChatGPT',
      issuer: 'LearnTube',
      link: 'https://learntube.ai/verify/certificate/202cf386-0ee9-4935-97f9-ea4a4b4974eb',
    },
    {
      name: 'Simplifying Social Media Management with AI',
      issuer: 'LearnTube',
      link: 'https://learntube.ai/verify/certificate/769754cd-6220-4962-8de6-bdea6842246b',
    },
    {
      name: 'Creating Social Media Visuals with AI',
      issuer: 'LearnTube',
      link: 'https://learntube.ai/verify/certificate/3a63ba62-5394-404c-bf3a-00631c8dc93b',
    },
    {
      name: 'Strategically Build and Engage Your Network on LinkedIn',
      issuer: 'Coursera',
      link: 'https://www.coursera.org/account/accomplishments/verify/HXS7IQAB4IJV',
    },
    {
      name: 'Introduction to Project Management with ClickUp',
      issuer: 'ClickUp',
      link: 'https://www.coursera.org/account/accomplishments/verify/TUU3PDQ6560M',
    },
    {
      name: 'Instagram Planning: Manage Content Like a Pro',
      issuer: 'Coursera',
      link: 'https://www.coursera.org/account/accomplishments/verify/QA6SWSZ10L5J',
    },
    {
      name: 'Build Your Business Brand Using Canva',
      issuer: 'Coursera',
      link: 'https://www.coursera.org/account/accomplishments/verify/B1AGZOJLLPQO',
    },
    { name: 'Brand Analysis and Process Management', issuer: 'Coursera' },
    {
      name: '5 Ways to Build a Better LinkedIn Profile',
      issuer: 'Coursera',
      link: 'https://www.coursera.org/account/accomplishments/verify/ZN069RE6E7NW',
    },
  ] as Certification[],

  education: [
    { degree: 'Bachelors in Commerce', institution: 'New LJ Comm. College', location: 'Ahmedabad, Gujarat', year: '2019' },
    { degree: 'Masters in Commerce', institution: 'Neeldeep Comm. College', location: 'Ahmedabad, Gujarat', year: '2021' },
    { degree: 'Digital Marketing Certification', institution: 'Career Ninja, LearnTube', location: 'Online', year: '2021' },
  ] as Education[],
}
