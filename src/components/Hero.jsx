export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-brand-light via-white to-orange-50/60" />
      <div className="absolute top-24 right-0 -z-10 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl animate-[float_8s_ease-in-out_2s_infinite]" />

      <div className="container mx-auto grid items-center gap-14 px-6 md:grid-cols-2">
        {/* LEFT */}
        <div className="z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-4 py-2 text-xs font-semibold tracking-wide text-brand-primary shadow-md backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-primary" />
            PRIVATE HOME TUTOR
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-brand-dark md:text-5xl lg:text-6xl">
            Helping Students Build{" "}
            <span className="text-gradient">Strong Foundations</span>
          </h1>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-600">
            Private Home Tutor for Classes 5–8 based in Ariadaha, Dakshineswar. Specializing in
            English with a focus on concept clarity and student confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/40"
            >
              Contact Me
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#subjects"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white/60 px-7 py-4 font-bold text-brand-dark backdrop-blur transition-all duration-300 hover:border-brand-primary hover:bg-orange-50"
            >
              View Subjects
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Teaching Method Card */}
          <div className="mt-12 max-w-lg rounded-2xl border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-2xl text-white shadow-lg">
                🎯
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-brand-dark">
                  Concept-Based Learning
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Focus on understanding, regular assessments, and
                  exam-oriented preparation to ensure success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Decorative blobs */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-secondary/30 blur-xl animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-brand-primary/20 blur-xl animate-[float_8s_ease-in-out_1s_infinite]" />

            {/* Image */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://placehold.co/500x600/FF8F3C/FFFFFF?text=Agnita+Das"
                alt="Agnita Das - Private Home Tutor"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/70 p-4 shadow-xl backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-500 text-white shadow-lg">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-brand-dark">Experienced</p>
                <p className="text-xs text-gray-500">Home Tutor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
