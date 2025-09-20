import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

          <div className="relative mx-4 md:mx-8 mt-8 mb-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  About Us
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Empowering creators worldwide to build stunning digital portfolios with cutting-edge technology and beautiful design
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Left Column - Mission & Vision */}
                <div className="space-y-8 animate-slide-up">
                  <div className="bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      To democratize professional portfolio creation by providing intuitive tools that transform ideas into stunning digital experiences.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-indigo-50 rounded-xl p-4 border-l-4 border-indigo-600">
                        <h3 className="font-semibold text-indigo-800 mb-2">Innovation</h3>
                        <p className="text-sm text-indigo-700">Cutting-edge technology meets beautiful design</p>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-600">
                        <h3 className="font-semibold text-purple-800 mb-2">Accessibility</h3>
                        <p className="text-sm text-purple-700">Professional tools for creators at every level</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      To become the world's leading platform for digital portfolio creation, setting new standards for creativity, innovation, and user experience.
                    </p>
                  </div>
                </div>

                {/* Right Column - Story & Stats */}
                <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <div className="bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        Born from a simple yet powerful idea: <span className="font-semibold text-indigo-700">everyone deserves a platform to showcase their talents beautifully</span>.
                      </p>
                      <p>
                        We recognized that traditional portfolio creation was complex, time-consuming, and often resulted in subpar digital experiences. Our founders, passionate about both technology and design, set out to change this.
                      </p>
                      <p>
                        Today, we empower thousands of creators worldwide — from artists and designers to developers and entrepreneurs — to build professional online presences that truly represent their unique talents and achievements.
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-xl border border-indigo-100">
                      <div className="text-2xl md:text-3xl font-bold text-indigo-600">2025</div>
                      <div className="text-sm text-gray-600">Founded</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-xl border border-purple-100">
                      <div className="text-2xl md:text-3xl font-bold text-purple-600">10K+</div>
                      <div className="text-sm text-gray-600">Creators</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-xl border border-indigo-100">
                      <div className="text-2xl md:text-3xl font-bold text-indigo-600">50+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Portfolio?</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Join thousands of creators who have already transformed their digital presence
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/home"
                      className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Get Started Free
                    </Link>
                    <Link
                      to="/templates"
                      className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                    >
                      View Templates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
