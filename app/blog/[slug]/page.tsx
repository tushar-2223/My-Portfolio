import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/formatDate"
import { BgGradient } from "@/components/ui/bg-gradient"
import { ArrowLeft, Clock, Eye } from "lucide-react"
import readingDuration from "reading-duration"
import { MarkdownContent } from "@/components/MarkdownContent"
import { SITE_URL } from "@/lib/utils"

async function getBlogData(slug: string) {
  const res = await fetch(`${SITE_URL}/api/blog/${slug}`, {
    cache: "force-cache",
  })

  if (!res.ok) return null

  return res.json() as Promise<{
    post: BlogPost
    content: string
  }>
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
  const blogUrl = `${SITE_URL}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.summary,

    alternates: { canonical: blogUrl },

    openGraph: {
      title: post.title,
      description: post.summary,
      url: blogUrl,
      type: "article",
      images: [
        {
          url: post.coverImage ?? "",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.coverImage ?? ""],
    },

    authors: [{ name: post.author?.name }],
  }
}

/* ----------------------------------
   PAGE
---------------------------------- */

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
      <div className="relative w-full min-h-[45vh] md:min-h-[50vh] flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-20 px-4 sm:px-6 md:p-16 mt-24 md:mt-32">
          <div className="container mx-auto max-w-4xl">

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.slice(0, 3).map(tag => (
                <div
                  key={tag}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase"
                >
                  #{tag}
                </div>
              ))}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              {post.title}
            </h1>

            {post.summary && (
              <p className="hidden md:block text-lg text-white/80 max-w-2xl mb-8">
                {post.summary}
              </p>
            )}

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-white/70">

              <div className="flex items-center gap-2">
                <img
                  src={post.author?.avatar ?? "/profile.jpg"}
                  className="w-6 h-6 rounded-full border border-white/20"
                />
                <span className="text-white font-medium">
                  {post.author?.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {formatDate(post.date)}
              </div>

              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {readingDuration(content, {
                  wordsPerMinute: 200,
                  emoji: false,
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto max-w-4xl px-3 sm:px-4 py-12 md:py-16 relative">
        <BgGradient />

        <article className="max-w-none pt-6">
          <MarkdownContent content={content} />
        </article>
      </div>

    </div>
  )
}
