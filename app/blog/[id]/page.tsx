"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const BlogPost = () => {
  const { id } = useParams()
  const [activeSection, setActiveSection] = useState("")

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React and TypeScript",
      excerpt:
        "Learn how to create scalable and maintainable web applications using the latest React features and TypeScript best practices.",
      content: `# Building Modern Web Applications with React and TypeScript

## Table of Contents
1. [Introduction](#introduction)
2. [Setting up the Development Environment](#setup)
3. [Component Architecture](#architecture)
4. [State Management](#state)
5. [Testing Strategies](#testing)
6. [Conclusion](#conclusion)

## Introduction {#introduction}

Modern web development has evolved significantly over the past few years. React and TypeScript have become the go-to technologies for building scalable, maintainable web applications. In this comprehensive guide, we'll explore best practices and advanced techniques.

React's component-based architecture allows us to build complex UIs by composing simple, reusable components. When combined with TypeScript's static typing, we get the benefits of early error detection and better developer experience.

## Setting up the Development Environment {#setup}

First, let's set up our development environment with the latest tools and best practices:

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm install @types/react @types/react-dom
npm start
\`\`\`

We'll also want to add some essential development tools:
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks
- Jest for testing

## Component Architecture {#architecture}

When building React applications, component architecture is crucial for maintainability and scalability. Here are some key principles:

### Functional Components
Always prefer functional components over class components:

\`\`\`typescript
interface Props {
  title: string;
  children: React.ReactNode;
}

const MyComponent: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
\`\`\`

## State Management {#state}

For state management, consider these modern approaches:

### React Context
For simple state sharing across components.

### Redux Toolkit
For complex state management needs.

### Zustand
A lightweight alternative to Redux.

## Testing Strategies {#testing}

Testing is crucial for maintaining code quality:

### Unit Testing
Test individual components and functions.

### Integration Testing
Test how components work together.

### End-to-End Testing
Test complete user workflows.

## Conclusion {#conclusion}

Building modern web applications with React and TypeScript provides a solid foundation for scalable, maintainable code. By following these best practices, you'll be well-equipped to handle complex projects.`,
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Frontend", "Trends", "Technology"],
      author: "Tushar Pankhaniya",
    },
    {
      id: 3,
      title: "Optimizing Performance in Next.js Applications",
      excerpt:
        "A comprehensive guide to improving your Next.js application performance with practical tips and techniques.",
      content: `# Optimizing Performance in Next.js Applications

## Table of Contents
1. [Image Optimization](#images)
2. [Code Splitting](#code-splitting)
3. [Static Generation](#static-generation)
4. [Caching Strategies](#caching)
5. [Monitoring and Analytics](#monitoring)

## Image Optimization {#images}

Next.js provides excellent image optimization out of the box with the Image component:

\`\`\`typescript
import Image from 'next/image';

const MyComponent = () => (
  <Image
    src="/my-image.jpg"
    alt="Description"
    width={500}
    height={300}
    priority
  />
);
\`\`\`

## Code Splitting {#code-splitting}

Dynamic imports help reduce bundle sizes:

\`\`\`typescript
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
\`\`\`

### Route-based Splitting
Next.js automatically splits code at the page level.

## Static Generation {#static-generation}

Static generation offers the best performance for most use cases:

\`\`\`typescript
export async function getStaticProps() {
  const data = await fetchData();

  return {
    props: { data },
    revalidate: 3600 // Revalidate every hour
  };
}
\`\`\`

## Caching Strategies {#caching}

Implementing proper caching strategies is crucial for performance:

### Browser Caching
Configure proper cache headers for static assets.

### CDN Caching
Use a CDN for global content distribution.

### API Response Caching
Cache API responses when appropriate.

## Monitoring and Analytics {#monitoring}

Use tools like:
- Lighthouse
- Web Vitals
- Next.js Analytics
- Real User Monitoring (RUM)

Regular monitoring helps identify performance bottlenecks and track improvements over time.`,
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Next.js", "Performance", "Optimization"],
      author: "Tushar Pankhaniya",
    },
  ]

  const post = blogPosts.find((p) => p.id === Number.parseInt(id || "1"))

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("h2[id]")
      let current = ""

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 0) {
          current = heading.id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <button
                    onClick={() => scrollToSection("introduction")}
                    className={`block text-left text-sm transition-colors ${
                      activeSection === "introduction" ? "text-blue-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Introduction
                  </button>
                  <button
                    onClick={() => scrollToSection("setup")}
                    className={`block text-left text-sm transition-colors ${
                      activeSection === "setup" ? "text-blue-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Setting up the Development Environment
                  </button>
                  <button
                    onClick={() => scrollToSection("architecture")}
                    className={`block text-left text-sm transition-colors ${
                      activeSection === "architecture" ? "text-blue-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Component Architecture
                  </button>
                  <button
                    onClick={() => scrollToSection("state")}
                    className={`block text-left text-sm transition-colors ${
                      activeSection === "state" ? "text-blue-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    State Management
                  </button>
                  <button
                    onClick={() => scrollToSection("testing")}
                    className={`block text-left text-sm transition-colors ${
                      activeSection === "testing" ? "text-blue-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Testing Strategies
                  </button>
                  <button
                    onClick={() => scrollToSection("conclusion")}
                    className={`block text-left text-sm transition-colors ${
                      activeSection === "conclusion" ? "text-blue-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Conclusion
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article>
                <header className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{post.title}</h1>

                  <div className="flex items-center gap-4 text-gray-400 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <span>by {post.author}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none">
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
                    className="text-gray-300 leading-relaxed"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPost
