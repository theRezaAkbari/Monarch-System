import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen px-6 py-8">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-500 mb-10">
        Monarch
      </div>

      {/* Navigation */}
      <nav className="space-y-4 text-gray-700">
            <Link
        to="/dashboard"
        className="block px-4 py-2 rounded-lg hover:bg-gray-100"
      >
        Dashboard
      </Link>

      <Link
        to="/transactions"
        className="block px-4 py-2 rounded-lg hover:bg-gray-100"
      >
        Transactions
      </Link>
      </nav>
    </aside>
  );
}



