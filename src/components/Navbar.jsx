import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 bg-white shadow row between">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Zerodha</div>

        <Hamburger />
        <div className="hidden md:flex space-x-6 text-sm text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
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
