export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
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
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Research Projects</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">Articles</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Publications</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Open Source Tools</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Datasets</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">CV/Resume</a>
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
