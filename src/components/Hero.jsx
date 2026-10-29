import { ArrowRight, Code, Database, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-600/10 via-dark to-dark"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Digital Experiences <br className="hidden lg:block" />
              That <span className="text-gradient">Move Businesses Forward.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I'm Caleb Tonny, a Full-Stack Software Developer building modern websites and practical digital solutions that help businesses establish their online presence, serve customers better, and grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a href="/projects" className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-dark font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                Explore My Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="w-full sm:w-auto px-8 py-4 border border-gold-400/30 hover:border-gold-400 text-gold-400 font-semibold rounded-lg transition-all duration-300 hover:bg-gold-400/5 text-center">
                Start a Project
              </a>
            </div>
          </div>

          {/* Right Column: Image Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-gold-400/30 bg-gradient-to-br from-charcoal to-dark shadow-[0_20px_60px_rgba(212,175,55,0.15)] group hover:shadow-[0_25px_80px_rgba(212,175,55,0.25)] transition-all duration-500">
                
                {/* Your Image - Replace the src with your actual image path */}
                <img 
                  src="/images/caleb-tonny.webp" 
                  alt="Caleb Tonny - Full-Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gold-400/10 to-dark">
                        <div class="w-32 h-32 rounded-full bg-dark border-2 border-gold-400/30 flex items-center justify-center mb-4">
                          <span class="text-5xl font-bold text-gold-400">CT</span>
                        </div>
                        <p class="text-gray-400 text-sm">Your Photo Here</p>
                      </div>
                    `;
                  }}
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60"></div>

                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-400/50 rounded-tl-lg"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400/50 rounded-br-lg"></div>
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gold-500 text-dark font-bold text-sm rounded-lg shadow-lg animate-float">
                Full-Stack Dev
              </div>

              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-dark border border-gold-400/30 text-gold-400 font-semibold text-sm rounded-lg shadow-lg">
              Kenya
              </div>

              {/* Decorative glow behind the card */}
              <div className="absolute inset-0 -z-10 bg-gold-500/20 rounded-2xl blur-3xl scale-110"></div>
            </div>
          </div>

        </div>

        {/* Bottom Feature Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Globe, label: "Modern Websites" },
            { icon: Code, label: "Web Applications" },
            { icon: Database, label: "Business Systems" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 p-4 rounded-lg bg-charcoal/50 border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300 group">
              <item.icon className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}