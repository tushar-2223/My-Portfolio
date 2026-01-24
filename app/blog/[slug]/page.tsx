"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Loader2, ArrowLeft } from "lucide-react"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import { notionBlocksToMarkdown } from "@/lib/notionToMarkdown"

export default function BlogDetailPage() {
  const { slug } = useParams()
  const [content, setContent] = useState<any>(null)
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    const load = async () => {
      const posts = await fetch("/api/blog").then((r) => r.json())
      const found = posts.find((p: any) => p.slug === slug)

      if (!found) return

      setPost(found)

      const blocks = await fetch(`/api/blog/${found.id}`).then((r) => r.json())
      const markdown = notionBlocksToMarkdown(blocks)

      const mdx = await serialize(markdown, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeHighlight],
        },
      })

      setContent(mdx)
    }

    load()
  }, [slug])

  if (!content) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-500" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="flex items-center gap-2 text-gray-400 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <h1 className="text-5xl font-bold mb-10">{post.title}</h1>

        {/* ⭐ Typography magic */}
        <article className="prose prose-invert prose-lg max-w-none">
          <MDXRemote {...content} />
        </article>
      </div>
    </div>
  )
}
