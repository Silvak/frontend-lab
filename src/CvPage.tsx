import { AboutSection } from "@/components/cv/AboutSection"
import { EducationSection } from "@/components/cv/EducationSection"
import { ExperienceSection } from "@/components/cv/ExperienceSection"
import { Hero } from "@/components/cv/Hero"
import { ProjectsSection } from "@/components/cv/ProjectsSection"
import { SiteFooter } from "@/components/cv/SiteFooter"
import { SiteHeader } from "@/components/cv/SiteHeader"
import { TechStackSection } from "@/components/cv/TechStackSection"

export function CvPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4">
        <Hero />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SiteFooter />
      </main>
    </div>
  )
}
