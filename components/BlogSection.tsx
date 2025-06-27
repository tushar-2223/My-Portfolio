import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export const BlogSection = () => {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Latest Blog Posts
            </h2>
            <p className="text-gray-400 text-lg">Thoughts, tutorials, and insights about web development</p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/5 bg-transparent">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group relative overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
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

                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>

                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No blog posts found. Create your first post in the content/blog directory.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
