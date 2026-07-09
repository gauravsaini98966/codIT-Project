// const express = require("express");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json());

// // In-memory course data — swap for a real DB (MongoDB, Postgres, etc.) later.
// const courses = [
//   {
//     id: "front-end",
//     title: "Front End Development",
//     stack: ["React", "Next.js", "Tailwind"],
//     weeks: 12,
//   },
//   {
//     id: "ui-ux",
//     title: "UI/UX Designing",
//     stack: ["Figma", "Design Systems", "Prototyping"],
//     weeks: 10,
//   },
//   {
//     id: "backend",
//     title: "Backend Development",
//     stack: ["Node.js", "Express", "MongoDB"],
//     weeks: 12,
//   },
//   {
//     id: "mobile",
//     title: "Mobile App Development",
//     stack: ["React Native", "Expo", "Firebase"],
//     weeks: 14,
//   },
//   {
//     id: "full-stack",
//     title: "Full Stack Development",
//     stack: ["MERN", "Next.js", "TypeScript"],
//     weeks: 24,
//   },
//   {
//     id: "digital-marketing",
//     title: "Digital Marketing",
//     stack: ["SEO", "Google Ads", "Social Media"],
//     weeks: 8,
//   },
// ];

// // In-memory enrollment/demo-request store.
// const enrollments = [];

// // In-memory contact-message store.
// const messages = [];

// app.get("/api/health", (req, res) => {
//   res.json({ status: "ok", service: "Intitude API" });
// });

// app.get("/api/courses", (req, res) => {
//   res.json(courses);
// });

// app.get("/api/courses/:id", (req, res) => {
//   const course = courses.find((c) => c.id === req.params.id);
//   if (!course) return res.status(404).json({ error: "Course not found" });
//   res.json(course);
// });

// app.post("/api/enroll", (req, res) => {
//   const { email, courseId } = req.body || {};

//   if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     return res.status(400).json({ error: "A valid email is required." });
//   }

//   const entry = {
//     id: enrollments.length + 1,
//     email,
//     courseId: courseId || null,
//     createdAt: new Date().toISOString(),
//   };
//   enrollments.push(entry);

//   res.status(201).json({ message: "Demo request received.", entry });
// });

// app.post("/api/contact", (req, res) => {
//   const { name, email, message } = req.body || {};

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: "Name, email and message are required." });
//   }
//   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     return res.status(400).json({ error: "A valid email is required." });
//   }

//   const entry = {
//     id: messages.length + 1,
//     name,
//     email,
//     message,
//     createdAt: new Date().toISOString(),
//   };
//   messages.push(entry);

//   res.status(201).json({ message: "Message received.", entry });
// });

// app.listen(PORT, () => {
//   console.log(`Intitude API running on http://localhost:${PORT}`);
// });










require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// The inbox that receives every contact message / demo request.
const OWNER_EMAIL = process.env.OWNER_EMAIL || "Kaushik.sushil00@gmail.com";

app.use(cors());
app.use(express.json());

// ---------------------------------------------------------------------------
// Mailer setup (Gmail SMTP via an App Password — see server/.env.example)
// ---------------------------------------------------------------------------
let transporter = null;

if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  transporter.verify((err) => {
    if (err) {
      console.error("✗ Mailer failed to initialize:", err.message);
    } else {
      console.log("✓ Mailer ready — messages will be emailed to", OWNER_EMAIL);
    }
  });
} else {
  console.warn(
    "⚠ SMTP_USER / SMTP_PASS not set — emails will be logged to the console instead of sent. " +
    "Copy server/.env.example to server/.env and fill in your Gmail App Password to enable real email sending."
  );
}

async function sendMail({ subject, replyTo, html, text }) {
  if (!transporter) {
    console.log("---- [DEV] Email not sent (no SMTP configured) ----");
    console.log("To:", OWNER_EMAIL, "| Subject:", subject);
    console.log(text);
    console.log("----------------------------------------------------");
    return { delivered: false };
  }

  await transporter.sendMail({
    from: `"Intitude Website" <${process.env.SMTP_USER}>`,
    to: OWNER_EMAIL,
    replyTo,
    subject,
    text,
    html,
  });

  return { delivered: true };
}

// ---------------------------------------------------------------------------
// Course data
// ---------------------------------------------------------------------------
const courses = [
  { id: "front-end", title: "Front End Development", stack: ["React", "Next.js", "Tailwind"], weeks: 12 },
  { id: "ui-ux", title: "UI/UX Designing", stack: ["Figma", "Design Systems", "Prototyping"], weeks: 10 },
  { id: "backend", title: "Backend Development", stack: ["Node.js", "Express", "MongoDB"], weeks: 12 },
  { id: "mobile", title: "Mobile App Development", stack: ["React Native", "Expo", "Firebase"], weeks: 14 },
  { id: "full-stack", title: "Full Stack Development", stack: ["MERN", "Next.js", "TypeScript"], weeks: 24 },
  { id: "digital-marketing", title: "Digital Marketing", stack: ["SEO", "Google Ads", "Social Media"], weeks: 8 },
];

// In-memory stores (swap for a real DB later) — kept as a backup/log even
// though every submission is now also emailed straight to OWNER_EMAIL.
const enrollments = [];
const messages = [];

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Intitude API", mailer: transporter ? "connected" : "not configured" });
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json(course);
});

// ---------------------------------------------------------------------------
// Demo / enrollment requests
// ---------------------------------------------------------------------------
app.post("/api/enroll", async (req, res) => {
  const { email, courseId } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }

  const course = courses.find((c) => c.id === courseId);
  const entry = {
    id: enrollments.length + 1,
    email,
    courseId: courseId || null,
    createdAt: new Date().toISOString(),
  };
  enrollments.push(entry);

  try {
    await sendMail({
      subject: `🎓 New demo request${course ? ` — ${course.title}` : ""}`,
      replyTo: email,
      text: `New demo request from the Intitude website.\n\nEmail: ${email}\nCourse: ${course ? course.title : "Not specified"
        }\nSubmitted: ${entry.createdAt}`,
      html: `
        <div style="font-family:sans-serif;line-height:1.6">
          <h2 style="color:#0E8F52;margin-bottom:4px;">New Demo Request</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Course:</strong> ${course ? course.title : "Not specified"}</p>
          <p style="color:#888;font-size:12px;">Submitted ${entry.createdAt}</p>
        </div>`,
    });
  } catch (err) {
    console.error("Failed to email demo request:", err.message);
  }

  res.status(201).json({ message: "Demo request received.", entry });
});

// ---------------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------------
app.post("/api/contact", async (req, res) => {
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

  try {
    const { delivered } = await sendMail({
      subject: `📩 New contact message from ${name}`,
      replyTo: email,
      text: `New message from the Intitude contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSubmitted: ${entry.createdAt}`,
      html: `
        <div style="font-family:sans-serif;line-height:1.6">
          <h2 style="color:#0E8F52;margin-bottom:4px;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;border-left:3px solid #0E8F52;padding-left:12px;">${message}</p>
          <p style="color:#888;font-size:12px;">Submitted ${entry.createdAt}</p>
        </div>`,
    });

    return res.status(201).json({
      message: delivered ? "Message sent to Intitude's inbox." : "Message received (email not configured).",
      entry,
    });
  } catch (err) {
    console.error("Failed to email contact message:", err.message);
    // The message is still saved in-memory even if the email failed to send.
    return res.status(201).json({
      message: "Message received, but the email notification failed to send.",
      entry,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Intitude API running on http://localhost:${PORT}`);
});