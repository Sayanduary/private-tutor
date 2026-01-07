import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Subjects", to: "/subjects" },
    { name: "Pricing", to: "/pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "glass shadow-lg py-3 border-b border-white/20" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Personal Name */}
        <Link to="/" className="group text-2xl font-bold text-brand-dark tracking-tight">
          <span className="group-hover:text-brand-primary transition-colors duration-300">Agnita</span>{" "}
          <span className="text-gradient">Das</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={link.name}
              to={link.to}
              className="relative text-brand-dark/80 hover:text-brand-primary font-medium transition-all duration-300 text-sm group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-7 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-brand-primary/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 btn-shine"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-dark p-2 rounded-xl hover:bg-orange-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              className="transition-all duration-300"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full glass shadow-2xl border-t border-white/20 transition-all duration-500 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="py-6 px-6 flex flex-col gap-2">
          {links.map((link, index) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-brand-dark font-medium hover:text-brand-primary hover:bg-orange-50 py-3 px-4 rounded-xl transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-200 my-3" />
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-center px-6 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-xl shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
