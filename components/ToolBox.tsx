"use client"

interface Tool {
  id: string
  name: string
  icon: string
  url: string
  category?: string
}

interface ToolBoxProps {
  tools: Tool[]
  title?: string
  subtitle?: string
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group no-underline transition-all duration-500 hover:-translate-y-3"
    >
      <div className="group inline-block text-center">
        <div className="h-28 w-28 rounded-[20px] border border-zinc-700 bg-zinc-900 p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
          <div
            className="grid h-full place-items-center rounded-xl border-2 border-zinc-600/10 bg-zinc-800"
            style={{
              boxShadow: "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
            }}
          >
            <img
              className="h-10 w-10"
              alt={tool.name}
              src={tool.icon || "/placeholder.svg"}
              onError={(e) => {
                e.currentTarget.src = `/placeholder.svg?height=40&width=40`
              }}
            />
          </div>
        </div>
        <p className="mt-3 text-sm text-zinc-400 group-hover:text-white transition-colors">{tool.name}</p>
      </div>
    </a>
  )
}

export function ToolBox({ tools, title = "Toolbox", subtitle }: ToolBoxProps) {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        </div>

        {/* Tools Grid */}
        <div className="relative grid grid-cols-3 place-items-center md:grid-cols-4 lg:grid-cols-8 lg:gap-6 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  )
}
