const reviews = [
  {
    quote:
      "The Full Stack track gave me an actual product to show, not just a certificate. That portfolio piece got me my first interview.",
    initials: "RM",
    name: "Riya Mehta",
    track: "Full Stack Track",
  },
  {
    quote:
      "Mentor code reviews were the difference. Someone actually explained why my API design was wrong, every single week.",
    initials: "AK",
    name: "Aman Kumar",
    track: "Backend Track",
  },
  {
    quote:
      "I came in knowing zero design theory. The UI/UX track rebuilt how I think about layout — my Figma files look like a real designer's now.",
    initials: "SP",
    name: "Sana Parveen",
    track: "UI/UX Track",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-16 sm:py-20 lg:py-28 border-t border-line bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs text-green uppercase tracking-widest">
              Reviews
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-bone mt-3 tracking-tight">
              Built by students who now ship code.
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-surface border border-line rounded-2xl p-6 sm:p-7">
              <div className="flex gap-1 text-green mb-5">★★★★★</div>
              <p className="text-bone/85 leading-relaxed mb-6">&quot;{r.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-dim border border-green/30 flex items-center justify-center font-display text-green text-sm">
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm text-bone font-medium">{r.name}</p>
                  <p className="text-xs text-muted">{r.track}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
