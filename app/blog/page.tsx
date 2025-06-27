import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt:
      "Learn how to create scalable and maintainable web applications using the latest React features and TypeScript best practices.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Web Development"],
    author: "Tushar Pankhaniya",
  },
  {
    id: 2,
    title: "The Future of Frontend Development in 2024",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of frontend development, from AI integration to performance optimization.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Frontend", "Trends", "Technology"],
    author: "Tushar Pankhaniya",
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "A comprehensive guide to improving your Next.js application performance with practical tips and techniques.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Next.js", "Performance", "Optimization"],
    author: "Tushar Pankhaniya",
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development and technology
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300"
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
                    <span>by {post.author}</span>
                  </div>
                  <CardTitle className="text-white hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-gray-300">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
