"use client"

import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { BlogPost } from "@/types/blog"
import { CardWithCorners } from "@/components/ui/card-with-corners"
import { Badge } from "@/components/ui/badge"

type Props = {
  post: BlogPost
}

export function BlogCard({ post }: Props) {

  const encodedPost = encodeURIComponent(JSON.stringify(post))

  return (
    <Link
     href={{
        pathname: `/blog/${post.slug}`,
        query: { post: encodedPost },
      }}
    >
      <CardWithCorners className="group hover:scale-105 transition-all cursor-pointer">

        <div className="aspect-video overflow-hidden mb-4 -mx-6 -mt-6">
          <img
            src={post.coverImage || "/placeholder.svg"}
            className="w-full h-full object-cover group-hover:scale-110 transition"
            alt={post.title}
          />
        </div>

        <div className="space-y-4">

          {/* Date + Author inline */}
          <div className="flex items-center justify-between text-sm text-white/50">

            <span className="flex gap-1 items-center">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>

            <span className="flex gap-1 items-center">
              <User className="h-4 w-4" />
              {post.author?.name ?? "Tushar Pankhaniya"}
            </span>

          </div>

          {/* Title – 2 lines */}
          <h3 className="text-xl font-bold group-hover:text-blue-400 transition line-clamp-">
            {post.title}
          </h3>

          {/* Summary – 1 line */}
          <p className="text-white/70 text-sm line-clamp-2">
            {post.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map(tag => (
              <Badge
                key={tag}
                className="bg-white/10 border border-white/20 text-xs text-white/80"
              >
                {tag}
              </Badge>
            ))}
          </div>

        </div>
      </CardWithCorners>
    </Link>
  )
}
