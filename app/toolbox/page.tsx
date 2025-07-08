import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ToolBox } from "@/components/ToolBox"

export default function Toolbox() {
  const tools = [
    {
      id: "1",
      name: "Raycast",
      icon: "https://www.raycast.com/favicon-32x32.png",
      url: "https://www.raycast.com/",
    },
    {
      id: "2",
      name: "Arc",
      icon: "https://arc.net/favicon.ico",
      url: "https://arc.net/",
    },
    {
      id: "3",
      name: "VSCode",
      icon: "https://code.visualstudio.com/assets/images/code-stable.png",
      url: "https://code.visualstudio.com/",
    },
    {
      id: "4",
      name: "mymind",
      icon: "https://mymind.com/favicon.ico",
      url: "https://mymind.com/",
    },
    {
      id: "5",
      name: "Obsidian",
      icon: "https://obsidian.md/favicon.ico",
      url: "https://obsidian.md/",
    },
    {
      id: "6",
      name: "Notion",
      icon: "https://www.notion.so/favicon.ico",
      url: "https://www.notion.so/",
    },
    {
      id: "7",
      name: "Tana",
      icon: "https://tana.inc/favicon.ico",
      url: "https://tana.inc/",
    },
    {
      id: "8",
      name: "Spotify",
      icon: "https://open.spotify.com/favicon.ico",
      url: "https://open.spotify.com/",
    },
    {
      id: "9",
      name: "Figma",
      icon: "https://static.figma.com/app/icon/1/favicon.png",
      url: "https://www.figma.com/",
    },
    {
      id: "10",
      name: "Things 3",
      icon: "https://culturedcode.com/things/mac/icon.png",
      url: "https://culturedcode.com/things/",
    },
    {
      id: "11",
      name: "Fantastical",
      icon: "https://flexibits.com/fantastical/favicon.ico",
      url: "https://flexibits.com/fantastical",
    },
    {
      id: "12",
      name: "1Password",
      icon: "https://1password.com/favicon.ico",
      url: "https://1password.com/",
    },
    {
      id: "13",
      name: "Framer",
      icon: "https://framer.com/favicon.ico",
      url: "https://framer.com/",
    },
    {
      id: "14",
      name: "Cleanshot X",
      icon: "https://cleanshot.com/favicon.ico",
      url: "https://cleanshot.com/",
    },
    {
      id: "15",
      name: "PixelSnap 2",
      icon: "https://getpixelsnap.com/favicon.ico",
      url: "https://getpixelsnap.com/",
    },
    {
      id: "16",
      name: "Linear",
      icon: "https://linear.app/favicon.ico",
      url: "https://linear.app/",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-32 pb-20">
        <div className="text-center mb-16 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hardware && software
            <br />I keep in my toolbox.
          </h1>
        </div>

        <ToolBox tools={tools} title="Applications" subtitle="" />
      </div>

      <Footer />
    </div>
  )
}
