import { Card } from "@/components/ui/card";

export const TechStackSection = () => {
  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "Figma", "VS Code"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Expo", "Firebase"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((stack, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <h3 className={`text-xl font-semibold bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}>
                  {stack.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-gray-800/50 rounded-full border border-gray-700/50 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
