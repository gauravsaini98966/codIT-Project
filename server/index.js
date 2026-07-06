const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// In-memory course data — swap for a real DB (MongoDB, Postgres, etc.) later.
const courses = [
  {
    id: "front-end",
    title: "Front End Development",
    stack: ["React", "Next.js", "Tailwind"],
    weeks: 12,
  },
  {
    id: "ui-ux",
    title: "UI/UX Designing",
    stack: ["Figma", "Design Systems", "Prototyping"],
    weeks: 10,
  },
  {
    id: "backend",
    title: "Backend Development",
    stack: ["Node.js", "Express", "MongoDB"],
    weeks: 12,
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    stack: ["React Native", "Expo", "Firebase"],
    weeks: 14,
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    stack: ["MERN", "Next.js", "TypeScript"],
    weeks: 24,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    stack: ["SEO", "Google Ads", "Social Media"],
    weeks: 8,
  },
];

// In-memory enrollment/demo-request store.
const enrollments = [];

// In-memory contact-message store.
const messages = [];

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Intitude API" });
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json(course);
});

app.post("/api/enroll", (req, res) => {
  const { email, courseId } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }

  const entry = {
    id: enrollments.length + 1,
    email,
    courseId: courseId || null,
    createdAt: new Date().toISOString(),
  };
  enrollments.push(entry);

  res.status(201).json({ message: "Demo request received.", entry });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }

  const entry = {
    id: messages.length + 1,
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };
  messages.push(entry);

  res.status(201).json({ message: "Message received.", entry });
});

app.listen(PORT, () => {
  console.log(`Intitude API running on http://localhost:${PORT}`);
});
