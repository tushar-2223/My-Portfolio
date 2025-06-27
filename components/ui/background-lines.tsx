"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface BackgroundLinesProps {
  children: React.ReactNode
  className?: string
}

export const BackgroundLines = ({ children, className }: BackgroundLinesProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `pulse ${Math.random() * 3 + 2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}
