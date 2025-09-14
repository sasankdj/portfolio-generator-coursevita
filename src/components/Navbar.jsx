import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-50 h-20 flex items-center justify-between px-4 md:px-16 shadow-sm">
      <Link to="/" className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="Portfolio logo"
          className="w-14 h-14"
        />
        <h1 className="text-3xl font-bold text-gray-700">Portfolio</h1>
      </Link>
      <div className="flex items-center gap-6">
        {isLoggedIn && (
          <>
            <Link
              to="/home"
              className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/templates"
              className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Templates
            </Link>
          </>
        )}
        <Link
          to="/about"
          className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors"
        >
          Contact Us
        </Link>
        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Signup
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
