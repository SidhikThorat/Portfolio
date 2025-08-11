import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import SkillCard from '@/components/SkillCard';
import SkillProgressBar from '@/components/SkillProgressBar';
import ProjectCard from '@/components/ProjectCard';

import GithubCalendar from '@/components/GithubCalendar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Code, Database, Layout, Server, Download, Clock, Github } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { getPublicAsset } from '@/lib/utils';

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "PrakritiMitra",
    description: "A full-fledged NGO activities handler",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Cloudinary", "Razorpay", "Google Calendar", "QR Attendance", "Socket.io", "DeepSeek Chatbot", "Llama 3.0 API"],
    category: "full-stack",
    githubUrl: "https://github.com/PrakritiMitra/PrakritiMitra",
    liveUrl: "https://github.com/PrakritiMitra/PrakritiMitra"
  },
  {
    id: 2,
    title: "Students Project Management System",
    description: "A solution for managing college students projects digitally reducing efforts.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "XAMPP", "Cloudinary"],
    category: "full-stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecast application",
    image: "https://images.unsplash.com/photo-1526743655626-e3d757b13d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["OpenWeatherMap API", "JavaScript", "CSS", "HTML"],
    category: "full-stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
];



// Achievements data
const achievements = [
  {
    year: "2025",
    title: "Hackathon Participation",
    description: "Participation in national coding competition with an innovative solution for NGO activities."
  },
  {
    year: "2024",
    title: "Open Source Contributor",
    description: "GirlScript Summer of Code Participation"
  },
  {
    year: "2023",
    title: "Web Developer Intern",
    description: "Successfully led a team of 5 developers to create a web application that increased client productivity by 35%."
  },
];

