import React, { useState } from 'react';

const FormInputs = ({ formData, setFormData, image, setImage, uploadResume, loading }) => {
  const [enhancingField, setEnhancingField] = useState('');
  const [enhancedText, setEnhancedText] = useState('');

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
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const fileInputRef = React.useRef(null);
  const handleResumeUpload = async (event) => {
    const file = event.target.files[0];
    if (file) await uploadResume(file);
  };

  // 🔹 Enhance function
  const enhanceText = async (field, text, index = null, subfield = null) => {
    if (!text || text.trim().length < 1) {
      alert("Please write something before enhancing.");
      return;
    }

    // Create a unique key for the field being enhanced
    let fieldKey = field;
    if (subfield) {
      fieldKey += `-${subfield}`;
    }
    if (index !== null) {
      fieldKey += `-${index}`;
    }
    setEnhancingField(fieldKey);
    setEnhancedText('');

    try {
      const resp = await fetch("http://localhost:3001/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, field }),
      });

      if (!resp.ok) {
        throw new Error("Error from enhancement API");
      }

      const data = await resp.json();

      setEnhancedText(data.enhanced);

    } catch (err) {
      console.error(err);
      alert("Error enhancing text");
    }
  };

  const acceptEnhanced = (field, index = null, subfield = null) => {
    if (!enhancedText || !enhancingField) return;

    const [fieldRoot, subfieldPart, indexPart] = enhancingField.split('-');

    if (fieldRoot === "projects" && indexPart !== undefined && subfieldPart) {
      const projectIndex = parseInt(indexPart, 10);
      const newProjects = [...formData.projects];
      newProjects[projectIndex][subfieldPart] = enhancedText;
      setFormData({ ...formData, projects: newProjects });
    } else if (fieldRoot === "experience" && subfieldPart) {
      setFormData({
        ...formData,
        experience: { ...formData.experience, [subfieldPart]: enhancedText },
      });
    } else {
      setFormData({ ...formData, [fieldRoot]: enhancedText });
    }

    setEnhancedText("");
    setEnhancingField('');
  };

  return (
    <div className="space-y-8">
      {/* Personal Details */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
        <div className="mt-4 border-t pt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Autofill from Resume</label>
          <input type="file" ref={fileInputRef} onChange={handleResumeUpload} className="hidden" accept=".pdf,.doc,.docx" />
          <button onClick={() => fileInputRef.current.click()} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:bg-indigo-400" disabled={loading}>
            {loading ? "Parsing..." : "📄 Upload & Autofill"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" className="input" />
          <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="input" />
          <input name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="LinkedIn URL" className="input" />
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
        <textarea
          name="careerObjective"
          value={formData.careerObjective}
          onChange={(e) => setFormData({ ...formData, careerObjective: e.target.value })}
          placeholder="Career Objective / Professional Bio"
          className="input h-24"
        />
        <button onClick={() => enhanceText("careerObjective", formData.careerObjective)} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" disabled={enhancingField === "careerObjective"}>
          {enhancingField === "careerObjective" ? "Enhancing..." : "✨ Enhance with AI"}
        </button>
      </div>

      {enhancingField && enhancedText && (
        <div className="p-4 border rounded bg-gray-50 mt-2">
          <p className="mb-2 text-sm font-medium">Enhanced text:</p>
          <div className="whitespace-pre-wrap">{enhancedText}</div>
          <button onClick={acceptEnhanced} className="mt-2 px-3 py-1 bg-green-600 text-white rounded">Accept</button>
        </div>
      )}

      {/* Skills */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <input name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Skills (comma-separated)" className="input" />
        <button onClick={() => enhanceText("skills", formData.skills)} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" disabled={enhancingField === "skills"}>
          {enhancingField === "skills" ? "Enhancing..." : "✨ Enhance with AI"}
        </button>
      </div>

      {/* Projects */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Projects</h3>
        {formData.projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 border rounded">
            {/* Title */}
            <div>
              <input name="title" value={project.title} onChange={(e) => handleProjectChange(index, e)} placeholder={`Project ${index + 1} Title`} className="input" />
              <button onClick={() => enhanceText("projects", project.title, index, "title")} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" disabled={enhancingField === `projects-title-${index}`}>
                {enhancingField === `projects-title-${index}` ? "Enhancing..." : "✨ Enhance Title"}
              </button>
            </div>

            {/* Description */}
            <div>
              <input name="description" value={project.description} onChange={(e) => handleProjectChange(index, e)} placeholder="Description" className="input" />
              <button onClick={() => enhanceText("projects", project.description, index, "description")} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" disabled={enhancingField === `projects-description-${index}`}>
                {enhancingField === `projects-description-${index}` ? "Enhancing..." : "✨ Enhance Description"}
              </button>
            </div>

            {/* Technologies */}
            <div>
              <input name="technologies" value={project.technologies} onChange={(e) => handleProjectChange(index, e)} placeholder="Technologies (comma-separated)" className="input" />
              <button onClick={() => enhanceText("projects", project.technologies, index, "technologies")} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" disabled={enhancingField === `projects-technologies-${index}`}>
                {enhancingField === `projects-technologies-${index}` ? "Enhancing..." : "✨ Enhance Technologies"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input name="jobTitle" value={formData.experience.jobTitle} onChange={handleExperienceChange} placeholder="Job Title" className="input" />
            <button onClick={() => enhanceText("experience", formData.experience.jobTitle, null, "jobTitle")} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" disabled={enhancingField === "experience-jobTitle"}>
              {enhancingField === "experience-jobTitle" ? "Enhancing..." : "✨ Enhance Job Title"}
            </button>
          </div>
          <div>
            <input name="company" value={formData.experience.company} onChange={handleExperienceChange} placeholder="Company" className="input" />
            
          </div>
          <div>
            <input name="duration" value={formData.experience.duration} onChange={handleExperienceChange} placeholder="Duration" className="input" />
            <button onClick={() => enhanceText("experience", formData.experience.duration, null, "duration")} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" disabled={enhancingField === "experience-duration"}>
              {enhancingField === "experience-duration" ? "Enhancing..." : "✨ Enhance Duration"}
            </button>
          </div>
        </div>
        <div>
          <textarea name="responsibilities" value={formData.experience.responsibilities} onChange={handleExperienceChange} placeholder="Responsibilities" className="input mt-4 h-24" />
          <button onClick={() => enhanceText("experience", formData.experience.responsibilities, null, "responsibilities")} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" disabled={enhancingField === "experience-responsibilities"}>
            {enhancingField === "experience-responsibilities" ? "Enhancing..." : "✨ Enhance Responsibilities"}
          </button>
        </div>
      </div>

      {/* Achievements */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Achievements / Testimonials</h3>
        <textarea name="achievements" value={formData.achievements} onChange={handleInputChange} placeholder="Achievements or Testimonials" className="input h-24" />
        <button onClick={() => enhanceText("achievements", formData.achievements)} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" disabled={enhancingField === "achievements"}>
          {enhancingField === "achievements" ? "Enhancing..." : "✨ Enhance with AI"}
        </button>
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
