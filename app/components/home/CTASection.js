"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Chatting Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of users and experience the future of communication. Free for 30 days!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 