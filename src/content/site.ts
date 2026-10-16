// All page copy lives here. Client work is described by industry only — no client names.

export const profile = {
  name: "Michella Arlene",
  firstName: "Michella",
  role: "Forward Deployed Engineer",
  company: "WidaTech",
  school: "CS @ BINUS",
  // Rendered as: "{headlineLead} <accent>{headlineAccent}</accent> {headlineTail}"
  headlineLead: "I turn",
  headlineAccent: "ambiguity",
  headlineTail: "into shipped product.",
  summary:
    "Computer Science student at BINUS and Forward Deployed Engineer at WidaTech. I don't just sit and code — I run delivery end to end: meeting clients, shaping requirements, building the product, and shipping it to production.",
  email: "michellaradika@gmail.com",
  location: "Tangerang, Indonesia",
  cvUrl: "/cv.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export const socials = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/michellaarlene", icon: "linkedin" },
  { title: "Instagram", href: "https://www.instagram.com/michella.wjy", icon: "instagram" },
  { title: "GitHub", href: "https://github.com/michella-arlene", icon: "github" },
  { title: "Email", href: `mailto:${profile.email}`, icon: "mail" },
] as const;

export const skills = [
  "Python",
  "TypeScript",
  "Go",
  "React",
  "Vue",
  "Flutter",
  "PHP · Symfony",
  "PostgreSQL",
  "Docker",
  "LLM agents · Claude API",
  "PyTorch",
  "FastAPI",
  "React Native",
  "Pandas · Scikit-learn",
  "NLP · spaCy · HuggingFace",
  "OpenCV",
  "Playwright",
  "Azure AI",
  "Figma",
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Forward Deployed Engineer",
    company: "WidaTech",
    period: "Jul 2026 — Present",
    current: true,
    summary:
      "I own client projects from the first meeting to production — not just the code in between.",
    highlights: [
      "Meet clients, map their real workflows, and turn messy requirements into specs, design docs and decision logs",
      "Build full-stack products across logistics, retail and e-commerce — APIs, admin dashboards, mobile apps and AI assistants",
      "Ship and run them: CI/CD, staging, go-live cutovers, data migrations, runbooks and handover",
    ],
    tags: ["Client delivery", "Full-stack", "LLM agents", "DevOps"],
  },
  {
    role: "Senior Mentor Scholarship Awardee",
    company: "SASC, BINUS University",
    period: "Sep 2026 — Present",
    current: true,
    summary: "Awarded the SASC Senior Mentor Scholarship at BINUS University.",
    highlights: [],
    tags: ["Mentoring", "Leadership"],
  },
  {
    role: "BNCC R&D Activist & Elite Team Member",
    company: "Bina Nusantara Computer Club",
    period: "Nov 2025 — Sep 2026",
    summary: "Back-end developer in BNCC's research & development team.",
    highlights: ["Involved in TechnoScape and FIT Competition"],
    tags: ["Back-end", "Events"],
  },
  {
    role: "Competition Member",
    company: "UREEKA BINUS",
    period: "Apr 2025 — Sep 2026",
    summary: "Competed in national and international tech competitions with UREEKA BINUS.",
    highlights: ["Competitions: APICTA, P2A Hackathon, Samsung Solve for Tomorrow, Garuda Hacks, Hackvidia and ASEAN DSE"],
    tags: ["Hackathons", "Research"],
  },
  {
    role: "Tutor Scholarship Awardee · Discrete Mathematics",
    company: "SASC, BINUS University",
    period: "Aug 2025 — Jan 2026",
    summary: "Taught discrete math to 15–70 students per session over Zoom.",
    highlights: [
      "Awarded Best Computer Science Tutor 2025/2026",
      "Students averaged a 3.88/4.00 GPA, measured through academic outcomes and evaluation ratings",
    ],
    tags: ["Teaching", "Discrete Math"],
  },
  {
    role: "Freshmen Leader & Freshmen Partner",
    company: "BINUS University",
    period: "Aug — Dec 2025",
    summary: "Led a group of 10 freshmen through their first semester — helping them settle in, monitoring coursework and guiding them toward BINUS Graduate Attributes.",
    highlights: [],
    tags: ["Leadership", "Community"],
  },
];

export type Project = {
  title: string;
  category: "client" | "research";
  context: string; // shown as the small label above the title
  tagline: string;
  description: string;
  points: string[];
  role?: string;
  tags: string[];
  href?: string;
  image?: string; // optional, otherwise a gradient cover is used
  palette: [string, string, string]; // cover gradient colours
};

