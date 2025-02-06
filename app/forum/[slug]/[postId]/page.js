"use client";
import { useParams } from "next/navigation";
import CommentSection from "../../../components/forums/CommentSection";
import PostReactions from "../../../components/forums/PostReactions";

export default function ForumPost() {
  const params = useParams();
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Post content */}
      <div className="space-y-8">
        <div className="prose prose-invert max-w-none">
          {/* Post content here */}
        </div>
        
        {/* Reactions */}
        <PostReactions postId={params.postId} />
        
        {/* Comments */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white mb-6">Comments</h3>
          <CommentSection postId={params.postId} />
        </div>
      </div>
    </div>
  );
} 