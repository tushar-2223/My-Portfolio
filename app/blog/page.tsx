"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, ArrowRight, User } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const posts = getAllPosts()

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, and everything in between.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/40 border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <div className="space-y-6">
                    {/* Image */}
                    {post.image && (
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readingTime}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-300 leading-relaxed">{post.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>

                      <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                {searchTerm ? `No posts found matching "${searchTerm}".` : "No blog posts found."}
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
