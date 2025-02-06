import { getAuth } from "@clerk/nextjs/server";
import { StreamChat } from 'stream-chat';

const serverClient = StreamChat.getInstance(
  process.env.NEXT_PUBLIC_GETSTREAM_API_KEY,
  process.env.GETSTREAM_API_SECRET
);

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }), 
        { status: 401 }
      );
    }

    const { postId, reactionType } = await request.json();
    
    // Create/update reaction in Stream
    const reaction = await serverClient.createReaction({
      type: reactionType,
      post_id: postId,
      user_id: userId,
    });

    return new Response(
      JSON.stringify(reaction), 
      { status: 201 }
    );

  } catch (error) {
    console.error('Reaction creation error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }), 
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }), 
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');
    const reactionType = searchParams.get('type');

    await serverClient.deleteReaction(postId, {
      type: reactionType,
      user_id: userId,
    });

    return new Response(null, { status: 204 });

  } catch (error) {
    console.error('Reaction deletion error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }), 
      { status: 500 }
    );
  }
} 