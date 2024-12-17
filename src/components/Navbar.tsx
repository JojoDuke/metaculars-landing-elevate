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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/c7c62b04-09b6-4270-85c4-8e289582d580.png"
              alt="Metaculars Logo"
              className="h-8 w-auto"
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
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#solution"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Solution
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <button className="metallic-button w-full">Start Converting Users</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;