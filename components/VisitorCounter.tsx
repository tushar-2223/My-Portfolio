"use client";

import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchViewCount = async () => {
      try {
        const response = await fetch('/api/views', {
          method: 'POST',
        });
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Failed to fetch view count:', error);
      }
    };

    fetchViewCount();
  }, []);

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-400">
      <Eye className="h-4 w-4" />
      <span>
        {count !== null ? `${count.toLocaleString()} views` : 'Loading...'}
      </span>
    </div>
  );
}
