import Image from "next/image";

export default function Feed() {
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Friends' Feed</h2>
      
          <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-102">
            <div className="flex items-start space-x-4 mb-4">
              <Image className="h-10 w-10 rounded-full object-cover" src="https://placehold.co/50" width={50} height={50} alt="Friend 1" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">Alice Smith</h3>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Just had the most amazing coffee at a new cafe downtown! ☕️</p>
            <Image className="w-full rounded-lg object-cover" src="https://placehold.co/600x400" width={600} height={400} alt="Post Image" />
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="flex items-center text-gray-600 hover:text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>12</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 13H6a3 3 0 01-3-3V5a3 3 0 013-3h12a3 3 0 013 3v5a3 3 0 01-3 3zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>4</span>
                </button>
              </div>
              <button className="text-sm text-pink-500 hover:text-pink-700">View Comments</button>
            </div>
          </div>
      
          <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-102">
            <div className="flex items-start space-x-4 mb-4">
              <Image className="h-10 w-10 rounded-full object-cover" src="https://placehold.co/51" width={51} height={51} alt="Friend 2" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">Bob Williams</h3>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Exploring the mountains this weekend! The views are breathtaking. ⛰️</p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="flex items-center text-gray-600 hover:text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>25</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 13H6a3 3 0 01-3-3V5a3 3 0 013-3h12a3 3 0 013 3v5a3 3 0 01-3 3zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>10</span>
                </button>
              </div>
              <button className="text-sm text-pink-500 hover:text-pink-700">View Comments</button>
            </div>
          </div>
      
          </div>
      </div>
      )
}