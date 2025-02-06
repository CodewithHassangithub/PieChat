"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const topics = [
  {
    id: 1,
    title: "Getting Started with PieChat",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    replies: 23,
    views: 1234,
    lastReply: {
      author: "David Chen",
      date: "2024-02-20T10:30:00Z"
    }
  },
  // Add more topics...
];

export default function TopicList({ forumId }) {
  return (
    <div className="space-y-4">
      {topics.map((topic, index) => (
        <motion.div
          key={topic.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 rounded-xl bg-gray-900/30 border border-gray-800 hover:bg-gray-900/50 transition-all"
        >
          <Link href={`/forum/${forumId}/${topic.id}`} className="block">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative w-10 h-10">
                  <Image
                    src={topic.author.avatar}
                    alt={topic.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {topic.title}
                  </h3>
                  <div className="text-sm text-gray-400">
                    by {topic.author.name}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">
                  {topic.replies} replies · {topic.views} views
                </div>
                <div className="text-xs text-gray-500">
                  Last reply by {topic.lastReply.author}
                  <br />
                  {new Date(topic.lastReply.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
} 