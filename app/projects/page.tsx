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
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management Dashboard",
      description: "A collaborative task management tool with real-time updates and team collaboration features",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts and interactive maps",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "OpenWeather API", "Dart"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Chart.js", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design and smooth animations",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging and group chats",
      image: "/placeholder.svg?height=200&width=300",
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
                      <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
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
