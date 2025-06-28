import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured mobile e-commerce application built with React Native and Firebase",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management Dashboard",
      description: "A collaborative task management tool with real-time updates and team collaboration features",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts and interactive maps",
      image: "/placeholder.svg",
      technologies: ["Flutter", "OpenWeather API", "Dart"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Chart.js", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design and smooth animations",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging and group chats",
      image: "/placeholder.svg",
      technologies: ["React", "Socket.io", "Express"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects I've worked on, showcasing my skills in mobile and web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4"></div>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-800/50 rounded border border-gray-700/50 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-white/5 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
