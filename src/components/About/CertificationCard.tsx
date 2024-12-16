import React from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
  year: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  name,
  issuer,
  year
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3">
        <Award className="text-blue-400" size={24} />
        <div>
          <h4 className="text-lg font-medium text-blue-400">{name}</h4>
          <p className="text-gray-300">{issuer}</p>
          <p className="text-sm text-gray-400">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;