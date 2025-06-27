// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { type BlogPost, extractTableOfContents } from "@/lib/blog-utils"

interface BlogPostProps {
  params: {
    slug: string
  }
}

// Server-side data fetching for individual post
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NODE_ENV === 'production'
        ? 'https://your-domain.com' // Replace with your actual domain
        : 'http://localhost:3000'
    
    const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
      next: { revalidate: 600 }
    })
    
    if (!res.ok) {
      if (res.status === 404) {
        return null
      }
      throw new Error('Failed to fetch post')
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const tableOfContents = extractTableOfContents(post.content)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>
      </nav>
      
      <article>
        <header className="mb-8">
          {/* Featured Image */}
          {post.image && (
            <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6 pb-6 border-b">
            <div className="flex items-center">
              <span className="font-medium">By {post.author}</span>
            </div>
            <span className="text-gray-400">•</span>
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="text-gray-400">•</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">
              {post.readingTime}
            </span>
          </div>
          
          {/* Excerpt */}
          {post.excerpt && (
            <div className="bg-gray-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-lg text-gray-700 italic">{post.excerpt}</p>
            </div>
          )}
        </header>
        
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  )
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
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