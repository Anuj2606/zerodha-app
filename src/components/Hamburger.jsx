import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="cursor-pointer hover:blue-600 ">
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="cursor-pointer absolute right-0 mt-2 w-48 bg-white shadow-lg rounded z-10 p-2 text-sm">
          <Link to="/" className="block px-4 py-2 hover:text-blue-600" onClick={toggleMenu}>Home</Link>
          <Link to="/signup" className="block px-4 py-2 hover:text-blue-600" onClick={toggleMenu}>Signup</Link>
          <Link to="/about" className="block px-4 py-2 hover:text-blue-600" onClick={toggleMenu}>About</Link>
          <Link to="/products" className="block px-4 py-2 hover:text-blue-600" onClick={toggleMenu}>Products</Link>
          <Link to="/pricing" className="block px-4 py-2 hover:text-blue-600" onClick={toggleMenu}>Pricing</Link>
          <Link to="/support" className="block px-4 py-2 hover:text-blue-600" onClick={toggleMenu}>Support</Link>
        </div>
      )}
    </div>
  );
}
