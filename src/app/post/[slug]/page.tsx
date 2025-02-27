import { Post } from "@/components/Post";
import type { Post as PostProps } from "@/types/post";

export default async function PostContainer({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const postRequest = await fetch(`http://localhost:3001/posts/${slug}`);
  const post = (await postRequest.json()) as PostProps;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Post
          id={post.id}
          user={post.user}
          createdAt={post.createdAt}
          content={post.content}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
          showComments
        />
      </div>
    </div>
  );
}
