export type Project = {
  slug: string;
  title: string;
  description: string;
  status: string;
  tech: string[];
  image: string;
  links: { label: string; href: string }[];
  category?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "100xswe",
    title: "100xSWE",
    description:
      "An end-to-end automated PR system that reduced LLM token usage by 70% while providing better context for cross-file dependencies and generating validated pull requests. Uses TypeScript AST parsing for precise code analysis, hybrid BM25 + vector search for intelligent file retrieval, and LangGraph-based validation orchestration with multi-stage consistency checks.",
    status: "Live",
    category: "AI",
    tech: [
      "TypeScript",
      "LangGraph",
      "BM25",
      "Vector Embeddings",
      "AST Parsing",
    ],
    image: "/100xSWE.png",
    links: [
      { label: "Visit site", href: "https://100xswe.app" },
      { label: "Live demo", href: "https://x.com/VeluvoluDeepak/status/2025462739888730212?s=20" },
      { label: "Blog", href: "https://x.com/VeluvoluDeepak/status/2025522394400526568?s=20" },
    ],
    repo: "https://github.com/Deepak7704/100xSWE",
  },
  {
    slug: "exness",
    title: "Exness — Real-Time Trading Platform",
    description:
      "A real-time trading platform using Binance WebSockets for live market data, Redis pub/sub for price stream distribution, TimescaleDB with materialized views for multi-timeframe candlesticks, and a LangChain-powered conversational agent that lets traders analyze market conditions through natural language instead of manual chart interpretation.",
    status: "In Production",
    category: "Full-Stack",
    tech: [
      "Next.js",
      "Binance WebSockets",
      "Redis",
      "TimescaleDB",
      "PostgreSQL",
      "Socket.IO",
      "LangChain",
    ],
    image: "/exness (1).png",
    links: [],
    repo: "https://github.com/Deepak7704/exness",
  },
  {
    slug: "librag",
    title: "LibRAG",
    description:
      "A RAG pipeline that ingests Google Drive documents and enables conversational interaction with them, augmented by web search and web scraping tools — built entirely without agentic frameworks or AI SDKs. Uses content hashing to detect document changes and upserts embeddings to prevent stale data, ensuring the knowledge base stays current.",
    status: "Live",
    category: "AI",
    tech: ["Python", "PostgreSQL", "Vector Embeddings", "Google Drive API"],
    image: "/librag.png",
    links: [{ label: "Visit site", href: "https://librag-ai.vercel.app/" }],
    repo: "https://github.com/Deepak7704/LIBRAG_AI",
  },
  {
    slug: "visual-tool-dependency-graph",
    title: "Visual Tool Dependency Graph",
    description:
      "An interactive visualization tool that generates dependency graphs based on user queries. Analyzes tool and package relationships, maps out their interconnections, and renders a clear visual graph — making it easy to understand complex dependency chains at a glance.",
    status: "Live",
    category: "Full-Stack",
    tech: ["React", "D3.js", "Node.js", "TypeScript"],
    image: "/tdg.jpg",
    links: [],
    repo: "https://github.com/Deepak7704/composio_tdg",
  },
  {
    slug: "lovable",
    title: "Lovable",
    description:
      "A full-stack implementation of Lovable — the AI-powered web app builder that lets users describe what they want in natural language and generates a complete, deployable web page. Replicates the core prompt-to-page workflow with real-time preview, component generation, and iterative editing.",
    status: "Live",
    category: "AI",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "LLM"],
    image: "/image.png",
    links: [],
    repo: "https://github.com/Deepak7704/lovable",
  },
  {
    slug: "blogsphere",
    title: "BlogSphere",
    description:
      "A modern blogging platform where ideas, stories, and insights converge. Empowers writers to share their thoughts with a global audience, fostering a community of readers and creators in a professional, clean, and engaging environment.",
    status: "Live",
    category: "Full-Stack",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    image: "/blogsphere.png",
    links: [{ label: "Visit site", href: "https://blog-sphere-project.vercel.app/" }],
    repo: "https://github.com/Deepak7704/BlogSphere",
  },
];
