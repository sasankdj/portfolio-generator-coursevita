import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Section */}
      <section className="bg-blue-100 border border-gray-400 mx-4 md:mx-8 mt-4 rounded-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-black mb-4">Welcome, Alex</h2>
        <p className="text-2xl font-bold text-gray-500 mb-8">
          Get started by creating a new portfolio or jump back into where you left off.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded text-2xl font-bold hover:bg-blue-700 transition-colors">
            Start Portfolio
          </button>
          <button className="bg-blue-200 border border-gray-300 text-gray-700 px-6 py-3 rounded text-2xl font-bold hover:bg-blue-300 transition-colors">
            View Profile
          </button>
          <button className="bg-blue-200 border border-gray-300 text-gray-700 px-6 py-3 rounded text-2xl font-bold hover:bg-blue-300 transition-colors">
            App Settings
          </button>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mx-4 md:mx-8 mt-6">
        {/* Quick Actions Card */}
        <div className="bg-blue-200 border border-blue-700 rounded-lg p-6">
          <h3 className="text-3xl text-black mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full bg-blue-100 border border-gray-300 p-4 rounded text-xl text-gray-700 text-left hover:bg-blue-200 transition-colors">
              📂 Upload Resume
            </button>
            <button className="w-full bg-blue-100 border border-gray-300 p-4 rounded text-xl text-gray-700 text-left hover:bg-blue-200 transition-colors">
              ⌨ Enter Details
            </button>
            <button className="w-full bg-blue-100 border border-gray-300 p-4 rounded text-xl text-gray-700 text-left hover:bg-blue-200 transition-colors">
              🐙 Link GitHub
            </button>
          </div>
        </div>

        {/* Your Progress Card */}
        <div className="bg-blue-100 border border-blue-700 rounded-lg p-6">
          <h3 className="text-3xl font-bold text-black mb-2">Your Progress</h3>
          <p className="text-xl font-bold text-gray-500 mb-6">Pick up where you left off.</p>
          <div className="space-y-3">
            <div className="text-xl text-gray-700">→ Template selection</div>
            <div className="text-xl text-gray-700">✔ Details added</div>
            <div className="text-xl text-gray-700">🔗 GitHub connected</div>
          </div>
        </div>

        {/* Templates Card */}
        <div className="bg-blue-200 border border-blue-700 rounded-lg p-6">
          <h3 className="text-4xl text-black mb-4">Templates</h3>
          <p className="text-2xl text-gray-500 mb-8">Choose a look that matches your style.</p>
          <div className="space-y-4">
            <button className="w-full bg-blue-100 border border-gray-300 p-6 rounded text-2xl text-gray-700 text-left hover:bg-blue-200 transition-colors">
              📂 Explore templates
            </button>
            <button className="w-full bg-blue-100 border border-gray-300 p-6 rounded text-2xl text-gray-700 text-left hover:bg-blue-200 transition-colors">
              👁 Preview current
            </button>
          </div>
        </div>

        {/* Publish Card */}
        <div className="bg-blue-200 border border-blue-700 rounded-lg p-6">
          <h3 className="text-5xl text-black mb-4">Publish</h3>
          <p className="text-2xl text-gray-500 mb-8">Ready to go live?</p>
          <div className="space-y-4">
            <button className="w-full bg-blue-100 border border-blue-100 p-6 rounded text-3xl text-gray-700 text-left hover:bg-blue-200 transition-colors">
              ▶ Generate Portfolio
            </button>
            <button className="w-full bg-blue-100 border border-gray-300 p-6 rounded text-3xl text-gray-700 text-left hover:bg-blue-200 transition-colors">
              🔗 Copy share link
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
