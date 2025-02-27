import { Comment } from "./comment";
import { UserInfo } from "./user-info";

export interface Post {
  id: string;
  user: UserInfo;
  createdAt: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments?: Comment[];
  showComments?: boolean;
}
