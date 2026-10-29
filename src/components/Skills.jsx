const skillCategories = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Web Design"] },
  { title: "Backend", skills: ["Python", "Flask", "FastAPI", "REST APIs"] },
  { title: "Databases", skills: ["MySQL", "PostgreSQL"] },
  { title: "Tools & Deployment", skills: ["Git", "GitHub", "Vercel", "Render"] },
  { title: "Additional", skills: ["Authentication & Authorization", "API Integration", "Database Integration", "M-Pesa Integration", "Website Deployment & Maintenance"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A practical, modern tech stack focused on reliability, performance, and scalability.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-charcoal border border-gold-400/10 hover-gold-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-dark border border-gold-400/20 rounded-md text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}