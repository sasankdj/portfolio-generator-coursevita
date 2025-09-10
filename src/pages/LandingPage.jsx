import React from "react";
import { Rocket, Wand2, AtSign } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-8">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-1 bg-gray-300 p-3">
        <img src="/logo.png" alt="" srcset="" className="h-7" /> 
        <p className="text-sm cursor-pointer">Portfolio</p>
        </div>
        <button className="px-4 py-2 rounded-lg border shadow bg-[#b7b5f4] text-black hover:opacity-90">
          Contact
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-12">
        <h1 className="text-2xl font-bold">
          CREATE A PROFESSIONAL PORTFOLIO IN MINUTES
        </h1>
        <p className="mt-4 text-base text-gray-700">
          Guided steps, beautiful templates, and instant <br /> deployment. Start
          by logging in or creating an account.
        </p>
        <button className="mt-6 px-6 py-3 rounded-lg shadow bg-[#b7b5f4] text-black font-medium flex items-center gap-2 hover:opacity-90">
          GET STARTED <Rocket className="w-4 h-4" />
        </button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 mb-12 w-full max-w-4xl">
        <div className="px-4 py-6 bg-[#d2d1f5] rounded-xl shadow flex flex-col items-center text-center">
          <Wand2 className="w-5 h-5 mb-2" />
          <p className="font-bold">Guided Flow</p>
          <p className="text-sm mt-1">Login - Details - Templates - Deploy</p>
        </div>

        <div className="px-4 py-6 bg-[#d2d1f5] rounded-xl shadow flex flex-col items-center text-center">
          <AtSign className="w-5 h-5 mb-2" />
          <p className="font-bold">Beautiful templates</p>
          <p className="text-sm mt-1">Pick from different categories for your work</p>
        </div>

        <div className="px-4 py-6 bg-[#d2d1f5] rounded-xl shadow flex flex-col items-center text-center">
          <Rocket className="w-5 h-5 mb-2" />
          <p className="font-bold">1-Click Deploy</p>
          <p className="text-sm mt-1">Instant hosting when you’re ready</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mb-2">
        <span className="text-lg">©</span>
      </div>
    </div>
  );
}
