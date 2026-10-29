import { Globe, User, Layout, Server, Calendar, Wrench } from 'lucide-react';

const services = [
  { icon: Globe, title: "Business Website Development", desc: "Professional, responsive websites that establish credibility and drive customer engagement." },
  { icon: User, title: "Portfolio and Personal Websites", desc: "Custom-built personal brands and portfolios that stand out and tell your unique story." },
  { icon: Layout, title: "Landing Page Development", desc: "High-converting, optimized landing pages designed to capture leads and maximize ROI." },
  { icon: Server, title: "Full-Stack Web Applications", desc: "Scalable, secure web applications with robust frontend interfaces and powerful backend logic." },
  { icon: Calendar, title: "Booking and Management Systems", desc: "Streamlined digital solutions for hotels, schools, and businesses to automate daily operations." },
  { icon: Wrench, title: "Website Maintenance and Improvements", desc: "Ongoing support, performance optimization, and feature additions for existing digital products." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services I Offer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Practical, scalable, and modern digital solutions tailored to your business needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-xl bg-charcoal border border-gold-400/10 hover-gold-glow transition-all duration-300">
              <service.icon className="w-10 h-10 text-gold-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
              <a href="/#contact" className="inline-flex items-center text-gold-400 font-medium hover:text-gold-300 transition-colors">
                Discuss this service <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}