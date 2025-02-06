"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  {
    section: "Getting Started",
    items: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/quickstart", label: "Quick Start" },
      { href: "/docs/installation", label: "Installation" },
    ],
  },
  {
    section: "Core Concepts",
    items: [
      { href: "/docs/authentication", label: "Authentication" },
      { href: "/docs/messaging", label: "Messaging" },
      { href: "/docs/ai-features", label: "AI Features" },
    ],
  },
  {
    section: "API Reference",
    items: [
      { href: "/docs/api/rest", label: "REST API" },
      { href: "/docs/api/websocket", label: "WebSocket API" },
      { href: "/docs/api/sdk", label: "SDK Reference" },
    ],
  },
];

export default function DocsLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Sidebar Toggle Button (Mobile) */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Sidebar */}
          <motion.div
            className={`fixed lg:relative inset-y-0 left-0 z-40 w-64 bg-gray-900/80 backdrop-blur-xl transform lg:transform-none lg:opacity-100 transition-all duration-300 lg:transition-none border-r border-gray-800 ${
              isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 lg:translate-x-0"
            }`}
          >
            <div className="h-full overflow-y-auto p-6">
              <nav className="space-y-8">
                {sidebarLinks.map((section) => (
                  <div key={section.section}>
                    <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {section.section}
                    </h5>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              pathname === item.href
                                ? "bg-purple-500/20 text-purple-400"
                                : "text-gray-300 hover:bg-gray-800/50 hover:text-purple-400"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <main className="flex-1 py-8 lg:pl-8">{children}</main>
        </div>
      </div>
    </div>
  );
} 