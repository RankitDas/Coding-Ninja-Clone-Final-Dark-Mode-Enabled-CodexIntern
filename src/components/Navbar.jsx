import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="bg-gray-800/70 backdrop-blur sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-black font-bold">CN</div>
          <div>
            <h1 className="text-xl font-semibold">Coding Ninjas Clone</h1>
            <p className="text-xs text-gray-400">Dark demo</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <Link to="/courses" className="hover:text-orange-400">Courses</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact</Link>
          <button className="ml-4 bg-orange-500 hover:bg-orange-600 text-black px-4 py-1 rounded font-medium">Sign up</button>
        </div>
        <div className="md:hidden">
          <details className="text-right">
            <summary className="cursor-pointer">Menu</summary>
            <div className="mt-2 bg-gray-800 p-3 rounded">
              <Link to="/" className="block py-1">Home</Link>
              <Link to="/courses" className="block py-1">Courses</Link>
              <Link to="/contact" className="block py-1">Contact</Link>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
