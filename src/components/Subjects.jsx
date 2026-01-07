export default function Subjects() {
  const subjects = [
    {
      title: "Class 5 to 8",
      subtitle: "English , Maths & SST",
      board: "Board - All",
      description:
       "Concept-driven teaching of English, Mathematics, and Social Studies with regular practice to strengthen fundamentals and exam readiness.",

      icon: "📚",
    },
    {
      title: "Class 9 To 12",
      subtitle: "Geography",
      board: "Board - All",
      description:
        "In-depth understanding of Geography, covering physical concepts, map work, and syllabus mastery.",
      icon: "✏️",
    },
  ];

  return (
    <section
      id="subjects"
      className="relative overflow-hidden bg-brand-light py-24"
    >
      {/* Background blobs */}
      <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold tracking-wide text-brand-primary">
            <span className="h-2 w-2 rounded-full bg-brand-primary" />
            WHAT I TEACH
          </div>

          <h2 className="mb-4 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl">
            Subjects & <span className="text-gradient">Classes</span>
          </h2>

          <p className="mx-auto max-w-xl text-lg text-gray-500">
            Personalized home tuition tailored to each student's learning pace
            and requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light text-3xl text-brand-primary">
                {subject.icon}
              </div>

              <h3 className="mb-2 text-2xl font-bold text-brand-dark">
                {subject.title}
              </h3>

              <p className="mb-2 font-semibold text-brand-primary">
                {subject.subtitle}
              </p>

              {subject.board && (
                <span className="mb-4 inline-block rounded-full bg-brand-light px-3 py-1 text-sm font-semibold text-brand-primary">
                  {subject.board}
                </span>
              )}

              <p className="mt-4 leading-relaxed text-gray-500">
                {subject.description}
              </p>

              {/* CTA */}
              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-primary transition-all duration-300 group-hover:gap-4">
                Learn More
                <svg
                  className="h-5 w-5"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
