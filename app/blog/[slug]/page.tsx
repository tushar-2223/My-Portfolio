import { getAllPosts } from "@/lib/blog"
import BlogPostPageClient from "./BlogPostPageClient"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface BlogPostPageProps {
  params: { slug: string }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostPageClient params={params} />
}
