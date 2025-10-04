import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

export const PortfolioProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    linkedin: '',
    skills: '',
    careerObjective: '',
    projects: [{ title: '', description: '' }, { title: '', description: '' }],
    experience: { company: '', jobTitle: '', duration: '', responsibilities: '' },
    achievements: ''
  });

  const [resume, setResume] = useState(null);
  const [hasResume, setHasResume] = useState(false);
  const [hasPortfolio, setHasPortfolio] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [portfolioLink, setPortfolioLink] = useState('');
  const [githubConnected, setGithubConnected] = useState(false);
  const [netlifyConnected, setNetlifyConnected] = useState(false);
  const [githubUsername, setGithubUsername] = useState('');
  const [netlifyUsername, setNetlifyUsername] = useState('');

  useEffect(() => {
    // Load from localStorage
    const savedDetails = localStorage.getItem('userDetails');
    if (savedDetails) setUserDetails(JSON.parse(savedDetails));

    const savedResume = localStorage.getItem('hasResume') === 'true';
    setHasResume(savedResume);

    const savedPortfolio = localStorage.getItem('hasPortfolio') === 'true';
    setHasPortfolio(savedPortfolio);

    const savedTemplate = localStorage.getItem('selectedTemplate');
    if (savedTemplate) setSelectedTemplate(savedTemplate);

    const savedLink = localStorage.getItem('portfolioLink');
    if (savedLink) setPortfolioLink(savedLink);

    const savedGithub = localStorage.getItem('githubConnected') === 'true';
    setGithubConnected(savedGithub);

    const savedNetlify = localStorage.getItem('netlifyConnected') === 'true';
    setNetlifyConnected(savedNetlify);

    const savedGithubUser = localStorage.getItem('githubUsername');
    if (savedGithubUser) setGithubUsername(savedGithubUser);

    const savedNetlifyUser = localStorage.getItem('netlifyUsername');
    if (savedNetlifyUser) setNetlifyUsername(savedNetlifyUser);
  }, []);

  const updateUserDetails = (details) => {
    if (typeof details === 'function') {
      setUserDetails(prevDetails => {
        const newDetails = details(prevDetails);
        localStorage.setItem('userDetails', JSON.stringify(newDetails));
        return newDetails;
      });
    } else {
      setUserDetails(details);
      localStorage.setItem('userDetails', JSON.stringify(details));
    }
  };

  const uploadResume = async (file) => {
    setResume(file);
    setHasResume(true);
    localStorage.setItem('hasResume', 'true');

    const formData = new FormData();
    formData.append('resume', file);

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/upload-resume', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Backend failed to parse resume.');
      }

      const parsedDetails = await response.json();
      updateUserDetails(prevDetails => ({ ...prevDetails, ...parsedDetails }));
      toast.success('Resume uploaded and parsed successfully! Check the form for extracted details.');
    } catch (error) {
      console.error('Error parsing resume:', error);
      toast.error('Resume uploaded, but parsing failed. Please fill details manually.');
    } finally {
      setLoading(false);
    }
  };

  const createPortfolio = () => {
    setHasPortfolio(true);
    localStorage.setItem('hasPortfolio', 'true');
  };

  const selectTemplate = (template) => {
    setSelectedTemplate(template);
    localStorage.setItem('selectedTemplate', template);
  };

  const setPortfolioURL = (url) => {
    setPortfolioLink(url);
    localStorage.setItem('portfolioLink', url);
  };

  const connectGithub = (username) => {
    setGithubConnected(true);
    setGithubUsername(username);
    localStorage.setItem('githubConnected', 'true');
    localStorage.setItem('githubUsername', username);
  };

  const connectNetlify = (username) => {
    setNetlifyConnected(true);
    setNetlifyUsername(username);
    localStorage.setItem('netlifyConnected', 'true');
    localStorage.setItem('netlifyUsername', username);
  };

  const downloadPortfolioHtml = async (template) => {
    if (!template) {
      toast.error("Please select a template first.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/download-html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData: userDetails, template }),
      });

      if (!response.ok) throw new Error('Failed to generate HTML.');

      const htmlBlob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(htmlBlob);
      link.download = 'portfolio.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Portfolio HTML downloaded!");
    } catch (error) {
      console.error('Error downloading portfolio:', error);
      toast.error(error.message || 'Could not download portfolio.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PortfolioContext.Provider value={{
      userDetails,
      updateUserDetails,
      resume,
      hasResume,
      uploadResume,
      hasPortfolio,
      loading,
      createPortfolio,
      selectedTemplate,
      selectTemplate,
      portfolioLink,
      setPortfolioURL,
      githubConnected,
      netlifyConnected,
      githubUsername,
      netlifyUsername,
      connectGithub,
      connectNetlify,
      downloadPortfolioHtml
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};
