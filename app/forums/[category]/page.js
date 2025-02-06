"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { forumCategories } from "../../constants/forumData";

export default function CategoryPage() {
  const params = useParams();
  const category = forumCategories.find(cat => cat.slug === params.category);
  const [sortBy, setSortBy] = useState("newest");

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`p-4 rounded-xl ${category.bgColor} ${category.borderColor} border`}>
            {category.icon}
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${category.color}`}>
              {category.name}
            </h1>
            <p className="text-gray-400 mt-1">{category.description}</p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Ask Question
            </motion.button>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3"
            >
              <option value="newest">Newest</option>
              <option value="active">Most Active</option>
              <option value="votes">Highest Votes</option>
            </select>
          </div>
          <div className="flex gap-2 text-sm text-gray-400">
            <span>{category.topics} questions</span>
            <span>•</span>
            <span>{category.posts} answers</span>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {/* Sample questions - replace with real data */}
          <QuestionCard 
            title="How to implement async/await properly in this context?"
            votes={42}
            answers={5}
            views={1.2}
            tags={["async", "promises", category.name.toLowerCase()]}
            author="John Doe"
            timePosted="2 hours ago"
          />
          {/* Add more QuestionCard components */}
        </div>
      </div>
    </div>
  );
}

function QuestionCard({ title, votes, answers, views, tags, author, timePosted }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-gray-800 rounded-lg p-4 hover:border-purple-500/30 transition-colors"
    >
      <div className="flex gap-4">
        <div className="flex flex-col items-center space-y-1 text-gray-400 min-w-[64px]">
          <span>{votes} votes</span>
          <span>{answers} answers</span>
          <span>{views}k views</span>
        </div>
        <div className="flex-1">
          <Link href={`/question/${encodeURIComponent(title)}`} className="text-lg font-medium text-purple-400 hover:text-purple-300">
            {title}
          </Link>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map(tag => (
              <span key={tag} className="bg-gray-800 px-2 py-1 rounded text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-400">
            asked {timePosted} by {author}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
