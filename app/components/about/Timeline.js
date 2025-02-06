"use client";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2021",
    title: "Company Founded",
    description: "PieChat was born from a vision to revolutionize digital communication.",
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Raised $10M to accelerate development and expand our team.",
  },
  {
    year: "2022",
    title: "1M Users Milestone",
    description: "Reached our first million active users across 50 countries.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Launched advanced AI features for smarter communication.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Opened offices in London, Singapore, and São Paulo.",
  },
];

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white text-center mb-12"
      >
        Our Journey
      </motion.h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent" />

        {/* Timeline items */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900" />

              {/* Content */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "pr-16" : "pl-16"
                } flex flex-col ${
                  index % 2 === 0 ? "items-end text-right" : "items-start text-left"
                }`}
              >
                <span className="text-purple-400 font-semibold mb-1">{milestone.year}</span>
                <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 