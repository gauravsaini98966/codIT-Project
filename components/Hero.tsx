"use client";

import { useRef } from "react";

const techLogos = [
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "Figma",
  "React Native",
  "TypeScript",
  "PostgreSQL",
  "SEO",
  "Google Ads",
];

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sceneRef.current || !wrapRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    wrapRef.current.style.transform = `rotateY(${x * 24}deg) rotateX(${-y * 18}deg)`;
  };

  const handleMouseLeave = () => {
    if (!wrapRef.current) return;
    wrapRef.current.style.transform = "rotateY(-8deg) rotateX(6deg)";
  };

  return (
    <section
      id="top"
      className="relative bg-grid pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-36 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] bg-green/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-line rounded-full px-4 py-1.5 mb-7 font-mono text-xs text-green">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            cohort enrolling — batch #14
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[68px] leading-[1.04] tracking-tight text-bone">
            Ship real products.
            <br />
            Not just <span className="text-green glow-text">tutorials.</span>
          </h1>
          <p className="mt-7 text-lg text-muted max-w-lg leading-relaxed">
            Intitude is a project-first coding academy. Learn Front End,
            Backend, Full Stack, UI/UX, Mobile Development and Digital
            Marketing the way product teams actually build — with mentors,
            code reviews, and a portfolio to show for it.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#enroll"
              className="btn-glow bg-green text-ink font-semibold px-7 py-3.5 rounded-full text-sm"
            >
              Start Learning →
            </a>
            <a
              href="#courses"
              className="border border-line hover:border-green/50 text-bone font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Explore Courses
            </a>
          </div>
          <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-6 sm:gap-10 font-mono text-xs text-muted">
            <div>
              <span className="text-xl sm:text-2xl text-bone font-display block">
                4.2k+
              </span>
              students trained
            </div>
            <div className="hidden sm:block w-px h-9 bg-line" />
            <div>
              <span className="text-xl sm:text-2xl text-bone font-display block">
                92%
              </span>
              placement rate
            </div>
            <div className="hidden sm:block w-px h-9 bg-line" />
            <div>
              <span className="text-xl sm:text-2xl text-bone font-display block">6</span>
              career tracks
            </div>
          </div>
        </div>

        <div
          className="scene relative h-[300px] sm:h-[380px] lg:h-[440px] flex items-center justify-center"
          ref={sceneRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="stack-wrap relative w-[230px] h-[138px] sm:w-[280px] sm:h-[168px]"
            ref={wrapRef}
            style={{ transform: "rotateY(-8deg) rotateX(6deg)" }}
          >
            <div
              className="stack-card float-slower"
              style={{
                ["--z" as string]: "-40px",
                transform: "translateZ(-40px) translateY(70px) scale(0.94)",
                opacity: 0.55,
              }}
            >
              <div className="p-5">
                <span className="tag text-[10px] text-muted">05 · mobile</span>
              </div>
            </div>
            <div
              className="stack-card float-slow"
              style={{
                ["--z" as string]: "-10px",
                transform: "translateZ(-10px) translateY(38px) scale(0.97)",
                opacity: 0.75,
              }}
            >
              <div className="p-5">
                <span className="tag text-[10px] text-muted">04 · backend</span>
              </div>
            </div>
            <div
              className="stack-card float-slower"
              style={{
                ["--z" as string]: "20px",
                transform: "translateZ(20px) translateY(12px)",
              }}
            >
              <div className="p-5 flex flex-col h-full justify-between">
                <span className="tag text-[10px] text-green">03 · full stack</span>
                <div className="font-mono text-[11px] text-bone/70 leading-relaxed">
                  <div>
                    <span className="text-green">const</span> app = build();
                  </div>
                  <div>
                    app.<span className="text-green">deploy</span>();
                  </div>
                </div>
              </div>
            </div>
            <div
              className="stack-card float-slow"
              style={{
                ["--z" as string]: "50px",
                transform: "translateZ(50px) translateY(-16px)",
              }}
            >
              <div className="p-5 flex flex-col h-full justify-between">
                <span className="tag text-[10px] text-green">02 · ui/ux</span>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-md bg-green/20 border border-green/40" />
                  <div className="w-8 h-8 rounded-md bg-white/10" />
                  <div className="w-8 h-8 rounded-md bg-white/5" />
                </div>
              </div>
            </div>
            <div
              className="stack-card float-slower"
              style={{
                ["--z" as string]: "80px",
                transform: "translateZ(80px) translateY(-46px)",
                boxShadow:
                  "0 40px 70px -18px rgba(57,255,140,0.25), 0 0 0 1px rgba(57,255,140,0.35) inset",
              }}
            >
              <div className="p-5 flex flex-col h-full justify-between">
                <span className="tag text-[10px] text-green">01 · front end</span>
                <div className="flex items-center justify-between">
                  <span className="font-display text-bone text-sm">index.tsx</span>
                  <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_10px_2px_rgba(57,255,140,0.7)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-14 sm:mt-20">
        <p className="text-center text-xs font-mono text-muted mb-6 uppercase tracking-widest">
          The stack we teach, in production
        </p>
        <div className="overflow-hidden border-y border-line py-5">
          <div className="marquee-track flex gap-16 w-max font-display text-2xl text-bone/25 whitespace-nowrap">
            {[...techLogos, ...techLogos].map((logo, i) => (
              <span key={i}>{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
