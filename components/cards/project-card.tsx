import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="flex h-full w-full flex-col gap-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-gray-50">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={720}
          height={420}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
          {project.category ?? "Project"} · {project.status}
        </p>
        <h3 className="text-2xl font-semibold text-gray-900">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-500"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className={
              link.label.toLowerCase().includes("visit")
                ? "inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                : "inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
            }
          >
            {link.label}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        ))}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
          >
            GitHub
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
