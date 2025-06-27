// app/blog/page.tsx
import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/lib/blog-utils"

// Server-side data fetching
async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Get the base URL for API calls
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NODE_ENV === 'production'
        ? 'https://your-domain.com' // Replace with your actual domain
        : 'http://localhost:3000'
    
    const res = await fetch(`${baseUrl}/api/posts`, {
      // Revalidate every 10 minutes
      next: { revalidate: 600 }
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch posts')
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  if (posts.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-yellow-800">
            No blog posts found. Create some MDX files in the /content/blog directory.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 text-lg">
          Latest thoughts and insights on web development, technology, and more.
        </p>
      </header>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

// Blog Card Component
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {post.image && (
        <div className="aspect-video relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{post.tags.length - 2} more
            </span>
          )}
        </div>
        
        <Link href={`/blog/${post.slug}`} className="group">
          <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="font-medium">By {post.author}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{post.readingTime}</span>
        </div>
        
        <time className="text-sm text-gray-500 block mb-4">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          Read more 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export const metadata = {
  title: 'Blog - Tushar Pankhaniya',
  description: 'Latest blog posts and articles on web development, technology, and programming insights.',
}