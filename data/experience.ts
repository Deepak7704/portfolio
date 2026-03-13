export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  link?: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "IIT Bhubaneswar",
    role: "Machine Learning Research Intern",
    start: "Dec 2024",
    end: "Apr 2025",
    location: "Bhubaneswar, India",
    summary:
      "Worked on Tile Size and Loop Order Selection using Machine Learning for Multi-/Many-Core Architectures, where I developed a Data Dependence Graph (DDG) system that automatically generates randomized, yet representative nested loop structures as comprehensive training data for machine learning models.",
    highlights: [
      "This synthetic loop generator enables ML classifiers to accurately predict optimal tile sizes and loop orders by creating thousands of diverse 2-dimensional loop nests with controlled dependency characteristics, array access patterns, and parallelism properties to improve GPU performance.",
    ],
  },
  {
    company: "Research Project — \u0936\u094D\u0930\u0941vaan",
    role: "Secure Multilingual Agent Communication",
    start: "May 2025",
    end: "Jun 2025",
    location: "Remote",
    summary: "",
    highlights: [
      "Contributed to the \u201C\u0936\u094D\u0930\u0941vaan\u201D research work on a cryptographically grounded model-context protocol for secure, natural, multilingual agent-to-agent communication in mission-critical domains.",
      "Implemented and experimented with core ideas such as role-aware access control (HKP-style) and verifiability (Proof-of-Protocol) to improve trust and integrity of agent messages.",
      "Evaluated threat surfaces like prompt injection, schema mimicry, cross-context spoofing, and multilingual ambiguity, and supported prototype iterations based on findings.",
    ],
  },
];
