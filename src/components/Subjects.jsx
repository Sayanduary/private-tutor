import {
  BookOpen,
  Calculator,
  GraduationCap,
  Globe,
  Map,
} from "lucide-react";

export default function Subjects() {
  const subjects = [
    {
      title: "Class 5",
      subtitle: "English, Maths & SST",
      board: "Board - All",
      description:
        "Concept-driven teaching to build strong fundamentals in English, Mathematics, and Social Studies.",
      icon: BookOpen,
    },
    {
      title: "Class 6",
      subtitle: "English, Maths & SST",
      board: "Board - All",
      description:
        "Structured learning focused on clarity, problem-solving, and steady academic improvement.",
      icon: Calculator,
    },
    {
      title: "Class 7",
      subtitle: "English, Maths & SST",
      board: "Board - All",
      description:
        "Strengthening core concepts with exam-oriented preparation and regular practice.",
      icon: GraduationCap,
    },
    {
      title: "Class 8",
      subtitle: "English, Maths & SST",
      board: "Board - All",
      description:
        "Focused guidance to prepare students for higher classes through strong conceptual foundations.",
      icon: BookOpen,
    },
    {
      title: "Class 9",
      subtitle: "Geography",
      board: "Board - All",
      description:
        "Clear understanding of physical and human geography with map work and syllabus coverage.",
      icon: Globe,
    },
    {
      title: "Class 10",
      subtitle: "Geography",
      board: "Board - All",
      description:
        "Exam-focused geography preparation including maps, diagrams, and board requirements.",
      icon: Map,
    },
    {
      title: "Class 11",
      subtitle: "Geography",
      board: "Board - All",
      description:
        "In-depth study of geography concepts with analytical and application-based learning.",
      icon: Globe,
    },
    {
      title: "Class 12",
      subtitle: "Geography",
      board: "Board - All",
      description:
        "Advanced geography preparation with emphasis on board exams and answer writing.",
      icon: GraduationCap,
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
            and academic needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light text-brand-primary">
                <subject.icon
                  size={32}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
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
