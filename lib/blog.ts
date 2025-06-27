import fs from "fs"
import path from "path"
import matter from "gray-matter"

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

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "")
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        // Calculate reading time (rough estimate: 200 words per minute)
        const wordCount = content.split(/\s+/).length
        const readingTime = Math.ceil(wordCount / 200)

        return {
          slug,
          title: data.title || "Untitled",
          date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
          excerpt: data.excerpt || "",
          content,
          tags: data.tags || [],
          author: data.author || "Tushar Pankhaniya",
          image: data.image,
          readingTime: `${readingTime} min read`,
        }
      })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const wordCount = content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      excerpt: data.excerpt || "",
      content,
      tags: data.tags || [],
      author: data.author || "Tushar Pankhaniya",
      image: data.image,
      readingTime: `${readingTime} min read`,
    }
  } catch (error) {
    console.error("Error reading blog post:", error)
    return null
  }
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
