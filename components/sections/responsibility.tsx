import { Users } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Position = {
  title: string;
  description: string;
};

const positions: Position[] = [
  {
    title: "University Innovation Fellow (UIF)",
    description:
      "Organized workshops and led collaborative projects, reaching over 150 students to promote technical learning and team-based problem-solving.",
  },
  {
    title: "Association for Computing Machinery (ACM)",
    description:
      "Coordinated coding competitions and technical workshops, fostering collaboration and skill development in the computing community.",
  },
];

export function ResponsibilitySection() {
  return (
    <section className="space-y-6 border-y border-dashed border-gray-200 py-10">
      <Reveal>
        <h2 className="section-heading inline-flex border-b border-gray-300 pb-2 text-4xl text-gray-900">
          Positions of Responsibility
        </h2>
      </Reveal>
      <div className="grid items-stretch gap-3 sm:grid-cols-2">
        {positions.map((pos, i) => (
          <Reveal key={pos.title} delay={0.1 * (i + 1)} className="h-full">
            <article className="flex h-full items-start gap-3 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
              <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
                <Users className="size-4 text-gray-500" aria-hidden />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {pos.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{pos.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
