export default function Pricing() {
  const plans = [
    {
      name: "Per Subject",
      description: "For students needing help with specific subjects",
      note: "Ideal for focused learning",
      icon: "📖",
    },
    {
      name: "Full Syllabus",
      description: "Complete coverage of all subjects for the class",
      note: "Best value for comprehensive learning",
      featured: true,
      icon: "🎓",
    },
    {
      name: "Exam Prep",
      description: "Intensive preparation before exams",
      note: "Short-term focused sessions",
      icon: "📝",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-brand-primary font-semibold text-xs mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            PRICING
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4">
            Flexible & <span className="text-gradient">Affordable</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Fees are discussed personally based on student needs, class, and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl text-center transition-all duration-500 group ${
                plan.featured
                  ? "bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-2xl scale-105"
                  : "bg-white text-brand-dark border-2 border-gray-100 hover:border-brand-primary/30 hover:shadow-xl card-hover"
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-brand-primary text-xs font-bold rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              
              {/* Glow */}
              {plan.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl blur-xl opacity-30 -z-10"></div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-6 ${
                plan.featured ? "bg-white/20 backdrop-blur-sm" : "bg-orange-100"
              }`}>
                {plan.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.featured ? "text-white/80" : "text-gray-500"}`}>
                {plan.description}
              </p>
              
              <div className={`text-xs font-semibold mb-8 px-4 py-2 rounded-full inline-block ${
                plan.featured ? "bg-white/20" : "bg-orange-100 text-brand-primary"
              }`}>
                {plan.note}
              </div>

              <a
                href="#contact"
                className={`block w-full py-4 rounded-full font-bold transition-all duration-300 ${
                  plan.featured
                    ? "bg-white text-brand-primary hover:bg-gray-100 shadow-lg hover:shadow-xl"
                    : "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-lg hover:shadow-brand-primary/30"
                }`}
              >
                Discuss Fees
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          * All fees are negotiable and based on individual student requirements.
        </p>
      </div>
    </section>
  );
}
