import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import { BackgroundLines } from "@/components/ui/background-lines"

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
            I am a mobile application developer with 1+ year experience building cool applications with React Native and
            Flutter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-8 py-3 font-medium font-[family-name:var(--font-geist-sans)]"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/5 px-8 py-3 font-medium font-[family-name:var(--font-geist-sans)]"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-white/50 mx-auto" />
          </div>
        </div>
      </BackgroundLines>
    </section>
  )
}
