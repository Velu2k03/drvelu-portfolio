export const profile = {
  name: "Velu Murugan",
  role: "AI Automation Engineer",
  email: "velu2k03@gmail.com",
  phone: "+63 969 155 9821",
  phoneHref: "tel:+639691559821",
  location: "Santa Rosa City, Laguna, Philippines",
  github: "https://github.com/Velu2k03",
  loom: "https://www.loom.com/share/13931b7921eb4c19b00a6819fe9b7095",
  resume: "/Velu_Murugan_Resume_2026.pdf",
  availability:
    "Open to remote AI engineer and automation roles on collaborative teams.",
};

export const projects = [
  {
    title: "Medical RAG Chatbot",
    category: "Retrieval-augmented generation",
    description:
      "A production-style RAG system that answers domain questions from documents using LangChain, Pinecone, and OpenAI.",
    tags: [
      "Python",
      "LangChain",
      "Pinecone",
      "OpenAI",
      "Flask",
      "Docker",
      "GCP",
    ],
    href: "https://github.com/Velu2k03/Medical-RAG-Chatbot",
    flow: ["Documents", "Retrieval", "AI answer"],
    type: "rag",
    image: "/images/projects/medical.jpg",
    imageAlt: "Medical research in a laboratory, photographed by Lucas Vasques",
  },
  {
    title: "CashDash.ai",
    category: "LLM-powered application",
    description:
      "A personal finance tracker with AI chat expense entry. Log spending through conversation, with Ollama or OpenAI powering the chat.",
    tags: ["Next.js 15", "TypeScript", "Supabase", "Ollama", "OpenAI"],
    href: "https://github.com/Velu2k03/CashDash.ai",
    flow: ["Chat entry", "AI parsing", "Expense log"],
    type: "finance",
    image: "/images/projects/finance.jpg",
    imageAlt:
      "A budget notebook, calculator, and model home, photographed by Sasun Bughdaryan",
  },
  {
    title: "Smart AI HR Scheduler",
    category: "n8n workflow automation",
    description:
      "An n8n and OpenAI workflow that reads schedule files and generates employee schedules, automating a repetitive HR task.",
    tags: ["n8n", "OpenAI", "Workflow Automation"],
    href: "https://github.com/Velu2k03/smart-ai-hr-scheduler",
    flow: ["Schedule file", "n8n + OpenAI", "Team schedule"],
    type: "workflow",
    image: "/images/projects/scheduler.jpg",
    imageAlt:
      "An open weekly planner beside a keyboard, photographed by Walls.io",
  },
  {
    title: "Household Bills Dashboard",
    category: "Application testing",
    description:
      "A TypeScript dashboard for household bills, with automated end-to-end tests in Playwright to check application flows.",
    tags: ["TypeScript", "Playwright", "End-to-end Testing"],
    href: "https://github.com/Velu2k03/household-bills-dashboard",
    flow: ["Household bills", "Dashboard", "E2E tests"],
    type: "testing",
    image: "/images/projects/household.png",
    imageAlt:
      "Household Bills Dashboard showing bill totals and member balances",
  },
];

export const skillGroups = [
  {
    title: "Automation & AI",
    skills: [
      "n8n",
      "Python",
      "LangChain",
      "OpenAI APIs",
      "MCP (Model Context Protocol)",
    ],
  },
  {
    title: "Data & integrations",
    skills: ["Pinecone", "REST APIs", "Supabase"],
  },
  {
    title: "Build & ship",
    skills: ["Git/GitHub", "Docker", "Next.js", "TypeScript", "GCP", "Vercel"],
  },
];

export const experience = [
  {
    title: "AI automation projects",
    org: "Independent learning and development",
    period: "2025 - Present",
    description:
      "Building n8n workflows, LLM integrations, and document-based AI tools. Explore the code in my selected projects.",
  },
  {
    title: "Junior and Senior High School Teacher",
    org: "Maranatha Christian Academy, Cabuyao",
    period: "Jul 2024 - Apr 2025",
    description:
      "Taught Science, Math, and English for Grades 4-12. Planned lessons and tracked student progress through structured assessments.",
  },
  {
    title: "Laboratory Intern",
    org: "Ago General Hospital, Legazpi City",
    period: "Oct 2023 - Dec 2023",
    description:
      "Supported sample collection and diagnostic workflows, with careful documentation and data recording.",
  },
];

export const education = [
  {
    title: "BS Biology (Pre-Medicine)",
    org: "Ago Medical and Educational Center",
    period: "Oct 2021 - Aug 2024",
    description:
      "88%. A foundation in scientific research, structured observation, and data analysis.",
  },
  {
    title: "Certifications",
    org: "Deloitte, Google, and Google Cloud",
    period: "2025",
    description:
      "Data Analytics and Visualization (Forage), Google Analytics (Skillshop), and Prompt Design in Vertex AI.",
  },
];
