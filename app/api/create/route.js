import StreamChat from "stream-chat";

const userId = "Ali Hassan";

export async function GET() {
  const serviceClient = StreamChat.getInstance(
    process.env.NEXT_PUBLIC_STREAM_KEY,
    process.env.STREAM_SECRET_KEY
  );

  const token = serviceClient.createToken(userId);

  return Response.json({ message: "User created successfully", token });
}
