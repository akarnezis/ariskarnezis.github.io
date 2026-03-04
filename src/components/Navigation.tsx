import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router";
import { useTheme } from "../contexts/ThemeContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "About", href: "/about", isRoute: true },
    { label: "Projects", href: "#projects", isRoute: false },
    { label: "Publications", href: "#publications", isRoute: false },
    { label: "Explainable Science", href: "#articles", isRoute: false },
    { label: "Blog", href: "#blog", isRoute: false },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isRoute: boolean = false,
  ) => {
    // If it's a route (not an anchor), let Link handle it
    if (isRoute) return;
    
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== "/") {
      // If not on home page, navigate to home first then scroll
      navigate("/");
      setTimeout(() => {
        window.location.hash = href;
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If on home page, set hash and scroll
      window.location.hash = href;
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0e14]/80 backdrop-blur-md border-b border-slate-200 dark:border-[#252a31]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-slate-900 dark:text-slate-100" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Aris Karnezis
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Button size="sm" asChild>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="p-2 text-slate-600 dark:text-slate-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                  className="block text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-2"
                >
                  {item.label}
                </a>
              )
            )}
            <Button size="sm" className="w-full" asChild>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Get in Touch
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}