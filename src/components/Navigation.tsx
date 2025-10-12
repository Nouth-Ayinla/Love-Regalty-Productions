import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    // Trigger slide-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg transition-all duration-700 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="Love Regality Productions" className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold text-foreground">
              Love Regality Productions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(item.path) 
                    ? "bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent" 
                    : "text-black hover:bg-gradient-to-r hover:from-brand-orange hover:via-brand-yellow hover:to-brand-green hover:bg-clip-text hover:text-transparent"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Fixed visibility */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-black/20 hover:bg-black/30 text-black border border-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 backdrop-blur-xl bg-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                   className={`text-lg font-medium transition-all duration-300 animate-fade-in ${
                     isActive(item.path) 
                       ? "bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent" 
                       : "text-black hover:bg-gradient-to-r hover:from-brand-orange hover:via-brand-yellow hover:to-brand-green hover:bg-clip-text hover:text-transparent"
                   }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;