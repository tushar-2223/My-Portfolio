
import { ContactSection } from "@/components/ContactSection"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tushar Pankhaniya",
  description: "Get in touch with Tushar Pankhaniya. Let's talk about your project or just say hi.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">

      <div className="pt-20">
        <ContactSection />
      </div>

    </div>
  )
}
