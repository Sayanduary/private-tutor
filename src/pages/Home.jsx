import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Subjects from "../components/Subjects";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <About />
        <Subjects />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
