import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePortfolio } from "../components/PortfolioContext";
import FormInputs from "../components/FormInputs";

function Form() {
  const { state } = useLocation();
  const { userDetails, updateUserDetails, uploadResume, loading } = usePortfolio();
  const navigate = useNavigate();

  const selectedTemplateId = state?.selectedTemplate || 'classic';

  const [formData, setFormData] = useState(userDetails);
  const [image, setImage] = useState(null); // Assuming you handle image uploads

  useEffect(() => {
    setFormData(userDetails);
  }, [userDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails(formData);
    toast.success('Portfolio details saved!');
  };

  const previewInNewTab = async () => {
    updateUserDetails(formData); // Update context before action
    try {
      const response = await fetch('http://localhost:3001/generate-portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          template: selectedTemplateId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate portfolio');
      }

      const { url } = await response.json();
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error generating portfolio:', error);
      toast.error('Error generating portfolio. Please try again.');
    }
  };

  const createAndNavigate = async () => {
    updateUserDetails(formData); // Update context before action
    try {
      const response = await fetch('http://localhost:3001/generate-portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          template: selectedTemplateId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate portfolio');
      }

      const data = await response.json();
      toast.success("Portfolio created successfully!");
      navigate('/success', { state: { portfolioUrl: data.url, template: selectedTemplateId } });
    } catch (error) {
      console.error('Error creating portfolio:', error);
      toast.error('Error creating portfolio. Please try again.');
    }
  };

  const downloadHtmlFile = async () => {
     updateUserDetails(formData); // Update context before action
     try {
       const response = await fetch('http://localhost:3001/api/download-html', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           formData,
           template: selectedTemplateId,
         }),
       });
 
       if (!response.ok) {
         throw new Error('Failed to generate HTML for download');
       }
 
       const blob = await response.blob();
       const a = document.createElement('a');
       a.href = URL.createObjectURL(blob);
       a.download = 'portfolio.html';
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
       URL.revokeObjectURL(a.href);
     } catch (error) {
       console.error('Error downloading portfolio:', error);
       toast.error('Error downloading portfolio. Please try again.');
     }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex justify-start">
          <button onClick={() => navigate('/templates')}
            className="px-6 py-3 border-2 border-gray-600 text-gray-600 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 font-medium flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Templates
          </button>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg relative">
          {loading && (
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
              <p className="text-xl font-semibold animate-pulse">Parsing Resume...</p>
            </div>
          )}
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Portfolio Details</h1>
          <FormInputs formData={formData} setFormData={setFormData} image={image} setImage={setImage} uploadResume={uploadResume} loading={loading} />
        </div>

        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="flex-1 flex items-center justify-center px-4 py-3 text-white bg-gray-700 rounded-lg hover:bg-gray-800 transition"
              onClick={handleSubmit}
            >
              💾 Save Details
            </button>
            <button
              className="flex-1 flex items-center justify-center px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              onClick={downloadHtmlFile}
            >
              📄 Download HTML
            </button>
            <button
              className="flex-1 flex items-center justify-center px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              onClick={previewInNewTab}
            >
              👁️ Preview in New Tab
            </button>
            <button
              className="flex-1 flex items-center justify-center px-4 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
              onClick={createAndNavigate}
            >
              ✨ Create Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;