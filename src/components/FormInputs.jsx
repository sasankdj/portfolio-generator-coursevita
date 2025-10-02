import React from 'react';

const FormInputs = ({ formData, setFormData, image, setImage, uploadResume, loading }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [name]: value };
    setFormData({ ...formData, projects: newProjects });
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      experience: { ...formData.experience, [name]: value },
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const fileInputRef = React.useRef(null);

  const handleResumeUpload = async (event) => {
    const file = event.target.files[0];
    if (file) await uploadResume(file);
  };

  return (
    <div className="space-y-8">
      {/* Personal Details */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" className="input" />
          <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="input" />
          <input name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="LinkedIn URL" className="input" />
        </div>
        <div className="mt-4 border-t pt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Autofill from Resume</label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleResumeUpload}
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:bg-indigo-400"
            disabled={loading}
          >
            {loading ? 'Parsing...' : '📄 Upload & Autofill'}
          </button>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
          <input type="file" onChange={handleImageChange} accept="image/*" className="input" />
          {image && <img src={image} alt="Preview" className="mt-4 w-32 h-32 rounded-full object-cover" />}
        </div>
      </div>

      {/* Professional Summary */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
        <textarea name="careerObjective" value={formData.careerObjective} onChange={handleInputChange} placeholder="Career Objective / Professional Bio" className="input h-24" />
      </div>

      {/* Skills */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <input name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Skills (comma-separated, e.g., React, Node.js)" className="input" />
      </div>

      {/* Projects */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Projects</h3>
        {formData.projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 border rounded">
            <input name="title" value={project.title} onChange={(e) => handleProjectChange(index, e)} placeholder={`Project ${index + 1} Title`} className="input" />
            <input name="description" value={project.description} onChange={(e) => handleProjectChange(index, e)} placeholder="Description" className="input" />
            <input name="technologies" value={project.technologies} onChange={(e) => handleProjectChange(index, e)} placeholder="Technologies (comma-separated)" className="input" />
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="jobTitle" value={formData.experience.jobTitle} onChange={handleExperienceChange} placeholder="Job Title" className="input" />
          <input name="company" value={formData.experience.company} onChange={handleExperienceChange} placeholder="Company" className="input" />
          <input name="duration" value={formData.experience.duration} onChange={handleExperienceChange} placeholder="Duration (e.g., 2020 - Present)" className="input" />
        </div>
        <textarea name="responsibilities" value={formData.experience.responsibilities} onChange={handleExperienceChange} placeholder="Responsibilities (one per line)" className="input mt-4 h-24" />
      </div>

      {/* Achievements */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Achievements / Testimonials</h3>
        <textarea name="achievements" value={formData.achievements} onChange={handleInputChange} placeholder="Achievements or Testimonials (one per line)" className="input h-24" />
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          transition: border-color 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
        }
      `}</style>
    </div>
  );
};

export default FormInputs;

