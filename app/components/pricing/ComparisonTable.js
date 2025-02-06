"use client";
import { motion } from "framer-motion";

const features = [
  {
    category: "Core Features",
    items: [
      { name: "Chat Rooms", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "File Storage", free: "1GB", pro: "25GB", enterprise: "Unlimited" },
      { name: "Team Members", free: "2", pro: "10", enterprise: "Unlimited" },
      { name: "Message History", free: "30 days", pro: "Unlimited", enterprise: "Unlimited" },
    ],
  },
  {
    category: "AI Features",
    items: [
      { name: "Smart Replies", free: "✓", pro: "✓", enterprise: "✓" },
      { name: "AI Assistant", free: "Basic", pro: "Advanced", enterprise: "Custom" },
      { name: "Language Translation", free: "Limited", pro: "Full", enterprise: "Full" },
      { name: "Content Moderation", free: "Basic", pro: "Advanced", enterprise: "Custom" },
    ],
  },
  {
    category: "Security",
    items: [
      { name: "End-to-End Encryption", free: "✓", pro: "✓", enterprise: "✓" },
      { name: "2FA", free: "✓", pro: "✓", enterprise: "✓" },
      { name: "SSO", free: "−", pro: "✓", enterprise: "✓" },
      { name: "Custom Security Policies", free: "−", pro: "−", enterprise: "✓" },
    ],
  },
];

export default function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-24 overflow-x-auto"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="py-4 px-6 text-left text-gray-400 font-medium">
              Features
            </th>
            <th className="py-4 px-6 text-center text-white font-semibold">
              Free
            </th>
            <th className="py-4 px-6 text-center text-white font-semibold bg-purple-500/10">
              Pro
            </th>
            <th className="py-4 px-6 text-center text-white font-semibold">
              Enterprise
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((section, sectionIndex) => (
            <>
              <tr key={`section-${sectionIndex}`} className="bg-gray-900/30">
                <td
                  colSpan={4}
                  className="py-3 px-6 text-sm font-semibold text-purple-400"
                >
                  {section.category}
                </td>
              </tr>
              {section.items.map((feature, featureIndex) => (
                <tr
                  key={`feature-${sectionIndex}-${featureIndex}`}
                  className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors"
                >
                  <td className="py-4 px-6 text-gray-300">{feature.name}</td>
                  <td className="py-4 px-6 text-center text-gray-400">
                    {feature.free}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400 bg-purple-500/5">
                    {feature.pro}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">
                    {feature.enterprise}
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
} 