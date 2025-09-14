import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedin: '',
    skills: '',
    careerObjective: '',
    projects: [{ title: '', description: '' }, { title: '', description: '' }],
    experience: { company: '', jobTitle: '', duration: '', responsibilities: '' },
    achievements: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProjectChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      )
    }));
  };

  const handleExperienceChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      experience: { ...prev.experience, [field]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation example
    if (!formData.fullName || !formData.email) {
      alert('Please fill in your full name and email.');
      return;
    }
    // For now, just log the form data
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #F9FAFB 0%, #F3F4F6 100%)' }}>
      {/* Header */}
     

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto mt-6 px-4">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-[20px] p-8 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Personal Info */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Personal Info</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full h-10 px-4 bg-gray-50 rounded-lg border-0 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full h-10 px-4 bg-gray-50 rounded-lg border-0 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">LinkedIn</label>
                    <input
                      type="url"
                      placeholder="linkedin.com/in/username"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange('linkedin', e.target.value)}
                      className="w-full h-10 px-4 bg-gray-50 rounded-lg border-0 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Skills</h2>
                <textarea
                  placeholder="JavaScript, React, Python..."
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border-0 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Career Objective */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Career Objective</h2>
                <textarea
                  placeholder="Describe your career goal here..."
                  value={formData.careerObjective}
                  onChange={(e) => handleInputChange('careerObjective', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border-0 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Projects</h2>
                <div className="space-y-4">
                  {formData.projects.map((project, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <input
                        type="text"
                        placeholder="Project Title"
                        value={project.title}
                        onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                        className="w-full mb-3 text-sm font-bold text-gray-700 bg-transparent border-0 focus:outline-none placeholder-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="Short description..."
                        value={project.description}
                        onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                        className="w-full text-sm text-gray-600 bg-transparent border-0 focus:outline-none placeholder-gray-400"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Experience</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <input
                    type="text"
                    placeholder="Company — Job Title"
                    value={`${formData.experience.company}${formData.experience.company && formData.experience.jobTitle ? ' — ' : ''}${formData.experience.jobTitle}`}
                    onChange={(e) => {
                      const [company, jobTitle] = e.target.value.split(' — ');
                      handleExperienceChange('company', company || '');
                      handleExperienceChange('jobTitle', jobTitle || '');
                    }}
                    className="w-full mb-3 text-sm font-bold text-gray-700 bg-transparent border-0 focus:outline-none placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Jan 2020 – Dec 2022"
                    value={formData.experience.duration}
                    onChange={(e) => handleExperienceChange('duration', e.target.value)}
                    className="w-full mb-3 text-sm text-gray-600 bg-transparent border-0 focus:outline-none placeholder-gray-400"
                  />
                  <textarea
                    placeholder="Key responsibilities..."
                    value={formData.experience.responsibilities}
                    onChange={(e) => handleExperienceChange('responsibilities', e.target.value)}
                    rows={2}
                    className="w-full text-sm text-gray-600 bg-transparent border-0 focus:outline-none placeholder-gray-400 resize-none"
                  />
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Achievements (Optional)</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <textarea
                    placeholder="Awards, certifications..."
                    value={formData.achievements}
                    onChange={(e) => handleInputChange('achievements', e.target.value)}
                    rows={3}
                    className="w-full text-sm text-gray-600 bg-transparent border-0 focus:outline-none placeholder-gray-400 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-8 mt-8 mb-6">
          <button className="w-48 h-18 bg-blue-200 border-4 border-black rounded-[45px] flex items-center justify-center text-lg font-bold text-black hover:bg-blue-300 transition-colors">
            Choose Templates
          </button>
          <button type="submit" className="w-48 h-18 bg-blue-200 border-4 border-black rounded-[45px] flex items-center justify-center text-lg font-bold text-black hover:bg-blue-300 transition-colors">
            Export PDF
          </button>
        </div>
        </form>

        {/* Footer */}
        <footer className="text-center pb-6">
          <div className="text-xs text-gray-400">© 2025 Portfolio</div>
        </footer>
      </div>
    </div>
  );
}
