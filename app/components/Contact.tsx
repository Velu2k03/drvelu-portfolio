import { ArrowUpRight, Github, Mail, MapPin, Phone, Play } from "lucide-react";
import { profile } from "../../lib/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-wrap pb-16 pt-10 sm:pb-20">
      <div className="rounded-2xl bg-[#252c27] p-7 text-white sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5 text-[#c5d0c1]">05 / Get in touch</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Your next teammate
              <br />
              could be here.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-stone-300">
              {profile.availability}
            </p>
            <p className="mt-2 text-sm text-stone-300">
              Seeking junior and entry-level opportunities.
            </p>
            <a
              href={"mailto:" + profile.email}
              className="mt-7 inline-flex min-h-[48px] items-center gap-3 rounded-lg bg-[#e0ebd4] px-5 py-3 text-sm font-semibold text-[#252c27] transition hover:bg-white"
            >
              <Mail size={17} aria-hidden="true" />
              Email Velu
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-start gap-4 text-sm">
              <a
                className="text-link break-all"
                href={"mailto:" + profile.email}
              >
                <Mail
                  size={17}
                  className="shrink-0 text-[#c5d0c1]"
                  aria-hidden="true"
                />
                {profile.email}
              </a>
              <a className="text-link" href={profile.phoneHref}>
                <Phone
                  size={17}
                  className="shrink-0 text-[#c5d0c1]"
                  aria-hidden="true"
                />
                {profile.phone}
              </a>
              <p className="flex items-start gap-2">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#c5d0c1]"
                  aria-hidden="true"
                />
                <span>
                  {profile.location}
                  <span className="mt-1 block text-xs text-stone-300">
                    Working remotely worldwide
                  </span>
                </span>
              </p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={profile.loom}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-lg border border-white/25 p-4 text-sm font-medium transition hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  <Play size={17} aria-hidden="true" />
                  Video intro
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-lg border border-white/25 p-4 text-sm font-medium transition hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  <Github size={17} aria-hidden="true" />
                  GitHub profile
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
