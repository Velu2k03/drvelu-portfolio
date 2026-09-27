import { ArrowUpRight } from "lucide-react";
import { profile } from "../../lib/portfolio";

export function Footer() {
  return (
    <footer className="section-wrap">
      <div className="flex flex-col justify-between gap-4 border-t border-stone-300 py-7 text-xs text-stone-600 sm:flex-row sm:items-center">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}{" "}
          <span className="mx-2 text-stone-400">/</span> {profile.role}
        </p>
        <a
          className="text-link"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Keep up with what I&apos;m building{" "}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
