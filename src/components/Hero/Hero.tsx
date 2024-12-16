import React from 'react';
import { Github, Mail, Linkedin, FileDown, Gitlab } from 'lucide-react';
import { profile } from '../../data/profile';
import SocialLink from './SocialLink';
import Picture from './Picture';
import CV from '../../asssets/cv/CV_ALVIAN_LATEST.pdf'

const Hero: React.FC = () => {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Picture picture={profile.picture} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {profile.title}
          </p>
          <div className="flex justify-center gap-4">
          <SocialLink href={profile.gitlab} icon={<Gitlab size={24} />} label="GitHub" />
            <SocialLink href={profile.github} icon={<Github size={24} />} label="GitHub" />
            <SocialLink href={`mailto:${profile.email}`} icon={<Mail size={24} />} label="Email" />
            <SocialLink href={profile.linkedin} icon={<Linkedin size={24} />} label="LinkedIn" />
            <SocialLink href={CV} icon={<FileDown size={24} />} label="CV" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;