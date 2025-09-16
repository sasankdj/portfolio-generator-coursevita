import React, { createContext, useContext, useState, useEffect } from 'react';
import { parseResume } from '../utils/resumeParser';

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
    setUserDetails(details);
    localStorage.setItem('userDetails', JSON.stringify(details));
  };

  const uploadResume = async (file) => {
    setResume(file);
    setHasResume(true);
    localStorage.setItem('hasResume', 'true');

    try {
      const parsedDetails = await parseResume(file);
      updateUserDetails({ ...userDetails, ...parsedDetails });
      alert('Resume uploaded and parsed successfully!');
    } catch (error) {
      console.error('Error parsing resume:', error);
      alert('Resume uploaded, but parsing failed. Please fill details manually.');
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

  return (
    <PortfolioContext.Provider value={{
      userDetails,
      updateUserDetails,
      resume,
      hasResume,
      uploadResume,
      hasPortfolio,
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
      connectNetlify
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};
