"use client";

import { BlogPost } from "@/types/blog";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <motion.div
                whileHover={{ translateY: -4 }}
                className="group border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur hover:border-white/20 transition-all duration-300 h-full"
            >
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden bg-white/5">
                    <Image
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                        <span>{formatDistanceToNow(new Date(post.date), { addSuffix: true })}</span>
                        <span>{post.author?.name ?? "Tushar Pankhaniya"}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                        {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                        {post.summary}
                    </p>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-white/10 text-xs rounded-full text-gray-300 hover:bg-white/20 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </Link>
    );
}
