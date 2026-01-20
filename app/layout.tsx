import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Header } from "@/components/Header"
import { PageTransition } from "@/components/PageTransition"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Tushar Pankhaniya - Mobile Application Developer",
  description: "The portfolio of Tushar Pankhaniya, a Mobile Application Developer specializing in React Native and Flutter, showcasing projects and blog posts.",
  keywords: ["Tushar Pankhaniya", "Portfolio", "React Native Developer", "Flutter Developer", "Mobile App Developer"],
  openGraph: {
    title: "Tushar Pankhaniya - Mobile Application Developer",
    description: "The portfolio of Tushar Pankhaniya, a Mobile Application Developer specializing in React Native and Flutter, showcasing projects and blog posts.",
    url: "https://tusharpankhaniya.vercel.app", // Replace with your actual domain
    siteName: "Tushar Pankhaniya's Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter`}>
        <Providers>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
