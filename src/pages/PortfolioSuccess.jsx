import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { usePortfolio } from '../components/PortfolioContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { Eye, Download, UploadCloud, Edit } from 'lucide-react';

const PortfolioSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { downloadPortfolioHtml } = usePortfolio();
  const { portfolioUrl, template } = location.state || {};
  
  useEffect(() => {
    // Redirect if the user lands here without a portfolio URL
    if (!portfolioUrl) {
      navigate('/form');
    }
  }, [portfolioUrl, navigate]);

  if (!portfolioUrl) {
    return null;
  }

  const handleHost = () => {
    // Navigate to the deployment page
    navigate('/deployment', { state: { portfolioUrl, template } });
  };

  const handleEdit = () => {
    navigate('/form', { state: { selectedTemplate: template } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-lg text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="mx-auto w-24 h-24 flex items-center justify-center bg-green-100 rounded-full"
        >
          <span className="text-5xl">🎉</span>
        </motion.div>

        <h1 className="text-4xl font-bold text-gray-800 mt-6">Your portfolio is successfully created!</h1>
        <p className="text-gray-600 mt-2">
          Congratulations! What would you like to do next?
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-4">
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            <Eye size={20} /> View Portfolio
          </a>
          <button
            onClick={() => downloadPortfolioHtml(template)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
          >
            <Download size={20} /> Download
          </button>
          <button
            onClick={handleHost}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <UploadCloud size={20} /> Host on Netlify
          </button>
          <button
            onClick={handleEdit}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            <Edit size={20} /> Edit Details
          </button>
        </div>

        <div className="mt-8">
          <Link to="/home" className="text-blue-600 hover:underline">Go back to Home</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioSuccess;