
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import TimelineItem from '@/components/TimelineItem';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const experienceData = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "Kopran Pvt. Ltd.",
    period: "April 2023 - July 2023",
    description: "This was a 4 months internship program based on Full Stack Web Develepment. It ended with creating a efficient website based on Attendance System Based on Face Recognition. The Program also included to embark practical knowledge upon Industrial areas like Quality Control, Quality Assurance, Industrial Safety, Team Management, Human Resource Management, Inventory Management. All the above units were studied by me visiting these units in personally in the Industry.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "XAMPP", ""]
  }
];

const educationData = [
  {
    id: 1,
    title: "Bachelor of Engineering",
    company: "Vivekanand Education Society's Institute of Technology",
    period: "2023 - Present",
    branch: "Electronics and Computer Science Engineering",
    cgpa: "7.8/10",
    description: "Currently pursuing a degree in Electronics and Computer Science Engineering with focus on software engineering and computer systems."
  },
  {
    id: 2,
    title: "Diploma",
    company: "Institute of Petrochemical Engineering (now Babasaheb Ambedkar Technological University)",
    period: "2020 - 2023",
    branch: "Computer Engineering",
    cgpa: "8.39/10",
    description: "Completed diploma with focus on computer systems and programming fundamentals."
  },
  {
    id: 3,
    title: "SSC",
    company: "Samarth Ramdas Vidyalaya",
    period: "2020",
    cgpa: "89.80%",
    description: "Completed secondary education with distinction."
  }
];

const skillLevels = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 70 },
  { name: "Java", level: 95 },
  { name: "HTML/CSS", level: 95 },
  { name: "MongoDb, SQL", level: 95 },
];

const Experience = () => {
  return (
    <>
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="My Experience" 
            subtitle="Professional journey and academic background"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
              <div className="space-y-2">
                {experienceData.map((experience, index) => (
                  <TimelineItem
                    key={experience.id}
                    title={experience.title}
                    company={experience.company}
                    period={experience.period}
                    description={experience.description}
                    skills={experience.skills}
                    isLast={index === experienceData.length - 1}
                  />
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mt-12 mb-6">Education</h3>
              <div className="space-y-2">
                {educationData.map((education, index) => (
                  <TimelineItem
                    key={education.id}
                    title={education.title}
                    company={education.company}
                    period={education.period}
                    description={education.description}
                    branch={education.branch}
                    cgpa={education.cgpa}
                    isLast={index === educationData.length - 1}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills Proficiency</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {skillLevels.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-2xl font-bold mt-12 mb-6">Certifications</h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li>
                      <div className="font-semibold">Software Engineer</div>
                      <div className="text-sm text-muted-foreground">HackerRank, July 2025</div>
                    </li>
                    <li>
                      <div className="font-semibold">Java</div>
                      <div className="text-sm text-muted-foreground">HackerRank, April 2025</div>
                    </li>
                    <li>
                      <div className="font-semibold">MATLAB Onramp</div>
                      <div className="text-sm text-muted-foreground">MathWorks, January 2024</div>
                    </li>
                    <li>
                      <div className="font-semibold">GenAI Powered Data Analytics</div>
                      <div className="text-sm text-muted-foreground">Tata, July 2025</div>
                    </li>
                    <li>
                      <div className="font-semibold">Investment Banking</div>
                      <div className="text-sm text-muted-foreground">JP Morgan, July 2022</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Looking for New Opportunities</h3>
            <p className="text-lg text-muted-foreground mb-6">
              I'm currently open to internships, part-time roles, and freelance projects.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 px-6">
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Experience;
