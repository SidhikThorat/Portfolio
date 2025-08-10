
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
  branch?: string;
  cgpa?: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  description,
  skills,
  branch,
  cgpa,
  isLast = false,
}) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
        {!isLast && <div className="w-0.5 bg-border flex-1 my-2"></div>}
      </div>
      <div className={cn("pb-8", isLast && "pb-0")}>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
          <span className="text-primary font-medium">{company}</span>
          <span className="text-muted-foreground text-sm">• {period}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
        
        {(branch || cgpa) && (
          <div className="flex flex-wrap gap-4 mt-3 text-sm">
            {branch && (
              <div className="flex items-center gap-1">
                <span className="font-medium">Branch:</span>
                <span className="text-muted-foreground">{branch}</span>
              </div>
            )}
            {cgpa && (
              <div className="flex items-center gap-1">
                <span className="font-medium">CGPA/Percentage:</span>
                <span className="text-muted-foreground">{cgpa}</span>
              </div>
            )}
          </div>
        )}
        
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="font-mono">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
