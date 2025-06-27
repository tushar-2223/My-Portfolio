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
        <div className="container mx-auto max-w-4xl">
          <AboutSection />
          <GitHubStats />
          <SpotifySection />
          <BooksSection />

          {/* Bio Section */}
          <Card className="bg-gray-900/50 border-gray-700 mb-12">
            <CardHeader>
              <CardTitle className="text-white">My Story</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                I'm a passionate mobile application developer with over a year of experience in creating innovative and
                user-friendly applications. My journey in tech started with a curiosity about how mobile apps work,
                which led me to dive deep into React Native and Flutter development.
              </p>
              <p>
                I love the challenge of turning ideas into reality through code, and I'm constantly learning new
                technologies to stay at the forefront of mobile development. When I'm not coding, you can find me
                exploring new design patterns, contributing to open-source projects, or sharing my knowledge through
                blog posts.
              </p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="bg-gray-900/50 border-gray-700 mb-12">
            <CardHeader>
              <CardTitle className="text-white">Skills & Technologies</CardTitle>
              <CardDescription className="text-gray-400">Technologies I work with on a regular basis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Experience</CardTitle>
              <CardDescription className="text-gray-400">My professional journey so far</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-6 pb-6 last:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4 text-blue-400" />
                      <h3 className="text-white font-semibold">{exp.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
