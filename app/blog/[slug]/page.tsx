import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { type BlogPost, extractTableOfContents } from "@/lib/blog-utils"

interface BlogPostProps {
  params: {
    slug: string
  }
}

// Server-side data fetching for individual post
async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NODE_ENV === "production"
        ? "https://your-domain.com" // Replace with your actual domain
        : "http://localhost:3000"

    const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
      next: { revalidate: 600 },
    })

    if (!res.ok) {
      if (res.status === 404) {
        return null
      }
      throw new Error("Failed to fetch post")
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const post = await fetchBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const tableOfContents = extractTableOfContents(post.content)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Navigation */}
          <nav className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5 p-0 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to blog
              </Button>
            </Link>
          </nav>

          <article>
            <header className="mb-12">
              {/* Featured Image */}
              {post.image && (
                <div className="aspect-video relative mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/30 rounded-full px-4 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8 text-sm">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span className="font-medium">By {post.author}</span>
                </div>
                <span className="text-white/40">•</span>
                <time className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-white/40">•</span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="bg-white/10 px-2 py-1 rounded text-sm">{post.readingTime}</span>
                </div>
              </div>

              {/* Excerpt */}
              {post.excerpt && (
                <div className="bg-white/5 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                  <p className="text-lg text-white/80 italic leading-relaxed">{post.excerpt}</p>
                </div>
              )}

              <div className="h-px bg-white/10 w-full" />
            </header>

            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h2 className="text-lg font-semibold text-white mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block text-white/70 hover:text-blue-400 transition-colors ${
                        item.level === 2 ? "pl-0" : item.level === 3 ? "pl-4" : "pl-8"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg prose-invert max-w-none 
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12
              prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:pb-3 prose-h2:border-b prose-h2:border-white/10
              prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8
              prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-code:bg-white/10 prose-code:text-blue-300 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-white/5 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
              prose-ul:text-white/80 prose-ol:text-white/80
              prose-li:mb-2
              prose-img:rounded-lg prose-img:shadow-lg
            "
            >
              <MDXRemote source={post.content} />
            </div>
          </article>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link href="/blog">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>

              <div className="flex items-center gap-4">
                <span className="text-white/50 text-sm">Share this article</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/5 bg-transparent"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostProps) {
  const post = await fetchBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - Tushar Pankhaniya`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  }
}
