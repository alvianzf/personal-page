import React from 'react';
import Section from '../common/Section';
import ProjectCard from '../ProjectCard';
import { profile } from '../../data/profile'

const Projects: React.FC = () => {
  const { projects } = profile

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