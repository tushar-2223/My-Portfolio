"use client";

import React, { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';
import { BlogPost } from '@/types/blog';
import { ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const BlogSection = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/blog');
                if (!response.ok) throw new Error('Failed to fetch');
                const blogPosts = await response.json();
                setPosts(blogPosts.slice(0, 3)); // Only show top 3
            } catch (error) {
                console.error('Error in BlogSection:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // For debugging, always show the section if heading is needed
    // if (!loading && posts.length === 0) return null;

    return (
        <section id="blog" className="py-20 relative overflow-hidden bg-black">
            <div className="container mx-auto max-w-6xl px-4 relative z-10">
                {/* Header section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4"
                        >
                            BLOGS
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: '100px' }}
                            viewport={{ once: true }}
                            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-lg"
                        >
                            Thoughts, tutorials, and insights on software development and design.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300"
                        >
                            <span>View More Blogs</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="w-10 h-10 text-purple-500 animate-spin" />
                    </div>
                ) : posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/20">
                        <p className="text-gray-400">No blog posts found. Please ensure your Notion database items have Status set to "Done".</p>
                    </div>
                )}

                {/* View More Blogs Text Line below as requested */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                    >
                        View More Blogs
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </section>
    );
};
