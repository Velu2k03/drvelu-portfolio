import { education, experience } from "../../lib/portfolio";

export function ExperienceEducation() {
  return (
    <section id="experience" className="section-wrap section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow mb-3">03 / Background</p>
          <h2 className="section-title">From science to systems.</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-stone-600">
          Science taught me to investigate. Teaching taught me to explain. I
          bring both to building AI tools and working with a team.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        {[
          { title: "Experience", items: experience },
          { title: "Education & certifications", items: education },
        ].map((group) => (
          <div key={group.title}>
            <h3 className="mb-6 border-b border-stone-300 pb-4 text-sm font-semibold">
              {group.title}
            </h3>
            <div className="space-y-7">
              {group.items.map((item) => (
                <article
                  key={item.title}
                  className="relative border-l border-stone-300 pl-5"
                >
                  <span
                    className="absolute -left-[4px] top-1 h-[7px] w-[7px] rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <p className="font-mono text-xs text-stone-500">
                    {item.period}
                  </p>
                  <h4 className="mt-2 text-base font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm text-accent">{item.org}</p>
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
