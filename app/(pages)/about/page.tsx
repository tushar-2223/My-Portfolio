import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import { AboutSection } from "@/components/AboutSection"
import { GitHubStats } from "@/components/GitHubStats"
import { SpotifySection } from "@/components/SpotifySection"
import { BooksSection } from "@/components/BooksSection"

export default function About() {
  const skills = [
    "React Native",
    "Flutter",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
  ]

  const experience = [
    {
      title: "Mobile App Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Developing cross-platform mobile applications using React Native and Flutter.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      description: "Built responsive web applications using React and modern frontend technologies.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-6xl">
          <AboutSection />
          {/* <GitHubStats /> */}
          <SpotifySection />
          <BooksSection />

  
        </div>
      </div>

      <Footer />
    </div>
  )
}
