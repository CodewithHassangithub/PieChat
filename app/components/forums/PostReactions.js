"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";

const reactions = [
  { id: 'like', emoji: '👍', label: 'Like' },
  { id: 'love', emoji: '❤️', label: 'Love' },
  { id: 'haha', emoji: '😄', label: 'Haha' },
  { id: 'wow', emoji: '😮', label: 'Wow' },
  { id: 'sad', emoji: '😢', label: 'Sad' },
  { id: 'angry', emoji: '😠', label: 'Angry' },
];

export default function PostReactions({ postId, initialReactions = {} }) {
  const { isSignedIn } = useUser();
  const [showReactions, setShowReactions] = useState(false);
  const [postReactions, setPostReactions] = useState(initialReactions);
  const [userReaction, setUserReaction] = useState(null);

  const handleReaction = async (reactionId) => {
    if (!isSignedIn) return;

    try {
      if (userReaction === reactionId) {
        // Remove reaction
        await fetch(`/api/forums/reactions?postId=${postId}&type=${reactionId}`, {
          method: 'DELETE',
        });
        setUserReaction(null);
        setPostReactions(prev => ({
          ...prev,
          [reactionId]: Math.max(0, (prev[reactionId] || 0) - 1)
        }));
      } else {
        // Add new reaction
        await fetch('/api/forums/reactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            postId,
            reactionType: reactionId,
          }),
        });

        if (userReaction) {
          setPostReactions(prev => ({
            ...prev,
            [userReaction]: Math.max(0, (prev[userReaction] || 0) - 1)
          }));
        }
        setUserReaction(reactionId);
        setPostReactions(prev => ({
          ...prev,
          [reactionId]: (prev[reactionId] || 0) + 1
        }));
      }
    } catch (error) {
      console.error("Failed to update reaction:", error);
    }
    setShowReactions(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowReactions(!showReactions)}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
      >
        <span className="text-lg">👍</span>
        <span className="text-gray-300">React</span>
      </button>

      <AnimatePresence>
        {showReactions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute bottom-full left-0 mb-2 p-2 bg-gray-800 rounded-lg border border-gray-700 shadow-xl"
          >
            <div className="flex space-x-2">
              {reactions.map((reaction) => (
                <button
                  key={reaction.id}
                  onClick={() => handleReaction(reaction.id)}
                  className={`p-2 rounded-full hover:bg-gray-700/50 transition-all ${
                    userReaction === reaction.id ? 'bg-gray-700/50 scale-110' : ''
                  }`}
                >
                  <span className="text-2xl">{reaction.emoji}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reaction counts */}
      <div className="mt-3 flex flex-wrap gap-2">
        {Object.entries(postReactions).map(([id, count]) => {
          if (count === 0) return null;
          const reaction = reactions.find(r => r.id === id);
          return (
            <div
              key={id}
              className="flex items-center space-x-1 px-2 py-1 bg-gray-800/30 rounded-full text-sm"
            >
              <span>{reaction.emoji}</span>
              <span className="text-gray-400">{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
} 