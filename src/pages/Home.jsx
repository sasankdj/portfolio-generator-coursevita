import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { usePortfolio } from '../components/PortfolioContext';
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { hasResume, hasPortfolio, portfolioLink, userDetails, connectGithub } = usePortfolio();

  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Section */}
      <section className="bg-blue-100 border border-gray-400 mx-4 md:mx-8 mt-4 rounded-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-black mb-4">Welcome, Alex</h2>
        <p className="text-2xl font-bold text-gray-500 mb-8">
          Get started by creating a new portfolio or jump back into where you left off.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded text-2xl font-bold hover:bg-blue-700 transition-colors"
            onClick={() => {
              if (!hasResume) {
                alert('Please upload your resume first.');
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
            Start Portfolio
          </button>
          <button
            className="bg-blue-200 border border-gray-300 text-gray-700 px-6 py-3 rounded text-2xl font-bold hover:bg-blue-300 transition-colors"
            onClick={() => {
              if (hasPortfolio) {
                navigate('/templates');
              } else {
                alert('No portfolio found. Please create one.');
                navigate('/upload');
              }
            }}
          >
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
            <button
              className="w-full bg-blue-100 border border-gray-300 p-4 rounded text-xl text-gray-700 text-left hover:bg-blue-200 transition-colors"
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
              className="w-full bg-blue-100 border border-gray-300 p-4 rounded text-xl text-gray-700 text-left hover:bg-blue-200 transition-colors"
              onClick={() => navigate('/form')}
            >
              ⌨ Enter Details
            </button>
            <button
              className="w-full bg-blue-100 border border-gray-300 p-4 rounded text-xl text-gray-700 text-left hover:bg-blue-200 transition-colors"
              onClick={() => {
                const username = prompt('Enter your GitHub username:');
                if (username) {
                  connectGithub(username);
                  alert('GitHub connected!');
                }
              }}
            >
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
            <button
              className="w-full bg-blue-100 border border-gray-300 p-6 rounded text-2xl text-gray-700 text-left hover:bg-blue-200 transition-colors"
              onClick={() => navigate('/templates')}
            >
              📂 Explore templates
            </button>
            <button
              className="w-full bg-blue-100 border border-gray-300 p-6 rounded text-2xl text-gray-700 text-left hover:bg-blue-200 transition-colors"
              onClick={() => {
                if (hasPortfolio) {
                  navigate('/deployment'); // assuming deployment page for preview
                } else {
                  alert('No portfolio to preview.');
                }
              }}
            >
              👁 Preview current
            </button>
          </div>
        </div>

        {/* Publish Card */}
        <div className="bg-blue-200 border border-blue-700 rounded-lg p-6">
          <h3 className="text-5xl text-black mb-4">Publish</h3>
          <p className="text-2xl text-gray-500 mb-8">Ready to go live?</p>
          <div className="space-y-4">
            <button
              className="w-full bg-blue-100 border border-blue-100 p-6 rounded text-3xl text-gray-700 text-left hover:bg-blue-200 transition-colors"
              onClick={() => {
                if (!hasResume) {
                  alert('Please upload your resume first.');
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
              className="w-full bg-blue-100 border border-gray-300 p-6 rounded text-3xl text-gray-700 text-left hover:bg-blue-200 transition-colors"
              onClick={() => {
                if (hasPortfolio && portfolioLink) {
                  navigator.clipboard.writeText(portfolioLink);
                  alert('Portfolio link copied to clipboard!');
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
      </div>

      <Footer />
    </div>
  );
}
