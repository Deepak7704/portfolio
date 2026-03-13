"use client";

import { Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function IntroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      data-nav-section
      className="grid items-start gap-10 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px]"
    >
      <div className="text-left">
        <h1
          className="text-3xl font-bold leading-[1.15] text-[var(--foreground)] sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          I&apos;m Veluvolu Deepak
        </h1>
        <p className="mt-2 text-sm font-medium text-[var(--foreground)]/70 sm:text-base">
          I work on{" "}
          <span className="font-semibold text-[var(--foreground)]">Full-Stack Engineering</span>,{" "}
          <span className="font-semibold text-[var(--foreground)]">Applied AI</span>, and{" "}
          <span className="font-semibold text-[var(--foreground)]">Research</span>.
        </p>
        <div className="mt-5 max-w-2xl space-y-3 text-sm leading-relaxed text-[var(--foreground)]/80 sm:text-base">
          <p>
            I build end-to-end systems from research to production. Started as a
            Machine Learning Researcher at{" "}
            <span className="font-semibold text-[var(--foreground)]">IIT Bhubaneswar</span>,
            developing systems that optimize compiler decisions for GPU performance
            on multi-core architectures. Currently at{" "}
            <span className="font-semibold text-[var(--foreground)]">Super 30</span>, a
            hacker house where I&apos;ve been building and shipping full-time.
          </p>
          <p>
            I&apos;ve always wanted to work for fast-paced startups and teams
            shipping real products and handling users at scale because the
            opportunity to learn from and contribute alongside people who&apos;ve
            done this would fundamentally accelerate my growth as an engineer.
          </p>
          <p>
            When I&apos;m not building, I&apos;m deep in research papers, chasing
            what&apos;s next in AI. Away from screens, you&apos;ll find me on the
            badminton court.
          </p>
        </div>
      </div>

      <div className="w-full lg:mx-0 lg:sticky lg:top-24 lg:mt-2">
        <div
          className="overflow-hidden rounded-3xl border border-gray-200 bg-[var(--surface)] shadow-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[280px] w-full overflow-hidden sm:h-[360px]">
            <Image
              src="/tanjiro1.jpg"
              alt="Veluvolu Deepak"
              fill
              className="object-cover object-[center_35%]"
              sizes="340px"
              priority
            />
          </div>
          <div className="space-y-3 px-5 py-5">
            <div className="flex items-center justify-between gap-2">
              <div className="relative h-7 min-w-0 flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  {isHovered ? (
                    <motion.h3
                      key="jp"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-lg font-semibold text-gray-900"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      ヴェルヴォル ディーパク
                    </motion.h3>
                  ) : (
                    <motion.h3
                      key="en"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-lg font-semibold text-gray-900"
                    >
                      Veluvolu Deepak
                    </motion.h3>
                  )}
                </AnimatePresence>
              </div>
              <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-gray-400">
                Hashira
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full bg-gray-900 px-2.5 py-0.5 text-[10px] font-medium text-white">
                Hashira Training Arc · @100xdevs
              </span>
              <span className="rounded-full bg-gray-900 px-2.5 py-0.5 text-[10px] font-medium text-white">
                ML Researcher · IIT Bhubaneswar
              </span>
              <span className="rounded-full bg-gray-900 px-2.5 py-0.5 text-[10px] font-medium text-white">
                CS&apos;25
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://x.com/VeluvoluDeepak"
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-9 items-center justify-center rounded-full bg-gray-900 text-white transition hover:-translate-y-0.5"
                aria-label="X (Twitter)"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/deepakveluvolu77/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-9 items-center justify-center rounded-full bg-gray-900 text-white transition hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Deepak7704"
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-9 items-center justify-center rounded-full bg-gray-900 text-white transition hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="mailto:deepakveluvolu9@gmail.com"
                className="flex size-9 items-center justify-center rounded-full bg-gray-900 text-white transition hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
