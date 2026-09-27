import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ExperienceEducation } from "../components/ExperienceEducation";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { profile } from "../../lib/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Velu Murugan, an AI Automation Engineer with a background in biology and teaching, seeking remote junior AI and automation roles.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="section-wrap py-16 sm:py-20">
          <p className="eyebrow mb-4">About Velu</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Curiosity brought me here.
            <br />
            <span className="text-accent">Building keeps me learning.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            I&apos;m Velu Murugan, an AI Automation Engineer based in the
            Philippines. I build daily with n8n, Python, and LLM APIs,
            connecting tools and turning documents into useful answers.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
            My background in biology and teaching shaped how I investigate
            problems and explain ideas. I&apos;m looking for a junior or
            entry-level role on a collaborative remote team.
          </p>
          <a
            href={profile.loom}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary mt-7"
          >
            Watch my video intro <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
