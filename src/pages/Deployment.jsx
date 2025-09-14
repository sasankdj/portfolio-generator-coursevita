export default function Deployment() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #296B9A 0%, #99B5D0 100%)' }}>
      {/* Header */}
     
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title and Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-xl font-bold text-gray-900 italic mb-2">GitHub Username / Deployment</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Connect your portfolio to your GitHub or deploy to Netlify. We'll push the generated site to your account.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors">
              ← Back
            </button>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700 transition-colors">
              🚀 Generate Portfolio
            </button>
          </div>
        </div>

        {/* Connect GitHub Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Connect GitHub</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-base font-bold text-gray-500 mb-3">
                GitHub Username
              </label>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="text"
                  placeholder="your-github-username"
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded text-sm text-gray-400 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gray-100 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors whitespace-nowrap">
                  🔗 Connect
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-bold">
              We'll create a new repository with your portfolio files.
            </p>
          </div>
        </div>

        {/* Optional Netlify Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Optional: Deploy to Netlify</h3>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="mb-6 lg:mb-0 lg:flex-1">
              <div className="bg-gray-50 border border-gray-300 rounded px-4 py-3 mb-4">
                <h4 className="text-lg text-gray-700 mb-2">☁ Netlify Deployment</h4>
                <p className="text-sm text-gray-400 font-bold">your-netlify-username</p>
              </div>
              <p className="text-xs text-gray-500">
                Auto-deploy your portfolio and get a live URL.
              </p>
            </div>
            
            <div className="lg:ml-8">
              <button className="w-full lg:w-auto px-6 py-8 bg-gray-100 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors">
                ➡ Connect Netlify
              </button>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Summary</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-100 rounded px-4 py-3">
              <div className="text-sm text-gray-700 mb-1">Selected Template</div>
              <div className="bg-gray-400 text-white rounded px-3 py-1 text-xs inline-block">
                Slate Minimal
              </div>
            </div>
            
            <div className="bg-gray-100 rounded px-4 py-3">
              <div className="text-sm text-gray-700 mb-1">Deployment</div>
              <div className="bg-gray-400 text-white rounded px-3 py-1 text-xs inline-block">
                GitHub
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mb-6">
            When you click Generate Portfolio, we'll build and push your site to your GitHub repository. If Netlify is connected, we'll also trigger a deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <button className="px-6 py-3 bg-gray-400 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-500 transition-colors">
              💾 Save Draft
            </button>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700 transition-colors">
              🚀 Generate Portfolio
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-black font-bold text-xl">
            © 2025 Portfolio
          </div>
        </div>
      </footer>
    </div>
  );
}
