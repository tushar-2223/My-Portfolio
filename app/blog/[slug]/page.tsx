import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { BlogPost } from "@/types/blog"
import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import { formatDate } from "@/lib/formatDate"
import { BgGradient } from "@/components/ui/bg-gradient"
import { ArrowLeft, Clock, Eye } from "lucide-react"
import readingDuration from "reading-duration"
import { MarkdownContent } from "@/components/MarkdownContent"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

async function getBlogData(slug: string) {
  const databaseId = process.env.NOTION_DATABASE_ID!

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status",
      status: { equals: "Done" },
    },
  })

  if (!response.results.length) return null

  const page = response.results.find((page: any) => {
    const pageSlug =
      page.properties.Slug?.rich_text?.[0]?.plain_text ?? page.id
    return pageSlug === slug
  }) as any

  if (!page) return null

  const props = page.properties

  let coverImage = "/placeholder.svg"
  if (page.cover) {
    coverImage =
      page.cover.type === "external"
        ? page.cover.external.url
        : page.cover.file.url
  }

  const authorData = props.Author?.people?.[0] || page.created_by

  const post: BlogPost = {
    id: page.id,
    title: props.Name?.title?.[0]?.plain_text ?? "Untitled",
    slug: props.Slug?.rich_text?.[0]?.plain_text ?? page.id,
    summary: props.Summary?.rich_text?.[0]?.plain_text ?? "",
    tags: props.Tags?.multi_select?.map((t: any) => t.name) ?? [],
    date: page.created_time,
    coverImage,
    author: {
      name: authorData?.name ?? "Tushar Pankhaniya",
      avatar: authorData?.avatar_url ?? null,
    },
  }

  const mdblocks = await n2m.pageToMarkdown(page.id)
  const mdString = n2m.toMarkdownString(mdblocks)

  return { post, mdString: mdString.parent }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = await getBlogData(slug)

  if (!data) {
    return { title: "Blog Not Found" }
  }

  const { post } = data

  const siteUrl = process.env.PUBLIC_SITE_URL
  const blogUrl = `${siteUrl}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.summary,

    alternates: {
      canonical: blogUrl,
    },

    openGraph: {
      title: post.title,
      description: post.summary,
      url: blogUrl,
      type: "article",
      images: [
        {
          url: post.coverImage || "",
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
      images: [post.coverImage || ""],
    },

    authors: [{ name: post.author ? post.author.name : "Tushar Pankhaniya" }],
  }
}

/* ---------------- PAGE ---------------- */

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await getBlogData(slug)

  if (!data) notFound()

  const { post, mdString } = data

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
              {post.tags.slice(0, 3).map((tag) => (
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
                {readingDuration(mdString, {
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

        {/* Blog content */}
        <article className="max-w-none pt-6">
          <MarkdownContent content={mdString} />
        </article>
      </div>

    </div>
  )
}
