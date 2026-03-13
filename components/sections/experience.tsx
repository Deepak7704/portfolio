import Image from "next/image";

import { experience } from "@/data/experience";

import { ExperienceCard } from "@/components/cards/experience-card";
import { Reveal } from "@/components/ui/reveal";
import { ThemeHeading } from "@/components/ui/theme-heading";

export function ExperienceSection() {
  return (
    <section
      id="work"
      data-nav-section
      className="space-y-6 border-y border-dashed border-gray-200 py-10"
    >
      <Reveal>
        <div className="flex items-center justify-between">
          <ThemeHeading
            defaultText="Experience"
            themedText="鍛錬篇 — Training Arcs"
            className="section-heading inline-flex border-b border-gray-300 pb-2 text-3xl text-gray-900 sm:text-4xl"
          />
          <Image
            src="/expdragon-removebg-preview.png"
            alt=""
            width={100}
            height={100}
            className="size-10 shrink-0 object-contain sm:size-24"
          />
        </div>
      </Reveal>
      <div className="grid pt-4 gap-4">
        {experience.map((item, i) => (
          <Reveal key={`${item.company}-${item.start}`} delay={0.1 * (i + 1)}>
            <ExperienceCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
