import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div id="home">
        <Hero />
      </div>

      {/* ABOUT */}
      <Section id="about" title="About the Tutor">
        <Card>
          <p className="mb-4">
            Hello, I am <strong>Agnita Das</strong>, a dedicated private home
            tutor based in Belghoria. I focus on strong fundamentals, clear
            concepts, and building confidence in students through friendly and
            personalized teaching.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
              <span>Personal attention to every student</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
              <span>Simple explanations with daily-life examples</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
              <span>Regular practice and doubt-solving</span>
            </li>
          </ul>
        </Card>
      </Section>

      {/* SUBJECTS */}
      <Section id="subjects" title="Subjects & Classes">
        <div className="grid gap-4">
          <Card>
            <h3 className="font-bold text-lg mb-1">Class 5 & 6</h3>
            <p className="text-slate-600">All subjects</p>
          </Card>

          <Card>
            <h3 className="font-bold text-lg mb-1">Class 7 & 8</h3>
            <p className="text-slate-600">English only</p>
          </Card>

          <Card>
            <h3 className="font-bold text-lg mb-1">Teaching Method</h3>
            <p className="text-slate-600">
              Concept clarity, exam-oriented preparation, and regular
              assessments.
            </p>
          </Card>
        </div>
      </Section>

      {/* FEES */}
      <Section id="fees" title="Fees">
        <Card>
          <p>
            Fees will be decided after discussion, depending on the class and
            individual requirements.
          </p>
        </Card>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" title="Student Feedback">
        <Card>
          <p className="italic opacity-90 mb-3">
            “Very caring and explains topics in a way that is easy to
            understand.”
          </p>
          <p className="italic opacity-90 mb-3">
            “My child’s confidence in English has improved a lot.”
          </p>
          <p className="text-sm opacity-50">
            (Replace with real reviews later)
          </p>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <Contact />
      </Section>

      {/* FLOATING + NAV */}
      <FloatingWhatsApp />
      <Navbar />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
