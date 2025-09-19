import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-purple-400 via-blue-300 to-indigo-400 h-20 flex items-center justify-between px-4 md:px-16 shadow-xl backdrop-blur-md bg-opacity-90"
    >
      <Link to="/" className="flex items-center gap-4">
        <motion.img
          whileHover={{ scale: 1.1, rotate: 5 }}
          src="/logo.png"
          alt="Portfolio logo"
          className="w-14 h-14 rounded-full shadow-lg"
        />
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold text-white drop-shadow-lg"
        >
          Portfolio
        </motion.h1>
      </Link>
      <div className="flex items-center gap-6">
        {isLoggedIn && (
          <>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/home"
                className="text-xl font-semibold text-white hover:text-yellow-300 transition-all duration-300 drop-shadow-md"
              >
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/templates"
                className="text-xl font-semibold text-white hover:text-yellow-300 transition-all duration-300 drop-shadow-md"
              >
                Templates
              </Link>
            </motion.div>
          </>
        )}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/about"
            className="text-xl font-semibold text-white hover:text-yellow-300 transition-all duration-300 drop-shadow-md"
          >
            About Us
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/contact"
            className="text-xl font-semibold text-white hover:text-yellow-300 transition-all duration-300 drop-shadow-md"
          >
            Contact Us
          </Link>
        </motion.div>
        {!isLoggedIn ? (
          <>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/login"
                className="text-xl font-semibold text-white hover:text-yellow-300 transition-all duration-300 drop-shadow-md"
              >
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              >
                Signup
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleLogout}
            className="text-xl font-semibold text-white hover:text-red-300 transition-all duration-300 drop-shadow-md"
          >
            Logout
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
