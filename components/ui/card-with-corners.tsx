"use client"

import React from "react"
import { cn } from "@/lib/utils"

const CardWithCorners = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative border border-white/[0.2] bg-black/50 backdrop-blur-sm rounded-lg p-6", className)}
      {...props}
    >
      {/* Corner Icons */}
      <CornerIcon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <CornerIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <CornerIcon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <CornerIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      {children}
    </div>
  ),
)
CardWithCorners.displayName = "CardWithCorners"

const CornerIcon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}

export { CardWithCorners, CornerIcon }
