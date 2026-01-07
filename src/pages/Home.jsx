import Hero from "../components/Hero";
import About from "../components/About";
import Subjects from "../components/Subjects";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Subjects />
      <Pricing />
      <Contact />
    </PageWrapper>
  );
}
