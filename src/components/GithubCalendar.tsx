
import React, { useEffect, useState } from 'react';
import { Calendar, Github } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";
import { fetchGitHubContributions, fetchGitHubContributionsREST } from '@/lib/github';

interface GithubCalendarProps {
  username: string;
  githubToken?: string; // Optional GitHub token for better data access
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const GithubCalendar: React.FC<GithubCalendarProps> = ({ username, githubToken }) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        
        let contributionData;
        
        // Try to fetch real contribution data
        if (githubToken) {
          // Use GraphQL API with token for real data
          try {
            contributionData = await fetchGitHubContributions(username, githubToken);
            toast({
              title: "Real GitHub data loaded",
              description: `Loaded ${contributionData.totalContributions} contributions for ${username}`,
            });
          } catch (error) {
            console.warn('GraphQL API failed, falling back to REST API:', error);
            contributionData = await fetchGitHubContributionsREST(username);
            toast({
              title: "GitHub activity loaded",
              description: `Loaded activity data for ${username} (estimated from repositories)`,
            });
          }
        } else {
          // Use REST API without token (limited but works)
          contributionData = await fetchGitHubContributionsREST(username);
          toast({
            title: "GitHub activity loaded",
            description: `Loaded activity data for ${username} (estimated from repositories)`,
          });
        }
        
        setContributions(contributionData.contributions);
        setError(null);
        
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
        setError(`Failed to load GitHub contributions: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, githubToken]);

  if (loading) {
    return (
      <div className="github-calendar p-4 bg-card rounded-md">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-medium">GitHub Contributions</h3>
        </div>
        <Skeleton className="w-full h-[120px] rounded-md" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-calendar p-4 bg-card rounded-md">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-medium">GitHub Contributions</h3>
        </div>
        <div className="flex items-center justify-center h-[120px] text-muted-foreground text-sm">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Group contributions by month
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const getLevelClass = (level: number) => {
    switch (level) {
      case 0: return 'bg-muted/30';
      case 1: return 'bg-primary/30';
      case 2: return 'bg-primary/50';
      case 3: return 'bg-primary/70';
      case 4: return 'bg-primary/90';
      default: return 'bg-muted/30';
    }
  };

  return (
    <div className="github-calendar p-4 bg-card rounded-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-medium">GitHub Contributions</h3>
        </div>
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline"
        >
          @{username}
        </a>
      </div>
      
      <div className="overflow-x-auto pb-2">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between px-1 text-xs text-muted-foreground">
            {months.map(month => (
              <div key={month} className="w-6">{month}</div>
            ))}
          </div>
          <div className="grid grid-cols-52 gap-[2px]" style={{ gridTemplateColumns: `repeat(52, minmax(0, 1fr))` }}>
            {Array.from({ length: 7 }).map((_, row) => (
              <React.Fragment key={`row-${row}`}>
                {Array.from({ length: 52 }).map((_, col) => {
                  const index = col * 7 + row;
                  const contribution = contributions[index];
                  
                  return (
                    <div 
                      key={`${row}-${col}`}
                      className={`w-3 h-3 rounded-sm ${contribution ? getLevelClass(contribution.level) : 'bg-muted/30'}`}
                      title={contribution ? `${contribution.date}: ${contribution.count} contributions` : ''}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-end gap-1 mt-2">
        <span className="text-xs text-muted-foreground">Less</span>
        <div className={`w-3 h-3 rounded-sm bg-muted/30`}></div>
        <div className={`w-3 h-3 rounded-sm bg-primary/30`}></div>
        <div className={`w-3 h-3 rounded-sm bg-primary/50`}></div>
        <div className={`w-3 h-3 rounded-sm bg-primary/70`}></div>
        <div className={`w-3 h-3 rounded-sm bg-primary/90`}></div>
        <span className="text-xs text-muted-foreground">More</span>
      </div>
    </div>
  );
};

export default GithubCalendar;
