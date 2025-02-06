"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

// Update the forumData object with comprehensive topics for each language

const forumData = {
  "javascript-nodejs": {
    name: "JavaScript & Node.js",
    description:
      "Discuss JavaScript, Node.js, React, Next.js, and related technologies",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/20",
    discussions: [
      {
        id: 1,
        title: "Understanding React 18 Concurrent Features",
        author: "Sarah Johnson",
        content:
          "Let's discuss the new concurrent features in React 18, including useTransition and Suspense. How are you implementing these in your applications?",
        date: "2024-01-15",
        tags: ["react", "concurrent-features", "hooks"],
        replies: [
          {
            id: 1,
            author: "Alex Chen",
            content:
              "Great explanation! I'd add that useTransition is particularly useful for heavy UI updates.",
            date: "2024-01-15",
          },
        ],
      },
      {
        id: 2,
        title: "Next.js 14 Server Actions vs tRPC",
        author: "Mike Wilson",
        content:
          "Comparing Server Actions in Next.js 14 with tRPC for type-safe API calls. What are your experiences with both approaches?",
        date: "2024-01-14",
        tags: ["nextjs", "server-actions", "trpc"],
        replies: [],
      },
      {
        id: 3,
        title: "Node.js Performance Optimization Techniques",
        author: "Emma Davis",
        content:
          "Share your best practices for optimizing Node.js applications in production...",
        date: "2024-01-13",
        tags: ["nodejs", "performance", "optimization"],
        replies: [],
      },
    ],
  },
  python: {
    name: "Python",
    description:
      "Python programming, Django, Flask, Data Science, and ML discussions",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    discussions: [
      {
        id: 1,
        title: "FastAPI vs Django REST Framework - 2024 Comparison",
        author: "David Kim",
        content:
          "Comparing FastAPI and DRF for building modern APIs. Performance metrics and use cases...",
        date: "2024-01-15",
        tags: ["fastapi", "django", "api"],
        replies: [],
      },
      {
        id: 2,
        title: "PyTorch vs TensorFlow in Production",
        author: "Lisa Wang",
        content:
          "Real-world experiences using PyTorch and TensorFlow in production ML systems...",
        date: "2024-01-14",
        tags: ["pytorch", "tensorflow", "ml"],
        replies: [],
      },
    ],
  },
  rust: {
    name: "Rust",
    description:
      "Systems programming, performance, and Rust ecosystem discussions",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    discussions: [
      {
        id: 1,
        title: "Memory Safety in Rust vs C++",
        author: "James Smith",
        content:
          "Analyzing how Rust's ownership model prevents common memory safety issues...",
        date: "2024-01-15",
        tags: ["memory-safety", "cpp", "ownership"],
        replies: [],
      },
      {
        id: 2,
        title: "Rust for WebAssembly Development",
        author: "Sophie Chen",
        content:
          "Best practices for developing and deploying Rust-based WebAssembly modules...",
        date: "2024-01-14",
        tags: ["wasm", "web", "performance"],
        replies: [],
      },
    ],
  },
  typescript: {
    name: "TypeScript",
    description: "Type-safe JavaScript, Angular, and enterprise development",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    discussions: [
      {
        id: 1,
        title: "Advanced TypeScript Type Manipulation",
        author: "Ryan Cooper",
        content:
          "Deep dive into conditional types, mapped types, and template literal types...",
        date: "2024-01-15",
        tags: ["types", "advanced", "generics"],
        replies: [],
      },
      {
        id: 2,
        title: "Angular 17 vs React with TypeScript",
        author: "Maria Garcia",
        content:
          "Comparing development experience and type safety features in both frameworks...",
        date: "2024-01-14",
        tags: ["angular", "react", "comparison"],
        replies: [],
      },
    ],
  },
  go: {
    name: "Go",
    description: "Go programming, microservices, and cloud-native development",
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
    borderColor: "border-sky-400/20",
    discussions: [
      {
        id: 1,
        title: "Go 1.22 Features and Performance Improvements",
        author: "Tom Wilson",
        content:
          "Exploring the latest features in Go 1.22 and their impact on performance...",
        date: "2024-01-15",
        tags: ["go1.22", "performance", "features"],
        replies: [],
      },
      {
        id: 2,
        title: "Microservices Architecture with Go",
        author: "Alice Johnson",
        content:
          "Patterns and practices for building scalable microservices in Go...",
        date: "2024-01-14",
        tags: ["microservices", "architecture", "patterns"],
        replies: [],
      },
    ],
  },
};

// Add a utility function for consistent date formatting
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

// Update the DiscussionCard component with consistent date formatting
function DiscussionCard({ discussion, forum, slug }) {
  return (
    <div
      className={`${forum.bgColor} border ${forum.borderColor} rounded-xl p-6`}
    >
      <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {discussion.tags?.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-gray-400 mb-4">
        {discussion.content.substring(0, 200)}...
      </p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span>by {discussion.author}</span>
          <span>•</span>
          <span>{formatDate(discussion.date)}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{discussion.replies.length} replies</span>
          <Link
            href={`/forum/${slug}/chat`}
            className="text-green-400 hover:text-green-300 flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Join Chat
          </Link>
          <Link
            href={`/forum/${slug}/discussion/${discussion.id}`}
            className="text-purple-400 hover:text-purple-300"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ForumPage() {
  const params = useParams();
  const { slug } = params;
  const forum = forumData[slug];

  if (!forum) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] text-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-200 mb-4">
            Forum Not Found
          </h1>
          <Link
            href="/forums"
            className="text-purple-400 hover:text-purple-300"
          >
            Return to Forums
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-gray-200">
      <div className="container-mobile py-20">
        {/* Forum Header */}
        <div className="mb-8">
          <Link
            href="/forums"
            className="text-sm text-gray-400 hover:text-purple-400 mb-4 inline-block"
          >
            ← Back to Forums
          </Link>
          <h1 className={`text-3xl font-bold ${forum.color}`}>{forum.name}</h1>
          <p className="text-gray-400 mt-2">{forum.description}</p>
        </div>

        {/* New Discussion Button */}
        <div className="mb-8">
          <SignedIn>
            <Link href={`/forum/${slug}/new`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-200 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                New Discussion
              </motion.button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-200"
              >
                Sign in to Post
              </motion.button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Discussions List */}
        <div className="space-y-4">
          {forum.discussions.map((discussion) => (
            <DiscussionCard
              key={discussion.id}
              discussion={discussion}
              forum={forum}
              slug={slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
