"use client"

import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="border-t border-white/20 bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Tushar Pankhaniya</h3>
            <p className="text-white/60 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, functional web experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/tushar-2223" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/5">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/5">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/5">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Blog", "Toolbox", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="block text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>


        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">© 2024 Tushar Pankhaniya. All rights reserved.</p>
            <div className="flex items-center text-white/60 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-2 fill-current" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
