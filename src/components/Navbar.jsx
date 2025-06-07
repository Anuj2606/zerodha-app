import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">Zerodha</div>

        {/* Navigation Links */}
        <div className="space-x-4 text-sm text-gray-700">
          <Link to="/signup" className="hover:text-blue-600">Signup</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/support" className="hover:text-blue-600">Support</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
