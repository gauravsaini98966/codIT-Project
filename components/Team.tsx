import TiltCard from "./TiltCard";

type Member = {
  name: string;
  role: string;
  initials: string;
};

const team: Member[] = [
  { name: "Neeraj Pilaniya", role: "CEO & Founder", initials: "NP" },
  { name: "Rinku Chaudhary", role: "Program Manager", initials: "RC" },
  { name: "Kismat Grewal", role: "MERN Stack Developer", initials: "KG" },
  { name: "Rahul Jatasra", role: "Front End Developer", initials: "RJ" },
  { name: "Yakshit Jhajhria", role: "Front End Developer", initials: "YJ" },
  { name: "Yash Payal", role: "Front End Developer", initials: "YP" },
  { name: "Kumkum", role: "UI/UX Designer", initials: "KK" },
  { name: "Nisha Choudhary", role: "Human Resources", initials: "NC" },
  { name: "Preeti Yadav", role: "MERN Stack Developer", initials: "PY" },
];

export default function Team() {
  return (
    <section id="team" className="relative py-16 sm:py-20 lg:py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs text-green uppercase tracking-widest">
            Our Team
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-bone mt-3 tracking-tight">
            Get to Know Our Team
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            We&apos;re proud to present the visionaries behind our success — a team
            of developers, designers, and problem-solvers whose creativity and
            technical expertise drive groundbreaking digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {team.map((m) => (
            <TiltCard key={m.name} strength={8} className="h-full">
              <div className="rounded-2xl border border-line bg-surface p-5 sm:p-7 h-full flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green/25 to-green-dim border border-green/40 flex items-center justify-center font-display text-lg sm:text-xl text-green">
                  {m.initials}
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg text-bone leading-snug">
                    {m.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-1">{m.role}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
