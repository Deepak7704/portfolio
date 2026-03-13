import Image from "next/image";
import { FloatingNav } from "@/components/nav/floating-nav";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { IntroSection } from "@/components/sections/intro";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <FloatingNav />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 pb-16 pt-24 md:pt-32 sm:px-6 lg:px-8">
        <IntroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer card */}
      <footer className="mx-auto w-full max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
          <Image
            src="/tanjiro_footer.jpg"
            alt="Tanjiro overlooking the mountains"
            width={1200}
            height={500}
            className="h-56 w-full object-cover object-center sm:h-72 md:h-80"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p
              className="text-xs font-medium uppercase tracking-[0.3em] text-white/60"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              ヴェルヴォル ディーパク — Veluvolu Deepak
            </p>
            <p
              className="mt-1 text-lg font-semibold text-white sm:text-xl"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              偉大さは障壁の向こうに待っている
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
