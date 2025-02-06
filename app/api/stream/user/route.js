import { StreamChat } from 'stream-chat';
import { getAuth } from '@clerk/nextjs/server';

// Add debug logging
console.log('Environment variables:', {
  apiKey: process.env.NEXT_PUBLIC_GETSTREAM_API_KEY?.slice(0, 5) + '...',
  secret: process.env.GETSTREAM_API_SECRET?.slice(0, 5) + '...',
});

let serverClient;

try {
  if (!process.env.NEXT_PUBLIC_GETSTREAM_API_KEY || !process.env.GETSTREAM_API_SECRET) {
    throw new Error('Missing Stream credentials');
  }

  serverClient = StreamChat.getInstance(
    process.env.NEXT_PUBLIC_GETSTREAM_API_KEY,
    process.env.GETSTREAM_API_SECRET
  );
} catch (error) {
  console.error('Failed to initialize Stream client:', error);
}

export async function POST(request) {
  if (!serverClient) {
    return new Response(
      JSON.stringify({ error: 'Stream client not initialized' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Log the incoming request
    console.log('Received request for Stream user creation');

    // Get auth with error handling
    const auth = getAuth(request);
    const userId = auth.userId;
    console.log('Auth status:', { userId: userId });

    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }), 
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const body = await request.json();
    console.log('Request body:', body);

    const { name, image } = body;

    if (!name || !image) {
      return new Response(
        JSON.stringify({ error: 'Name and image are required' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generate token
    console.log('Generating token for user:', userId);
    const token = serverClient.createToken(userId);
    console.log('Token generated successfully');

    // Create or update user
    console.log('Upserting user in Stream');
    await serverClient.upsertUser({
      id: userId,
      name,
      image,
    });
    console.log('User upserted successfully');

    return new Response(
      JSON.stringify({ token, userId }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    // Detailed error logging
    console.error('Stream API Error:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause,
      code: error.code,
      statusCode: error.statusCode,
      response: error.response,
    });

    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
} 