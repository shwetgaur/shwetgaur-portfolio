export type ProjectStatus = "live" | "repo" | "shipped" | "published";

export interface Project {
  id: string;
  runId: string;
  title: string;
  subtitle: string;
  stack: string[];
  highlights: string[];
  status: ProjectStatus;
  statusLabel: string;
  liveUrl?: string;
  githubUrl: string;
  caseStudySlug?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const site = {
  name: "Shwet Gaur",
  tagline: "AI/ML engineer — I ship LangGraph agents, RAG, and production APIs.",
  subline: "B.Tech AI/ML · Symbiosis Institute of Technology, Pune · Graduating June 2027",
  currentRole: "AI Engineering Intern @ BridgeIT",
  email: "shwetgaur9@gmail.com",
  github: "https://github.com/shwetgaur",
  linkedin: "https://www.linkedin.com/in/shwet-gaur-732682285/",
  /** Replace with your public resume PDF on Google Drive */
  resumeUrl: "",
};

export const liveStrip = [
  {
    label: "SHL Recommender",
    status: "live" as const,
    href: "https://shwetgaur-shl-recommender.hf.space",
  },
  {
    label: "Campus Voice",
    status: "live" as const,
    href: "https://fs-blind.vercel.app",
  },
  {
    label: "Dassault Executor",
    status: "repo" as const,
    href: "https://github.com/shwetgaur/agentic-webapp-test-executor",
  },
  {
    label: "GenAI Patent",
    status: "published" as const,
    href: "https://drive.google.com/file/d/1JtQuqEYFkquVhwYcZ04OtxxakM9EAUub/view",
  },
];

export const about = {
  paragraphs: [
    "I build end-to-end AI systems: retrieval, multi-agent workflows, evaluation, and deployment — not slide decks.",
    "Production FastAPI services, Docker, live demos, and eval pipelines (LangSmith, Weights & Biases) are how I work.",
    "Published GenAI patent co-author (Indian Patent Office, Jan 2026). Currently interning on LangGraph agents and LLM quality at BridgeIT.",
  ],
};

export const projects: Project[] = [
  {
    id: "shl",
    runId: "001",
    title: "Conversational Assessment Recommender",
    subtitle: "SHL · Production RAG + LLM system",
    stack: ["Python", "FastAPI", "RAG", "Docker", "LLM"],
    highlights: [
      "Hybrid retrieval with schema-strict LLM outputs",
      "Automated eval: recall + safety probes",
      "Dockerized multi-provider deployment",
    ],
    status: "live",
    statusLabel: "LIVE",
    liveUrl: "https://shwetgaur-shl-recommender.hf.space",
    githubUrl: "https://github.com/shwetgaur/shl-ai-recommender",
  },
  {
    id: "campus",
    runId: "002",
    title: "Campus Voice",
    subtitle: "College discussion platform",
    stack: ["React", "PostgreSQL", "Supabase", "Vercel"],
    highlights: [
      "Full-stack app with realtime event streaming",
      "Structured user interaction data flows",
      "Live deployment on Vercel",
    ],
    status: "live",
    statusLabel: "LIVE",
    liveUrl: "https://fs-blind.vercel.app",
    githubUrl: "https://github.com/shwetgaur/fs_blind",
  },
  {
    id: "dassault",
    runId: "003",
    title: "Agentic Web Test Executor",
    subtitle: "Dassault Systèmes · Quality Engineering",
    stack: ["Python", "FastAPI", "Playwright", "Streamlit", "Pydantic"],
    highlights: [
      "Structured prompt → Playwright → report → notify on failure",
      "Modular OOP: parser, executor, reporting, notification",
      "Demo: TC01 PASS · TC10 FAIL with team routing",
    ],
    status: "repo",
    statusLabel: "REPO",
    githubUrl: "https://github.com/shwetgaur/agentic-webapp-test-executor",
  },
  {
    id: "policy",
    runId: "004",
    title: "PolicyPilot",
    subtitle: "HackRx 6.0 National Hackathon",
    stack: ["Python", "RAG", "Embeddings", "FastAPI"],
    highlights: [
      "Chunking, embedding, semantic retrieval, re-ranking",
      "~25% latency reduction (40s → under 30s)",
      "Hypothesis-driven retrieval experiments",
    ],
    status: "shipped",
    statusLabel: "SHIPPED",
    githubUrl: "https://github.com/shwetgaur/hackrx-llm-retriever",
  },
];

export const experience: Experience[] = [
  {
    role: "AI Engineering Intern",
    company: "BridgeIT",
    period: "Mar 2026 – Present",
    bullets: [
      "LangGraph multi-agent workflows and NLP evaluation pipelines for production LLM systems",
      "Statistical analysis on large-scale user interaction data to improve Copilot quality",
      "Experiment tracking with LangSmith and Weights & Biases",
    ],
  },
  {
    role: "Virtual Software Development Intern",
    company: "Gorilla Technology",
    period: "Jul 2025",
    location: "Remote (New Zealand-based)",
    bullets: [
      "Python ETL pipelines for enterprise data extraction and transformation",
      "SQL-based analysis on structured datasets; delivered findings to stakeholders",
    ],
  },
];

export const skills = [
  "Python",
  "FastAPI",
  "LangGraph",
  "LangChain",
  "RAG",
  "LLMs",
  "Docker",
  "PostgreSQL",
  "SQL",
  "Playwright",
  "PyTorch",
  "Git",
  "Streamlit",
  "LangSmith",
];
