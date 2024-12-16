import React from 'react';
import { profile } from '../../data/profile';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 mt-20">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;