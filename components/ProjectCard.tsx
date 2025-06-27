import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface Project {
  id: string
  title: string
  url: string
  logoUrl: string
}

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative">
      <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
            <Image
              src={project.logoUrl || "/placeholder.svg"}
              alt={project.title}
              width={40}
              height={40}
              className="rounded"
            />
          </div>
        </div>

        <h3 className="text-white font-semibold text-lg mb-2 text-center group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <div className="flex items-center justify-center text-gray-400 text-sm">
          <ExternalLink className="w-4 h-4 mr-1" />
          <span className="truncate">{project.url}</span>
        </div>
      </div>
    </div>
  )
}
