import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { ThemeHeading } from "@/components/ui/theme-heading";

type SkillCategory = {
  name: string;
  items: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Domain",
    items: ["Full-Stack Development", "Applied AI", "Machine Learning"],
  },
  {
    name: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      "Express.js",
      "Node.js",
      "React.js",
      "Next.js",
      "FastAPI",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    name: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "Redis", "Redis Streams", "Prisma"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "CI/CD"],
  },
  {
    name: "System Design",
    items: [
      "Event-driven architecture",
      "Microservices",
      "REST APIs",
      "WebSockets",
      "Monorepos",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="space-y-6 border-y border-dashed border-gray-200 py-10">
      <Reveal>
        <div className="flex items-center justify-between">
          <ThemeHeading
            defaultText="Skills"
            themedText="呼吸法 — Breathing Techniques"
            className="section-heading inline-flex border-b border-gray-300 pb-2 text-3xl text-gray-900 sm:text-4xl"
          />
          <Image
            src="/violet-treasure-removebg-preview.png"
            alt=""
            width={100}
            height={100}
            className="size-10 shrink-0 object-contain sm:size-24"
          />
        </div>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.name} delay={0.1 * (i + 1)}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/obsidian_stone-removebg-preview.png"
                  alt=""
                  width={24}
                  height={24}
                  className="size-5 shrink-0 object-contain sm:size-6"
                />
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-200 bg-gray-900 px-3 py-1 text-xs font-medium text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
