"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, TableIcon as TableOfContents } from "lucide-react"

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

### Custom Hooks
Extract logic into custom hooks for reusability:

\`\`\`typescript
const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
};
\`\`\`

## State Management {#state}

State management in React can be handled in various ways depending on your application's complexity:

### Local State with useState
For simple component state:

\`\`\`typescript
const [user, setUser] = useState<User | null>(null);
\`\`\`

### Context API
For application-wide state:

\`\`\`typescript
const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
\`\`\`

## Testing Strategies {#testing}

Testing is an essential part of modern web development. Here's how to approach testing in React with TypeScript:

### Unit Testing
Test individual components and functions:

\`\`\`typescript
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

test('renders component with title', () => {
  render(<MyComponent title="Test Title" />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});
\`\`\`

### Integration Testing
Test component interactions and data flow.

## Conclusion {#conclusion}

Building modern web applications requires careful consideration of architecture, tooling, and best practices. React and TypeScript provide a solid foundation, but the key is to follow established patterns and continuously refactor your code as your application grows.

Remember to:
- Keep components small and focused
- Use TypeScript effectively for type safety
- Write comprehensive tests
- Follow React best practices
- Stay updated with the latest developments in the ecosystem`,
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Web Development"],
      author: "Tushar Pankhaniya",
    },
    {
      id: 2,
      title: "The Future of Frontend Development",
      excerpt:
        "Exploring upcoming trends and technologies that will shape the frontend development landscape in the coming years.",
      content: `# The Future of Frontend Development

## Table of Contents
1. [Web Components](#web-components)
2. [Server Components](#server-components)
3. [AI in Development](#ai-development)
4. [Performance Optimization](#performance)
5. [The Road Ahead](#conclusion)

## Web Components {#web-components}

Web Components are becoming increasingly important in the modern frontend landscape. They provide a way to create reusable, encapsulated HTML elements that work across different frameworks and libraries.

The three main technologies that make up Web Components are:
- Custom Elements
- Shadow DOM
- HTML Templates

\`\`\`javascript
class MyCustomElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h1>Hello, Web Components!</h1>';
  }
}

customElements.define('my-custom-element', MyCustomElement);
\`\`\`

## Server Components {#server-components}

Server-side rendering is making a comeback with technologies like Next.js App Router and React Server Components. This approach offers several benefits:

- Improved initial page load times
- Better SEO
- Reduced JavaScript bundle sizes
- Enhanced user experience

## AI in Development {#ai-development}

Artificial Intelligence is revolutionizing how we write code:

### Code Generation
AI tools like GitHub Copilot and ChatGPT are helping developers write code faster and more efficiently.

### Automated Testing
AI can help generate test cases and identify potential bugs before they reach production.

### Design to Code
Tools that convert design mockups directly to code are becoming more sophisticated.

## Performance Optimization {#performance}

Performance continues to be a critical factor in user experience:

### Core Web Vitals
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

### Modern Optimization Techniques
- Tree shaking
- Code splitting
- Image optimization
- Caching strategies

## The Road Ahead {#conclusion}

The future of frontend development is exciting and full of possibilities. As developers, we need to stay adaptable and continue learning new technologies while maintaining focus on user experience and performance.`,
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

const OptimizedImage = () => (
  <Image
    src="/hero-image.jpg"
    alt="Hero image"
    width={800}
    height={400}
    priority
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
  />
);
\`\`\`

Benefits include:
- Automatic format selection (WebP, AVIF)
- Responsive images
- Lazy loading by default
- Blur placeholder support

## Code Splitting {#code-splitting}

Proper code splitting can significantly improve load times:

### Dynamic Imports
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

  const post = blogPosts.find((p) => p.id === Number.parseInt((id as string) || "1"))

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
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "setup", title: "Development Environment" },
    { id: "architecture", title: "Component Architecture" },
    { id: "state", title: "State Management" },
    { id: "testing", title: "Testing Strategies" },
    { id: "conclusion", title: "Conclusion" },
  ]

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/blog">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5 p-0">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents - Modern Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <TableOfContents className="h-5 w-5 mr-2 text-white" />
                    <h3 className="font-semibold text-white">Table of Contents</h3>
                  </div>
                  <nav className="space-y-1">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left text-sm py-3 px-4 rounded-xl transition-all duration-200 border ${
                          activeSection === item.id
                            ? "bg-white text-black border-white font-medium"
                            : "text-white/70 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10"
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full px-4 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight tracking-tight">
                  {post.title}
                </h1>

                <div className="flex items-center space-x-8 text-white/60 mb-8 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                  <div>By {post.author}</div>
                </div>

                <div className="h-px bg-white/10 w-full"></div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div
                  className="prose prose-lg max-w-none prose-invert"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(
                        /## (.*?) \{#(.*?)\}/g,
                        '<h2 id="$2" class="text-2xl font-semibold text-white mt-12 mb-6 pb-3 border-b border-white/10">$1</h2>',
                      )
                      .replace(/# (.*)/g, '<h1 class="text-3xl font-bold text-white mb-8">$1</h1>')
                      .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-white mt-8 mb-4">$1</h3>')
                      .replace(
                        /```(\w+)?\n([\s\S]*?)```/g,
                        '<pre class="bg-black/50 border border-white/10 p-6 rounded-xl overflow-x-auto my-6"><code class="text-white text-sm">$2</code></pre>',
                      )
                      .replace(
                        /`([^`]+)`/g,
                        '<code class="bg-black/30 border border-white/10 px-2 py-1 rounded text-white text-sm">$1</code>',
                      )
                      .replace(/\n\n/g, '</p><p class="mb-6 leading-relaxed text-white/80">')
                      .replace(/^(?!<[h|p|c|u])(.+)$/gm, '<p class="mb-6 leading-relaxed text-white/80">$1</p>')
                      .replace(/- (.+)/g, '<li class="text-white/80 mb-2">$1</li>')
                      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-6 space-y-2 ml-4">$1</ul>'),
                  }}
                />
              </div>

              {/* Navigation */}
              <div className="mt-12 flex justify-between items-center">
                <Link href="/blog">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Button>
                </Link>

                <div className="text-white/50 text-sm">Share this article</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPost
