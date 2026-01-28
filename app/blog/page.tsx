import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, ArrowLeft } from "lucide-react"
import { BlogPost } from "@/types/blog"
import { CardWithCorners } from "@/components/ui/card-with-corners"
import { Badge } from "@/components/ui/badge"
import BlogSearch from "./search"

const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

async function getPosts() {
    const res = await fetch(`${BASE_URL}/api/blog`)

    if (!res.ok) return []

    return res.json()
}

export default async function BlogListPage() {
    const posts: BlogPost[] = await getPosts()

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
            <div className="container mx-auto max-w-6xl px-4">

                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
                        Blogs
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights about web & mobile development
                    </p>
                </div>

                {/* Client search */}
                <BlogSearch posts={posts} />

            </div>

            {/* background glow */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />
        </div>
    )
}
