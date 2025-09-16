import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';

// Set the worker source for pdfjs
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const parseResume = async (file) => {
  let text = '';

  if (file.type === 'application/pdf') {
    text = await parsePDF(file);
  } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    text = await parseDOCX(file);
  } else {
    throw new Error('Unsupported file type');
  }

  return extractDetails(text);
};

const parsePDF = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let text = '';

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    text += textContent.items.map(item => item.str).join(' ') + '\n';
  }

  return text;
};

const parseDOCX = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
};

const extractDetails = (text) => {
  const details = {
    fullName: '',
    email: '',
    linkedin: '',
    skills: '',
    careerObjective: '',
    projects: [{ title: '', description: '' }, { title: '', description: '' }],
    experience: { company: '', jobTitle: '', duration: '', responsibilities: '' },
    achievements: ''
  };

  // Extract full name (assuming it's the first line or prominent)
  const lines = text.split('\n').map(line => line.trim()).filter(line => line);
  if (lines.length > 0) {
    details.fullName = lines[0];
  }

  // Extract email
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const emails = text.match(emailRegex);
  if (emails) {
    details.email = emails[0];
  }

  // Extract LinkedIn
  const linkedinRegex = /linkedin\.com\/in\/[a-zA-Z0-9-]+/gi;
  const linkedins = text.match(linkedinRegex);
  if (linkedins) {
    details.linkedin = 'https://' + linkedins[0];
  }

  // Extract skills (look for sections like Skills, Technologies)
  const skillsSection = extractSection(text, ['skills', 'technologies', 'technical skills']);
  if (skillsSection) {
    details.skills = skillsSection.replace(/\n/g, ', ');
  }

  // Extract career objective
  const objectiveSection = extractSection(text, ['objective', 'career objective', 'summary', 'profile']);
  if (objectiveSection) {
    details.careerObjective = objectiveSection;
  }

  // Extract experience
  const experienceSection = extractSection(text, ['experience', 'work experience', 'employment']);
  if (experienceSection) {
    // Simple parsing: assume first line is company - job title, second duration, rest responsibilities
    const expLines = experienceSection.split('\n').filter(line => line.trim());
    if (expLines.length > 0) {
      const firstLine = expLines[0];
      const parts = firstLine.split('—').map(p => p.trim());
      if (parts.length >= 2) {
        details.experience.company = parts[0];
        details.experience.jobTitle = parts[1];
      }
      if (expLines.length > 1) {
        details.experience.duration = expLines[1];
      }
      if (expLines.length > 2) {
        details.experience.responsibilities = expLines.slice(2).join('\n');
      }
    }
  }

  // Extract projects
  const projectsSection = extractSection(text, ['projects', 'personal projects']);
  if (projectsSection) {
    const projectLines = projectsSection.split('\n').filter(line => line.trim());
    for (let i = 0; i < Math.min(projectLines.length, 2); i++) {
      const line = projectLines[i];
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        details.projects[i].title = line.substring(0, colonIndex).trim();
        details.projects[i].description = line.substring(colonIndex + 1).trim();
      } else {
        details.projects[i].title = line;
      }
    }
  }

  // Extract achievements
  const achievementsSection = extractSection(text, ['achievements', 'awards', 'certifications']);
  if (achievementsSection) {
    details.achievements = achievementsSection;
  }

  return details;
};

const extractSection = (text, keywords) => {
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].toLowerCase();
    if (keywords.some(keyword => line.includes(keyword))) {
      // Collect lines until next section or end
      let section = '';
      i++; // Skip the header
      while (i < lines.length && !isSectionHeader(lines[i])) {
        section += lines[i] + '\n';
        i++;
      }
      return section.trim();
    }
  }
  return null;
};

const isSectionHeader = (line) => {
  const headers = ['experience', 'education', 'skills', 'projects', 'achievements', 'objective', 'summary', 'contact'];
  return headers.some(header => line.toLowerCase().includes(header));
};
