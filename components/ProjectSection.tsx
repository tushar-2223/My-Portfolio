import React from 'react'
import { ProjectCard } from './ProjectCard'
import { ExternalLink } from 'lucide-react'
import { AnimatedDotBackground } from './ui/animated-dot-background'

const ProjectSection = () => {

    const projects = [
    {
      id: "1",
      title: "E-Commerce Mobile App",
      url: "github.com/tushar/ecommerce-app",
      logoUrl: "/placeholder.svg",
    },
    {
      id: "2",
      title: "Task Management Dashboard",
      url: "github.com/tushar/task-manager",
      logoUrl: "/placeholder.svg",
    },
    {
      id: "3",
      title: "Weather App",
      url: "github.com/tushar/weather-app",
      logoUrl: "/placeholder.svg",
    },
    {
      id: "4",
      title: "Social Media Dashboard",
      url: "github.com/tushar/social-dashboard",
      logoUrl: "/placeholder.svg",
    },
    {
      id: "5",
      title: "Portfolio Website",
      url: "github.com/tushar/portfolio",
      logoUrl: "/placeholder.svg",
    },
    {
      id: "6",
      title: "Chat Application",
      url: "github.com/tushar/chat-app",
      logoUrl: "/placeholder.svg",
    },
  ];

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

                <div className="flex justify-center mt-16">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 justify-center items-center text-zinc-500 hover:text-white transition-all ease-linear group"
                        aria-label="Visit GitHub to see more projects"
                    >
                        <span className="text-lg font-medium">Visit GitHub to see More</span>
                        <ExternalLink
                            className="w-5 h-5 stroke-1.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection