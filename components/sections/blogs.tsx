import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ThemeHeading } from "@/components/ui/theme-heading";

type BlogPost = {
  title: string;
  description: string;
  href: string;
  date: string;
  platform: string;
};

const posts: BlogPost[] = [
  {
    title: "Building 100xSWE — Automated PR System",
    description:
      "How I built an end-to-end automated PR system that reduced LLM token usage by 70% using TypeScript AST parsing, hybrid BM25 + vector search, and LangGraph-based validation orchestration.",
    href: "https://x.com/VeluvoluDeepak/status/2025522394400526568?s=20",
    date: "2025",
    platform: "X (Twitter)",
  },
];

export function BlogsSection() {
  return (
    <section className="space-y-6 border-y border-dashed border-gray-200 py-10">
      <Reveal>
        <div className="flex items-center justify-between">
          <ThemeHeading
            defaultText="Blogs"
            themedText="物語 — Chronicles"
            className="section-heading inline-flex border-b border-gray-300 pb-2 text-4xl text-gray-900"
          />
          <Image
            src="/scroll-resume-removebg-preview.png"
            alt=""
            width={100}
            height={100}
            className="size-14 shrink-0 object-contain sm:size-24"
          />
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post, i) => (
          <Reveal key={post.href} delay={0.1 * (i + 1)}>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-full flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-0.5"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-gray-900 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                    {post.platform}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 transition group-hover:text-gray-600">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {post.description}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-gray-400 transition group-hover:text-gray-900">
                Read post
                <ArrowUpRight className="size-3.5" aria-hidden />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
