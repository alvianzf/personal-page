import React from 'react';

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  achievements: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  year,
  achievements
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-semibold text-blue-400">{degree}</h4>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg text-gray-300">{institution}</p>
        <p className="text-sm text-gray-400">{year}</p>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-300">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;