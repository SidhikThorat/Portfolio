
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillProgressBarProps {
  name: string;
  level: number; // 0-100
  className?: string;
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ 
  name, 
  level,
  className 
}) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-medium text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-progress-container">
        <div 
          className="skill-progress-bar" 
          style={{ width: `${width}%` }} 
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;
