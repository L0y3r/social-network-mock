import Image from "next/image";

export default function Post() {
    return(<div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="flex items-start space-x-4 mb-6">
            <Image className="h-12 w-12 rounded-full object-cover" src="https://placehold.co/60" width={60} height={60} alt="Friend's Profile" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Alice Smith</h3>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
      
          <Image className="w-full rounded-lg object-cover mb-6" src="https://placehold.co/800x600" width={800} height={600} alt="Post Image" />
      
          <p className="text-gray-700 text-lg mb-8">
            Just had the most amazing coffee at a new cafe downtown! ☕️ The atmosphere was so cozy, and the latte art was incredible. Definitely coming back soon.
          </p>
      
          <div className="flex justify-between items-center mb-6">
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
          </div>
      
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Comments</h4>
      
            <div className="mb-4 flex items-start space-x-4">
              <Image className="h-8 w-8 rounded-full object-cover" src="https://placehold.co/61" width={61} height={61} alt="Commenter 1" />
              <div className="flex-1">
                <p className="text-sm text-gray-800 font-semibold">Jane Doe</p>
                <p className="text-sm text-gray-600">Looks delicious!</p>
              </div>
            </div>
      
            <div className="mb-4 flex items-start space-x-4">
              <Image className="h-8 w-8 rounded-full object-cover" src="https://placehold.co/62" width={62} height={62} alt="Commenter 2" />
              <div className="flex-1">
                <p className="text-sm text-gray-800 font-semibold">Peter Jones</p>
                <p className="text-sm text-gray-600">Where is this cafe?</p>
              </div>
            </div>
      
            <div className="mt-4">
              <input type="text" placeholder="Add a comment..." className="w-full border rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500" />
            </div>
          </div>
        </div>
      </div>)
}