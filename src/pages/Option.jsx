import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../components/PortfolioContext';

export default function Option() {
  const navigate = useNavigate();
  const { uploadResume } = usePortfolio();
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'rgba(144, 198, 213, 0.96)' }}>
      {/* Background decorative shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[800px] h-[700px] rounded-[45px] border-8 opacity-30"
          style={{ 
            borderColor: '#CBD8D6',
            backgroundColor: '#95D0D0'
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12 px-4">
        {/* Upload Resume Option */}
        <button
          className="w-[400px] h-[126px] rounded-[45px] border-6 opacity-80 flex items-center justify-center text-black text-3xl font-normal hover:opacity-100 transition-opacity duration-200 max-w-[90vw]"
          style={{
            borderColor: '#CA9898',
            backgroundColor: '#F4F4FD'
          }}
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.pdf,.doc,.docx';
            input.onchange = async (e) => {
              const file = e.target.files[0];
              if (file) {
                await uploadResume(file);
                // After upload, navigate to form page
                window.location.href = '/form';
              }
            };
            input.click();
          }}
        >
          Upload Resume
        </button>

        {/* OR Divider */}
        <div className="text-black text-4xl font-bold">
          OR
        </div>

        {/* Enter Details Manually Option */}
        <button
          className="w-[400px] h-[126px] rounded-[45px] border-6 opacity-80 flex items-center justify-center text-black text-3xl font-normal hover:opacity-100 transition-opacity duration-200 max-w-[90vw]"
          style={{
            borderColor: '#CA9898',
            backgroundColor: '#F4F4FD'
          }}
          onClick={() => navigate('/form')}
        >
          <span className="text-center px-4">Enter Details Manually</span>
        </button>
      </div>
    </div>
  );
}
