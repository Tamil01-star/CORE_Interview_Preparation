import React from 'react';
import * as Icons from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className, size = 24 }) => {
  // Try to find the exact match, otherwise fallback to a default
  const IconComponent = (Icons as any)[name] || Icons.Circle;

  return <IconComponent className={className} size={size} />;
};
