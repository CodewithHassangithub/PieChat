"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Timeline from "../components/about/Timeline";
import Values from "../components/about/Values";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    bio: "Former AI researcher at DeepMind, passionate about making AI accessible to everyone.",
  },
  {
    name: "David Chen",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "Ex-Google engineer with 15 years of experience in building scalable systems.",
  },
  {
    name: "Emma Williams",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    bio: "Award-winning designer focused on creating intuitive user experiences.",
  },
];

const stats = [
  { label: "Active Users", value: "10M+" },
  { label: "Countries", value: "150+" },
  { label: "Team Members", value: "100+" },
  { label: "Messages/Day", value: "1B+" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Revolutionizing Communication
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              One Chat at a Time
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're on a mission to make digital communication more human, more secure,
            and more intelligent through the power of AI.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gray-900/30 border border-gray-800"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values Section */}
        <Values />

        {/* Timeline Section */}
        <Timeline />

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're a diverse team of experts passionate about building the future of
            communication technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative p-6 rounded-2xl bg-gray-900/30 border border-gray-800"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <div className="text-purple-400 mb-4">{member.role}</div>
              <p className="text-gray-400">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 