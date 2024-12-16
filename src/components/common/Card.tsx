import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow",
      className
    )}>
      {children}
    </div>
  );
};

export default Card;