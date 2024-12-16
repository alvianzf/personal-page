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
      title={label}
      download={label == 'CV' ? true : false}
    >
      {icon}

      <span className="absolute left-1/2 bottom-full mb-2 w-max -translate-x-1/2 rounded bg-white text-gray-800 text-xs py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        {label}
      </span>
    </a>

    
  );
};

export default SocialLink;