const steps = [
  {
    n: "01",
    title: "Foundations",
    desc: "HTML, CSS, JS and Git fundamentals — the base every track builds on.",
  },
  {
    n: "02",
    title: "Track Deep Dive",
    desc: "Specialize in your chosen path with weekly builds and live reviews.",
  },
  {
    n: "03",
    title: "Capstone Project",
    desc: "Design, build and deploy a full product for your portfolio.",
  },
  {
    n: "04",
    title: "Placement",
    desc: "Interview prep, referrals, and hiring partner introductions.",
  },
];

export default function LearningPath() {
  return (
    <section id="path" className="relative py-16 sm:py-20 lg:py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-green uppercase tracking-widest">
            How it works
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-bone mt-3 tracking-tight">
            From first commit to first offer
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-line" />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="w-14 h-14 rounded-full bg-ink border border-green flex items-center justify-center font-display text-green mb-6 relative z-10">
                {s.n}
              </div>
              <h4 className="font-display text-bone text-lg mb-2">{s.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
