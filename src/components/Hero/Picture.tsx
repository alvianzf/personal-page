import React from 'react';

interface PictureProps {
  picture?: string;
  altText?: string;
}

const Picture: React.FC<PictureProps> = ({ picture, altText = 'Profile picture' }) => {
  const defaultImage = 'https://via.placeholder.com/150';

  return (
    <div className="w-72 h-72 overflow-hidden rounded-full flex justify-center mb-10 hover:shadow-lg transition-shadow">
      <img
        src={picture || defaultImage}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Picture;
