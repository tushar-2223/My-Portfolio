import type { Metadata } from "next";
import {Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

//Add more metadata for SEO
export const metadata: Metadata = {
  title: "Tushar Pankhaniya",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <Navbar />
          <div className='lg:ml-[18rem]'>
            {/* background color */}
            <div className='h-60 w-60 lg:h-80 lg:w-80 rounded-full bg-gradient-to-r from-blue-800/40 to-purple-800/40 absolute -z-10 blur-3xl'></div>
            <div className='invisible lg:visible h-60 w-60 lg:h-80 lg:w-80 bottom-0 right-0 rounded-full bg-gradient-to-r from-blue-800/40 to-green-500/40 absolute -z-10 blur-3xl translate-y-4'></div>
            <div className='max-w-2xl lg:max-w-6xl mx-auto'>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
