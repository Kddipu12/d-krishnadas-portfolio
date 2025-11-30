import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const validSections = ['about', 'experience', 'skills', 'projects', 'education', 'achievements', 'contact'];

  useEffect(() => {
    // Check if the pathname is a valid section ID
    const pathWithoutSlash = location.pathname.slice(1); // Remove leading /
    
    if (validSections.includes(pathWithoutSlash)) {
      // Redirect to home and let HashScrollHandler handle the scrolling
      navigate('/', { replace: true });
      // Then scroll to the section
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
      return;
    }

    // Only log error for truly non-existent routes
    if (location.pathname !== '/') {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="#/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
