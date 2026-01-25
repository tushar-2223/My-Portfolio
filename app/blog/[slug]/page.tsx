"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Loader2, ArrowLeft, Calendar, User } from "lucide-react"
import { notionBlocksToMarkdown } from "@/lib/notionToMarkdown"
import { BlogPost } from "@/types/blog"

export default function BlogDetailPage() {
  const { slug } = useParams()
  const [content, setContent] = useState<string>("")
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        // Fetch all posts to find the one matching the slug
        const postsRes = await fetch("/api/blog")
        if (!postsRes.ok) throw new Error("Failed to fetch posts")
        const posts = await postsRes.json()
        const found = posts.find((p: BlogPost) => p.slug === slug)

        if (!found) {
          setLoading(false)
          return
        }

        setPost(found)

        // Fetch the page blocks from Notion
        const blocksRes = await fetch(`/api/blog/${found.id}`)
        if (!blocksRes.ok) throw new Error("Failed to fetch content")
        const blocks = await blocksRes.json()

        // Convert Notion blocks to markdown
        const markdown = notionBlocksToMarkdown(blocks)
        setContent(markdown)
      } catch (error) {
        console.error("Error loading blog post:", error)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-purple-500 animate-spin" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-blue-400 hover:underline">
          Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Navigation */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Blog</span>
        </Link>

        {/* Featured Image */}
        {post.coverImage && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Meta Info */}
        <div className="flex items-center gap-6 mb-8 text-sm text-gray-400 flex-wrap">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author?.name ?? "Tushar Pankhaniya"}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

        {/* Summary */}
        {post.summary && <p className="text-xl text-gray-300 mb-8">{post.summary}</p>}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 text-sm rounded-full text-gray-300 hover:bg-white/20 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="h-px bg-white/10 mb-12" />

        {/* Content */}
        <article
          className="prose prose-invert max-w-none 
          prose-headings:text-white prose-headings:font-bold
          prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-10
          prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:pb-2 prose-h2:border-b prose-h2:border-white/10
          prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-code:bg-white/10 prose-code:text-blue-300 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-white/5 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
          prose-ul:text-gray-300 prose-ol:text-gray-300
          prose-li:mb-2
          prose-img:rounded-lg prose-img:shadow-lg
        "
          dangerouslySetInnerHTML={{
            __html: content
              .split("\n")
              .map((line) => {
                // Simple markdown to HTML conversion
                if (line.startsWith("# ")) return `<h1>${line.slice(2)}</h1>`
                if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`
                if (line.startsWith("### ")) return `<h3>${line.slice(4)}</h3>`
                if (line.startsWith("- ")) return `<li>${line.slice(2)}</li>`
                if (line.startsWith("> ")) return `<blockquote>${line.slice(2)}</blockquote>`
                if (line.trim() === "") return "<br />"
                return `<p>${line}</p>`
              })
              .join(""),
          }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
