import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Business Website Development', description: '', budget: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e, method) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      alert("Please fill in all required fields.");
      return;
    }

    const message = `Hello Caleb, my name is ${formData.name}. I am interested in ${formData.service}. Budget: ${formData.budget || 'Not specified'}. Details: ${formData.description}. Contact me at ${formData.email}.`;
    
    if (method === 'whatsapp') {
      window.open(`https://wa.me/254762220299?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      window.location.href = `mailto:c.tonie2007@gmail.com?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(message)}`;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a Project in Mind? <span className="text-gradient">Let's Build It.</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed">Ready to establish your online presence or streamline your business operations? Reach out, and let's discuss how we can bring your vision to life.</p>
            
            <div className="space-y-6">
              <a href="tel:+254762220299" className="flex items-center gap-4 p-4 rounded-lg bg-charcoal border border-gold-400/10 hover:border-gold-400/30 transition-colors group">
                <div className="p-3 bg-gold-400/10 rounded-full group-hover:bg-gold-400/20 transition-colors">
                  <Phone className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="text-white font-medium">0762220299</div>
                </div>
              </a>
              
              <a href="https://wa.me/254762220299" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-charcoal border border-gold-400/10 hover:border-gold-400/30 transition-colors group">
                <div className="p-3 bg-gold-400/10 rounded-full group-hover:bg-gold-400/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">WhatsApp</div>
                  <div className="text-white font-medium">0762220299</div>
                </div>
              </a>

              <a href="mailto:c.tonie2007@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-charcoal border border-gold-400/10 hover:border-gold-400/30 transition-colors group">
                <div className="p-3 bg-gold-400/10 rounded-full group-hover:bg-gold-400/20 transition-colors">
                  <Mail className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-white font-medium">c.tonie2007@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-charcoal border border-gold-400/10">
                <div className="p-3 bg-gold-400/10 rounded-full">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-white font-medium">Kenya</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-charcoal border border-gold-400/10">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Project Inquiry</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h4 className="text-white font-semibold mb-2">Message Prepared!</h4>
                <p className="text-gray-400 text-sm mb-6">Your default messaging app or email client should have opened with your details. If not, use the buttons below.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={(e) => handleSubmit(e, 'whatsapp')} className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" /> Open WhatsApp
                  </button>
                  <button onClick={(e) => handleSubmit(e, 'email')} className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-dark font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" /> Open Email
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-dark border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50 transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-dark border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-dark border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50 transition-colors">
                    <option>Business Website Development</option>
                    <option>Portfolio and Personal Websites</option>
                    <option>Landing Page Development</option>
                    <option>Full-Stack Web Applications</option>
                    <option>Booking and Management Systems</option>
                    <option>Website Maintenance and Improvements</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Project Description *</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} required rows="4" className="w-full px-4 py-3 bg-dark border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50 transition-colors" placeholder="Tell me about your project..."></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Optional Budget (KES / USD)</label>
                  <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 bg-dark border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50 transition-colors" placeholder="e.g., 50,000 KES" />
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-4">Clicking submit will open your preferred app with a pre-filled message. No data is stored on any server.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button type="button" onClick={(e) => handleSubmit(e, 'whatsapp')} className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" /> Send via WhatsApp
                    </button>
                    <button type="button" onClick={(e) => handleSubmit(e, 'email')} className="flex-1 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-dark font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" /> Send via Email
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}