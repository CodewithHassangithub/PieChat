"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const forums = [
  {
    id: "general",
    name: "General Discussion",
    description: "General chat about PieChat and its features",
    topics: 234,
    posts: 1205,
    lastPost: {
      title: "New AI Features",
      author: "Sarah Johnson",
      date: "2024-02-20T10:30:00Z"
    }
  },
  {
    id: "support",
    name: "Support & Help",
    description: "Get help with using PieChat",
    topics: 156,
    posts: 892,
    lastPost: {
      title: "Installation Guide",
      author: "David Chen",
      date: "2024-02-19T15:45:00Z"
    }
  },
  {
    id: "feedback",
    name: "Feedback & Suggestions",
    description: "Share your ideas and suggestions",
    topics: 89,
    posts: 445,
    lastPost: {
      title: "Feature Request",
      author: "Emma Williams",
      date: "2024-02-18T09:15:00Z"
    }
  }
];

export default function ForumList() {
  return (
    <div className="space-y-6">
      {forums.map((forum, index) => (
        <motion.div
          key={forum.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:bg-gray-900/50 transition-all"
        >
          <Link href={`/forum/${forum.id}`} className="block">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {forum.name}
                </h3>
                <p className="text-gray-400 mb-4">{forum.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <span>{forum.topics} topics</span>
                  <span>{forum.posts} posts</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Last post</div>
                <div className="text-purple-400 font-medium">
                  {forum.lastPost.title}
                </div>
                <div className="text-sm text-gray-500">
                  by {forum.lastPost.author}
                </div>
                <div className="text-xs text-gray-600">
                  {new Date(forum.lastPost.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
} 