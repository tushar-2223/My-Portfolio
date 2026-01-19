import { Card } from "@/components/ui/card";

export const TechStackSection = () => {
  const categories = [
    {
      title: "Mobile Tech Stack",
      technologies: ["React Native", "Flutter", "Dart", "Swift", "Kotlin", "Expo", "Reanimated 3"],
      class: "group-hover:bg-[#b087ff] group-hover:border-zinc-500", // Purple
    },
    {
      title: "Web Tech Stack",
      technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      class: "group-hover:bg-[#ffd074] group-hover:border-zinc-500", // Yellow
    },
    {
      title: "Tools & Libraries",
      technologies: ["Firebase", "Redux", "RxDart", "Google Gemini", "Git", "Figma", "VS Code"],
      class: "group-hover:bg-blue-500 group-hover:border-blue-400", // Blue
    }
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I use to build seamless experiences
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white/90 mb-8 tracking-wide">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-6">
                {category.technologies.map((tech, index) => (
                  <div key={index} className="group inline-block text-center">
                    <div className={`h-24 w-24 rounded-[20px] border border-zinc-800 bg-zinc-900/50 p-2 transition-all duration-500 group-hover:-translate-y-3 ${category.class.replace('group-hover:bg-[#b087ff]', 'group-hover:border-[#b087ff]').replace('group-hover:bg-[#ffd074]', 'group-hover:border-[#ffd074]').replace('group-hover:bg-blue-500', 'group-hover:border-blue-500')}`}>
                      <div className="grid h-full place-items-center rounded-xl border border-white/5 bg-zinc-800/50 shadow-inner custom-inset-shadow">
                        {/* Icon Placeholder */}
                        <span className="text-2xl font-bold text-white/50 group-hover:text-white transition-colors duration-300">
                          {tech.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
