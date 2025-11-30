import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle hash-based section scrolling
const HashScrollHandler = () => {
  const location = useLocation();
  const validSections = ['about', 'experience', 'skills', 'projects', 'education', 'achievements', 'contact'];

  useEffect(() => {
    // With HashRouter, location.pathname contains the route path
    const pathWithoutSlash = location.pathname.slice(1); // Remove leading /
    
    // Only scroll if pathname is a valid section (not empty/home route)
    // This means: if user navigates to /#/contact, pathname will be /contact, so we scroll
    // If user is on /#/, pathname will be / (empty after slice), so we don't scroll
    if (pathWithoutSlash && validSections.includes(pathWithoutSlash)) {
      setTimeout(() => {
        const element = document.getElementById(pathWithoutSlash);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 20;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
    // If pathname is empty (home route), do nothing - stay at top
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* IMPORTANT: USE HASHROUTER HERE */}
      <HashRouter>
        <HashScrollHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Handle section hash routes - they all render Index which will scroll to the section */}
          <Route path="/about" element={<Index />} />
          <Route path="/experience" element={<Index />} />
          <Route path="/skills" element={<Index />} />
          <Route path="/projects" element={<Index />} />
          <Route path="/education" element={<Index />} />
          <Route path="/achievements" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
