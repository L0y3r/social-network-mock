import type { UserInfo } from "@/types/user-info";
import Image from "next/image";

interface ProfileInfo extends UserInfo {
  role: string;
  email: string;
  location: string;
  bio: string;  
}

export default async function Profile() {
  const profileRequest = await fetch("http://localhost:3001/profile");
  const profile = (await profileRequest.json()) as ProfileInfo;
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Your Profile
          </h2>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image
                className="h-24 w-24 rounded-full object-cover border-4 border-pink-300"
                src={profile.profilePicUrl}
                width={200}
                height={200}
                alt="Profile picture"
              />
              <div className="absolute bottom-0 right-0 p-1 bg-pink-500 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H4zm11 5a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 10-2 0 1 1 0 002 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-600">{profile.role}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 text-sm text-gray-900">{profile.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <p className="mt-1 text-sm text-gray-900">{profile.location}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <p className="mt-1 text-sm text-gray-900">{profile.bio}</p>
            </div>
          </div>

          <div>
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
