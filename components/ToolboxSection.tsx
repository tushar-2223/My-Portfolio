import { ToolBox } from "./ToolBox";

interface Tool {
  id: string
  name: string
  icon: string
  url: string
  category?: string
}

export default function ToolboxSection() {
  const developmentTools: Tool[] = [
    {
      id: "1",
      name: "VS Code",
      icon: "https://code.visualstudio.com/assets/images/code-stable.png",
      url: "https://code.visualstudio.com/",
    },
    {
      id: "2",
      name: "React",
      icon: "https://reactjs.org/logo-og.png",
      url: "https://reactjs.org/",
    },
    {
      id: "3",
      name: "Next.js",
      icon: "https://nextjs.org/static/favicon/favicon-32x32.png",
      url: "https://nextjs.org/",
    },
    {
      id: "4",
      name: "TypeScript",
      icon: "https://www.typescriptlang.org/favicon-32x32.png",
      url: "https://www.typescriptlang.org/",
    },
    {
      id: "5",
      name: "Tailwind",
      icon: "https://tailwindcss.com/favicons/favicon-32x32.png",
      url: "https://tailwindcss.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "https://static.figma.com/app/icon/1/favicon.png",
      url: "https://www.figma.com/",
    },
    {
      id: "7",
      name: "GitHub",
      icon: "https://github.com/favicon.ico",
      url: "https://github.com/",
    },
    {
      id: "8",
      name: "Vercel",
      icon: "https://vercel.com/favicon.ico",
      url: "https://vercel.com/",
    },
    {
      id: "9",
      name: "Node.js",
      icon: "https://nodejs.org/static/images/favicons/favicon-32x32.png",
      url: "https://nodejs.org/",
    },
    {
      id: "10",
      name: "MongoDB",
      icon: "https://www.mongodb.com/assets/images/global/favicon.ico",
      url: "https://www.mongodb.com/",
    },
    {
      id: "11",
      name: "Prisma",
      icon: "https://www.prisma.io/images/favicon-32x32.png",
      url: "https://www.prisma.io/",
    },
    {
      id: "12",
      name: "Supabase",
      icon: "https://supabase.com/favicon/favicon-32x32.png",
      url: "https://supabase.com/",
    },
  ]

  return (
    <ToolBox
      tools={developmentTools}
      title="My Toolbox"
      subtitle="Hardware && software I keep in my development arsenal"
    />
  )
}
