import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Check, Palette, Sparkles, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ClassicTheme from '../templates/ClassicTheme.html?raw';
import DarkTheme from '../templates/DarkTheme.html?raw';
import MinimalistTheme from '../templates/MinimalistTheme.html?raw';
import CreativeTheme from '../templates/CreativeTheme.html?raw';

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handlePreview = (template) => {
    setPreviewTemplate(template);
  };

  const handleUseTemplate = () => {
    if (selectedTemplate) {
      // Navigate to form page with selected template
      navigate('/form', { state: { selectedTemplate } });
    }
  };

  const handleDownloadTemplate = (template) => {
    const blob = new Blob([template.content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.name.toLowerCase().replace(' ', '-')}-template.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const templates = [
    {
      id: 'classic',
      name: 'Classic Theme',
      description: 'Clean and professional design perfect for any industry',
      features: ['Professional', 'Responsive', 'ATS-friendly'],
      gradient: 'from-blue-600 to-indigo-700',
      previewGradient: 'from-blue-200 to-indigo-300',
      icon: '💼',
      content: ClassicTheme
    },
    {
      id: 'dark',
      name: 'Dark Theme',
      description: 'Modern dark theme designed for tech professionals',
      features: ['Modern', 'Dark Mode', 'Developer-focused'],
      gradient: 'from-gray-700 to-gray-900',
      previewGradient: 'from-gray-200 to-gray-400',
      icon: '🌙',
      content: DarkTheme
    },
    {
      id: 'minimal',
      name: 'Minimalist',
      description: 'Clean and minimal design focusing on content',
      features: ['Minimal', 'Clean', 'Content-focused'],
      gradient: 'from-slate-400 to-slate-600',
      previewGradient: 'from-slate-200 to-slate-300',
      icon: '🎨',
      content: MinimalistTheme
    },
    {
      id: 'creative',
      name: 'Creative Portfolio',
      description: 'Vibrant and artistic design for creative professionals',
      features: ['Creative', 'Visual', 'Unique'],
      gradient: 'from-pink-400 to-purple-600',
      previewGradient: 'from-pink-200 to-purple-300',
      icon: '🎭',
      content: CreativeTheme
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 font-sans">
      {/* Header Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative mx-6 md:mx-12 mt-8 rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 p-12 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/20 to-black/30 rounded-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose Your Template
          </motion.h1>
          <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
            Select the perfect design that reflects your professional style and personality
          </p>
        </div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
      </motion.div>

      {/* Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">
                Preview: {previewTemplate.name}
              </h3>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="h-[70vh] overflow-auto">
              <iframe
                srcDoc={previewTemplate.content}
                className="w-full h-full border-0"
                title={`Preview of ${previewTemplate.name}`}
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 italic mb-2">Template Selection</h2>
          <p className="text-sm text-gray-500">Pick one of the available templates. Preview before selecting.</p>
        </div>

        {/* Templates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Template Preview */}
              <div className={`h-48 bg-gradient-to-br ${template.previewGradient} relative p-8 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{template.icon}</div>
                  <div className={`inline-block px-6 py-3 bg-gradient-to-r ${template.gradient} text-white rounded-full text-lg font-semibold shadow-lg`}>
                    Preview
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Template Info */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{template.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 rounded-xl font-medium hover:bg-white/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handlePreview(template)}
                    disabled={!template.content}
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedTemplate === template.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                        : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg'
                    }`}
                    onClick={() => handleSelect(template.id)}
                  >
                    {selectedTemplate === template.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Selected
                      </>
                    ) : (
                      <>
                        <Palette className="w-4 h-4" />
                        Select
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Template Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-6 mb-8 shadow-lg"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4">Selected Template</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm font-bold text-gray-900">
                {selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.name : 'None selected'}
              </div>
              {selectedTemplate && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDownloadTemplate(templates.find(t => t.id === selectedTemplate))}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.button>
              )}
            </div>
            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTemplate(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
              >
                Clear
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleUseTemplate}
                disabled={!selectedTemplate}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedTemplate
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Use Template
              </motion.button>
            </div>
          </div>
        </motion.div>
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
