"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import ForumList from "../components/forums/ForumList";

// Programming language categories with their respective icons and colors
const forumCategories = [
  {
    id: "javascript",
    slug: "javascript-nodejs",
    name: "JavaScript & Node.js",
    description:
      "Discuss JavaScript, Node.js, React, Next.js, and related technologies",
    topics: 1234,
    posts: 8456,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    id: "typescript",
    slug: "typescript",
    name: "TypeScript",
    description: "Type-safe JavaScript, Angular, and enterprise development",
    topics: 892,
    posts: 5678,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    id: "python",
    slug: "python",
    name: "Python",
    description:
      "Python programming, Django, Flask, Data Science, and ML discussions",
    topics: 987,
    posts: 5432,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
      </svg>
    ),
  },
  {
    id: "rust",
    name: "Rust",
    description:
      "Systems programming, performance, and Rust ecosystem discussions",
    topics: 456,
    posts: 2345,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.8 20.726l-6.734-5.043c-.039-.03-.067-.066-.104-.098l.033-.094.014-.037c.09-.24.171-.485.24-.734.138-.5.24-1.016.297-1.541.06-.53.081-1.065.064-1.6a9.04 9.04 0 0 0-.148-1.51 8.889 8.889 0 0 0-.35-1.359c-.167-.503-.38-.987-.635-1.444-.255-.457-.552-.885-.885-1.276a8.875 8.875 0 0 0-1.099-1.06 8.833 8.833 0 0 0-1.271-.885 8.893 8.893 0 0 0-1.444-.635c-.441-.147-.896-.26-1.359-.35-.5-.1-1.004-.156-1.51-.148-.535-.017-1.07.004-1.6.064-.525.057-1.041.159-1.541.297-.249.069-.494.15-.734.24l-.037.014-.094.033c-.032-.037-.068-.065-.098-.104L.2 3.274c-.217-.29-.097-.7.267-.917l1.148-.684c.364-.217.826-.098 1.043.192l4.906 6.52c.047.063.087.13.12.2l.004.009-.004.009a5.714 5.714 0 0 1 1.945.523 5.707 5.707 0 0 1 1.676 1.089c.484.45.88.985 1.167 1.578a5.71 5.71 0 0 1 .523 1.944l.009-.004.009.004c.07.034.137.074.2.12l6.52 4.906c.29.217.409.679.192 1.043l-.684 1.148c-.217.364-.627.484-.917.267z" />
      </svg>
    ),
  },
  {
    id: "go",
    name: "Go",
    description: "Go programming, microservices, and cloud-native development",
    topics: 678,
    posts: 3456,
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
    borderColor: "border-sky-400/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" />
      </svg>
    ),
  },
  {
    id: "java",
    name: "Java",
    description: "Java development, Spring Boot, and enterprise applications",
    topics: 789,
    posts: 4567,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
      </svg>
    ),
  },
  {
    id: "csharp",
    name: "C# & .NET",
    description: "C#, .NET Core, ASP.NET, and Windows development",
    topics: 567,
    posts: 3789,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.25-.566 3.439 3.439 0 00-2.625 1.087 4.099 4.099 0 00-1.012 2.906 3.9 3.9 0 00.945 2.754 3.217 3.217 0 002.482 1.023 4.657 4.657 0 002.464-.634l-.004 1.08a5.543 5.543 0 01-2.625.555 4.211 4.211 0 01-3.228-1.297 4.793 4.793 0 01-1.212-3.409 5.021 5.021 0 011.365-3.663 4.631 4.631 0 013.473-1.392 5.55 5.55 0 01.12-.004zm5.863.155h.836l-.555 2.652h1.661l.567-2.652h.81l-.555 2.652 1.732-.004-.15.697H17.91l-.412 1.98h1.852l-.176.698h-1.816l-.58 2.625h-.83l.567-2.625h-1.65l-.555 2.625h-.81l.555-2.625h-1.74l.131-.698h1.748l.401-1.976h-1.826l.138-.697h1.826zm.142 3.345L15 12.6h1.673l.423-1.98z" />
      </svg>
    ),
  },
  {
    id: "cpp",
    name: "C/C++",
    description:
      "Systems programming, game development, and performance optimization",
    topics: 432,
    posts: 2876,
    color: "text-blue-300",
    bgColor: "bg-blue-300/10",
    borderColor: "border-blue-300/20",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.465 11.991h2.307v.07h1.154v3.384h-1.154v.07h-2.307v-.07H9.311v-3.384h1.154zm9.615.922c0-1.276-.882-2.153-2.307-2.153H13.77v.07h-1.154v3.384h1.154v.07h4.003c1.425 0 2.307-.877 2.307-2.153zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.154C6.295 22.154 1.846 17.705 1.846 12S6.295 1.846 12 1.846 22.154 6.295 22.154 12 17.705 22.154 12 22.154z" />
      </svg>
    ),
  },
];

// Recent discussions with more developer-focused content
const recentDiscussions = [
  {
    id: 1,
    slug: "best-practices-async-await-react-18",
    title: "Best practices for handling async/await in React 18",
    author: "Sarah Johnson",
    replies: 23,
    views: 1234,
    lastReply: "2 hours ago",
    category: "JavaScript & Node.js",
    isSticky: true,
    tags: ["react", "async", "hooks"],
  },
  {
    id: 2,
    slug: "implementing-webassembly-rust",
    title: "Implementing WebAssembly modules in Rust",
    author: "Alex Chen",
    replies: 15,
    views: 876,
    lastReply: "4 hours ago",
    category: "Rust",
    tags: ["wasm", "performance"],
  },
  {
    id: 3,
    slug: "python-vs-go-for-microservices-architecture",
    title: "Python vs Go for microservices architecture",
    author: "Michael Brown",
    replies: 45,
    views: 2345,
    lastReply: "6 hours ago",
    category: "Go",
    tags: ["microservices", "architecture"],
  },
];

export default function Forums() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white px-4 py-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Programming Forums
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forumCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: index * 0.1 },
              }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(128, 90, 213, 0.1)",
              }}
              className={`
                relative group
                bg-gray-800/50 rounded-lg p-6 
                backdrop-blur-sm border border-gray-700/50
                transition-all duration-300 ease-in-out
                hover:border-purple-500/50
                hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl ${category.bgColor} ${category.borderColor} border`}
                  >
                    {category.icon}
                  </div>
                  <motion.h2
                    className={`text-2xl font-semibold ${category.color} group-hover:text-purple-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.name}
                  </motion.h2>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200">
                  {category.description}
                </p>
                <div className="flex gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <motion.span whileHover={{ scale: 1.1 }}>
                      {category.topics.toLocaleString()} topics
                    </motion.span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <motion.span whileHover={{ scale: 1.1 }}>
                      {category.posts.toLocaleString()} posts
                    </motion.span>
                  </span>
                </div>
              </div>

              {/* Glowing effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-15 transition duration-500 group-hover:duration-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
