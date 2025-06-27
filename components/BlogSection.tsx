import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const BlogSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React and TypeScript",
      excerpt: "Learn how to create scalable and maintainable web applications using the latest React features and TypeScript best practices.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Web Development"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      colors: [[125, 211, 252], [59, 130, 246]]
    },
    {
      id: 2,
      title: "The Future of Frontend Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the frontend development landscape in the coming years.",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Frontend", "Trends", "Technology"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      colors: [[236, 72, 153], [168, 85, 247]]
    },
    {
      id: 3,
      title: "Optimizing Performance in Next.js Applications",
      excerpt: "A comprehensive guide to improving your Next.js application performance with practical tips and techniques.",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Next.js", "Performance", "Optimization"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      colors: [[34, 197, 94], [59, 130, 246]]
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Latest Blog Posts
            </h2>
            <p className="text-gray-400 text-lg">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/5">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.id}`}>
              <Card 
                className="relative overflow-hidden border border-gray-700/50 bg-black hover:scale-105 hover:shadow-2xl transition-transform duration-300 group cursor-pointer h-[480px] rounded-2xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-[260px] shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-gray-800/50 rounded border border-gray-700/50 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
