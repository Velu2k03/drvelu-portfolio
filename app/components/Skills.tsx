import { skillGroups } from "../../lib/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-wrap section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow mb-3">02 / Toolkit</p>
          <h2 className="section-title">Tools behind the work.</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-stone-600">
          n8n and Python at the core. The APIs, data, and deployment tools to
          connect the pieces.
        </p>
      </div>
      <div className="grid gap-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <div key={group.title}>
            <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold">
              <span className="font-mono text-xs text-accent">
                0{index + 1}
              </span>
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className={
                    "tech-tag " +
                    (skill === "n8n"
                      ? "border-orange-200 bg-orange-50 text-orange-800"
                      : "")
                  }
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
