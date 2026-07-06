"use client";

import { useRef } from "react";

type Course = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  weeks: string;
  icon: React.ReactNode;
  featured?: boolean;
};

const courses: Course[] = [
  {
    num: "01",
    title: "Front End Development",
    desc: "Build fast, accessible interfaces with React & Next.js. Master component architecture, state, and responsive layouts.",
    tags: ["React", "Next.js", "Tailwind"],
    weeks: "12 weeks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 4L2 12L8 20M16 4L22 12L16 20"
          stroke="#0E8F52"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "UI/UX Designing",
    desc: "Design systems that convert. Wireframing, prototyping, usability testing, and a Figma workflow built for handoff.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    weeks: "10 weeks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#0E8F52" strokeWidth="1.8" />
        <path
          d="M4 12h3M17 12h3M12 4v3M12 17v3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1"
          stroke="#0E8F52"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Backend Development",
    desc: "APIs, auth, and databases done right. Build secure, scalable services with Node, Express, and SQL/NoSQL.",
    tags: ["Node.js", "Express", "MongoDB"],
    weeks: "12 weeks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="#0E8F52" strokeWidth="1.8" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="#0E8F52" strokeWidth="1.8" />
        <circle cx="7" cy="7" r="0.8" fill="#0E8F52" />
        <circle cx="7" cy="17" r="0.8" fill="#0E8F52" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Mobile App Development",
    desc: "Ship cross-platform apps with React Native. Navigation, native APIs, push notifications, and app store deploys.",
    tags: ["React Native", "Expo", "Firebase"],
    weeks: "14 weeks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2.5" width="10" height="19" rx="2" stroke="#0E8F52" strokeWidth="1.8" />
        <path d="M11 18.5h2" stroke="#0E8F52" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Full Stack Development",
    desc: "The complete path: front end to backend to deployment. One curriculum, five real products, one strong portfolio.",
    tags: ["MERN", "Next.js", "TypeScript"],
    weeks: "24 weeks",
    featured: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 20L10 4L14 4L20 20M7 14h10"
          stroke="#F7FAF8"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Digital Marketing",
    desc: "SEO, paid ads, and social media strategy. Learn to grow an audience and turn traffic into real, measurable results.",
    tags: ["SEO", "Google Ads", "Social Media"],
    weeks: "8 weeks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6"
          stroke="#0E8F52"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function CourseCard({ course }: { course: Course }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !innerRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    innerRef.current.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!innerRef.current) return;
    innerRef.current.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <div
      className="course-card group"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={innerRef}
        className={`tilt-card clip-corner rounded-2xl p-6 sm:p-7 h-full flex flex-col relative overflow-hidden border ${
          course.featured
            ? "bg-gradient-to-br from-green-dim/60 to-surface border-green/40"
            : "bg-surface border-line"
        }`}
      >
        {course.featured && (
          <span className="absolute top-5 right-5 font-mono text-[10px] bg-green text-ink px-2.5 py-1 rounded-full font-semibold">
            Most Popular
          </span>
        )}
        <div className="flex items-center justify-between mb-8">
          <span className={`num text-xs ${course.featured ? "text-green" : "text-muted"}`}>
            {course.num}
          </span>
          <div
            className={`w-11 h-11 rounded-lg flex items-center justify-center ${
              course.featured ? "bg-green" : "bg-green-dim"
            }`}
          >
            {course.icon}
          </div>
        </div>
        <h3 className="font-display text-xl text-bone mb-2">{course.title}</h3>
        <p
          className={`text-sm leading-relaxed mb-6 ${
            course.featured ? "text-bone/70" : "text-muted"
          }`}
        >
          {course.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-7">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className={`font-mono text-[10px] rounded-full px-2.5 py-1 border ${
                course.featured ? "border-green/40 text-bone/80" : "border-line text-bone/70"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className={`mt-auto flex items-center justify-between pt-5 border-t text-sm ${
            course.featured ? "border-green/30" : "border-line"
          }`}
        >
          <span className={course.featured ? "text-bone/70" : "text-muted"}>{course.weeks}</span>
          <a
            href="#enroll"
            className={`flex items-center gap-1 ${
              course.featured ? "text-green font-semibold" : "text-green font-medium"
            }`}
          >
            Enroll <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="relative py-16 sm:py-20 lg:py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs text-green uppercase tracking-widest">
              Career Tracks
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-bone mt-3 tracking-tight">
              Six tracks. One goal —<br className="hidden sm:block" /> a job-ready
              portfolio.
            </h2>
          </div>
          <p className="text-muted max-w-sm leading-relaxed">
            Every course is mentor-led, project-based, and ends with a capstone
            you actually ship — not a certificate that sits in a folder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.num} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
