"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, ArrowRight, User, BookOpen } from "lucide-react"
import type { BlogPost } from "@/lib/blog-utils"

// Client-side fetch function
async function fetchAllPosts(): Promise<BlogPost[]> {
  try {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://your-domain.com" // Replace with your actual domain
        : "http://localhost:3000"

    const res = await fetch(`${baseUrl}/api/posts`)
    if (!res.ok) throw new Error("Failed to fetch posts")
    return res.json()
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer h-full overflow-hidden">
          {post.image && (
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          <div className="p-6 space-y-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/30"
                >
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 2 && (
                <Badge variant="secondary" className="bg-white/10 text-white/60 border-white/20">
                  +{post.tags.length - 2}
                </Badge>
              )}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-white/70 line-clamp-3 leading-relaxed">{post.excerpt}</p>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-white/60">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readingTime}
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <time className="text-sm text-white/60 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                Read more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </article>
  )
}

export default function BlogClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchAllPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error("Error loading posts:", error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Blog
              </h1>
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-white/10 rounded w-1/2 mx-auto"></div>
                <div className="h-10 bg-white/10 rounded max-w-md mx-auto"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <div className="aspect-video bg-white/10"></div>
                    <div className="p-6 space-y-4">
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-white/10 rounded"></div>
                        <div className="h-6 w-20 bg-white/10 rounded"></div>
                      </div>
                      <div className="h-6 bg-white/10 rounded"></div>
                      <div className="h-16 bg-white/10 rounded"></div>
                      <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

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
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, and everything in between.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/20 text-white placeholder-white/40 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="h-16 w-16 text-white/20 mx-auto mb-6" />
              <p className="text-white/60 text-lg">
                {searchTerm
                  ? `No posts found matching "${searchTerm}".`
                  : "No blog posts found. Create some MDX files in the /content/blog directory."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
