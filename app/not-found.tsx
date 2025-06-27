"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route")
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-4">Oops! Page not found</p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700">Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
