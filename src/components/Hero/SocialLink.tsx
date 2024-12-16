import React, { ReactElement } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactElement;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 hover:text-blue-400 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default SocialLink;