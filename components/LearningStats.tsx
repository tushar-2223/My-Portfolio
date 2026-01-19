'use client';

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface LearningTopic {
  name: string;
  progress: number;
  color: string;
}

export function LearningStats() {
  const [topics, setTopics] = useState<LearningTopic[]>([
    { name: 'Next.js', progress: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'TypeScript', progress: 75, color: 'from-blue-400 to-indigo-600' },
    { name: 'React Native', progress: 80, color: 'from-indigo-500 to-purple-600' },
    { name: 'Node.js', progress: 70, color: 'from-green-500 to-emerald-700' },
    { name: 'GraphQL', progress: 60, color: 'from-pink-500 to-rose-600' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-16"
    >
      <Card className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">Currently Learning</h3>
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{topic.name}</span>
                  <span className="text-white/70 text-sm">{topic.progress}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${topic.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${topic.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}