"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Twitter, TwitterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Toolbox", href: "/toolbox" },
  ]

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${isScrolled ? "top-2" : ""}`}>
      <nav className="container mx-auto">
        <div className="bg-slate-600/20 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">TP</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-sm"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-xl p-1">
              <motion.a 
                href="https://github.com/tushar-2223" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 w-8 h-8"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </motion.a>
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 w-8 h-8"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </motion.a>
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 w-8 h-8"
                >
                  <TwitterIcon className="h-4 w-4" />
                </Button>
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/5 w-8 h-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-sm block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-2 mt-4 pt-4 border-t border-white/10">
                <a href="https://github.com/tushar-2223" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/70 hover:text-white hover:bg-white/10 w-8 h-8"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/70 hover:text-white hover:bg-white/10 w-8 h-8"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/70 hover:text-white hover:bg-white/10 w-8 h-8"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