export const projects: Project[] = [
  {
    title: "Freight Ops & Alert System",
    category: "client",
    context: "WidaTech · Logistics",
    tagline: "Replaced Excel workbooks for a freight forwarder with a live container tracker that flags what's late.",
    description:
      "Operations platform for an import freight forwarder, tracking every container from the monthly list through customs, delivery and deposit refund.",
    points: [
      "Auto-syncs vessel schedules from carriers like Maersk and Evergreen",
      "Deadline alerts with urgency levels, blocked-task reasons and a full audit log",
      "Generates invoice worksheets from packing lists",
      "Production deploy pipeline with build-once images and an approval gate",
    ],
    tags: ["TypeScript", "Hono", "PostgreSQL", "Docker"],
    palette: ["#0E2A6B", "#3FA8FF", "#12C2B0"],
  },
  {
    title: "Retail POS + AI Sales Assistant",
    category: "client",
    context: "WidaTech · Retail",
    tagline: "Serial-tracked POS and inventory for an electronics retailer, with a WhatsApp & Instagram AI assistant.",
    description:
      "Replaced a legacy POS for a consumer-electronics retailer. Every device is tracked by serial number across its whole life cycle.",
    points: [
      "Offline-capable, multi-terminal POS with a bilingual (EN/ID) interface",
      "AI assistant answers customers on WhatsApp & Instagram from owner-approved docs, handing off to staff",
      "Marketplace fee and payout reconciliation, plus migration from the old system",
      "Self-hosted in-store with automated backups and tag-based deploys",
    ],
    tags: ["React", "Express", "Prisma", "Claude API"],
    palette: ["#08313A", "#12C2B0", "#FF9F5A"],
  },
  {
    title: "Cross-border E-commerce + CMS",
    category: "client",
    context: "WidaTech · E-commerce",
    tagline: "Mobile shop and admin CMS for a cross-border marketplace in Taiwan, in three languages.",
    description:
      "Shopping app, storefront API and admin dashboard serving Indonesian customers living in Taiwan — Indonesian, Chinese and English throughout.",
    points: [
      "Go API, React admin CMS and a Flutter mobile app",
      "Courier integration for waybills and tracking, with guards against billable test shipments",
      "Single sign-on with the client's existing identity service",
      "CI, staging deploys and user-acceptance testing",
    ],
    tags: ["Go", "React", "Flutter", "PostgreSQL"],
    palette: ["#1A1F3A", "#1E5BFF", "#FF9F5A"],
  },
  {
    title: "Supplier Invoice Portal",
    category: "client",
    context: "WidaTech · Logistics & Trade",
    tagline: "Self-service portal so suppliers can track invoices from receipt to payment without emailing finance.",
    description:
      "Supplier extranet for a European logistics & trade group, built alongside the client's in-house developers.",
    points: [
      "Scheduled syncs from the client's logistics system and ERP",
      "Rule-based invoice status flow with bilingual email alerts and retry queues",
      "Upgraded the stack to the latest Symfony and Vue 3",
      "Full delivery pack: technical design, runbook, interface contracts, test & load-test reports",
    ],
    tags: ["PHP", "Symfony", "Vue 3", "MariaDB"],
    palette: ["#0B1F4A", "#2F6BFF", "#5CC8FF"],
  },
  {
    title: "AI Shipping-Document Automation",
    category: "client",
    context: "WidaTech · Prototype",
    tagline: "Reads shipping-instruction PDFs and fills a carrier's booking portal automatically.",
    description:
      "Prototype that removes manual re-typing of shipping instructions for a logistics company.",
    points: [
      "LLM-based extraction from PDFs with gap detection against the source",
      "Browser automation fills the carrier's web form, stopping before submit for review",
      "Generates standard EDI shipping messages",
    ],
    tags: ["Next.js", "Playwright", "Python", "LLM"],
    palette: ["#0A2540", "#12C2B0", "#3FA8FF"],
  },
  {
    title: "VoiceChess",
    category: "research",
    context: "1st Runner-Up · APICTA Taiwan 2025",
    tagline: "Accessible chess-learning app for visually impaired players.",
    description:
      "Accessibility-first chess app for blind and low-vision players — fully voice-controlled and screen-reader compatible, with analysis tools and structured lessons. Tested with 15 blind chess athletes in Indonesia.",
    points: [
      "Board detection with LRASPP segmentation, piece classification, rotation correction and orientation regression",
      "ImageNet backbones fine-tuned for chess-specific tasks",
      "1st Runner-Up, Industrial Category (Inclusion & Community Services) at APICTA 2025 — among 267 teams from 12 economies",
    ],
    role: "Product Manager & Deep Learning",
    tags: ["Python", "Deep Learning", "OpenCV", "A11y"],
    palette: ["#101B3D", "#FF9F5A", "#1E5BFF"],
  },
  {
    title: "NOGA — Smart Food Analysis",
    category: "research",
    context: "AI · Mobile",
    tagline: "Scan a food label and get a plain-language read on what's actually in it.",
    description:
      "Health-focused mobile app that helps people make informed dietary choices by analysing ingredient lists and nutrition labels.",
    points: [
      "OCR ingredient scanning with manual entry as a fallback",
      "AI-generated summaries of each ingredient's health impact",
      "Allergen alerts and health-risk warnings",
      "React Native app with a FastAPI backend using the Gemini API",
    ],
    tags: ["React Native", "FastAPI", "Gemini", "OCR"],
    palette: ["#0A2A2A", "#12C2B0", "#FF9F5A"],
  },
  {
    title: "Customer Churn Prediction",
    category: "research",
    context: "Machine Learning",
    tagline: "Survival-time model predicting when telecom customers will churn.",
    description:
      "Churn intelligence system for a telecom company that predicts not just whether customers churn, but when.",
    points: [
      "EDA on churn drivers across demographics, usage patterns and contract types",
      "Survival models — Kaplan-Meier, Cox PH and XGBoost AFT — served from a Hugging Face Space",
      "CRM dashboard on Vercel surfacing retention insights for business users",
      "Flask + MongoDB backend",
    ],
    role: "EDA, ML model, ML DevOps",
    tags: ["Python", "Survival Analysis", "Flask", "HuggingFace"],
    palette: ["#0C2233", "#12C2B0", "#5CC8FF"],
  },
  {
    title: "NER for Resume Parsing",
    category: "research",
    context: "NLP Research",
    tagline: "Benchmarked 8 named-entity-recognition models for parsing resumes.",
    description:
      "Comparative study on a resume dataset covering HMM, CRF, BiLSTM and BERT variants.",
    points: ["Data preprocessing and feature engineering", "Model implementation and benchmarking"],
    role: "ML models",
    tags: ["Python", "spaCy", "BERT", "Scikit-learn"],
    palette: ["#13183A", "#3FA8FF", "#FF9F5A"],
  },
  {
    title: "Lane Drift Detection",
    category: "research",
    context: "Computer Vision",
    tagline: "Classical CV pipeline that detects lane drift in real time.",
    description:
      "Lane detection using inverse perspective mapping, HLS colour filtering, Sobel edges and polynomial fitting, capped at 60 FPS.",
    points: ["No deep learning — fully classical image processing", "Real-time drift detection"],
    role: "Image processing",
    tags: ["Python", "OpenCV"],
    palette: ["#0B1530", "#1E5BFF", "#12C2B0"],
  },
];

