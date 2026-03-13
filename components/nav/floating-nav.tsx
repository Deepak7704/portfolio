"use client";

import { ArrowUpRight, Calendar, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const BASE_ITEMS: NavItem[] = [
  { id: "about", label: "about", href: "#about" },
  { id: "work", label: "work", href: "#work" },
  { id: "projects", label: "projects", href: "#projects" },
];

const SECTION_OFFSET = 140;

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeRef = useRef(activeSection);
  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScrollState();
    window.addEventListener("scroll", handleScrollState, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  const handleNavPress = (sectionId: string, closeMenu?: boolean) => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(sectionId);
      if (section) {
        const target =
          section.getBoundingClientRect().top + window.scrollY - SECTION_OFFSET;
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    }
    setActiveSection(sectionId);
    if (closeMenu) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-section]")
    );
    if (!sections.length) return;

    let ticking = false;

    const updateCurrentSection = () => {
      ticking = false;
      let closestId = sections[0]?.id ?? "about";
      let minDistance = Number.POSITIVE_INFINITY;
      sections.forEach((section) => {
        const distance = Math.abs(
          section.getBoundingClientRect().top - SECTION_OFFSET
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestId = section.id;
        }
      });
      if (closestId && closestId !== activeRef.current) {
        activeRef.current = closestId;
        setActiveSection(closestId);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateCurrentSection);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const navItems = useMemo(() => BASE_ITEMS, []);

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden md:block">
        <nav
          className={cn(
            "animate-navReveal fixed inset-x-4 top-4 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full border px-3 py-2 text-sm text-gray-600 shadow-sm transition-all duration-500",
            scrolled
              ? "border-white/20 bg-white/30 shadow-lg backdrop-blur-xl"
              : "border-gray-200 bg-white shadow-sm"
          )}
          aria-label="Site navigation"
        >
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  target="_self"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavPress(item.id);
                  }}
                  className={cn(
                    "relative flex h-9 items-center rounded-full px-4 font-medium capitalize text-gray-500 transition-colors duration-300",
                    isActive && "text-gray-900"
                  )}
                >
                  <span className="mr-1 text-gray-400">/</span>
                  {item.label}
                  {isActive && (
                    <motion.span
                      aria-hidden
                      layoutId="navHighlight"
                      className="absolute inset-0 -z-10 hidden rounded-full bg-gray-100 sm:block"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://cal.com/veluvoludeepak/30min?overlayCalendar=true"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
            >
              <Calendar className="size-3.5" aria-hidden />
              Meet
            </a>
            <a
              href="https://drive.google.com/file/d/1TfKXal7HvtkOFfynnhNB4ma5UzBcoCOF/view"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
            >
              Resume
              <ArrowUpRight className="size-3" aria-hidden />
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile hamburger button */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          className="fixed right-4 top-4 z-50 inline-flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
        >
          <Menu className="size-5" aria-hidden />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/60 backdrop-blur-sm transition-opacity duration-300",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed inset-x-4 top-20 z-50 rounded-3xl border border-gray-200 bg-white p-4 shadow-lg md:hidden",
          "transition-all duration-300",
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="flex items-center justify-between pb-3">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Navigate
          </p>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>
        <ul className="flex flex-col divide-y divide-gray-100 text-sm font-medium">
          {navItems.map((item) => (
            <li key={`mobile-${item.id}`}>
              <Link
                href={item.href}
                className="flex items-center justify-between py-3 text-gray-500 transition-colors hover:text-gray-900"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavPress(item.id, true);
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-400">/</span>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-col gap-2">
          <a
            href="https://cal.com/veluvoludeepak/30min?overlayCalendar=true"
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-full items-center justify-center gap-1.5 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
          >
            <Calendar className="size-3.5" aria-hidden />
            Meet
          </a>
          <a
            href="https://drive.google.com/file/d/1TfKXal7HvtkOFfynnhNB4ma5UzBcoCOF/view"
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-full items-center justify-center gap-1.5 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
          >
            Resume
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </>
  );
}
