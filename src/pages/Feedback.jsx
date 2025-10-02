import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.length > 300) {
      toast.error('Feedback must be under 300 characters.');
      return;
    }
    // Send to backend
    console.log('Feedback:', feedback);
    toast.success('Thank you for your feedback!');
    navigate('/home');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Share Your Experience</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          How was your portfolio creation experience? (Under 300 characters)
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us about your experience..."
            rows={6}
            maxLength={300}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <div className="text-xs text-gray-400 mt-1">{feedback.length}/300</div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={handleSkip}
              className="flex-1 px-6 py-3 bg-gray-200 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Skip
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
