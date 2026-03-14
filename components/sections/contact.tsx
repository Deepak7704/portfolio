"use client";

import Image from "next/image";
import { Calendar, Check, Copy } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { ThemeHeading } from "@/components/ui/theme-heading";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("deepakveluvolu9@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      data-nav-section
      className="space-y-6 border-y border-dashed border-gray-200 py-10"
    >
      <Reveal>
        <div className="flex items-center justify-between">
          <ThemeHeading
            defaultText="Ready to collaborate?"
            themedText="共に斬る — Ready to slay together?"
            className="section-heading inline-flex border-b border-gray-300 pb-2 text-3xl text-gray-900 sm:text-4xl"
          />
          <Image
            src="/scroll-resume-removebg-preview.png"
            alt=""
            width={100}
            height={100}
            className="size-10 shrink-0 object-contain sm:size-24"
          />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="max-w-xl text-xs text-gray-500 sm:text-sm">
          Whether it&apos;s a full-stack product, an AI agent, or a complex system you&apos;re trying to ship — I&apos;m happy to build it with you. Drop a line and let&apos;s talk.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-3">
          {/* Email copy button */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-gray-900 hover:text-gray-900 sm:w-auto sm:inline-flex"
            >
              deepakveluvolu9@gmail.com
              {copied ? (
                <Check className="size-4 text-green-500" aria-hidden />
              ) : (
                <Copy className="size-4 opacity-50" aria-hidden />
              )}
            </button>
            {copied && (
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white shadow-md">
                Copied to clipboard!
              </span>
            )}
          </div>

          {/* Book a call */}
          <a
            href="https://cal.com/veluvoludeepak/30min?overlayCalendar=true"
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-gray-900 hover:text-gray-900 sm:w-auto sm:inline-flex"
          >
            <Calendar className="size-4" aria-hidden />
            Book a call
          </a>
        </div>
      </Reveal>
    </section>
  );
}
