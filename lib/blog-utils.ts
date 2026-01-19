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
    const res = await fetch('/api/posts', {
      cache: 'no-store',
      next: { revalidate: 60 } // Revalidate every 60 seconds
    })
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.details || 'Failed to fetch posts')
    }
    
    return res.json()
  } catch (error: any) {
    console.error('Error fetching posts:', error)
    throw new Error(`Error fetching posts: ${error.message}`)
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
