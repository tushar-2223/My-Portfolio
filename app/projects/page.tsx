"use client"

import { useState } from "react"

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

const ProjectCard = ({
  project,
  index,
}: {
  project: any
  index: number
}) => {
  const [hovered, setHovered] = useState(false)

  const canvasColors = [
    [
      [59, 130, 246],
      [147, 51, 234],
    ], // Blue to Purple
    [
      [34, 197, 94],
      [59, 130, 246],
    ], // Green to Blue
    [
      [236, 72, 153],
      [168, 85, 247],
    ], // Pink to Purple
    [
      [249, 115, 22],
      [239, 68, 68],
    ], // Orange to Red
    [
      [14, 165, 233],
      [34, 197, 94],
    ], // Sky to Green
    [
      [168, 85, 247],
      [236, 72, 153],
    ], // Purple to Pink
  ]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative border border-white/20 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full"
    >
      {/* Corner Icons */}
      <div className="absolute h-6 w-6 -top-3 -left-3 text-white/40 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </div>
      <div className="absolute h-6 w-6 -bottom-3 -left-3 text-white/40 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </div>
      <div className="absolute h-6 w-6 -top-3 -right-3 text-white/40 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </div>
      <div className="absolute h-6 w-6 -bottom-3 -right-3 text-white/40 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </div>

      {/* Canvas Reveal Effect */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={canvasColors[index % canvasColors.length]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
          </motion.div>
        )}
      </AnimatePresence>

      <CardHeader className="relative z-20">
        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
        <CardTitle className="text-white group-hover:text-white transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-300 group-hover:text-white/90 transition-colors duration-300">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-20">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-gray-800/50 rounded border border-gray-700/50 text-gray-400 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent group-hover:border-white/40 group-hover:text-white transition-all duration-300"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 group-hover:bg-white group-hover:text-black transition-all duration-300"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Button>
        </div>
      </CardContent>
    </div>
  )
}

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
      

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects I've worked on, showcasing my skills in mobile and web development. Hover over
              each card to see the interactive effects!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      
    </div>
  )
}
