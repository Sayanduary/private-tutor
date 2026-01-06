export default function Subjects() {
  const subjects = [
    {
      title: "Class 5 & 6",
      subtitle: "All Subjects",
      description: "Complete coverage of all subjects with focus on building strong fundamentals.",
      icon: "📚",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Class 7 & 8",
      subtitle: "English Specialist",
      description: "Grammar, comprehension, writing skills, and literature with personalized attention.",
      icon: "✏️",
      featured: true,
      color: "from-brand-primary to-brand-secondary",
    },
    {
      title: "Teaching Method",
      subtitle: "Concept-Based Learning",
      description: "Focus on understanding, regular assessments, and exam-oriented preparation.",
      icon: "🎯",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden" id="subjects">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-brand-primary font-semibold text-xs mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            WHAT I TEACH
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4">
            Subjects & <span className="text-gradient">Classes</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Personalized home tuition tailored to each student's learning pace and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-500 group card-hover ${
                subject.featured
                  ? "bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-xl scale-105"
                  : "bg-white text-brand-dark hover:shadow-2xl"
              }`}
            >
              {/* Glow Effect for Featured */}
              {subject.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl blur-xl opacity-40 -z-10 group-hover:opacity-60 transition-opacity"></div>
              )}
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${
                subject.featured 
                  ? "bg-white/20 backdrop-blur-sm" 
                  : `bg-gradient-to-br ${subject.color} shadow-lg`
              }`}>
                {subject.featured ? subject.icon : <span className="filter grayscale-0">{subject.icon}</span>}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{subject.title}</h3>
              <p className={`font-semibold mb-4 ${
                subject.featured ? "text-white/90" : "text-brand-primary"
              }`}>
                {subject.subtitle}
              </p>
              <p className={`leading-relaxed ${
                subject.featured ? "text-white/80" : "text-gray-500"
              }`}>
                {subject.description}
              </p>

              {/* Arrow */}
              <div className={`mt-6 flex items-center gap-2 font-semibold ${
                subject.featured ? "text-white" : "text-brand-primary"
              } group-hover:gap-4 transition-all duration-300`}>
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
