export default function About() {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Personal Attention",
      desc: "One-on-one focus on each student's unique learning needs and pace.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Concept Clarity",
      desc: "Building strong foundations through simple, relatable explanations.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Student Confidence",
      desc: "Helping students believe in their abilities and achieve their goals.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative order-2 md:order-1">
          <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl -z-10"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src="https://placehold.co/500x500/FFB020/FFFFFF?text=About+Me"
              alt="About Agnita Das"
              className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/10 to-transparent"></div>
          </div>
          
          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl border border-white/50">
            <p className="text-4xl font-extrabold text-gradient">5+</p>
            <p className="text-sm font-medium text-gray-600">Years Teaching</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 md:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-brand-primary font-semibold text-xs mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            ABOUT ME
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
            Hello, I'm{" "}
            <span className="text-gradient">Agnita Das</span>
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            I am a dedicated private home tutor based in Ariadaha, Dakshineswar. With years of experience
            teaching Classes 5–8, I focus on building strong fundamentals, clear concepts,
            and confidence in students through friendly and personalized teaching.
          </p>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-5 p-5 rounded-2xl hover:bg-orange-50/50 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
