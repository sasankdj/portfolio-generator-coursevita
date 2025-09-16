import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, any login is successful
    login();
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-purple-300 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/20 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800">Log-in</h1>
          <div className="mt-2 text-gray-600">
            <p>Don't have an account?</p>
            <Link
              to="/signup"
              className="font-semibold text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white/50 placeholder:text-gray-500/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white/50 placeholder:text-gray-500/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-bold text-black bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Log in
          </button>
        </form>

        <div className="flex items-center text-gray-500 my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {["Google", "LinkedIn", "GitHub"].map((provider) => (
            <button
              key={provider}
              onClick={() => {
                // Simulate OAuth login
                login();
                navigate('/home');
              }}
              className="flex-1 flex items-center justify-center py-2.5 border border-gray-300 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-black">{provider}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
