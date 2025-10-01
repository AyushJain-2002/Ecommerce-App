import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 shadow-lg rounded-t-xl sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <div className="text-2xl font-bold text-gray-800 cursor-default italic">E-Shop</div>

        <nav className="hidden md:flex space-x-6 ">
          <Link to="/" className="text-gray-700  hover:text-white font-semibold ">Home</Link>
          <Link to="/admin" className="text-gray-700 hover:text-white font-semibold ">Admin</Link>
          <Link to="/profile" className="text-gray-700 hover:text-white font-semibold ">Profile</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/admin" className="block text-gray-700 hover:text-blue-600">Admin</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
