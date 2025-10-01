import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 shadow-lg rounded-t-xl sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <img src="../src/assets/hero.png" className="object-contain h-16 w-16 overflow-auto rounded-full cursor-default"></img>

        <nav className="border p-3 rounded-3xl hidden md:flex space-x-6 ">
          <Link to="/Profile" className="text-gray-700  hover:text-white font-semibold ">Home</Link>
          <Link to="/admin" className="text-gray-700 hover:text-white font-semibold ">About</Link>
          <Link to="/skills" className="text-gray-700 hover:text-white font-semibold ">Skills</Link>
          <Link to="/education" className="text-gray-700 hover:text-white font-semibold ">Education</Link>
          <Link to="/contact" className="text-gray-700 hover:text-white font-semibold ">Contact</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : (
            <img
              src="../src/assets/hero.png"
              className="object-contain h-8 w-8 overflow-auto rounded-full cursor-pointer"
              alt="Menu"
            />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border border-red-400  bg-white px-4 pb-4 space-y-2 shadow-xl  bg-gradient-to-r  from-blue-200 via-purple-200 to-pink-200  rounded-xl">
          <Link to="/" className="block text-gray-700 hover:text-white hover:bg-gradient-to-r  from-blue-600 via-purple-600 to-pink-600 font-semibold">Home</Link>
          <Link to="/admin" className="block text-gray-700 hover:text-white hover:bg-gradient-to-r  from-blue-600 via-purple-600 to-pink-600 font-semibold ">About</Link>
          <Link to="/skills" className="block text-gray-700 hover:text-white hover:bg-gradient-to-r  from-blue-600 via-purple-600 to-pink-600 font-semibold ">Skills</Link>
          <Link to="/education" className="block text-gray-700 hover:text-white hover:bg-gradient-to-r  from-blue-600 via-purple-600 to-pink-600 font-semibold ">Education</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-white hover:bg-gradient-to-r  from-blue-600 via-purple-600 to-pink-600 font-semibold ">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
