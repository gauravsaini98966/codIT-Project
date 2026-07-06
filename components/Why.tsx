const points = [
  {
    n: "1",
    title: "Live mentor code reviews",
    desc: "Every project is reviewed line by line by an engineer who's shipped production code — not an auto-grader.",
  },
  {
    n: "2",
    title: "Real Git workflows",
    desc: "Branches, pull requests, and merge reviews from week one — so day one at a job feels familiar.",
  },
  {
    n: "3",
    title: "Placement support",
    desc: "Resume reviews, mock interviews, and referrals into our hiring partner network after graduation.",
  },
];

export default function Why() {
  return (
    <section id="why" className="relative py-16 sm:py-20 lg:py-28 border-t border-line bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="font-mono text-xs text-green uppercase tracking-widest">
            Why Intitude
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-bone mt-3 mb-8 tracking-tight leading-tight">
            Built like a dev team, not a classroom.
          </h2>
          <div className="space-y-7">
            {points.map((p) => (
              <div key={p.n} className="flex gap-5">
                <div className="w-10 h-10 shrink-0 rounded-lg border border-green/30 flex items-center justify-center font-mono text-green text-sm">
                  {p.n}
                </div>
                <div>
                  <h4 className="font-display text-lg text-bone mb-1">{p.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scene">
          <div className="code-window bg-[#0A0F0C] border border-line rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-muted">server.js</span>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed p-6 overflow-x-auto">
              <code>
                <span className="text-muted">01</span>{"  "}
                <span className="text-[#c792ea]">import</span> express{" "}
                <span className="text-[#c792ea]">from</span>{" "}
                <span className="text-green">&apos;express&apos;</span>;{"\n"}
                <span className="text-muted">02</span>{"  "}
                <span className="text-[#c792ea]">const</span> app = express();{"\n"}
                <span className="text-muted">03</span>{"\n"}
                <span className="text-muted">04</span>{"  "}
                app.<span className="text-[#82aaff]">get</span>(
                <span className="text-green">&apos;/api/courses&apos;</span>, (req, res) =&gt; {"{"}
                {"\n"}
                <span className="text-muted">05</span>{"    "}
                res.<span className="text-[#82aaff]">json</span>({"{"} track:{" "}
                <span className="text-green">&apos;Full Stack&apos;</span>, weeks:{" "}
                <span className="text-[#f78c6c]">24</span> {"}"});{"\n"}
                <span className="text-muted">06</span>{"  "}
                {"}"});{"\n"}
                <span className="text-muted">07</span>
                {"\n"}
                <span className="text-muted">08</span>{"  "}
                app.<span className="text-[#82aaff]">listen</span>(
                <span className="text-[#f78c6c]">3000</span>, () =&gt; {"{"}
                {"\n"}
                <span className="text-muted">09</span>{"    "}
                console.<span className="text-[#82aaff]">log</span>(
                <span className="text-green">&apos;Intitude server running ✓&apos;</span>);{"\n"}
                <span className="text-muted">10</span>{"  "}
                {"}"});
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
