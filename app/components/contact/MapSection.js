"use client";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-24 rounded-2xl overflow-hidden border border-gray-800"
    >
      <div className="relative w-full h-[400px] bg-gray-900/50">
        {/* World Map Grid Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        
        {/* Location Markers */}
        <div className="absolute top-1/3 left-1/4 animate-pulse">
          <div className="relative">
            <div className="absolute -inset-2 bg-purple-500 rounded-full blur opacity-50" />
            <div className="relative w-4 h-4 bg-purple-500 rounded-full">
              <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/50" />
            </div>
          </div>
          <div className="mt-2 bg-gray-800 rounded-lg px-3 py-1 text-sm text-gray-300">
            San Francisco
          </div>
        </div>

        <div className="absolute top-1/4 left-2/3 animate-pulse">
          <div className="relative">
            <div className="absolute -inset-2 bg-purple-500 rounded-full blur opacity-50" />
            <div className="relative w-4 h-4 bg-purple-500 rounded-full">
              <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/50" />
            </div>
          </div>
          <div className="mt-2 bg-gray-800 rounded-lg px-3 py-1 text-sm text-gray-300">
            London
          </div>
        </div>

        <div className="absolute top-2/3 left-3/4 animate-pulse">
          <div className="relative">
            <div className="absolute -inset-2 bg-purple-500 rounded-full blur opacity-50" />
            <div className="relative w-4 h-4 bg-purple-500 rounded-full">
              <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/50" />
            </div>
          </div>
          <div className="mt-2 bg-gray-800 rounded-lg px-3 py-1 text-sm text-gray-300">
            Singapore
          </div>
        </div>
      </div>
    </motion.div>
  );
} 