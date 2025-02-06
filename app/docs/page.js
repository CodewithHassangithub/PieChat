"use client";
import { motion } from "framer-motion";

export default function DocsHome() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl"
    >
      <h1 className="text-4xl font-bold text-white mb-6">Documentation</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-400 mb-8">
          Welcome to the PieChat documentation. Here you'll find everything you need
          to get started with our platform.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          What is PieChat?
        </h2>
        <p className="text-gray-300 mb-6">
          PieChat is a modern communication platform that combines real-time
          messaging with advanced AI capabilities. Our platform helps teams
          collaborate more effectively by providing smart features like automatic
          translations, content summarization, and intelligent responses.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          Key Features
        </h2>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Real-time messaging with end-to-end encryption</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>AI-powered message translation in 100+ languages</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Smart content summarization and organization</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Advanced team collaboration tools</span>
          </li>
        </ul>

        <div className="mt-12 p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Start Guide
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Sign up for a PieChat account</li>
            <li>Create your first team or join an existing one</li>
            <li>Start a conversation or create a channel</li>
            <li>Explore AI features and integrations</li>
          </ol>
          <div className="mt-6">
            <a
              href="/docs/quickstart"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              Learn more about getting started
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 