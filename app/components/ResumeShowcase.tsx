import { Download, FileText } from "lucide-react";
import { profile } from "../../lib/portfolio";

export function ResumeShowcase() {
  return (
    <section id="resume" className="section-wrap section-space">
      <div className="flex flex-col justify-between gap-7 rounded-2xl border border-stone-300 bg-[#ebece5] p-6 sm:p-9 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <FileText
            className="mt-1 shrink-0 text-accent"
            size={25}
            aria-hidden="true"
          />
          <div>
            <p className="eyebrow mb-2">04 / Resume</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              The details, in one place.
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              My experience, projects, and education. Updated for 2026.
            </p>
          </div>
        </div>
        <a className="button-primary shrink-0" href={profile.resume} download>
          <Download size={16} aria-hidden="true" />
          Download resume
        </a>
      </div>
    </section>
  );
}
