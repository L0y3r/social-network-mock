import Image from "next/image";

interface UserInfo {
  name: string
  profilePicUrl: string
}

interface Comments {
  user: UserInfo
  content: string
}

export interface PostProps {
  id: number
  user: UserInfo
  createdAt: string
  content: string
  imageUrl?: string
  likes: number
  comments?: Comments[]
}
export function Post({id, user, createdAt, content, imageUrl, likes}: PostProps) {
  return(
    <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-102">
      <div className="flex items-start space-x-4 mb-4">
        <Image className="h-10 w-10 rounded-full object-cover" src={user.profilePicUrl} width={50} height={50} alt="Friend 1" />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-800">{user.name}</h3>
          <p className="text-xs text-gray-500">{createdAt}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      {imageUrl && <Image className="w-full rounded-lg object-cover" src={imageUrl} width={600} height={400} alt="Post Image" />}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="flex items-center text-gray-600 hover:text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>{likes}</span>
          </button>
        </div>
        <button className="text-sm text-pink-500 hover:text-pink-700" data-id={id}>View Comments</button>
      </div>
    </div>
  )
}