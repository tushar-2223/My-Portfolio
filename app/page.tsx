
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

      {/* Brief About Me Section */}
      <section className="py-20 px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm a passionate mobile application developer with 1+ year of experience building innovative applications
            with React Native and Flutter. I love creating beautiful, functional apps that solve real-world problems and
            provide exceptional user experiences.
          </p>
          <Link href="/about">
            <Button className="bg-blue-600 hover:bg-blue-700">Learn More About Me</Button>
          </Link>
        </div>
      </section>

      <ProjectSection />
      <ToolboxSection />
      <BlogSection />
      <ContactSection />
    </div>
  )
}

export default Index
