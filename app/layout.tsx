import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] })

export const metadata: Metadata = {
  title: "Tushar Pankhaniya - Portfolio",
  description: "Mobile Application Developer specializing in React Native and Flutter",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
