import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeShowcase } from "./components/ResumeShowcase";
import { ExperienceEducation } from "./components/ExperienceEducation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <ExperienceEducation />
        <ResumeShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
