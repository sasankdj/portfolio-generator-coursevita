import React from 'react';

function FormInputs({ formData, setFormData, image, setImage }) {
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Header Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Header Name
          </label>
          <input
            type="text"
            value={formData.headerName}
            onChange={(e) => handleInputChange('headerName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Navigation Links
          </label>
          <input
            type="text"
            value={formData.navLinks}
            onChange={(e) => handleInputChange('navLinks', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Home, About, Portfolio, Contact"
          />
        </div>

        {/* Hero Section */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hero Headline
          </label>
          <input
            type="text"
            value={formData.heroHeadline}
            onChange={(e) => handleInputChange('heroHeadline', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your main headline"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hero Call to Action
          </label>
          <textarea
            value={formData.heroCTA}
            onChange={(e) => handleInputChange('heroCTA', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your call to action text"
            rows={3}
          />
        </div>

        {/* Professional Information */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Bio
          </label>
          <textarea
            value={formData.professionalBio}
            onChange={(e) => handleInputChange('professionalBio', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us about yourself professionally"
            rows={4}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skills
          </label>
          <input
            type="text"
            value={formData.skills}
            onChange={(e) => handleInputChange('skills', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="JavaScript, React, Python, etc."
          />
        </div>

        {/* Personal Photo */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Personal Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {image && (
            <div className="mt-2">
              <img
                src={image}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md border"
              />
            </div>
          )}
        </div>

        {/* Work Items */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work Items (JSON format)
          </label>
          <textarea
            value={JSON.stringify(formData.workItems, null, 2)}
            onChange={(e) => {
              try {
                const parsed = JSON.parse(e.target.value);
                handleInputChange('workItems', parsed);
              } catch {
                // Invalid JSON, don't update
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='[{"title": "Project 1", "description": "Description", "goals": "Goals", "role": "Role", "technologies": "Tech1, Tech2", "results": "Results", "projectLink": "https://example.com"}]'
            rows={6}
          />
        </div>

        {/* Testimonials */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Testimonials (JSON format)
          </label>
          <textarea
            value={JSON.stringify(formData.testimonials, null, 2)}
            onChange={(e) => {
              try {
                const parsed = JSON.parse(e.target.value);
                handleInputChange('testimonials', parsed);
              } catch {
                // Invalid JSON, don't update
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='[{"name": "Client Name", "title": "Client Title", "quote": "Client testimonial"}]'
            rows={6}
          />
        </div>

        {/* Contact Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Social Links
          </label>
          <input
            type="text"
            value={formData.socialLinks}
            onChange={(e) => handleInputChange('socialLinks', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="LinkedIn, GitHub, Twitter URLs"
          />
        </div>
      </div>
    </div>
  );
}

export default FormInputs;
