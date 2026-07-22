export type BlogBlock =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }

export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  date: string
  readTime: string
  excerpt: string
  coverImage: string
  body: BlogBlock[]
}

const BASE = import.meta.env.BASE_URL

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-d2c-brands-fail',
    title: 'Why 68%–80% of D2C Brands Fail (It Has Nothing to Do with Marketing)',
    subtitle: 'Lessons from 6+ years of building D2C brands from scratch.',
    date: '2026-07-22',
    readTime: '7 min read',
    excerpt:
      "Everyone talks about passion when it comes to building a business. But after 6+ years building D2C brands from scratch, I've learned the difference between the ones that survive and the ones that don't isn't passion — it's clarity.",
    coverImage: `${BASE}blog/why-d2c-brands-fail/cover.jpg`,
    body: [
      {
        type: 'paragraph',
        text: 'Everyone talks about passion when it comes to building a business. "Follow your passion." "Be obsessed with your idea." "Work day and night." I agree passion matters.',
      },
      {
        type: 'paragraph',
        text: "I've seen brands with incredible founders shut down within a couple of years. I've also seen brands with average products build loyal communities and profitable businesses.",
      },
      { type: 'paragraph', text: "The difference wasn't passion. It was clarity." },
      { type: 'heading', text: 'What do I mean by clarity?' },
      {
        type: 'paragraph',
        text: "Not just having a business idea. I'm talking about knowing exactly what you're building.",
      },
      { type: 'paragraph', text: 'Ask yourself:' },
      {
        type: 'list',
        items: [
          'What problem are we solving?',
          'Why does this brand deserve to exist?',
          'Who exactly is our customer?',
          'What makes us different?',
          'Who are our competitors?',
          'Where are we likely to fail?',
          'What kind of team do we need?',
          'What should each person be responsible for?',
          'How much money are we ready to burn before becoming profitable?',
          'What will success actually look like?',
        ],
      },
      {
        type: 'paragraph',
        text: "If you don't have answers to these questions, you're not building a brand. You're experimenting with hope.",
      },
      { type: 'heading', text: 'The biggest reason most D2C brands fail' },
      {
        type: 'paragraph',
        text: "People often assume brands fail because of poor marketing. Sometimes that's true. But in my experience, marketing doesn't fix a weak brand. It only exposes it.",
      },
      {
        type: 'paragraph',
        text: 'A weak product with a big marketing budget still fails. A confused brand with great ads still confuses customers. A founder without clarity keeps changing direction every month.',
      },
      {
        type: 'paragraph',
        text: "According to ET Retail, around 68%–80% of Indian D2C brands fail. Brands with a unique product, proprietary sourcing, or healthy margins have a much better survival rate. For the rest, the biggest reasons are usually poor customer retention and poor cash flow management.",
      },
      { type: 'paragraph', text: 'But before retention and cash flow become problems, confusion usually starts much earlier.' },
      { type: 'heading', text: 'Where founders usually go wrong' },
      {
        type: 'image',
        src: `${BASE}blog/why-d2c-brands-fail/where-founders-go-wrong.jpg`,
        alt: 'Five reasons founders usually go wrong: lack of clarity, lack of flexibility, fear of taking risks, overconfidence, unrealistic expectations',
        caption: 'Where founders usually go wrong',
      },
      { type: 'paragraph', text: "After working closely with founders, these are the patterns I've noticed." },
      { type: 'subheading', text: '1. Lack of clarity' },
      {
        type: 'list',
        items: [
          'The vision changes every few weeks.',
          'The target audience changes.',
          'The messaging changes.',
          'The priorities change.',
        ],
      },
      { type: 'subheading', text: '2. Lack of flexibility' },
      {
        type: 'list',
        items: [
          'The market changes.',
          'Customers change.',
          'Competitors evolve.',
          'Founders who refuse to adapt usually fall behind.',
        ],
      },
      { type: 'subheading', text: '3. Fear of taking calculated risks' },
      {
        type: 'list',
        items: [
          'Growth always requires risk.',
          'Launching a new category.',
          'Trying a different acquisition channel.',
          'Changing pricing.',
          'Improving packaging.',
        ],
      },
      { type: 'subheading', text: '4. Overconfidence' },
      {
        type: 'paragraph',
        text: 'Sometimes founders believe they already know what customers want. But customers decide that — not us. The market is always right.',
      },
      { type: 'subheading', text: '5. Unrealistic expectations' },
      {
        type: 'paragraph',
        text: "Many founders expect profitability in months. Or they expect one viral reel to transform the business. Building a brand isn't an overnight project. It's a long-term process.",
      },
      { type: 'heading', text: 'Where brands fail' },
      {
        type: 'paragraph',
        text: "A brand doesn't fail because of one mistake. It usually fails because of many small mistakes happening together.",
      },
      { type: 'paragraph', text: 'Some of the most common ones are:' },
      {
        type: 'image',
        src: `${BASE}blog/why-d2c-brands-fail/where-brands-fail.jpg`,
        alt: 'Common reasons brands fail: wrong pricing, unrealistic claims, weak positioning, generic marketing, poor product messaging, no funnel strategy',
        caption: 'Where brands fail',
      },
      {
        type: 'list',
        items: [
          'Wrong pricing strategy',
          'Unrealistic product claims',
          'Weak market positioning',
          'Poor product messaging',
          'No brand story',
          'Generic marketing',
          'No understanding of the customer journey or marketing funnel',
        ],
      },
      {
        type: 'paragraph',
        text: 'Every customer is at a different stage. Some people have never heard of your brand. Some are comparing alternatives. Some just need one final reason to trust you. Treating everyone the same is one of the biggest marketing mistakes I see.',
      },
      { type: 'heading', text: "Customers don't trust a new brand immediately" },
      {
        type: 'paragraph',
        text: 'Trust is never built overnight. Before making a purchase, customers want proof that your brand is reliable and delivers on its promises.',
      },
      {
        type: 'image',
        src: `${BASE}blog/why-d2c-brands-fail/customer-trust.jpg`,
        alt: 'The path customers take before they buy: observe, compare, read reviews, ask friends, buy',
        caption: 'Trust is earned through consistency — not campaigns, discounts, or influencers alone',
      },
      { type: 'subheading', text: 'They observe.' },
      {
        type: 'paragraph',
        text: 'People notice how consistently your brand communicates, posts, and interacts. Every touchpoint shapes their first impression.',
      },
      { type: 'subheading', text: 'They compare.' },
      {
        type: 'paragraph',
        text: 'Customers rarely buy from the first brand they discover. They compare pricing, features, quality, and overall value before deciding.',
      },
      { type: 'subheading', text: 'They read reviews.' },
      {
        type: 'paragraph',
        text: 'Positive reviews reduce uncertainty and build credibility. Social proof often influences buying decisions more than advertisements.',
      },
      { type: 'subheading', text: 'They ask friends.' },
      {
        type: 'paragraph',
        text: 'Recommendations from family, friends, or online communities carry far more trust than any marketing campaign ever can.',
      },
      { type: 'subheading', text: 'Trust is earned through consistency.' },
      {
        type: 'paragraph',
        text: 'Brands become memorable by consistently delivering quality products, clear messaging, and a reliable customer experience over time.',
      },
      { type: 'subheading', text: 'Not campaigns.' },
      {
        type: 'paragraph',
        text: "One successful campaign may create awareness, but awareness alone doesn't build a lasting brand or loyal customers.",
      },
      { type: 'subheading', text: 'Not discounts.' },
      {
        type: 'paragraph',
        text: 'Discounts can generate temporary sales, but customers rarely stay loyal if price is the only reason they bought.',
      },
      { type: 'subheading', text: 'Not influencers alone.' },
      {
        type: 'paragraph',
        text: 'Influencers can introduce people to your brand, but they cannot replace a great product, customer experience, or genuine trust.',
      },
      { type: 'heading', text: 'Patience is a business strategy' },
      {
        type: 'image',
        src: `${BASE}blog/why-d2c-brands-fail/patience-strategy.jpg`,
        alt: 'An hourglass with a growth chart in the top chamber and a sprouting plant in the bottom chamber',
        caption: "Great brands aren't built overnight",
      },
      {
        type: 'paragraph',
        text: 'One thing I wish more founders understood is this: building a D2C brand takes longer than most people expect. Sustainable growth comes from consistent efforts, not overnight success.',
      },
      { type: 'heading', text: 'My biggest learning after 6+ years' },
      {
        type: 'paragraph',
        text: 'One lesson stands out above everything else: build clarity before you build scale. Instead of constantly chasing trends, invest time in understanding your business fundamentals.',
      },
      { type: 'subheading', text: "What you're selling." },
      {
        type: 'paragraph',
        text: "Know the real value your product offers. Customers don't buy products, they buy solutions to their problems.",
      },
      { type: 'subheading', text: "Who you're selling to." },
      {
        type: 'paragraph',
        text: 'The clearer your target audience, the easier it becomes to create products, content, and marketing that truly connects.',
      },
      { type: 'subheading', text: 'Why should people choose you?' },
      {
        type: 'paragraph',
        text: 'Every brand needs a reason to exist. Your unique value proposition should clearly explain why customers should choose you over competitors.',
      },
      { type: 'subheading', text: "How you'll acquire customers." },
      {
        type: 'paragraph',
        text: "Growth doesn't happen by chance. Have a clear customer acquisition strategy instead of relying on viral moments.",
      },
      { type: 'subheading', text: "How you'll retain them." },
      {
        type: 'paragraph',
        text: 'Acquiring customers is expensive; keeping them is profitable. Focus on delivering an experience that makes people come back.',
      },
      { type: 'subheading', text: "How much you're willing to invest before expecting returns." },
      {
        type: 'paragraph',
        text: 'Every D2C brand requires time and capital before becoming profitable. Setting realistic expectations helps founders make better long-term decisions instead of giving up too early.',
      },
      { type: 'heading', text: 'Final Thoughts' },
      {
        type: 'paragraph',
        text: "People celebrate successful brands because they look exciting from the outside. What they don't see are the hundreds of decisions made behind the scenes about pricing, positioning, hiring, customer experience, operations, cash flow, and marketing.",
      },
      { type: 'paragraph', text: "Those decisions aren't driven by passion. They're driven by clarity." },
      {
        type: 'paragraph',
        text: 'Because at the end of the day, brands aren’t built by excitement. They’re built by consistent decisions made with a clear vision.',
      },
    ],
  },
]
