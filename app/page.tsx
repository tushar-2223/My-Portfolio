
import { HeroSection } from "@/components/HeroSection"
import { BlogSection } from "@/components/BlogSection"
import { ContactSection } from "@/components/ContactSection"
import { Button } from "@/components/ui/button"
import ProjectSection from "@/components/ProjectSection"
import ToolboxSection from "@/components/ToolboxSection"
import Link from "next/link"

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ProjectSection />
      <ToolboxSection />
      <BlogSection />
      <ContactSection />
    </div>
  )
}

export default Index
