import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "About Us — Intitude",
  description:
    "Intitude is a project-first coding academy building job-ready developers, designers and marketers through mentor-led, real-world training.",
};

const whyPoints = [
  {
    n: "1",
    title: "Industry Expert Mentors",
    desc: "Learn from experienced professionals who bring real-world industry knowledge and guide you through practical, project-based training.",
  },
  {
    n: "2",
    title: "Career-Focused Courses",
    desc: "Choose from Front End, Backend, Full Stack, UI/UX, Mobile App Development, SEO & Growth Marketing, and Data Science & AI programs.",
  },
  {
    n: "3",
    title: "Practical Learning Experience",
    desc: "Build live projects, strengthen your portfolio, and prepare for interviews with hands-on training and dedicated placement support.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* ---------- Hero / Who We Are ---------- */}
      <section className="page-hero bg-grid border-b border-line">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-green/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative text-center">
          <span className="inline-flex items-center gap-2 border border-line rounded-full px-4 py-1.5 mb-6 font-mono text-xs text-green">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            About Us
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-bone">
            Who We Are
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            CodIT is a leading IT training institute dedicated to preparing students for successful careers in the technology industry. We specialize in delivering practical, industry-focused training that equips learners with the skills employers are looking for.

            Our experienced mentors provide hands-on training in **Front-End Development, Backend Development, Full Stack Development, UI/UX Designing, Mobile App Development, SEO & Growth Marketing, and Data Science & AI**. Every course is designed around real-world projects, the latest technologies, and current industry practices.

            Whether you're a beginner starting your tech journey or a professional looking to upgrade your skills, our personalized learning approach, project-based curriculum, and placement support help you gain confidence, build an impressive portfolio, and become job-ready.

          </p>
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section className="relative py-16 sm:py-20 lg:py-28 border-b border-line bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-green uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bone mt-3 mb-8 tracking-tight leading-tight">
              Reliable, innovative training — built around you.
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Choose CodIT to gain industry-ready skills through practical, hands-on learning. Our expert mentors provide training in Full Stack Development, UI/UX Design, Mobile App Development, SEO & Growth Marketing, and Data Science & AI. Every course includes real-world projects and personalized guidance to build your confidence. We focus on helping students create strong portfolios and prepare for technical interviews. Start your journey with CodIT and build a successful career in technology.

            </p>
            <div className="space-y-7">
              {whyPoints.map((p) => (
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
                <span className="ml-3 font-mono text-xs text-muted">about.ts</span>
              </div>
              <pre className="font-mono text-[12px] sm:text-[13px] leading-relaxed p-5 sm:p-6 overflow-x-auto">
                <code>
                  <span className="text-muted">01</span>{"  "}
                  <span className="text-[#c792ea]">const</span> codIT = {"{"}
                  {"\n"}
                  <span className="text-muted">02</span>{"    "}
                  founded: <span className="text-[#f78c6c]">2026</span>,{"\n"}
                  <span className="text-muted">03</span>{"    "}
                  courses: <span className="text-[#f78c6c]">7</span>,{"\n"}
                  <span className="text-muted">04</span>{"    "}
                  mode: <span className="text-green">&apos;Online & Offline&apos;</span>,{"\n"}
                  <span className="text-muted">05</span>{"    "}
                  focus: <span className="text-green">&apos;Practical Learning&apos;</span>,{"\n"}
                  <span className="text-muted">06</span>{"    "}
                  placement: <span className="text-green">&apos;Career Support&apos;</span>,{"\n"}
                  <span className="text-muted">07</span>{"    "}
                  mission: <span className="text-green">&apos;Build Job-Ready Professionals&apos;</span>,{"\n"}
                  <span className="text-muted">08</span>{"  "}
                  {"}"};{"\n"}
                  <span className="text-muted">09</span>
                  {"\n"}
                  <span className="text-muted">10</span>{"  "}
                  <span className="text-[#82aaff]">export default</span> codIT;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <Team />

      {/* ---------- Book Demo CTA ---------- */}
      <section className="relative py-16 sm:py-20 lg:py-28 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] lg:w-[700px] lg:h-[700px] bg-green/10 rounded-full blur-[160px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bone tracking-tight mb-5">
            Book your First Demo Now
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Coding is not just a skill — it&apos;s a superpower that transforms
            ideas into innovation. Start your journey to becoming an IT
            pioneer by booking your first demo.
          </p>
          <a
            href="/#enroll"
            className="btn-glow inline-flex bg-green text-ink font-semibold px-7 py-3.5 rounded-full text-sm"
          >
            Book Free Demo →
          </a>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
