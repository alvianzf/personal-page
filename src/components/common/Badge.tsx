import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span className={cn(
      "px-3 py-1 bg-gray-700 text-sm rounded-full text-gray-300",
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;