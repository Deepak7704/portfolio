import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata | undefined {
  const project = projects.find((entry) => entry.slug === params.slug);
  if (!project) return;

  return {
    title: `${project.title} | Project detail`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Project detail`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <Link
        href="/#projects"
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-900"
      >
        <ArrowLeft className="size-4" aria-hidden /> Back to projects
      </Link>

      <header className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-gray-400">
          Project detail
        </p>
        <h1 className="text-4xl font-semibold text-gray-900">
          {project.title}
        </h1>
        <p className="max-w-3xl text-gray-600">
          {project.description}
        </p>
      </header>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={900}
          height={520}
          className="w-full rounded-2xl object-cover"
        />
      </div>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Stack
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
          {project.tech.map((tech) => (
            <li
              key={`${project.slug}-${tech}`}
              className="rounded-full border border-gray-200 bg-white px-3 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Links
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith("/") ? "_self" : "_blank"}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
            >
              {link.label}
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
