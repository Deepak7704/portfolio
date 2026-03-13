"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { projects } from "@/data/projects";

import { ProjectCard } from "@/components/cards/project-card";
import { Reveal } from "@/components/ui/reveal";
import { ThemeHeading } from "@/components/ui/theme-heading";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [activeSlug, setActiveSlug] = useState<string | null>(
    projects[0]?.slug ?? null
  );
  const activeProject = projects.find((project) => project.slug === activeSlug);

  return (
    <section id="projects" data-nav-section className="space-y-6">
      <Reveal>
        <div className="flex items-center justify-between">
          <ThemeHeading
            defaultText="Projects"
            themedText="斬場 — Slaying Grounds"
            className="section-heading inline-flex border-b border-gray-300 pb-2 text-3xl text-gray-900 sm:text-4xl"
          />
          <Image
            src="/red_treasure-removebg-preview.png"
            alt=""
            width={100}
            height={100}
            className="size-10 shrink-0 object-contain sm:size-24"
          />
        </div>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="relative">
          <ul className="space-y-4 lg:max-h-[600px] lg:overflow-y-auto lg:pr-2">
            {projects.map((project) => {
              const isActive = project.slug === activeSlug;
              return (
                <li key={project.slug} className="space-y-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveSlug(project.slug);
                    }}
                    className={cn(
                      "group flex w-full cursor-pointer items-center justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-left transition",
                      isActive && "ring-2 ring-gray-300"
                    )}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <Image
                          src="/projects_stones_final.png"
                          alt=""
                          width={18}
                          height={18}
                          className="size-4 shrink-0 object-contain sm:size-5"
                        />
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                          {project.category ?? "Case study"}
                        </p>
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                        {project.description}
                      </p>
                    </div>
                    <motion.span
                      className="ml-4 flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 group-hover:text-gray-900"
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      <ArrowRight className="size-4" aria-hidden />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`mobile-preview-${project.slug}`}
                        className="lg:hidden"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative hidden lg:flex lg:max-h-[600px]">
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex h-full w-full"
              >
                <ProjectCard project={activeProject} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
