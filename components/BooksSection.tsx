
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const BooksSection = () => {
  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      rating: 5,
      review: "Essential read for any developer. Changed how I write and think about code.",
      status: "completed"
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas, Andrew Hunt",
      rating: 5,
      review: "Timeless wisdom that applies to both coding and problem-solving in general.",
      status: "completed"
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      rating: 4,
      review: "Deep dive into modern data systems. Currently working through this one.",
      status: "reading"
    },
    {
      title: "System Design Interview",
      author: "Alex Xu",
      rating: 4,
      review: "Great practical guide for understanding large-scale system architecture.",
      status: "completed"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Books I've Read
          </h2>
          <p className="text-gray-400 text-lg">
            Continuous learning through reading
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{book.title}</h3>
                    <p className="text-gray-400">{book.author}</p>
                  </div>
                  <div className={`px-3 py-1 text-xs rounded-full ${
                    book.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {book.status === 'completed' ? 'Completed' : 'Currently Reading'}
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < book.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 italic">"{book.review}"</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
