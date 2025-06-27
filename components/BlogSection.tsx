import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React and TypeScript",
      excerpt:
        "Learn how to create scalable and maintainable web applications using the latest React features and TypeScript best practices.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Web Development"],
    },
    {
      id: 2,
      title: "The Future of Frontend Development in 2024",
      excerpt:
        "Exploring the latest trends and technologies shaping the future of frontend development, from AI integration to performance optimization.",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Frontend", "Trends", "Technology"],
    },
    {
      id: 3,
      title: "Optimizing Performance in Next.js Applications",
      excerpt:
        "A comprehensive guide to improving your Next.js application performance with practical tips and techniques.",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Next.js", "Performance", "Optimization"],
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-white group-hover:text-blue-400 transition-colors">{post.title}</CardTitle>
                <CardDescription className="text-gray-300">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700">View All Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
