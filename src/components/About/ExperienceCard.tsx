import React from "react";

interface ExperienceCardProps {
  company: string;
  location?: string | null;
  logo?: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  isLast?: boolean | false; 
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  location,
  logo,
  role,
  period,
  description,
  achievements,
  isLast = false,
}) => {
  return (
    <div className="flex">
      <div className="relative w-36 py-5 px-7 flex flex-col items-center">
        <img
          src={logo}
          alt={company}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
        />
        {!isLast && (
          <div className="left-1/2 w-[2px] h-full bg-gray-600 transform -translate-x-1/2"></div>
        )}
      </div>

      <div className="flex-1">
        <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-between">
            <h4 className="text-xl font-semibold text-blue-400">{company}</h4>
            <p className="text-sm text-gray-400">{period}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg text-gray-300">{role}</p>
            <p className="text-sm text-gray-400">{location}</p>
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
      </div>
    </div>
  );
};

export default ExperienceCard;
