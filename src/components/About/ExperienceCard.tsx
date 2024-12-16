import React from 'react';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  period,
  description,
  achievements
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-semibold text-blue-400">{company}</h4>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg text-gray-300">{role}</p>
        <p className="text-sm text-gray-400">{period}</p>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
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

export default ExperienceCard;