

export type BotCourse = {
  id: string;
  title: string;
  keywords: string[];
  desc: string;
  tags: string[];
  weeks: string;
};

export const BOT_COURSES: BotCourse[] = [
  {
    id: "front-end",
    title: "Front End Development",
    keywords: ["front end", "frontend", "front-end", "react", "next.js", "nextjs", "ui development"],
    desc: "Build fast, accessible interfaces with React & Next.js — component architecture, state, and responsive layouts.",
    tags: ["React", "Next.js", "Tailwind"],
    weeks: "12 weeks",
  },
  {
    id: "ui-ux",
    title: "UI/UX Designing",
    keywords: ["ui/ux", "ui ux", "uiux", "design", "figma", "designer"],
    desc: "Design systems that convert — wireframing, prototyping, usability testing, and a Figma workflow built for handoff.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    weeks: "10 weeks",
  },
  {
    id: "backend",
    title: "Backend Development",
    keywords: ["backend", "back end", "back-end", "node", "express", "api", "database"],
    desc: "APIs, auth, and databases done right — build secure, scalable services with Node, Express, and SQL/NoSQL.",
    tags: ["Node.js", "Express", "MongoDB"],
    weeks: "12 weeks",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    keywords: ["mobile", "app development", "react native", "android", "ios", "expo"],
    desc: "Ship cross-platform apps with React Native — navigation, native APIs, push notifications, and app store deploys.",
    tags: ["React Native", "Expo", "Firebase"],
    weeks: "14 weeks",
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    keywords: ["full stack", "fullstack", "full-stack", "mern"],
    desc: "The complete path: front end to backend to deployment — one curriculum, five real products, one strong portfolio.",
    tags: ["MERN", "Next.js", "TypeScript"],
    weeks: "24 weeks",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    keywords: ["digital marketing", "marketing", "seo", "ads", "social media"],
    desc: "SEO, paid ads, and social media strategy — learn to grow an audience and turn traffic into measurable results.",
    tags: ["SEO", "Google Ads", "Social Media"],
    weeks: "8 weeks",
  },
];

export const BOT_CONTACT = {
  email: "Kaushik.sushil00@gmail.com",
  phone: "+91 85708 54537",
  hours: "Monday – Saturday, 10:00 AM – 7:00 PM IST",
  location: "Remote-first · India",
  demoLink: "/#enroll",
  contactPage: "/contact",
};

export const BOT_FAQS: { q: string; keywords: string[]; a: string }[] = [
  {
    q: "Do I need prior coding experience to join?",
    keywords: ["experience", "beginner", "prior knowledge", "no experience", "background"],
    a: "No prior experience needed. Every track starts with foundations — HTML, CSS, JavaScript and Git — before moving into specialized topics.",
  },
  {
    q: "Are classes live or self-paced?",
    keywords: ["live", "self paced", "self-paced", "recorded", "schedule", "timing"],
    a: "Both. Live mentor sessions run weekly for reviews and Q&A, while lessons and projects are self-paced so you can fit them around work or college.",
  },
  {
    q: "Can I switch tracks after enrolling?",
    keywords: ["switch track", "change track", "change course"],
    a: "Yes, within the first two weeks of a cohort. After that we recommend finishing the track and adding another later — most tracks share the same foundations.",
  },
  {
    q: "Do you help with job placement?",
    keywords: ["placement", "job", "hire", "interview", "career"],
    a: "Every track ends with resume reviews, mock interviews, and introductions through our hiring partner network.",
  },
];
