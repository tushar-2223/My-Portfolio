"use client"

import { useRef, useEffect } from "react"

const CanvasRevealEffectDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const image = imageRef.current

    if (!canvas || !image) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const imageLoaded = () => {
      canvas.width = image.width
      canvas.height = image.height

      ctx.drawImage(image, 0, 0, image.width, image.height)

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        ctx.globalCompositeOperation = "destination-out"

        ctx.beginPath()
        ctx.arc(x, y, 20, 0, 2 * Math.PI)
        ctx.fill()
      }

      canvas.addEventListener("mousemove", handleMouseMove)

      return () => {
        canvas.removeEventListener("mousemove", handleMouseMove)
      }
    }

    if (image.complete) {
      return imageLoaded()
    } else {
      image.onload = imageLoaded
      return () => {
        image.onload = null
      }
    }
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1682685797527-99189472b948?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Revealable Image"
        style={{ display: "none" }}
      />
    </div>
  )
}

export default CanvasRevealEffectDemo
