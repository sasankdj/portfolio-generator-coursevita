import { Github, UploadCloud } from 'lucide-react';

export default function Deployment() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #296B9A 0%, #99B5D0 100%)' }}>
     
     
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

       
        {/* Manual Deployment Instructions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Host Your Portfolio Manually</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* GitHub Pages Instructions */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Github className="w-6 h-6 text-gray-800" />
                <h4 className="text-xl font-semibold text-gray-800">Option 1: GitHub Pages</h4>
              </div>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Download Portfolio:</strong> Go to the success page and download your `portfolio.html` file.
                </li>
                <li>
                  <strong>Rename File:</strong> Change the downloaded file's name to `index.html`.
                </li>
                <li>
                  <strong>Create GitHub Repo:</strong> Create a new **public** repository on GitHub.
                </li>
                <li>
                  <strong>Upload File:</strong> Upload your `index.html` file to the new repository.
                </li>
                <li>
                  <strong>Enable Pages:</strong> In your repo settings, go to the "Pages" section. Select the `main` branch as the source and save.
                </li>
                <li>
                  <strong>Done!</strong> Your site will be live at `your-username.github.io/repository-name`.
                </li>
              </ol>
            </div>

            {/* Netlify Instructions */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <UploadCloud className="w-6 h-6 text-cyan-600" />
                <h4 className="text-xl font-semibold text-gray-800">Option 2: Netlify</h4>
              </div>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Download Portfolio:</strong> Get the `portfolio.html` file from the success page.
                </li>
                <li>
                  <strong>Sign Up on Netlify:</strong> Create a free account on <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Netlify</a>.
                </li>
                <li>
                  <strong>Drag & Drop:</strong> Log in to your Netlify dashboard. Simply drag and drop the `portfolio.html` file into the "Sites" area.
                </li>
                <li>
                  <strong>Done!</strong> Netlify will instantly deploy your site and give you a live URL. You can customize the domain name in the site settings.
                </li>
                <li className="mt-4 pt-4 border-t border-gray-300">
                  <strong>Alternative:</strong> You can also connect your GitHub account to Netlify and deploy a repository directly for a CI/CD workflow.
                </li>
              </ol>
            </div>

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
