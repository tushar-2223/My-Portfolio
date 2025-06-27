import { ProjectCard } from "@/components/ProjectCard"
import { AnimatedDotBackground } from "@/components/ui/animated-dot-background"

export const ProjectSection = () => {
  const projects = [
    {
      id: "1",
      title: "E-Commerce Mobile App",
      url: "github.com/tushar/ecommerce-app",
      logoUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      title: "Task Management Dashboard",
      url: "github.com/tushar/task-manager",
      logoUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "3",
      title: "Weather App",
      url: "github.com/tushar/weather-app",
      logoUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "4",
      title: "Social Media Dashboard",
      url: "github.com/tushar/social-dashboard",
      logoUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "5",
      title: "Portfolio Website",
      url: "github.com/tushar/portfolio",
      logoUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "6",
      title: "Chat Application",
      url: "github.com/tushar/chat-app",
      logoUrl: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative">
      <AnimatedDotBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header section like the uploaded image */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white uppercase tracking-tight">
            PROJECTS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of tools and applications I've built to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
