import { Shield, Zap, LifeBuoy, MessageSquare, Target, GraduationCap, Briefcase, User, Code, Eye } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [statsRef, statsInView] = useInView();
  const [journeyRef, journeyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [introRef, introInView] = useInView();

  const stats = [
    { number: "4+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const introCards = [
    {
      icon: User,
      title: "Who I Am",
      text: "I am Caleb Tonny, a Full-Stack Software Developer and the founder of TONIE TECH. My technical foundation is built on dedicated software development training at the Modcom Institute Of Technology and my ongoing Computer Science studies at Masinde Muliro University of Science and Technology."
    },
    {
      icon: Code,
      title: "What I Do",
      text: "I specialize in working with local Kenyan SMEs and growing businesses. I understand the common hurdles they face: relying on manual processes, struggling with inefficient record-keeping, or lacking a professional online presence. My goal is to solve these problems through practical, automated digital systems."
    },
    {
      icon: Eye,
      title: "My Vision",
      text: "My vision for TONIE TECH is simple: to help businesses grow and scale by leveraging modern, accessible technology. Whether you need a sleek business website, a custom booking system, or a full management platform, I build solutions that move your business forward."
    }
  ];

  const values = [
    { icon: Zap, title: "Fast & Reliable Delivery", desc: "I respect your time and budget. I build efficiently to get your digital solutions live and working for you as quickly as possible." },
    { icon: MessageSquare, title: "Clear Communication", desc: "No confusing tech jargon. I keep you updated at every step, ensuring you always know exactly what is happening with your project." },
    { icon: Shield, title: "Clean & Secure Code", desc: "I write modern, maintainable code with security in mind, ensuring your business data is protected and your system is built to last." },
    { icon: LifeBuoy, title: "Post-Launch Support", desc: "My job doesn't end at deployment. I provide ongoing support and maintenance to ensure your system runs smoothly as your business grows." }
  ];

  const journey = [
    { icon: GraduationCap, title: "Software Development Training", place: "Modcom Institute Of Technology", period: "Completed", desc: "Intensive training in modern software development practices, programming fundamentals, and full-stack technologies." },
    { icon: GraduationCap, title: "BSc. Computer Science", place: "Masinde Muliro University of Science and Technology", period: "Ongoing", desc: "Pursuing advanced studies in computer science, focusing on software engineering, algorithms, and system design." },
    { icon: Briefcase, title: "Founder, TONIE TECH", place: "Kenya", period: "Present", desc: "Building practical digital solutions for local businesses, specializing in web applications, booking systems, and management platforms." }
  ];

  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Cards Section */}
        <div ref={introRef} className="mb-20">
          <div className={`text-center mb-12 ${introInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Turning Ideas Into <span className="text-gradient">Functional Digital Solutions.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Get to know the developer behind TONIE TECH.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {introCards.map((card, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl bg-dark border border-gold-400/10 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(212,175,55,0.1)] ${introInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-400/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <card.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group text-center p-6 rounded-xl bg-dark border border-gold-400/10 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(212,175,55,0.1)] ${statsInView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div ref={journeyRef} className="mb-20">
          <div className={`text-center mb-12 ${journeyInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-3">My Journey</h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">A path of continuous learning and building practical solutions.</p>
          </div>
          
          <div className="space-y-4">
            {journey.map((item, idx) => (
              <div
                key={idx}
                className={`group flex gap-5 p-5 rounded-xl bg-dark border border-gold-400/10 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(212,175,55,0.1)] ${journeyInView ? 'animate-fade-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-400/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h4 className="text-base font-semibold text-white">{item.title}</h4>
                    <span className="text-xs text-gold-400 font-medium mt-1 md:mt-0">{item.period}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-1">{item.place}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Me */}
        <div ref={valuesRef}>
          <div className={`text-center mb-12 ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center gap-3">
              <Target className="w-6 h-6 text-gold-400" /> Why Work With Me
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">What sets me apart and ensures your project's success.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`group p-6 rounded-xl bg-dark border border-gold-400/10 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(212,175,55,0.1)] ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-400/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-gold-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-base font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">{value.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}