"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Loader2 } from "lucide-react"
import { CardWithCorners } from "@/components/ui/card-with-corners"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogPost } from "@/types/blog"
import { formatDistanceToNow } from "date-fns"

export function BlogSection() {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/api/blog")
                if (!response.ok) throw new Error("Failed to fetch")
                const blogPosts = await response.json()
                setPosts(blogPosts.slice(0, 3))
            } catch (error) {
                console.error("Error fetching blog posts:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return (
        <section id="blog" className="py-20 px-6 bg-black">
            <div className="container mx-auto max-w-6xl">
                {/* Heading */}
                <div className="flex items-center justify-between mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Latest Blog Posts
                        </h2>
                        <p className="text-white/60 text-lg">Thoughts, tutorials, and insights about web development</p>
                    </div>

                    <Link href="/blog">
                        <Button
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                        >
                            View All Posts
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                {/* Loading state */}
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                    </div>
                )}

                {/* Empty-state */}
                {!loading && posts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-white/60 text-lg">
                            No blog posts found.
                        </p>
                    </div>
                )}

                {/* Posts grid */}
                {!loading && posts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`}>
                                <CardWithCorners className="group cursor-pointer h-full hover:scale-105 transition-all duration-300 hover:border-white/40">
                                    {/* Cover image */}
                                    <div className="aspect-video overflow-hidden rounded-lg mb-4 -mx-6 -mt-6">
                                        <img
                                            src={post.coverImage || "/placeholder.jpg"}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        {/* Meta */}
                                        <div className="flex items-center justify-between text-sm text-white/50">
                                            <span className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                {new Date(post.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="h-4 w-4 mr-1" />3 min
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Summary */}
                                        <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                                            {post.summary}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.slice(0, 3).map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="bg-white/10 text-white/80 hover:bg-white/20 border border-white/20 text-xs"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Author & CTA */}
                                        <div className="flex items-center justify-between pt-2">
                                            <span className="flex items-center text-white/50 text-sm">
                                                <User className="h-3 w-3 mr-1" />
                                                {post.author?.name ?? "Tushar Pankhaniya"}
                                            </span>

                                            <span className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                                                Read More
                                                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                            </span>
                                        </div>
                                    </div>
                                </CardWithCorners>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default BlogSection
