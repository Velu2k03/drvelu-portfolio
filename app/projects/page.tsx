import type { Metadata } from "next";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "AI & Automation Projects",
  description:
    "Explore Medical RAG Chatbot, CashDash.ai, Smart AI HR Scheduler, and Household Bills Dashboard, with source code on GitHub.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-10">
        <Projects standalone />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
