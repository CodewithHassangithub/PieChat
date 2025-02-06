"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { UserButton } from "@clerk/nextjs";
import EmojiPicker from "emoji-picker-react";
import {
  MessageSquare,
  Image as ImageIcon,
  Smile,
  Send,
  MoreHorizontal,
  Thread,
  Reply,
  Heart,
  ThumbsUp,
} from "lucide-react";

const MessageBubble = ({ message, onReaction, onThreadSelect }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="group relative"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm">
          {message.sender[0]}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-white">{message.sender}</span>
            <span className="text-xs text-gray-400">
              {formatDistanceToNow(new Date(message.timestamp), {
                addSuffix: true,
              })}
            </span>
          </div>
          <div className="mt-1 text-gray-200">{message.content}</div>

          {message.reactions?.length > 0 && (
            <div className="flex gap-2 mt-2">
              {message.reactions.map((reaction, index) => (
                <span
                  key={index}
                  className="bg-gray-800 rounded-full px-2 py-1 text-sm"
                >
                  {reaction.emoji} {reaction.count}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {showActions && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute -top-2 right-0 flex items-center space-x-2 bg-gray-800 rounded-lg px-2 py-1"
        >
          {onReaction && (
            <>
              <button
                onClick={() => onReaction(message.id, "❤️")}
                className="text-gray-400 hover:text-red-500"
              >
                <Heart className="w-4 h-4" />
              </button>
              <button
                onClick={() => onReaction(message.id, "👍")}
                className="text-gray-400 hover:text-blue-500"
              >
                <ThumbsUp className="w-4 h-4" />
              </button>
            </>
          )}
          {onThreadSelect && (
            <button
              onClick={() => onThreadSelect(message)}
              className="text-gray-400 hover:text-purple-500"
            >
              <Thread className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

const ThreadPanel = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="w-80 bg-gray-900 border-l border-gray-800"
    >
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium">Thread</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
      </div>

      <div className="p-4 border-b border-gray-800">
        <MessageBubble message={message} />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {message.replies?.map((reply) => (
          <MessageBubble key={reply.id} message={reply} />
        ))}
      </div>
    </motion.div>
  );
};

const ChatList = () => {
  const chats = [
    {
      id: 1,
      name: "JavaScript Group",
      lastMessage: "Check out this new feature!",
      unread: 3,
      active: true,
    },
    // Add more chat items as needed
  ];

  return (
    <div className="space-y-2">
      {chats.map((chat) => (
        <motion.div
          key={chat.id}
          whileHover={{ x: 4 }}
          className={`p-3 rounded-lg cursor-pointer ${
            chat.active
              ? "bg-purple-600 bg-opacity-20 border border-purple-500"
              : "hover:bg-gray-800"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">{chat.name}</span>
            {chat.unread > 0 && (
              <span className="bg-purple-600 text-white text-xs rounded-full px-2 py-1">
                {chat.unread}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedThread, setSelectedThread] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      content: newMessage,
      sender: "You",
      timestamp: new Date(),
      reactions: [],
      replies: [],
      attachments: [],
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleReaction = (messageId, reaction) => {
    setMessages(
      messages.map((msg) => {
        if (msg.id === messageId) {
          const existingReaction = msg.reactions.find(
            (r) => r.emoji === reaction
          );
          if (existingReaction) {
            return {
              ...msg,
              reactions: msg.reactions.filter((r) => r.emoji !== reaction),
            };
          }
          return {
            ...msg,
            reactions: [...msg.reactions, { emoji: reaction, count: 1 }],
          };
        }
        return msg;
      })
    );
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex h-screen bg-[#0A0A0F] pt-16 relative z-0">
      {" "}
      {/* Added relative and z-0 */}
      {/* Enhanced Sidebar */}
      <div className="w-72 bg-gray-900/50 border-r border-gray-800 backdrop-blur-sm z-10">
        {" "}
        {/* Added z-10 */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Chats</h2>
              <p className="text-sm text-gray-400">5 unread messages</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-800 rounded-lg">
                <MessageSquare className="w-5 h-5 text-gray-400" />
              </button>
              <UserButton />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <svg
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Enhanced ChatList */}
          <ChatList />
        </div>
      </div>
      {/* Main Chat Area with enhanced styling */}
      <div className="flex-1 flex flex-col relative z-10">
        {" "}
        {/* Added relative and z-10 */}
        {/* Enhanced Chat Header */}
        <div className="bg-gray-900/50 border-b border-gray-800 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white font-medium">JS</span>
              </div>
              <div>
                <h3 className="text-white font-medium">JavaScript Group</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>5
                    online
                  </span>
                  <span>•</span>
                  <span>24 members</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Enhanced Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900/50 to-transparent">
          <AnimatePresence>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                onReaction={handleReaction}
                onThreadSelect={setSelectedThread}
              />
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
        {/* Enhanced Message Input */}
        <div className="border-t border-gray-800 p-4 bg-gray-900/50 backdrop-blur-sm relative z-20">
          {" "}
          {/* Added relative and z-20 */}
          <form onSubmit={handleSendMessage} className="relative">
            <div className="flex items-center space-x-2">
              <div className="flex gap-2">
                <button
                  type="button"
                  className="p-2 text-gray-400 hover:text-purple-400 hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <Smile className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-400 hover:text-purple-400 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <ImageIcon className="w-5 h-5" />
                </button>
              </div>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-800/50 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
            </div>

            {/* Enhanced Emoji Picker */}
            {showEmojiPicker && (
              <div className="absolute bottom-full right-0 mb-2 z-50">
                {" "}
                {/* Added z-50 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <EmojiPicker
                    onEmojiClick={(emoji) => {
                      setNewMessage((prev) => prev + emoji.emoji);
                      setShowEmojiPicker(false);
                    }}
                    theme="dark"
                  />
                </motion.div>
              </div>
            )}
          </form>
        </div>
      </div>
      {/* Enhanced Thread Panel */}
      <AnimatePresence>
        {selectedThread && (
          <div className="relative z-30">
            {" "}
            {/* Added wrapper with z-30 */}
            <ThreadPanel
              message={selectedThread}
              onClose={() => setSelectedThread(null)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
