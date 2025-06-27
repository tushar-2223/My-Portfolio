import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tushar Pankhaniya - Mobile App Developer",
  description:
    "Passionate mobile application developer with 1+ year experience building innovative applications with React Native and Flutter.",
  keywords: ["React Native", "Flutter", "Mobile Development", "Portfolio"],
  authors: [{ name: "Tushar Pankhaniya" }],
  openGraph: {
    title: "Tushar Pankhaniya - Mobile App Developer",
    description:
      "Passionate mobile application developer with 1+ year experience building innovative applications with React Native and Flutter.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
