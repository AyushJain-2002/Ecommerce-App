// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div className="cursor-default">
          <h3 className="text-lg font-bold mb-2">E-Shop</h3>
          <p className="text-gray-400">Quality products at the best prices for everyone.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg cursor-default font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="cursor-default">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p>Email: support@eshop.com</p>
          <p>Phone: +91 123 456 7890</p>
        </div>

      </div>

      <div className="mt-8 text-center cursor-default text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
