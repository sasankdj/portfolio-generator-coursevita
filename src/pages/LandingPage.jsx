import React, { useEffect } from "react";
import { Rocket, Wand2, Upload, FileText, Palette, Zap, Shield, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import "@fontsource/itim"; // ✅ Import Itim font
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export default function LandingPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex flex-col items-center justify-between px-6 py-8 font-itim">
      {/* Hero Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col items-center text-center mt-12 max-w-4xl"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          CREATE A PROFESSIONAL PORTFOLIO IN MINUTES
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          Transform your career story into a stunning online portfolio with our AI-powered generator.
          Guided steps, beautiful templates, and instant deployment. Start by logging in or creating an account.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg flex items-center gap-3 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          onClick={() => navigate('/signup')}
        >
          GET STARTED <Rocket className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 mb-16 w-full max-w-6xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Powerful Features of Our Portfolio Generator
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Upload className="w-8 h-8 text-purple-600" />,
              title: "Resume Upload",
              desc: "Easily upload your resume in PDF or DOC format. Our AI extracts key information to pre-fill your portfolio details.",
            },
            {
              icon: <FileText className="w-8 h-8 text-blue-600" />,
              title: "Guided Form Filling",
              desc: "Step-by-step forms guide you through adding personal info, experience, projects, and skills with smart suggestions.",
            },
            {
              icon: <Palette className="w-8 h-8 text-indigo-600" />,
              title: "Beautiful Templates",
              desc: "Choose from a variety of professionally designed templates across different categories to match your style.",
            },
            {
              icon: <Zap className="w-8 h-8 text-yellow-600" />,
              title: "One-Click Deployment",
              desc: "Deploy your portfolio instantly to a live URL with our hosting service. No technical setup required.",
            },
            {
              icon: <Shield className="w-8 h-8 text-green-600" />,
              title: "Secure Authentication",
              desc: "Sign up and log in securely to manage your portfolios. Your data is protected with industry-standard security.",
            },
            
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mb-8 text-center"
      >
        <p className="text-lg text-gray-700 mb-4">Ready to showcase your talents?</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-lg shadow bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium flex items-center gap-2 hover:from-green-600 hover:to-teal-600 transition-all duration-300"
          onClick={() => navigate('/login')}
        >
          LOGIN TO CONTINUE <Wand2 className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
}
