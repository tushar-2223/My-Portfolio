import { Card } from "@/components/ui/card";
import { TimelineSection } from "@/components/TimelineSection";
import { BentoGrid } from "@/components/BentoGrid";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating beautiful, functional applications that solve real-world problems 
                  and provide exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, reading tech blogs, 
                  or contributing to open-source projects. I believe in continuous learning and 
                  staying up-to-date with the latest industry trends.
                </p>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/11fbb0e8-1bdd-4b40-8bd2-0f395e755a89.png" 
                  alt="Tushar Pankhaniya - Full Stack Developer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20">
          <TimelineSection />
        </div>

        {/* Bento Grid Section */}
        <div className="mt-20">
          <BentoGrid />
        </div>
      </div>
    </section>
  );
};
