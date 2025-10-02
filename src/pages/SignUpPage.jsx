import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpPage = () => {
  // Add state for the new 'name' field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  const validateForm = () => {
    const newErrors = {};

    // Password validation
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Your sign-up logic goes here
      console.log("Creating account with:", { name, email, password });
      alert("Account created successfully!");
      login({ name }); // Pass the user's name
      navigate("/home");
    }
  };

  const handleGoogleSignIn = useGoogleLogin({ 
    onSuccess: async (tokenResponse) => {
      try {
        const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const userInfo = await userInfoRes.json();
        login({ name: userInfo.name, email: userInfo.email });
      } catch (error) {
        console.error("Failed to fetch user info from Google", error);
        login({ name: 'User' }); // Fallback to default user
      }
      navigate('/home');
    },
    onError: () => alert('Google sign-in failed. Please try again.'),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-purple-300 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/20 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800">Create an account</h1>
          <div className="mt-2 text-gray-600">
            <p>Already have an account?</p>
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ✨ New Field for Name ✨ */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm bg-white/50 placeholder:text-gray-500/90 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

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
              className={`mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm bg-white/50 placeholder:text-gray-500/90 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
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
              className={`mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm bg-white/50 placeholder:text-gray-500/90 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={`mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm bg-white/50 placeholder:text-gray-500/90 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center text-gray-500 my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {["Google", "LinkedIn", "GitHub"].map((provider) => {
            if (provider === "Google") {
              return (
                <button
                  key={provider}
                  onClick={() => handleGoogleSignIn()}
                  disabled={loading}
                  className="flex-1 flex items-center justify-center py-2.5 border border-gray-300 bg-white rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="font-medium text-black">{provider}</span>
                </button>
              );
            }
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
