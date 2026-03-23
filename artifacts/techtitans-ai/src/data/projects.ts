export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  coverImage: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  services: string[];
  year: string;
  duration: string;
}

export const projects: Project[] = [
  {
    id: "aura-brand",
    title: "Aura Collective",
    category: "Branding & Marketing",
    tags: ["Brand Identity", "Logo Design", "Digital Marketing", "Social Media"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=90",
    tagline: "A brand identity built to dominate every room it enters.",
    overview:
      "Aura Collective is a lifestyle brand launching across India. They needed a complete brand identity system plus a go-to-market digital marketing strategy to build awareness and drive sales from day one.",
    challenge:
      "The founders had a strong product vision but zero brand presence. They needed a recognizable identity and a marketing engine built fast — before a national launch at a major trade fair.",
    solution:
      "We created a bold, modern brand system including logo, color palette, typography, and brand guidelines. We then ran targeted Instagram and Google ad campaigns with custom creatives, reaching over 200k users in the first month.",
    results: [
      { label: "Reach in Month 1", value: "200k+" },
      { label: "Brand Recall (Survey)", value: "84%" },
      { label: "Ad ROAS", value: "4.2x" },
      { label: "Assets Delivered", value: "80+" },
    ],
    services: ["Brand Identity", "Logo Design", "Digital Marketing", "Ad Creative"],
    year: "2024",
    duration: "8 weeks",
  },
  {
    id: "pulse-video",
    title: "Pulse Energy",
    category: "Video Editing",
    tags: ["Motion Graphics", "YouTube", "Brand Film", "Social Reels"],
    image: "https://images.unsplash.com/photo-1535016120720-40c746a5024b?w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1535016120720-40c746a5024b?w=1600&q=90",
    tagline: "Content that converts — at the speed of light.",
    overview:
      "Pulse Energy, a sustainable energy startup, hired us to build their entire video content pipeline — from product explainer videos and social ads to long-form YouTube content and investor pitch films.",
    challenge:
      "They had raw footage but no editing team, no visual style, and a product launch deadline in 8 weeks. The content needed to educate while entertaining a skeptical, tech-savvy audience.",
    solution:
      "We created a signature motion-graphic style using their brand colors, built templates for consistent output, and edited 14 videos across formats — from 15-second Instagram reels to a 6-minute YouTube documentary.",
    results: [
      { label: "Total Views (30 days)", value: "2.4M" },
      { label: "Watch Time Increase", value: "+210%" },
      { label: "Subscriber Growth", value: "+8,300" },
      { label: "Videos Delivered", value: "14" },
    ],
    services: ["Video Editing", "Motion Graphics", "Color Grading", "Script Consulting"],
    year: "2024",
    duration: "8 weeks",
  },
  {
    id: "vertex-ai-automation",
    title: "Vertex Ops",
    category: "AI / Process Automation",
    tags: ["AI Integration", "Workflow Automation", "n8n", "GPT", "Operations"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=90",
    tagline: "Turning 40-hour workweeks into automated pipelines.",
    overview:
      "Vertex Ops is a mid-sized logistics company drowning in manual data entry, report generation, and client communication tasks. We were brought in to map, design, and implement a full AI-powered process automation system.",
    challenge:
      "Their team was spending 60% of their time on repetitive tasks — copy-pasting data between systems, manually generating reports, and responding to standard client queries. It was costing them speed and money.",
    solution:
      "We audited their workflows and built automated pipelines using AI tools and no-code automation platforms. Custom GPT assistants handled client queries, while automated flows handled data sync, weekly reports, and invoice generation.",
    results: [
      { label: "Manual Hours Saved/Week", value: "32 hrs" },
      { label: "Report Generation Time", value: "-95%" },
      { label: "Client Response Time", value: "< 2 min" },
      { label: "ROI in 3 Months", value: "6.1x" },
    ],
    services: ["AI Integration", "Workflow Automation", "Process Mapping", "Custom GPT"],
    year: "2024",
    duration: "6 weeks",
  },
  {
    id: "lumina-product",
    title: "Lumina Lifestyle",
    category: "Product Development",
    tags: ["E-Commerce", "Shopify", "Web App", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=90",
    tagline: "Elegant by design. Powerful by default.",
    overview:
      "Lumina Lifestyle is a premium wellness brand launching their DTC e-commerce store. We designed and developed the full product from scratch — UI/UX, frontend, backend, and third-party integrations.",
    challenge:
      "The founder had a strong product but no digital presence. The store needed to feel luxury, load fast on mobile, and convert first-time visitors — all before a Black Friday launch.",
    solution:
      "We designed a mobile-first UI with warm ivory tones and gold accents, built a custom Shopify storefront with optimized checkout flows, integrated CRM and email automation, and deployed to production in 10 weeks.",
    results: [
      { label: "Launch Day Revenue", value: "₹2.1L" },
      { label: "Mobile Conversion Rate", value: "4.8%" },
      { label: "Avg. Session Duration", value: "3m 42s" },
      { label: "Cart Abandonment", value: "-38%" },
    ],
    services: ["Product Development", "UI/UX Design", "Shopify", "CRM Integration"],
    year: "2023",
    duration: "10 weeks",
  },
  {
    id: "quantum-pm",
    title: "Quantum VR",
    category: "Project Management",
    tags: ["Agile", "Cross-team Coordination", "Product Launch", "Milestone Planning"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=90",
    tagline: "Zero chaos. Flawless delivery. Every time.",
    overview:
      "Quantum VR, a virtual reality training startup, engaged us as their dedicated Project Management partner to oversee a complex 6-month product launch involving design, development, marketing, and investor relations simultaneously.",
    challenge:
      "They had 3 external vendors, an in-house dev team, and an aggressive investor deadline — all running in parallel with no dedicated PM. Deadlines were slipping, communication was breaking down, and morale was low.",
    solution:
      "We stepped in as their embedded PM team — setting up Agile sprint cycles, clear accountability structures, daily standups, weekly stakeholder reports, and a risk register. Every workstream was tracked and delivered on schedule.",
    results: [
      { label: "On-Time Delivery", value: "100%" },
      { label: "Budget Overrun", value: "₹0" },
      { label: "Vendor Delays Resolved", value: "11" },
      { label: "Investor Demo Delivered", value: "On time" },
    ],
    services: ["Project Management", "Agile Delivery", "Stakeholder Reporting", "Risk Management"],
    year: "2024",
    duration: "6 months",
  },
  {
    id: "neon-full",
    title: "Neon Dynamics",
    category: "Branding & Marketing",
    tags: ["Full Package", "Brand Identity", "Video", "Product Launch"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=90",
    tagline: "A brand that charges up every room it enters.",
    overview:
      "Neon Dynamics is an emerging tech hardware company that needed a complete brand identity, launch video, and full digital marketing strategy to stand out at a major industry trade show.",
    challenge:
      "The client had zero brand recognition and was about to launch at a major trade show. They needed a striking identity, a launch film, and ad creatives — all in 6 weeks.",
    solution:
      "We built a high-contrast visual system on electric neon colors with custom typography, produced a 90-second launch film with motion graphics, and ran a 2-week pre-show awareness campaign on LinkedIn and Instagram.",
    results: [
      { label: "Trade Show Leads", value: "340+" },
      { label: "Launch Film Views", value: "95k" },
      { label: "LinkedIn Impressions", value: "180k" },
      { label: "Turnaround", value: "6 weeks" },
    ],
    services: ["Branding & Marketing", "Video Editing", "Ad Creative", "Social Media"],
    year: "2024",
    duration: "6 weeks",
  },
];
