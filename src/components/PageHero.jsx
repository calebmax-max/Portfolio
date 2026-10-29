export default function PageHero({ title, subtitle }) {
  return (
    <div className="bg-charcoal border-b border-gold-400/10 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
}