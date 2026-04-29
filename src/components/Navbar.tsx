import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-outline-variant/30 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="font-serif italic text-2xl tracking-tighter text-primary">
          SI.NES HAIR
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-primary ${location.pathname === link.path ? 'text-primary border-b border-primary pb-1' : 'text-on-surface-variant'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="btn-primary px-6 py-3 ml-4">
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-outline-variant shadow-xl md:hidden flex flex-col p-8 gap-6 z-40"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`font-sans text-sm uppercase tracking-[0.2em] font-medium ${location.pathname === link.path ? 'text-primary underline underline-offset-8' : 'text-on-surface-variant'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking" className="btn-primary text-center mt-4">
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
