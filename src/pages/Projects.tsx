
import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Sample project data
const projectsData = [
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
    githubUrl: "https://github.com/SidhikThorat/Students-Projects-Management-System",
    liveUrl: "https://github.com/SidhikThorat/Students-Projects-Management-System"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecast application",
    image: "https://images.unsplash.com/photo-1526743655626-e3d757b13d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["OpenWeatherMap API", "JavaScript", "CSS", "HTML"],
    category: "full-stack",
    githubUrl: "https://github.com/SidhikThorat/Advanced-Weather-App",
    liveUrl: "https://github.com/SidhikThorat/Advanced-Weather-App"
  },
];

const Projects = () => {
  const [category, setCategory] = useState<string>("all");
  
  const filteredProjects = category === "all"
    ? projectsData
    : projectsData.filter(project => project.category === category);

  return (
    <>
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="My Projects" 
            subtitle="Browse through my latest projects and creations"
            className="mb-12"
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={category === "all" ? "default" : "outline"}
              onClick={() => setCategory("all")}
              className="mb-2"
            >
              All Projects
            </Button>
            <Button
              variant={category === "frontend" ? "default" : "outline"}
              onClick={() => setCategory("frontend")}
              className="mb-2"
            >
              Frontend
            </Button>
            <Button
              variant={category === "backend" ? "default" : "outline"}
              onClick={() => setCategory("backend")}
              className="mb-2"
            >
              Backend
            </Button>
            <Button
              variant={category === "full-stack" ? "default" : "outline"}
              onClick={() => setCategory("full-stack")}
              className="mb-2"
            >
              Full Stack
            </Button>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;
