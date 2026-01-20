"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardWithCorners } from "@/components/ui/card-with-corners"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2 } from "lucide-react"
import { toast } from "sonner"

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast.error("Failed to send message. Please try again later.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 h-full">
            <CardWithCorners className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/60">pankhaniyatushar9@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-600/20 rounded-lg">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/60">+91 9313346569</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-white/60">Anand, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white font-medium mb-4">Follow Me</p>
                <div className="flex space-x-4">
                  {/* TODO: Replace with your actual social media links */}
                  <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Github className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </CardWithCorners>
          </div>

          {/* Contact Form */}
          <div className="h-full">
            <CardWithCorners className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-400 focus:ring-blue-400/20"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-400 focus:ring-blue-400/20"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-400 focus:ring-blue-400/20"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-400 focus:ring-blue-400/20"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardWithCorners>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Tushar Pankhaniya. All rights reserved.
          </p>
          <p className="text-gray-600 mt-2">
            Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </section>
  )
}
