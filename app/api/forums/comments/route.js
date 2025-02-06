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

    const { postId, content } = await request.json();
    
    if (!content?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Comment content is required' }), 
        { status: 400 }
      );
    }

    // Create comment in Stream
    const comment = await serverClient.createCommand({
      type: 'comment',
      post_id: postId,
      user_id: userId,
      data: {
        text: content,
        created_at: new Date().toISOString(),
      }
    });

    return new Response(
      JSON.stringify(comment), 
      { status: 201 }
    );

  } catch (error) {
    console.error('Comment creation error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }), 
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');

    if (!postId) {
      return new Response(
        JSON.stringify({ error: 'Post ID is required' }), 
        { status: 400 }
      );
    }

    // Get comments from Stream
    const response = await serverClient.queryCommands({
      type: 'comment',
      post_id: postId,
    });

    return new Response(
      JSON.stringify(response.commands), 
      { status: 200 }
    );

  } catch (error) {
    console.error('Comments fetch error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }), 
      { status: 500 }
    );
  }
} 