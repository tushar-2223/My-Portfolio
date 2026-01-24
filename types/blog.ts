export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  summary: string
  coverImage?: string
  tags: string[]
  author?: {
    name: string
    image?: string
  }
}
