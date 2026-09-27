import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  MapPin,
  Play,
} from "lucide-react";
import { profile } from "../../lib/portfolio";

export default function Hero() {
  return (
    <section id="home" className="section-wrap pb-16 pt-10 sm:pb-20 sm:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.8fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-7 flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
            Available for remote junior / entry-level roles
          </p>
          <p className="mb-3 text-lg font-medium">Hi, I&apos;m Velu Murugan.</p>
          <h1 className="text-[clamp(2.8rem,6.4vw,5.3rem)] font-semibold leading-[1.04] tracking-[-0.065em]">
            AI Automation
            <br />
            <span className="text-accent">Engineer.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone-600">
            I build AI automation daily with n8n: LLM-driven workflows, API
            integrations, OpenAI-powered tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              Explore my projects <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a href={"mailto:" + profile.email} className="button-secondary">
              Let&apos;s talk <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-stone-600">
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              className="text-link"
              href={profile.loom}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play size={16} aria-hidden="true" />
              Video intro
            </a>
            <a className="text-link" href={profile.resume} download>
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:pt-3">
          <div className="relative overflow-hidden rounded-2xl border border-stone-300/60 bg-[#e7e8df]">
            <div
              className="absolute inset-0 blueprint-grid opacity-50"
              aria-hidden="true"
            />
            <div className="relative flex items-center justify-between p-5 text-[10px] font-medium uppercase tracking-widest text-stone-600">
              <span>Builder. Teacher. Learner.</span>
              <span className="font-mono">VM / 01</span>
            </div>
            <div className="relative mx-auto h-[300px] sm:h-[350px] w-[90%]">
              <Image
                src="/images/velu-casual-transparent.png"
                alt="Velu Murugan"
                fill
                sizes="(min-width: 1024px) 400px, 90vw"
                priority
                className="origin-bottom scale-[1.35] object-contain object-bottom"
              />
            </div>
            <div className="relative border-t border-stone-300/70 bg-white/80 p-5 backdrop-blur-sm">
              <p className="flex items-start gap-2 text-sm font-medium">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {profile.location}
              </p>
              <p className="ml-6 mt-1 text-xs text-stone-600">
                Working remotely worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 grid gap-3 border-y border-stone-300/70 py-5 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
        <p className="eyebrow">My focus</p>
        <p className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium">
          <span>n8n workflows</span>
          <span>LLM integrations</span>
          <span>Document retrieval</span>
        </p>
      </div>
    </section>
  );
}
