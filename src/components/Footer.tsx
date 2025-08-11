
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import resumePdf from '@/assets/Sidhik_Thorat_Resume.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Language options
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];

  // Resume download handler
  const handleDownloadResume = () => {
    fetch(resumePdf)
      .then(response => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error('Resume not found');
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Sidhik_Thorat_Resume.pdf';
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Resume download failed:', error);
        alert('Failed to download resume. Please try again.');
      });
  };

  return (
    <footer className="bg-slate-900 text-white dark:bg-slate-950">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-bold">
                <span className="text-gradient">Portfolio.</span>
              </h3>
            </Link>
            <p className="text-slate-300 max-w-xs">
              Third-year engineering student and software developer passionate about creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SidhikThorat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors hover-scale"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sidhik-thorat-546549258/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors hover-scale"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors hover-scale"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:sidhikthoratjob08@gmail.com"
                className="text-slate-300 hover:text-white transition-colors hover-scale"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors link-underline inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-white transition-colors link-underline inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-slate-300 hover:text-white transition-colors link-underline inline-block">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors link-underline inline-block">
                  Contact
                </Link>
              </li>
              <li className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-black border-slate-700 hover:bg-primary/90"
                  onClick={handleDownloadResume}
                >
                  <Download size={16} className="mr-1" />
                  Download Resume
                </Button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-slate-300 mb-4">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white mb-4">
              <Link to="/contact">Contact Me</Link>
            </Button>
            
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
