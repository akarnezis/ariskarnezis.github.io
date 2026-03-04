import { Link } from "react-router";
import { User, FlaskConical, FileText, Mail, Mic, Github, Linkedin, GraduationCap, Download } from "lucide-react";

export function Footer() {
  // Function to handle smooth scroll when clicking footer links
  const handleLinkClick = (sectionId: string) => {
    // If we're on the homepage, just scroll
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Otherwise, navigate to home with hash (will be handled by Home component)
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#0a0e14] text-slate-300 dark:text-slate-400 py-12 border-t border-slate-800 dark:border-[#252a31]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg mb-4">Aris Karnezis</h3>
            <p className="text-sm">
              Research Associate specialising in applied and computational mathematics, sensor technology
              and machine learning. Passionate about science communication and collaborative research.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="flex items-center hover:text-white transition-colors">
                  <User className="inline-block mr-2" size={16} />
                  About
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="flex items-center hover:text-white transition-colors" onClick={() => handleLinkClick('projects')}>
                  <FlaskConical className="inline-block mr-2" size={16} />
                  Research Projects
                </Link>
              </li>
              <li>
                <Link to="/#articles" className="flex items-center hover:text-white transition-colors" onClick={() => handleLinkClick('articles')}>
                  <FileText className="inline-block mr-2" size={16} />
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="flex items-center hover:text-white transition-colors" onClick={() => handleLinkClick('contact')}>
                  <Mail className="inline-block mr-2" size={16} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#talks" className="flex items-center hover:text-white transition-colors" onClick={() => handleLinkClick('talks')}>
                  <Mic className="inline-block mr-2" size={16} />
                  Talks
                </Link>
              </li>
              <li>
                <a href="https://github.com/akarnezis" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <Github className="inline-block mr-2" size={16} />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aris-karnezis-595777b5/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <Linkedin className="inline-block mr-2" size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://scholar.google.com/citations?user=E3y4MmEAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <GraduationCap className="inline-block mr-2" size={16} />
                  Google Scholar
                </a>
              </li>
              <li>
                <a href="https://drive.proton.me/urls/EJMZDVY3Y0#eHZs5MQgbuac" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <Download className="inline-block mr-2" size={16} />
                  CV/Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; 2025 Aris Karnezis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}