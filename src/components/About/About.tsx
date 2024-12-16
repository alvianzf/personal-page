import React from 'react';
import Section from '../common/Section';
import { profile } from '../../data/profile';
import SkillCategory from './SkillCategory';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';

const About: React.FC = () => {
  return (
    <Section title="About Me" id="about">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          {profile.about}
        </p>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
            <div className="space-y-8">
              {profile.experience.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(profile.skills).map(([category, skills]) => (
                <SkillCategory 
                  key={category} 
                  title={category.charAt(0).toUpperCase() + category.slice(1)} 
                  skills={skills} 
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {profile.education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {profile.certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.languages.map((lang, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-blue-400">{lang.language}</h4>
                  <p className="text-gray-300">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;