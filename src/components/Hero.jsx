export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-orange-50/50 -z-20"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full blur-3xl -z-10 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-orange-200/30 to-yellow-100/30 rounded-full blur-3xl -z-10 animate-[float_6s_ease-in-out_2s_infinite]"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/50 shadow-lg text-brand-primary font-semibold text-xs mb-8 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            PRIVATE HOME TUTOR
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-dark mb-6">
            Helping Students Build{" "}
            <span className="text-gradient relative">
              Strong Foundations
            
            </span>
          </h1>

          <p className="text-gray-500 text-lg mb-10 max-w-lg leading-relaxed">
            Private Home Tutor for Classes 5–8 based in Belghoria.
            Specializing in English with a focus on concept clarity and student confidence.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-brand-primary/40 transform hover:-translate-y-1 transition-all duration-300 btn-shine flex items-center gap-2"
            >
              Contact Me
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#subjects"
              className="group flex items-center gap-2 px-7 py-4 glass border border-brand-dark/10 text-brand-dark font-bold rounded-full hover:border-brand-primary hover:bg-orange-50 transition-all duration-300"
            >
              View Subjects
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust Badges */}
          
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-secondary/30 rounded-full blur-xl animate-[float_5s_ease-in-out_infinite]"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl animate-[float_7s_ease-in-out_1s_infinite]"></div>

            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://placehold.co/500x600/FF8F3C/FFFFFF?text=Agnita+Das"
                alt="Agnita Das - Private Home Tutor"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-brand-dark">Experienced</p>
                <p className="text-xs text-gray-500">Home Tutor</p>
              </div>
            </div>

            {/* Second Floating Badge */}
            <div className="absolute -top-2 -right-4 glass p-3 rounded-xl shadow-lg border border-white/50 animate-[float_5s_ease-in-out_0.5s_infinite]">
      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
