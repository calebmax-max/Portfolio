import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Github, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="min-h-screen flex items-center justify-center text-white">Project not found.</div>;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">{project.category}</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">{project.title}</h1>
              <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-gold-400/20 bg-charcoal aspect-video">
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {project.screenshots.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Screenshots</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.screenshots.map((shot, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => openLightbox(idx)}
                      className="relative aspect-video rounded-lg overflow-hidden border border-gold-400/10 hover:border-gold-400/40 transition-all group"
                    >
                      <img src={shot.src} alt={shot.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" onError={(e) => { e.target.style.display = 'none'; }} />
                      <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{shot.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-charcoal border border-gold-400/10">
            
              <div className="space-y-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full px-4 py-3 bg-gold-500 hover:bg-gold-400 text-dark font-semibold rounded-lg transition-colors">
                    <ExternalLink className="w-5 h-5" /> View Live Demo
                  </a>
                )}
                
              </div>
            </div>

            <div className="p-6 rounded-xl bg-charcoal border border-gold-400/10">
              <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 text-sm bg-dark border border-gold-400/20 rounded-md text-gold-400">{tech}</span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-charcoal border border-gold-400/10">
              <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-gold-500/10 to-dark border border-gold-400/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Need a similar solution?</h3>
              <p className="text-gray-400 text-sm mb-4">Let's discuss how we can build this for your business.</p>
              <a href="/#contact" className="inline-block w-full px-4 py-3 bg-gold-500 hover:bg-gold-400 text-dark font-semibold rounded-lg transition-colors">
                Discuss a Similar Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-4 right-4 text-white hover:text-gold-400" onClick={() => setLightboxOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 text-white hover:text-gold-400 p-2" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button className="absolute right-4 text-white hover:text-gold-400 p-2" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={project.screenshots[currentImageIndex].src} alt={project.screenshots[currentImageIndex].title} className="w-full max-h-[80vh] object-contain rounded-lg" />
            <div className="text-center mt-4">
              <h4 className="text-white font-semibold">{project.screenshots[currentImageIndex].title}</h4>
              <p className="text-gray-400 text-sm">{project.screenshots[currentImageIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}