// "use client"

// import { useState, useEffect } from "react"
// import { notFound } from "next/navigation"
// import { Header } from "@/components/Header"
// import { Footer } from "@/components/Footer"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Calendar, Clock, User, ArrowLeft, BookOpen } from "lucide-react"
// import Link from "next/link"
// import { getPostBySlug, extractTableOfContents } from "@/lib/blog-utils"

// interface BlogPostPageProps {
//   params: { slug: string }
// }

// export default function BlogPostPageClient({ params }: BlogPostPageProps) {
//   const [activeSection, setActiveSection] = useState("")
//   const post = getPostBySlug(params.slug)

//   if (!post) {
//     notFound()
//   }

//   const tableOfContents = extractTableOfContents(post.content)

//   useEffect(() => {
//     const handleScroll = () => {
//       const headings = document.querySelectorAll("h2[id], h3[id]")
//       let current = ""

//       headings.forEach((heading) => {
//         const rect = heading.getBoundingClientRect()
//         if (rect.top <= 100 && rect.bottom >= 0) {
//           current = heading.id
//         }
//       })

//       setActiveSection(current)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" })
//     }
//   }

//   // Enhanced content formatting with proper heading IDs
//   const formattedContent = post.content
//     .replace(
//       /^# (.*)/gm,
//       '<h1 class="text-4xl md:text-5xl font-bold text-white mb-8 mt-0 leading-tight bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">$1</h1>',
//     )
//     .replace(/^## (.*)/gm, (match, title) => {
//       const id = title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)/g, "")
//       return `<h2 id="${id}" class="text-2xl md:text-3xl font-semibold text-white mt-16 mb-6 pb-4 border-b border-white/20 scroll-mt-24 relative">
//         ${title}
//         <span class="absolute left-0 bottom-0 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></span>
//       </h2>`
//     })
//     .replace(/^### (.*)/gm, (match, title) => {
//       const id = title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)/g, "")
//       return `<h3 id="${id}" class="text-xl md:text-2xl font-semibold text-white mt-12 mb-4 scroll-mt-24">${title}</h3>`
//     })
//     .replace(
//       /```(\w+)?\n([\s\S]*?)```/g,
//       '<pre class="bg-gray-900/80 border border-white/10 p-6 rounded-xl overflow-x-auto my-8 backdrop-blur-sm shadow-2xl"><code class="text-white text-sm md:text-base font-mono">$2</code></pre>',
//     )
//     .replace(
//       /`([^`]+)`/g,
//       '<code class="bg-white/10 border border-white/20 px-2 py-1 rounded text-blue-300 text-sm font-mono">$1</code>',
//     )
//     .replace(/^\*\*(.+)\*\*/gm, '<strong class="text-white font-semibold">$1</strong>')
//     .replace(
//       /^\* (.+)/gm,
//       '<li class="text-white/80 mb-3 pl-6 relative"><span class="absolute left-0 text-blue-400 font-bold">→</span>$1</li>',
//     )
//     .replace(/(<li.*<\/li>)/s, '<ul class="list-none mb-8 space-y-3 ml-0">$1</ul>')
//     .replace(/\n\n/g, '</p><p class="mb-6 leading-relaxed text-white/80 text-base md:text-lg">')
//     .replace(/^(?!<[h|p|c|u|l|s])(.+)$/gm, '<p class="mb-6 leading-relaxed text-white/80 text-base md:text-lg">$1</p>')

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />

//       <div className="pt-32 pb-20 px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="mb-8">
//             <Link href="/blog">
//               <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5 p-0">
//                 <ArrowLeft className="h-4 w-4 mr-2" />
//                 Back to Blog
//               </Button>
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
//             {/* Table of Contents - Sidebar */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-24">
//                 <div className="toc">
//                   <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                     <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
//                     Table of Contents
//                   </h3>
//                   <ul className="space-y-1">
//                     {tableOfContents.map((item) => (
//                       <li key={item.id}>
//                         <button
//                           onClick={() => scrollToSection(item.id)}
//                           className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
//                             activeSection === item.id
//                               ? "text-white bg-white/10 border-l-2 border-blue-400"
//                               : "text-white/70 hover:text-white hover:bg-white/5"
//                           } ${item.level === 3 ? "ml-4" : ""}`}
//                         >
//                           {item.text}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="lg:col-span-3">
//               <header className="mb-12">
//                 {post.tags?.length > 0 && (
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {post.tags.map((tag) => (
//                       <Badge
//                         key={tag}
//                         variant="secondary"
//                         className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full px-4 py-1"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 )}

//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//                   {post.title}
//                 </h1>

//                 <div className="flex items-center space-x-8 text-white/60 mb-8 text-sm">
//                   <div className="flex items-center">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     {new Date(post.date).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="h-4 w-4 mr-2" />
//                     {post.readingTime}
//                   </div>
//                   <div className="flex items-center">
//                     <User className="h-4 w-4 mr-2" />
//                     {post.author}
//                   </div>
//                 </div>

//                 <div className="h-px bg-gradient-to-r from-blue-400 to-purple-600 w-full mb-8" />
//               </header>

//               <article className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm prose prose-lg max-w-none prose-invert">
//                 <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
//               </article>

//               <div className="mt-12 flex justify-between items-center">
//                 <Link href="/blog">
//                   <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent">
//                     <ArrowLeft className="mr-2 h-4 w-4" />
//                     Back to Blog
//                   </Button>
//                 </Link>
//                 <span className="text-white/50 text-sm">Share this article</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }
