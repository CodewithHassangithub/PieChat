"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ mousePosition, trustLogos }) {
  return (
    <section className="relative pt-32 pb-40">
      {/* Cyberpunk Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 animate-pulse-slow" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30 animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30 animate-pulse-slow" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* ... floating elements code ... */}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Glowing Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.3)] mb-12 group hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Experience Next-Gen Communication
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
            Future of
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 animate-gradient">
                Connection
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full blur-sm"></div>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Step into the future of communication with AI-enhanced features,
            holographic calls, and quantum-secured messaging.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full sm:w-auto group"
            >
              <Link
                href="/signup"
                className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-105 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Start Your Journey
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gray-800 text-gray-200 rounded-full font-medium hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 border border-gray-700"
              >
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watch Demo</span>
              </Link>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <span className="text-sm font-medium text-gray-400">Trusted by world-class teams</span>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center">
              {trustLogos.map((logo, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative brightness-75 hover:brightness-100 transition-all duration-300 transform group-hover:scale-110">
                    {logo}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 