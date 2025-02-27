export function Navbar() {
    return (
    <div className="bg-white shadow-md">
      <div className="max-w-3xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/profile" className="text-gray-700 hover:text-pink-600 font-medium">Profile</a>
          <a href="/feed" className="text-gray-700 hover:text-purple-600 font-medium">Feed</a>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="border rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>
      </div>
    </div>
    )
  }