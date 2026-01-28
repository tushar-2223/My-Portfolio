import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 pt-32">
      <div className="text-center space-y-6 mb-12">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Blog Post Not Found
          </p>
          <p className="text-gray-400 text-lg max-w-md">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>

      <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="text-lg font-medium">Back to All Blogs</span>
      </Link>

      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />
    </div>
  )
}
