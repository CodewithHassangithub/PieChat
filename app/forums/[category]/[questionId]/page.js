
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import MarkdownPreview from "@/components/MarkdownPreview";

export default function QuestionPage() {
  const [voteCount, setVoteCount] = useState(42);
  const [activeTab, setActiveTab] = useState("answers"); // answers | related

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Question Header */}
        <div className="border-b border-gray-800 pb-6 mb-6">
          <h1 className="text-3xl font-bold mb-4">
            How to implement async/await properly in this context?
          </h1>
          <div className="flex gap-4 text-sm text-gray-400">
            <span>Asked 2 hours ago</span>
            <span>Modified 1 hour ago</span>
            <span>Viewed 1,234 times</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Question Content */}
            <div className="flex gap-4">
              {/* Voting */}
              <VoteButtons count={voteCount} onChange={setVoteCount} />
              
              {/* Content */}
              <div className="flex-1">
                <MarkdownPreview content="Question content here..." />
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-gray-800 px-2 py-1 rounded text-sm">javascript</span>
                  <span className="bg-gray-800 px-2 py-1 rounded text-sm">async</span>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  <UserInfo name="John Doe" time="2 hours ago" />
                </div>
                <Comments />
              </div>
            </div>

            {/* Answers */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">5 Answers</h2>
              <div className="space-y-6">
                <Answer 
                  content="Answer content here..."
                  author="Jane Smith"
                  time="1 hour ago"
                  votes={15}
                />
                {/* More answers */}
              </div>
            </div>

            {/* Your Answer */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Your Answer</h2>
              <textarea 
                className="w-full h-48 bg-gray-800 rounded-lg p-4 text-gray-200"
                placeholder="Write your answer here..."
              />
              <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg">
                Post Your Answer
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-bold mb-2">Related Questions</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Understanding async/await in JavaScript
                  </a>
                </li>
                {/* More related questions */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VoteButtons({ count, onChange }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button onClick={() => onChange(count + 1)} className="text-gray-400 hover:text-purple-400">
        ▲
      </button>
      <span className="text-lg font-bold">{count}</span>
      <button onClick={() => onChange(count - 1)} className="text-gray-400 hover:text-purple-400">
        ▼
      </button>
    </div>
  );
}

// Add other component definitions (UserInfo, Comments, Answer) here...