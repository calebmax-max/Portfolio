const steps = [
  { num: "01", title: "Discovery and Requirements", desc: "We discuss your business goals, target audience, and specific features needed for your project." },
  { num: "02", title: "Planning and Design", desc: "I create a clear project roadmap, wireframes, and a technical architecture tailored to your needs." },
  { num: "03", title: "Development and Testing", desc: "Clean, efficient code is written. The project is rigorously tested across devices and browsers for reliability." },
  { num: "04", title: "Deployment and Support", desc: "Your project is launched on a secure, fast hosting platform, with ongoing maintenance options available." }
];

export default function Process() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work Together</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A transparent, straightforward process designed to deliver results without the technical jargon.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-6 rounded-xl bg-dark border border-gold-400/10">
              <span className="text-4xl font-bold text-gold-400/20 absolute top-4 right-4">{step.num}</span>
              <h3 className="text-lg font-semibold text-white mb-3 mt-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}