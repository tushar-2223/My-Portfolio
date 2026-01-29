import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/formatDate"
import { BgGradient } from "@/components/ui/bg-gradient"
import { ArrowLeft, Clock, Eye } from "lucide-react"
import readingDuration from "reading-duration"
import { SITE_URL } from "@/lib/utils"
import MarkdownContent from "@/components/MarkdownContent"

type ApiResponse = {
  post: BlogPost
  content: string
}

async function getBlogData(slug: string): Promise<ApiResponse | null> {
  const res = await fetch(`${SITE_URL}/api/blog/${slug}`, {
    cache: "force-cache",
  })

  if (!res.ok) return null
  return res.json()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = await getBlogData(slug)

  if (!data) return { title: "Blog Not Found" }

  const { post } = data

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [{ url: post.coverImage ?? "" }],
    },
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await getBlogData(slug)

  if (!data) notFound()

  const { post, content } = data

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <div className="relative min-h-[60vh] flex flex-col justify-end pb-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto w-full">

          <Link href="/blog" className="flex items-center gap-2 text-white/70 mb-5">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <p className="text-white/70 mb-6">{post.summary}</p>

          <div className="flex gap-4 text-sm text-white/60">

            <span className="flex gap-1 items-center">
              <Clock className="w-4 h-4" />
              {formatDate(post.date)}
            </span>

            <span className="flex gap-1 items-center">
              <Eye className="w-4 h-4" />
              {readingDuration(content || "")}
            </span>

          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 pt-4 pb-16 relative">
        <BgGradient />

        <article className="max-w-none">
          <MarkdownContent content={content} />
        </article>
      </div>
    </div>
  )
}
