import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm rounded-full px-8 py-4 flex items-center justify-between max-w-7xl mx-auto mt-6">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <span className="text-orange-500">🦋</span>
        Monarch
      </div>

      <ul className="hidden md:flex gap-8 text-gray-600 text-sm">
        <li className="hover:text-black cursor-pointer">Features</li>
        <li className="hover:text-black cursor-pointer">For Couples</li>
        <li className="hover:text-black cursor-pointer">For Professionals</li>
        <li className="hover:text-black cursor-pointer">Pricing</li>
        <li className="hover:text-black cursor-pointer">Download</li>
      </ul>

      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-full border text-sm cursor-pointer">
          <Link to="/signup">Sign Up</Link>
        </button>
        <button className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm cursor-pointer">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </nav>
  );
}
