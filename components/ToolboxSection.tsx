import { Card, CardContent } from "@/components/ui/card"

export const ToolboxSection = () => {
  const tools = [
    { name: "React Native", category: "Mobile Development", icon: "📱" },
    { name: "Flutter", category: "Mobile Development", icon: "🦋" },
    { name: "React", category: "Web Development", icon: "⚛️" },
    { name: "Next.js", category: "Web Development", icon: "▲" },
    { name: "TypeScript", category: "Programming Language", icon: "🔷" },
    { name: "JavaScript", category: "Programming Language", icon: "💛" },
    { name: "Firebase", category: "Backend", icon: "🔥" },
    { name: "Node.js", category: "Backend", icon: "💚" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "Git", category: "Version Control", icon: "📝" },
    { name: "Docker", category: "DevOps", icon: "🐳" },
  ]

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">My Toolbox</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="text-white font-medium mb-1">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
