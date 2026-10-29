import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-gold-400/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Code2 className="w-8 h-8 text-gold-400 group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold text-white tracking-wide">TONIE <span className="text-gold-400">TECH</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-gold-400' : 'text-gray-300 hover:text-gold-400'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-dark font-semibold rounded-lg transition-all duration-300 text-sm">
              Let's Talk
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-charcoal border-b border-gold-400/20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-md ${isActive(link.path) ? 'text-gold-400 bg-dark' : 'text-gray-300 hover:text-gold-400 hover:bg-dark'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 px-5 py-3 bg-gold-500 text-dark font-semibold rounded-lg">
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}