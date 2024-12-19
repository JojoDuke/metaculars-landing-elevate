import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-secondary/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/a7ff0f5f-e8d4-4beb-b1df-fe8d4fc7f940.png"
                alt="Metaculars Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#solution"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Solution
              </a>
              <a
                href="#pricing"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <button className="metallic-button">Start Converting Users</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Menu */}
              <div className="md:hidden fixed inset-0 top-[72px] bg-secondary/95 backdrop-blur-lg z-50">
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  <a
                    href="#features"
                    className="text-xl text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    href="#solution"
                    className="text-xl text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Solution
                  </a>
                  <a
                    href="#pricing"
                    className="text-xl text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <button 
                    className="metallic-button"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Start Converting Users
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
      {/* Add padding to the page content when mobile menu is open */}
      <div className={`${isMobileMenuOpen ? 'pt-[72px]' : ''}`}></div>
    </>
  );
};

export default Navbar;