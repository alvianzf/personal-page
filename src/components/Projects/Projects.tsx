import React from 'react';
import Section from '../common/Section';
import ProjectCard from '../ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Banking System Integration',
      description: 'Developed core banking system integration with multiple third-party services',
      tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/alvianzf'
    },
    {
      title: 'E-commerce Platform',
      description: 'Built scalable e-commerce platform with real-time inventory management',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/alvianzf'
    },
    {
      title: 'Payment Gateway System',
      description: 'Implemented secure payment gateway integration with multiple providers',
      tags: ['Go', 'MongoDB', 'Redis', 'Kubernetes'],
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/alvianzf'
    }
  ];

  return (
    <Section title="Featured Projects" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;