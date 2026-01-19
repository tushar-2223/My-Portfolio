import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin, Github, Twitter as TwitterIcon } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-black">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 pt-24 min-h-screen bg-black">
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight tracking-tight font-[family-name:var(--font-geist-sans)]">
            Hey, I'm Tushar
            <br />
            Welcome to my corner of the internet!
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light font-[family-name:var(--font-geist-sans)]">
            I am a mobile application developer with 1+ year experience building cool applications with React Native and Flutter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="/resume.pdf" download className="inline-block">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 font-medium font-[family-name:var(--font-geist-sans)] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Buttons - Mobile Only */}
          <div className="flex justify-center gap-6 mb-16 md:hidden">
            <a href="https://github.com/tushar-2223" target="_blank" rel="noopener noreferrer" className="group p-3 bg-zinc-900 border border-zinc-700 rounded-xl hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
              <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/tushar2223" target="_blank" rel="noopener noreferrer" className="group p-3 bg-zinc-900 border border-zinc-700 rounded-xl hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
              <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="group p-3 bg-zinc-900 border border-zinc-700 rounded-xl hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300">
              <TwitterIcon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-white/50 mx-auto" />
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};
