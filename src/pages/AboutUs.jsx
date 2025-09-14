import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Content */}
      <main className="flex-1">
        <section className="mx-4 md:mx-8 mt-8 grid lg:grid-cols-2 gap-10">
          <div className="bg-blue-100 border border-gray-200 rounded-xl p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h1>
            <p className="mt-3 text-gray-600 text-lg">
              Welcome to our Portfolio platform. We are dedicated to helping individuals and businesses create stunning online portfolios with ease.
            </p>
            <div className="mt-6 space-y-4 text-gray-700">
              <p><span className="font-semibold">Mission:</span> To empower creators to showcase their work beautifully and professionally.</p>
              <p><span className="font-semibold">Vision:</span> To be the leading platform for digital portfolios worldwide.</p>
              <p><span className="font-semibold">Founded:</span> 2025</p>
            </div>
          </div>

          <div className="bg-blue-200 border border-blue-700 rounded-xl p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Our journey began with a simple idea: everyone deserves a platform to showcase their talents and achievements. Whether you're an artist, designer, developer, or entrepreneur, our tools make it easy to build a professional online presence.
            </p>
            <p className="text-gray-700 mb-4">
              We believe in simplicity, creativity, and accessibility. That's why we've designed our platform to be intuitive, powerful, and affordable for everyone.
            </p>
            <p className="text-gray-700">
              Join thousands of users who have already created their perfect portfolios with us. Start building yours today!
            </p>
            <div className="mt-6">
              <Link
                to="/home"
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
