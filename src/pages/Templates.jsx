import { useState } from 'react'

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSelect = (templateName) => {
    setSelectedTemplate(templateName);
  };

  const handlePreview = (templateName) => {
    alert(`Previewing ${templateName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 italic mb-2">Template Selection</h2>
          <p className="text-sm text-gray-500">Pick one of the available templates. Preview before selecting.</p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Slate Minimal Template */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="h-40 bg-gradient-to-br from-cyan-200 to-cyan-300 relative p-6">
              <div className="bg-white border border-gray-600 rounded p-4 w-40 h-16 relative">
                <div className="flex space-x-4 h-full">
                  <div className="w-0.5 bg-gray-400"></div>
                  <div className="w-0.5 bg-gray-400"></div>
                  <div className="w-0.5 bg-gray-400"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Slate<br />Minimal</h3>
                  <p className="text-sm text-gray-500">Minimal • <br />Responsive</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  className="px-4 py-2 bg-gray-400 text-gray-700 rounded text-sm font-medium hover:bg-gray-500 transition-colors"
                  onClick={() => handlePreview('Slate Minimal')}
                >
                  Preview
                </button>
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded text-sm font-medium hover:bg-indigo-700 transition-colors ml-auto"
                  onClick={() => handleSelect('Slate Minimal')}
                >
                  Select
                </button>
              </div>
            </div>
          </div>

          {/* Executive Pro Template */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="h-40 bg-gradient-to-br from-cyan-200 to-cyan-300 relative">
              <div className="bg-blue-800 h-20 w-full mb-4"></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white rounded px-6 py-3 text-2xl font-bold">
                  Ps
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Executive<br />Pro</h3>
                  <p className="text-sm text-gray-500">Professional • <br />ATS-friendly</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  className="px-4 py-2 bg-gray-400 text-gray-700 rounded text-sm font-medium hover:bg-gray-500 transition-colors"
                  onClick={() => handlePreview('Executive Pro')}
                >
                  Preview
                </button>
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded text-sm font-medium hover:bg-indigo-700 transition-colors ml-auto"
                  onClick={() => handleSelect('Executive Pro')}
                >
                  Select
                </button>
              </div>
            </div>
          </div>

          {/* Canvas Creative Template */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="h-40 bg-gradient-to-br from-cyan-200 to-cyan-300 relative">
              <div className="bg-pink-200 h-32 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Main circle */}
                    <div className="w-16 h-16 bg-white border-4 border-pink-600 rounded-full relative">
                      {/* Eyes */}
                      <div className="absolute top-3 left-3 w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full"></div>
                      {/* Mouth */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                    {/* Paintbrush */}
                    <div className="absolute top-8 -right-8 w-1 h-12 bg-gray-700"></div>
                    <div className="absolute top-6 -right-12 w-6 h-4 bg-yellow-400 transform rotate-12"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Canvas<br />Creative</h3>
                  <p className="text-sm text-gray-500">Creative • <br />Visual</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  className="px-4 py-2 bg-gray-400 text-gray-700 rounded text-sm font-medium hover:bg-gray-500 transition-colors"
                  onClick={() => handlePreview('Canvas Creative')}
                >
                  Preview
                </button>
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded text-sm font-medium hover:bg-indigo-700 transition-colors ml-auto"
                  onClick={() => handleSelect('Canvas Creative')}
                >
                  Select
                </button>
              </div>
            </div>
          </div>

          {/* Techfolio Template */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="h-40 bg-gradient-to-br from-cyan-200 to-cyan-300 relative">
              <div className="bg-gray-900 h-32 w-full flex items-center justify-center">
                <div className="text-white text-3xl font-mono">&lt;/&gt;</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Techfolio</h3>
                  <p className="text-sm text-gray-500">Technical • <br />Docs</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  className="px-4 py-2 bg-gray-400 text-gray-700 rounded text-sm font-medium hover:bg-gray-500 transition-colors"
                  onClick={() => handlePreview('Techfolio')}
                >
                  Preview
                </button>
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded text-sm font-medium hover:bg-indigo-700 transition-colors ml-auto"
                  onClick={() => handleSelect('Techfolio')}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Template Section */}
        <div className="bg-blue-100 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-sm font-bold text-gray-700 mb-4">Selected Template</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-400 border border-gray-300 rounded px-4 py-2 text-sm font-bold text-gray-900">
                {selectedTemplate || 'None selected'}
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors">
                Change
              </button>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700 transition-colors">
                Use Template
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-black">
            <span className="text-2xl">©</span>
            <span className="text-xl"> 2025 Portfolio</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">Privacy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">Terms</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
