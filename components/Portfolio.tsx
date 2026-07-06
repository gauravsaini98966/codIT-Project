"use client";

import { useMemo, useState } from "react";

type Project = {
  title: string;
  category: string;
  tags: string[];
  gradient: string;
  mark: string;
  dark?: boolean;
};

const projects: Project[] = [
  {
    title: "Campus Fest Landing Page",
    category: "Development",
    tags: ["Next.js", "Tailwind CSS"],
    gradient: "from-rose-200 via-amber-100 to-emerald-200",
    mark: "FEST",
  },
  {
    title: "NeoArcade — Web3 Gaming",
    category: "Development",
    tags: ["Next.js", "Tailwind CSS", "CSS"],
    gradient: "from-fuchsia-600 via-purple-700 to-indigo-900",
    mark: "NEO",
    dark: true,
  },
  {
    title: "Carewell Family Clinic",
    category: "Development",
    tags: ["Next.js", "Tailwind CSS"],
    gradient: "from-sky-100 via-blue-50 to-white",
    mark: "CARE",
  },
  {
    title: "UpliftNGO Community Site",
    category: "Development",
    tags: ["Next.js", "Tailwind CSS"],
    gradient: "from-amber-50 via-orange-100 to-rose-100",
    mark: "UPLIFT",
  },
  {
    title: "Aroma & Co. Perfumes",
    category: "E-commerce",
    tags: ["Next.js", "Tailwind CSS"],
    gradient: "from-neutral-800 via-neutral-700 to-amber-700",
    mark: "AROMA",
    dark: true,
  },
  {
    title: "BuildRight Infra Group",
    category: "Development",
    tags: ["Next.js", "Tailwind CSS"],
    gradient: "from-slate-700 via-slate-800 to-yellow-600",
    mark: "BUILD",
    dark: true,
  },
];

export default function Portfolio() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 lg:py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs text-green uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-bone mt-3 tracking-tight">
            Real projects, built by real students.
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            Every capstone ships as a live product — here&apos;s a sample of what
            our students have built and deployed.
          </p>
        </div>

        <div className="rounded-3xl bg-[#080D1F] border border-white/10 p-6 sm:p-10">
          <div className="relative max-w-xl mx-auto mb-10">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="11" cy="11" r="7" stroke="#9CA8C7" strokeWidth="1.8" />
              <path
                d="M21 21l-4-4"
                stroke="#9CA8C7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a project, app or website etc."
              className="w-full bg-white/5 border border-white/10 focus:border-green/50 outline-none rounded-full pl-12 pr-5 py-3.5 text-sm text-white placeholder:text-white/40"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.title} className="group">
                <div
                  className={`rounded-xl h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-4 overflow-hidden border border-white/10 transition-transform group-hover:scale-[1.02]`}
                >
                  <span
                    className={`font-display text-2xl tracking-widest ${
                      p.dark ? "text-white/80" : "text-black/50"
                    }`}
                  >
                    {p.mark}
                  </span>
                </div>
                <h3 className="text-white font-medium mb-1">{p.title}</h3>
                <p className="text-xs text-white/50 font-mono">{p.tags.join(" || ")}</p>
                <p className="text-xs text-white/35 mt-1">{p.category}</p>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-white/40 text-sm py-10">
                No projects match your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
