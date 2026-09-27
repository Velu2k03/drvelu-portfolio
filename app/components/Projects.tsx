import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../../lib/portfolio";

export function Projects({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  const CardHeading = standalone ? "h2" : "h3";
  return (
    <section id="projects" className="section-wrap section-space">
      <span id="achievements" className="block scroll-mt-28" />
      <div className="section-heading">
        <div>
          <p className="eyebrow mb-3">01 / Selected projects</p>
          <Heading className="section-title">Less talk. More building.</Heading>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-stone-600">
          Four projects across AI, automation, and testing. Explore the
          implementation on GitHub.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <article
              key={project.title}
              className="project-card flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-stone-200 bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1160px) 538px, (min-width: 768px) 48vw, 100vw"
                  className={
                    "object-cover " +
                    (project.type === "testing"
                      ? "object-top"
                      : "object-center")
                  }
                />
                <span className="absolute left-4 top-4 rounded-md border border-white/60 bg-white/90 px-2.5 py-1.5 font-mono text-xs text-stone-700 backdrop-blur-sm">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="eyebrow text-[10px]">{project.category}</p>
                <CardHeading className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.title}
                </CardHeading>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {project.description}
                </p>
                <ul
                  aria-label="Technology stack"
                  className="mb-7 mt-5 flex flex-wrap gap-2"
                >
                  {project.tags.map((tag) => (
                    <li className="tech-tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"View " + project.title + " on GitHub"}
                  className="mt-auto flex items-center justify-between border-t border-stone-200 pt-4 text-sm font-semibold hover:text-accent"
                >
                  <span className="flex items-center gap-2">
                    <Github size={16} aria-hidden="true" />
                    View on GitHub
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
