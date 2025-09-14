export default function Success() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title and Action */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Deployed Successfully</h2>
            <p className="text-sm font-bold text-gray-500">
              Your portfolio is live. Share it or continue refining your details.
            </p>
          </div>
          <div>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded text-xl hover:bg-indigo-700 transition-colors">
              🚀 View Portfolio
            </button>
          </div>
        </div>

        {/* Success Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">✓</span>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Deployment Complete</h3>
            <p className="text-sm font-bold text-gray-500 mb-6">
              We successfully published your portfolio. Use the link below to access and share it.
            </p>

            {/* Portfolio URL */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
              <div className="bg-blue-50 border border-gray-300 rounded px-4 py-3 flex-1 max-w-md">
                <span className="text-sm text-gray-700">https://yourname-portfolio.github</span>
              </div>
              <button className="px-4 py-3 bg-gray-300 border border-gray-300 text-gray-700 rounded text-lg hover:bg-gray-400 transition-colors">
                📋 Copy Link
              </button>
              <button className="px-6 py-3 bg-indigo-600 text-white rounded text-lg hover:bg-indigo-700 transition-colors">
                🚀 View Portfolio
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="px-6 py-3 bg-gray-300 border border-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors">
                ✏ Edit Details
              </button>
              <button className="px-6 py-3 bg-gray-300 border border-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors">
                🔗 View on GitHub
              </button>
            </div>

            {/* Template Info */}
            <div className="bg-gray-100 rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Template</span>
                <div className="bg-blue-100 rounded px-3 py-1">
                  <span className="text-sm text-gray-700">Slate Minimal</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Deployed via</span>
                <div className="bg-blue-100 rounded px-3 py-1">
                  <span className="text-sm text-gray-700">GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="bg-green-100 border border-gray-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What's next?</h3>
          <p className="text-lg font-bold text-gray-500 mb-8 max-w-md mx-auto">
            Keep improving your portfolio. You can update your details anytime and redeploy in seconds.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded text-lg font-bold hover:bg-indigo-700 transition-colors">
            ✏ Edit Details
          </button>
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
