"use client"

import { ExternalLink } from "lucide-react"

interface Project {
  id: string
  title: string
  url: string
  logoUrl: string
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative transition-all ease-in-out">
      {/* Back layer (purple) - positioned first so it's behind */}
      <div className="absolute h-32 w-full left-1.5 top-1.5 group-hover:left-2 group-hover:top-2 bg-zinc-900 group-hover:bg-[#b087ff] border border-zinc-700 group-hover:border-zinc-500 rounded-2xl transition-all ease-in-out shadow-xl group-hover:shadow-2xl"></div>

      {/* Middle layer (yellow) */}
      <div className="absolute h-32 w-full left-0 top-0 bg-zinc-900 group-hover:bg-[#ffd074] border border-zinc-700 rounded-2xl transition-all ease-in-out"></div>

      {/* Main card - on top */}
      <button
        type="button"
        className="relative flex justify-between px-8 rounded-2xl h-32 items-center bg-zinc-900 border border-zinc-700 hover:border-zinc-600 top-0 left-0 group-hover:-top-2 group-hover:-left-2 transition-all ease-in-out w-full shadow-lg hover:shadow-xl"
        onClick={() => window.open(`https://${project.url}`, "_blank")}
      >
        <div className="flex flex-col gap-1 text-start relative pr-4">
          <p className="text-xl font-bold text-white max-w-[20ch] leading-tight group-hover:text-white transition-colors">
            {project.title}
          </p>
          <p className="text-sm text-zinc-400 group-hover:text-blue-400 max-w-[25ch] overflow-hidden whitespace-nowrap truncate transition-colors">
            {project.url}
          </p>
        </div>

        <ExternalLink className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors flex-shrink-0" />
      </button>
    </div>
  )
}

export { ProjectCard }
