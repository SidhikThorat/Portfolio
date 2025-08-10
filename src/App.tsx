
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Configure accessibility features
const configureAccessibility = () => {
  // Add role="main" to main content area for screen readers
  document.getElementById("root")?.setAttribute("role", "main");
  
  // Ensure proper focus management
  document.addEventListener('keydown', handleTabKey);
  
  // Add skip-to-main-content link (would be fully implemented in a real project)
  if (!document.getElementById('skip-to-content')) {
    const skipLink = document.createElement('a');
    skipLink.id = 'skip-to-content';
    skipLink.href = '#main';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);
  }
};

// Handle tab key for keyboard navigation
const handleTabKey = (e: KeyboardEvent) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
  }
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    configureAccessibility();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
