import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function EducationSection() {
  return (
    <section
      id="education"
      data-nav-section
      className="space-y-6 border-y border-dashed border-gray-200 py-10"
    >
      <Reveal>
        <div className="flex items-center justify-between">
          <h2 className="section-heading inline-flex border-b border-gray-300 pb-2 text-3xl text-gray-900 sm:text-4xl">
            Education
          </h2>
          <Image
            src="/coin-removebg-preview.png"
            alt=""
            width={100}
            height={100}
            className="size-10 shrink-0 object-contain sm:size-24"
          />
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <article className="flex flex-col gap-3 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="flex items-start gap-3 min-w-0 sm:gap-4">
              <div className="mt-1 shrink-0">
                <Image
                  src="/coin-removebg-preview.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-7 object-contain sm:size-10"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                  Bachelors in Computer Science
                </h3>
                <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                  Vasireddy Venkatadri Institute of Technology · Andhra Pradesh, India
                </p>
              </div>
            </div>
            <span className="pl-10 text-xs font-semibold text-gray-900 sm:shrink-0 sm:pl-0 sm:text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
              Nov 2021 — May 2025
            </span>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
