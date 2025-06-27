import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactSection } from "@/components/ContactSection"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-20">
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}
