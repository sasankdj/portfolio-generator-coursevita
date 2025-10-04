import React, { useState, useRef } from "react";

const FormInputs = ({ formData, setFormData, image, setImage, loading }) => {
  const [enhancing, setEnhancing] = useState(false);
  const [enhancedText, setEnhancedText] = useState("");
  const fileInputRef = useRef(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...(formData.projects || [])];
    newProjects[index] = { ...newProjects[index], [name]: value };
    setFormData({ ...formData, projects: newProjects });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...(formData.experience || [])];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData({ ...formData, experience: newExperience });
  };

  const handleResponsibilitiesChange = (index, e) => {
    const newExperience = [...(formData.experience || [])];
    newExperience[index] = {
      ...newExperience[index],
      responsibilities: e.target.value.split("\n"),
    };
    setFormData({ ...formData, experience: newExperience });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Upload Resume & Autofill Form
  const uploadResume = async (file) => {
    if (!file) return;
    const formDataFile = new FormData();
    formDataFile.append("resume", file);

    try {
      const resp = await fetch("http://localhost:3001/api/upload-resume", {
        method: "POST",
        body: formDataFile,
      });
      const data = await resp.json();

      setFormData((prev) => ({
        ...prev,
        fullName: data.fullName || prev.fullName,
        email: data.email || prev.email,
        linkedin: data.linkedin || prev.linkedin,
        careerObjective: data.careerObjective || prev.careerObjective,
        skills: Array.isArray(data.skills)
          ? data.skills.join(", ")
          : data.skills || prev.skills,
        projects: Array.isArray(data.projects) ? data.projects : prev.projects,
        experience: Array.isArray(data.experience)
          ? data.experience
          : prev.experience,
        achievements: Array.isArray(data.achievements)
          ? data.achievements.join("\n")
          : data.achievements || prev.achievements,
      }));
    } catch (err) {
      console.error(err);
      alert("Failed to parse resume with AI");
    }
  };

  const handleResumeChange = async (e) => {
    const file = e.target.files[0];
    if (file) await uploadResume(file);
  };

  // Enhance Text with AI
  const enhanceText = async (field, text) => {
    if (!text || text.trim().length < 5) return alert("Write something first");
    setEnhancing(true);
    setEnhancedText("");

    try {
      const resp = await fetch("http://localhost:3001/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, field }),
      });
      const data = await resp.json();
      setEnhancedText(data.enhanced || "");
    } catch (err) {
      console.error(err);
      alert("Error enhancing text");
    }
    setEnhancing(false);
  };

  return (
    <div className="space-y-8">
      {/* Personal Details */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
        <div className="mt-4 border-t pt-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleResumeChange}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            disabled={loading}
          >
            {loading ? "Parsing..." : "📄 Upload Resume & Autofill"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="input"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="input"
          />
          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            placeholder="LinkedIn URL"
            className="input"
          />
        </div>
        <div className="mt-4">
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="input"
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-4 w-32 h-32 rounded-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Professional Summary */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
        <textarea
          name="careerObjective"
          value={formData.careerObjective}
          onChange={handleInputChange}
          placeholder="Career Objective / Professional Bio"
          className="input h-24"
        />
      </div>

      {/* Skills */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <input
          name="skills"
          value={formData.skills}
          onChange={handleInputChange}
          placeholder="Skills (comma-separated)"
          className="input"
        />
      </div>

      {/* Projects */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Projects</h3>
        {Array.isArray(formData.projects) &&
          formData.projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 border rounded"
            >
              <input
                name="title"
                value={project.title || ""}
                onChange={(e) => handleProjectChange(index, e)}
                placeholder={`Project ${index + 1} Title`}
                className="input"
              />
              <input
                name="description"
                value={project.description || ""}
                onChange={(e) => handleProjectChange(index, e)}
                placeholder="Description"
                className="input"
              />
              <input
                name="technologies"
                value={project.technologies || ""}
                onChange={(e) => handleProjectChange(index, e)}
                placeholder="Technologies"
                className="input"
              />
            </div>
          ))}
      </div>

      {/* Experience */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        {Array.isArray(formData.experience) &&
          formData.experience.map((exp, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <input
                name="jobTitle"
                value={exp.jobTitle || ""}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Job Title"
                className="input"
              />
              <input
                name="company"
                value={exp.company || ""}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Company"
                className="input"
              />
              <input
                name="duration"
                value={exp.duration || ""}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Duration"
                className="input"
              />
              <textarea
                value={(exp.responsibilities || []).join("\n")}
                onChange={(e) => handleResponsibilitiesChange(index, e)}
                placeholder="Responsibilities (one per line)"
                className="input mt-2 h-24"
              />
            </div>
          ))}
      </div>

      {/* Achievements */}
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Achievements / Testimonials</h3>
        <textarea
          name="achievements"
          value={formData.achievements}
          onChange={handleInputChange}
          placeholder="Achievements or Testimonials"
          className="input h-24"
        />
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          transition: border-color 0.2s;
          margin-bottom: 0.25rem;
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
