import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
import { ExternalLink, Github, Image as ImageIcon, Play } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">A selection of my recent work, showcasing practical digital solutions and technical expertise.</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-gold-500 text-dark' 
                    : 'bg-dark text-gray-400 border border-gold-400/20 hover:border-gold-400/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-dark rounded-xl border border-gold-400/10 overflow-hidden hover-gold-glow transition-all duration-300">
              <div className="relative aspect-video bg-charcoal overflow-hidden">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = `<div class="text-gold-400/50 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><span class="text-sm">Image Placeholder</span></div>`;
                  }}
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link to={`/project/${project.id}`} className="px-6 py-3 bg-gold-500 text-dark font-semibold rounded-lg hover:bg-gold-400 transition-colors">
                    View Project
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">{project.category}</span>
                  <div className="flex gap-2">
                    {project.screenshots.length > 0 && <ImageIcon className="w-4 h-4 text-gray-500" />}
                    {project.videos.length > 0 && <Play className="w-4 h-4 text-gray-500" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs bg-charcoal border border-gold-400/10 rounded text-gray-300">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-charcoal border border-gold-400/20 rounded-lg text-sm font-medium text-white hover:border-gold-400/50 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}