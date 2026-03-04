import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Articles } from "./Articles";
import { PersonalBlog } from "./PersonalBlog";
import { Newsletter } from "./Newsletter";
import { Contact } from "./Contact";
import { useEffect } from "react";
import { useLocation } from "react-router";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts or hash changes
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Projects />
      <Articles />
      <PersonalBlog />
      <Newsletter />
      <Contact />
    </>
  );
}