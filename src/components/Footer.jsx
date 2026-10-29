import { Link } from 'react-router-dom';
import { Code2, Github, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold-400/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Code2 className="w-6 h-6 text-gold-400 group-hover:rotate-12 transition-transform" />
              <span className="text-lg font-bold text-white">TONIE <span className="text-gold-400">TECH</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Building modern websites, web applications, and practical digital solutions that help businesses establish their online presence and grow.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/calebmax-max" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark rounded-lg border border-gold-400/10 text-gray-400 hover:text-gold-400 hover:border-gold-400/30 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:c.tonie2007@gmail.com" className="p-2 bg-dark rounded-lg border border-gold-400/10 text-gray-400 hover:text-gold-400 hover:border-gold-400/30 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://wa.me/254762220299" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark rounded-lg border border-gold-400/10 text-gray-400 hover:text-gold-400 hover:border-gold-400/30 transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Me</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-gold-400 transition-colors">Projects</Link></li>
              <li><Link to="/skills" className="hover:text-gold-400 transition-colors">Skills</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold-400" /> 0762220299</li>
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-gold-400" /> 0762220299</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold-400" /> c.tonie2007@gmail.com</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 text-gold-400 text-center text-xs">📍</span> Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-400/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {year} TONIE TECH. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}