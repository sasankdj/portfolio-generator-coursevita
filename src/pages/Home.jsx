import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { usePortfolio } from '../components/PortfolioContext';
import Footer from "../components/Footer";
import { useAuth } from '../components/AuthContext';

export default function Home() {
  const navigate = useNavigate();
  const { hasResume, hasPortfolio, portfolioLink, userDetails, connectGithub } = usePortfolio(); const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 font-sans">
      {/* Hero Welcome Section */}
      <section className="relative mx-6 md:mx-12 mt-8 rounded-3xl bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 p-12 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/20 to-black/30 rounded-3xl animate-fade-in"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg animate-slide-up">
            Welcome back, {user?.name || 'User'}! <span className="inline-block animate-bounce">🚀</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Ready to showcase your skills? Create an amazing portfolio or continue where you left off.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <button
              className="bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-purple-500 hover:to-indigo-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
              onClick={() => {
                if (!hasResume) {
                  toast.error('Please upload your resume first.');
                  navigate('/upload');
                  return;
                }
                if (hasPortfolio) {
                  if (window.confirm('Portfolio already exists. Do you want to re-modify it?')) {
                    navigate('/templates');
                  }
                } else {
                  navigate('/upload');
                }
              }}
            >
              ✨ Start Portfolio
            </button>
            <button
              className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-700 shadow-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              onClick={() => {
                if (hasPortfolio) {
                  navigate('/templates');
                } else {
                  toast.error('No portfolio found. Please create one.');
                  navigate('/upload');
                }
              }}
            >
              👀 View Profile
            </button>
            <button
              className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-700 shadow-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              onClick={() => {
                toast.info('App Settings coming soon!');
              }}
            >
              ⚙️ App Settings
            </button>
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* Progress & Quick Actions Section */}
      <section className="max-w-7xl mx-auto mt-16 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Your Progress Card */}
        <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-green-100 flex flex-col">
          <h3 className="text-4xl font-extrabold text-green-900 mb-6 flex items-center gap-3">
            📈 Your Progress
          </h3>
          <p className="text-lg text-green-700 mb-8 font-light max-w-md">
            Pick up where you left off.
          </p>
          <div className="space-y-5 flex-grow">
            <div className="flex items-center gap-4 text-green-900 bg-green-50 p-5 rounded-2xl shadow-sm font-semibold text-xl">
              <span className="text-3xl">🎨</span> Template selection
            </div>
            <div className="flex items-center gap-4 text-green-900 bg-green-100 p-5 rounded-2xl shadow-sm font-semibold text-xl">
              <span className="text-3xl text-green-600">✔</span> Details added
            </div>
            <div className="flex items-center gap-4 text-green-900 bg-green-50 p-5 rounded-2xl shadow-sm font-semibold text-xl">
              <span className="text-3xl text-blue-600">🔗</span> GitHub connected
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-indigo-100 flex flex-col">
          <h3 className="text-4xl font-extrabold text-indigo-900 mb-8 flex items-center gap-3">
            ⚡ Quick Actions
          </h3>
          <div className="space-y-6 flex-grow flex flex-col justify-center">
            <button
              className="w-full flex items-center gap-4 bg-indigo-50 border border-indigo-200 p-5 rounded-2xl text-indigo-900 text-xl font-medium hover:bg-indigo-100 hover:scale-105 transition-transform duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={() => {
                if (hasResume) {
                  if (confirm('Resume already exists. Do you want to re-upload?')) {
                    navigate('/upload');
                  }
                } else {
                  navigate('/upload');
                }
              }}
            >
              📂 Upload Resume
            </button>
            <button
              className="w-full flex items-center gap-4 bg-indigo-50 border border-indigo-200 p-5 rounded-2xl text-indigo-900 text-xl font-medium hover:bg-indigo-100 hover:scale-105 transition-transform duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={() => navigate('/form')}
            >
              ⌨ Enter Details
            </button>
            <button
              className="w-full flex items-center gap-4 bg-indigo-50 border border-indigo-200 p-5 rounded-2xl text-indigo-900 text-xl font-medium hover:bg-indigo-100 hover:scale-105 transition-transform duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={() => {
                const username = prompt('Enter your GitHub username:');
                if (username) {
                  connectGithub(username);
                  toast.success('GitHub connected!');
                }
              }}
            >
              🐙 Link GitHub
            </button>
          </div>
        </div>

        {/* Publish Card */}
        <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-orange-100 flex flex-col">
          <h3 className="text-4xl font-extrabold text-orange-900 mb-6 flex items-center gap-3">
            🚀 Publish
          </h3>
          <p className="text-lg text-orange-700 mb-8 font-light max-w-md">
            Ready to go live?
          </p>
          <div className="space-y-6 flex-grow flex flex-col justify-center">
            <button
              className="w-full flex items-center gap-4 bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 rounded-2xl text-2xl font-bold hover:from-orange-500 hover:to-red-600 hover:scale-105 transition-transform duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400"
              onClick={() => {
                if (!hasResume) {
                  toast.error('Please upload your resume first.');
                  navigate('/upload');
                  return;
                }
                if (hasPortfolio) {
                  navigate('/templates');
                } else {
                  navigate('/upload');
                }
              }}
            >
              ▶ Generate Portfolio
            </button>
            <button
              className="w-full flex items-center gap-4 bg-orange-50 border border-orange-200 p-6 rounded-2xl text-orange-900 text-2xl font-semibold hover:bg-orange-100 hover:scale-105 transition-transform duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={() => {
                if (hasPortfolio && portfolioLink) {
                  navigator.clipboard.writeText(portfolioLink);
                  toast.success('Portfolio link copied to clipboard!');
                } else {
                  if (hasResume || (userDetails && Object.keys(userDetails).length > 0)) {
                    if (window.confirm('Portfolio does not exist. Create Portfolio now?')) {
                      navigate('/templates');
                    }
                  } else {
                    navigate('/upload');
                  }
                }
              }}
            >
              🔗 Copy share link
            </button>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="max-w-7xl mx-auto mt-16 px-6 md:px-12">
        <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-purple-100 max-w-4xl mx-auto">
          <h3 className="text-4xl font-extrabold text-purple-900 mb-6 flex items-center gap-3 justify-center">
            🎨 Templates
          </h3>
          <p className="text-lg text-purple-700 mb-8 font-light text-center max-w-xl mx-auto">
            Choose a look that matches your style.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button
              className="flex-1 flex items-center justify-center gap-4 bg-purple-50 border border-purple-200 p-6 rounded-2xl text-purple-900 text-2xl font-semibold hover:bg-purple-100 hover:scale-105 transition-transform duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              onClick={() => navigate('/templates')}
            >
              📂 Explore templates
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-4 bg-purple-50 border border-purple-200 p-6 rounded-2xl text-purple-900 text-2xl font-semibold hover:bg-purple-100 hover:scale-105 transition-transform duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              onClick={() => {
                if (hasPortfolio) {
                  navigate('/deployment');
                } else {
                  toast.error('No portfolio to preview.');
                }
              }}
            >
              👁 Preview current
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
