import React from "react";
import { Rocket, Wand2, AtSign } from "lucide-react";
import { motion } from "framer-motion";
import "@fontsource/itim"; // ✅ Import Itim font

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-8 font-itim">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex gap-1 bg-gray-300 p-3 rounded-lg shadow"
        >
          <img src="/logo.png" alt="logo" className="h-7" />
          <p className="text-sm cursor-pointer">Portfolio</p>
        </motion.div>

        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-4 py-2 rounded-lg border shadow bg-[#b7b5f4] text-black hover:scale-105 hover:opacity-90 transition-transform"
        >
          Contact
        </motion.button>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col items-center text-center mt-12"
      >
        <h1 className="text-2xl font-bold">
          CREATE A PROFESSIONAL PORTFOLIO IN MINUTES
        </h1>
        <p className="mt-4 text-base text-gray-700">
          Guided steps, beautiful templates, and instant <br /> deployment. Start
          by logging in or creating an account.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 rounded-lg shadow bg-[#b7b5f4] text-black font-medium flex items-center gap-2"
        >
          GET STARTED <Rocket className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 mb-12 w-full max-w-4xl">
        {[
          {
            icon: <Wand2 className="w-5 h-5 mb-2" />,
            title: "Guided Flow",
            desc: "Login - Details - Templates - Deploy",
          },
          {
            icon: <AtSign className="w-5 h-5 mb-2" />,
            title: "Beautiful templates",
            desc: "Pick from different categories for your work",
          },
          {
            icon: <Rocket className="w-5 h-5 mb-2" />,
            title: "1-Click Deploy",
            desc: "Instant hosting when you’re ready",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-6 bg-[#d2d1f5] rounded-xl shadow flex flex-col items-center text-center"
          >
            {feature.icon}
            <p className="font-bold">{feature.title}</p>
            <p className="text-sm mt-1">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mb-2"
      >
        
      </motion.div>
    </div>
  );
}
