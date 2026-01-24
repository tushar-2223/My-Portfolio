
import { HeroSection } from "@/components/HeroSection"
import { ContactSection } from "@/components/ContactSection"
import ProjectSection from "@/components/ProjectSection"
import { TechStackSection } from "@/components/TechStackSection"
import { AboutSection } from "@/components/AboutSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { BlogSection } from "@/components/BlogSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </div>
  )
}

export default Index
