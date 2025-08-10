
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <>
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Contact Me" 
            subtitle="Get in touch for opportunities or just to say hello"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:sidhikthoratjob08@gmail.com" className="text-primary hover:underline">
                        sidhikthoratjob08@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a href="tel:+918855995319" className="text-primary hover:underline">
                        +91 8855995319
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">
                        Mumbai, India
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/SidhikThorat" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sidhik-thorat-546549258/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#0077B5]/90 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-[#1DA1F2]/90 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:sidhikthoratjob08@gmail.com" 
                  className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-16 border-t">
            <h3 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">What services do you offer?</h4>
                  <p className="text-muted-foreground">
                    I specialize in full-stack web development, responsive designs, and building web applications using React, Node.js, and various databases.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">What is your availability?</h4>
                  <p className="text-muted-foreground">
                    I'm currently available for part-time remote work and freelance projects while I complete my degree.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">How soon can you start a new project?</h4>
                  <p className="text-muted-foreground">
                    Depending on my current workload, I can typically start new projects within 1-2 weeks of finalizing project details.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Do you provide ongoing support?</h4>
                  <p className="text-muted-foreground">
                    Yes, I offer maintenance and support packages for all completed projects, ensuring your application stays up-to-date and runs smoothly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