export type Achievement = {
  kicker: string;
  title: string;
  description?: string;
  // Stat tiles show a big counting number instead of an icon
  stat?: { value: number; decimals?: number; suffix?: string };
  size?: "lg" | "wide" | "sm";
  glow?: "electric" | "teal" | "amber";
};

export const achievements: Achievement[] = [
  {
    kicker: "International · APICTA 2025",
    title: "1st Runner-Up, Industrial Category",
    description:
      "Inclusion & Community Services, among 267 teams from 12 economies — with VoiceChess. Also a Top 10 Finalist in the Research Category.",
    size: "lg",
    glow: "electric",
  },
  {
    kicker: "GPA · BINUS",
    title: "Dean's List 2025",
    stat: { value: 3.88, decimals: 2, suffix: "/4" },
    size: "sm",
    glow: "teal",
  },
  {
    kicker: "SASC · 2025/2026",
    title: "Best Computer Science Tutor",
    size: "sm",
  },
  {
    kicker: "National · ITB Arkavidia 2025",
    title: "Hackathon Favourite Winner & Top 10 Finalist",
    size: "wide",
    glow: "amber",
  },
  {
    kicker: "Certifications",
    title: "Anthropic Claude API · NVIDIA Deep Learning · Microsoft Azure",
    description: "Plus Google ML, DataCamp Python, Dicoding AI and SAP Analytics Cloud.",
    size: "wide",
  },
  {
    kicker: "National · Samsung 2025",
    title: "Solve for Tomorrow 2nd Best Finalist",
    size: "sm",
  },
  {
    kicker: "University · BINUS CBDC 2025",
    title: "2nd Winner, Scientific Article Writing",
    size: "sm",
  },
];

export const chatSuggestions = [
  "What do you build at WidaTech?",
  "Tell me about VoiceChess",
  "What's your tech stack?",
];