const Home = () => {
  // Your name here
  const yourName = "Sidhik Thorat";
  const githubUsername = "SidhikThorat"; // Updated to your actual GitHub username
  
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check on load
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);
  
  // For micro-interactions
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      
      button.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      button.style.transform = '';
    };
    
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-pattern relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 space-y-6"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-20 h-20 border-2 border-primary rounded-full overflow-hidden">
                  <img 
                    src={getPublicAsset('Sidhik.png')} 
                    alt={yourName} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Failed to load image:', e.currentTarget.src);
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full bg-muted flex items-center justify-center text-lg font-semibold text-muted-foreground">
                    {yourName.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <p className="text-primary font-medium text-lg">Hello, I'm</p>
              </div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {yourName} <br />
                <span className="text-gradient">Software Developer</span> <br />
                & Engineering Student
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I'm passionate about building innovative solutions and turning complex problems into elegant applications.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button 
                  asChild 
                  className="bg-primary hover:bg-primary/90 text-white"
                  ref={buttonRef}
                >
                  <Link to="/projects">View My Projects</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="md:w-5/12 relative"
            >
              <div className="bg-gradient-to-tr from-primary/20 to-accent/30 rounded-2xl p-6 md:p-8">
                <motion.div 
                  className="bg-card rounded-xl shadow-lg p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <code className="font-mono text-sm">
                    <span className="text-slate-500">// Engineering student by day</span>
                    <br />
                    <span className="text-blue-600">const</span> <span className="text-emerald-600">developer</span> = {"{"}
                    <br />
                    &nbsp;&nbsp;name: <span className="text-amber-600">'{yourName}'</span>,
                    <br />
                    &nbsp;&nbsp;skills: [<span className="text-amber-600">'React'</span>, <span className="text-amber-600">'TypeScript'</span>, <span className="text-amber-600">'Node.js'</span>],
                    <br />
                    &nbsp;&nbsp;passion: <span className="text-amber-600">'Building amazing software'</span>
                    <br />
                    {"}"};
                    <br /><br />
                    <span className="text-slate-500">// Software developer by night</span>
                    <br />
                    <span className="text-blue-600">function</span> <span className="text-purple-600">createSolution</span>(problem) {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-600">return</span> developer.skills.reduce((solution, skill) {"=>"} {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">return</span> solution.implement(skill);
                    <br />
                    &nbsp;&nbsp;{"}"}, problem);
                    <br />
                    {"}"};
                  </code>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section with Progress Bars */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="My Skills" 
            subtitle="I've gained expertise in various areas of software development during my academic and personal projects."
            className="mb-12 animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4">Technical Proficiency</h3>
              <SkillProgressBar name="JavaScript/TypeScript" level={90} />
              <SkillProgressBar name="React" level={85} />
              <SkillProgressBar name="Node.js & Express" level={90} />
              <SkillProgressBar name="HTML & CSS" level={95} />
              <SkillProgressBar name="Python" level={75} />
              <SkillProgressBar name="Java" level={80} />
              <SkillProgressBar name="SQL & MongoDB" level={90} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animate-on-scroll">
                <SkillCard 
                  title="Frontend Development" 
                  skills={["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap", "Material UI", "EJS"]}
                  icon={<Layout size={24} />}
                />
              </div>
              <div className="animate-on-scroll">
                <SkillCard 
                  title="Backend Development" 
                  skills={["Node.js", "Express","Flask", "REST APIs"]}
                  icon={<Server size={24} />}
                />
              </div>
              <div className="animate-on-scroll">
                <SkillCard 
                  title="Database" 
                  skills={["MongoDB", "MySQL"]}
                  icon={<Database size={24} />}
                />
              </div>
              <div className="animate-on-scroll">
                <SkillCard 
                  title="Languages & Tools" 
                  skills={["JavaScript", "Python", "Java", "C++", "Git", "GraphQL", "Socket.io", "Cloudinary", "Razorpay", "Google Calendar", "QR Code", "Google Maps"]}
                  icon={<Code size={24} />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects with Interactive Carousel */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Here are some of my recent projects. Check out my Projects page for more."
            className="mb-12 animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="animate-on-scroll"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center animate-on-scroll">
            <Button asChild variant="outline" className="gap-2 hover-scale">
              <Link to="/projects">
                <span>View All Projects</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Achievements Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Professional Journey" 
            subtitle="Key milestones in my career path that have shaped my professional experience."
            className="mb-12 animate-on-scroll"
          />
          
          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`flex animate-on-scroll ${index < achievements.length-1 ? 'mb-8' : ''}`}
              >
                <div className="flex flex-col items-center mr-4">
                  <div className="rounded-full bg-primary/20 p-3 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  {index < achievements.length-1 && (
                    <div className="w-0.5 bg-border flex-grow my-2"></div>
                  )}
                </div>
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-sm font-semibold text-primary">{achievement.year}</span>
                  <h3 className="text-xl font-bold mt-1">{achievement.title}</h3>
                  <p className="mt-1 text-muted-foreground">{achievement.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      
      {/* GitHub Contributions Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="GitHub Activity" 
            subtitle="My open-source contributions and coding activity."
            className="mb-12 animate-on-scroll"
          />
          
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <GithubCalendar 
              username={githubUsername} 
              githubToken={import.meta.env.VITE_GITHUB_TOKEN}
            />
            
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
                  <Github size={18} className="mr-2" />
                  View GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resume Download Section */}
      <section className="py-16 bg-primary/95 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-2xl mx-auto space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Want to Know More?</h2>
            <p className="text-white/90 text-lg">
              Download my resume to get a comprehensive overview of my skills, experience, and education.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="mt-4 hover-scale"
              asChild
            >
              <a 
                href={getPublicAsset('Sidhik_Thorat_Resume.pdf')} 
                download="Sidhik_Thorat_Resume.pdf"
                onClick={(e) => {
                  console.log('Resume link clicked:', e.currentTarget.href);
                }}
              >
                <Download className="mr-2" size={20} />
                Download Full Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 mt-4">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Home;
