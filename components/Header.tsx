"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Twitter, TwitterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Tech Stack", href: "/#tech" },
  ]

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "top-2" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">

          <div className="flex items-center justify-between w-full relative">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="TP Logo"
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <nav className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                    onMouseEnter={() => setHoveredPath(item.href)}
                    onMouseLeave={() => setHoveredPath(null)}
                  >
                    {item.name}
                    {item.href === hoveredPath && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-yellow-500 rounded-full"
                        layoutId="navbar-underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Icons (Right Side - Desktop Only) */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="https://github.com/tushar-2223"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/tushar2223"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <TwitterIcon className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
