import type { Comment as CommentProps } from "@/types/comment";
import Image from "next/image";

export default function Comment({ user, content }: CommentProps) {
  return (
    <div className="mb-4 flex items-start space-x-4">
      <Image
        className="h-8 w-8 rounded-full object-cover"
        src={user.profilePicUrl}
        width={61}
        height={61}
        alt="Commenter 1"
      />
      <div className="flex-1">
        <p className="text-sm text-gray-800 font-semibold">{user.name}</p>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
}
