import { Post } from "@/components/Post";
import type { Post as PostProps } from "@/types/post";

export default async function Feed() {
  const postsRequest = await fetch("http://localhost:3001/posts");
  const posts = (await postsRequest.json()) as PostProps[];
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Friends&apos; Feed
        </h2>
        {posts.map(({ id, user, createdAt, content, imageUrl, likes }) => (
          <Post
            key={id}
            id={id}
            user={user}
            createdAt={createdAt}
            content={content}
            imageUrl={imageUrl}
            likes={likes}
          />
        ))}
      </div>
    </div>
  );
}
