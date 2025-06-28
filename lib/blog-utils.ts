// lib/blog-utils.ts
export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  author: string
  image?: string
  readingTime: string
}

export function extractTableOfContents(content: string) {
  const headings = content.match(/^#{2,3}\s+(.+)$/gm) || []
  return headings.map((heading) => {
    const level = heading.match(/^#+/)?.[0].length || 2
    const text = heading.replace(/^#+\s+/, "")
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
    return { level, text, id }
  })
}

// Client-side API fetching functions
export async function fetchAllPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch('/api/posts')
    if (!res.ok) {
      throw new Error('Failed to fetch posts')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`/api/posts/${slug}`)
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

export async function getBlogPosts(): Promise<BlogPost[]> {
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