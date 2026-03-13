import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  href?: string;
};

const certifications: Certification[] = [
  {
    title: "CS50 Web Programming with Python and JavaScript",
    issuer: "Harvard University",
    year: "2024",
    href: "https://certificates.cs50.io/b671587f-fad2-4234-91f6-4f42fb18c7f8.pdf?size=letter",
  },
  {
    title: "Google Project Management",
    issuer: "Google",
    year: "2024",
    href: "https://www.coursera.org/account/accomplishments/verify/EBUJCS84GXCG",
  },
  {
    title: "Google Cloud Certification",
    issuer: "Google Cloud",
    year: "2024",
    href: "https://www.skills.google/public_profiles/ee0166d0-f0b1-4879-ba30-0db87be6ef12",
  },
  {
    title: "IELTS — C1 CEFR Level, Band 7",
    issuer: "IELTS",
    year: "2024",
  },
];

export function CertificationsSection() {
  return (
    <section className="space-y-6 border-y border-dashed border-gray-200 py-10">
      <Reveal>
        <div className="flex items-center justify-between">
          <h2 className="section-heading inline-flex border-b border-gray-300 pb-2 text-4xl text-gray-900">
            Certifications
          </h2>
          <Image
            src="/coin-removebg-preview.png"
            alt=""
            width={100}
            height={100}
            className="size-14 shrink-0 object-contain sm:size-24"
          />
        </div>
      </Reveal>
      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={0.1 * (i + 1)}>
            <article className="flex items-start gap-3 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
              <div className="mt-0.5 shrink-0">
                <Image
                  src="/coin-removebg-preview.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-8 shrink-0 object-contain sm:size-10"
                />
              </div>
              <div className="min-w-0">
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-1 text-sm font-semibold text-gray-900 transition hover:text-gray-600"
                  >
                    {cert.title}
                    <ArrowUpRight className="size-3 shrink-0 opacity-50 transition group-hover:opacity-100" />
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-gray-900">{cert.title}</p>
                )}
                <p className="mt-0.5 text-xs text-gray-500">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
