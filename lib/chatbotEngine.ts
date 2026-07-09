import { BOT_COURSES, BOT_CONTACT, BOT_FAQS } from "./chatbotData";

function normalize(text: string) {
  return text.toLowerCase().trim();
}

function includesAny(text: string, keywords: string[]) {
  return keywords.some((k) => text.includes(k));
}

const GREETINGS = ["hi", "hello", "hey", "yo", "namaste", "good morning", "good evening"];
const THANKS = ["thanks", "thank you", "thnx", "thx"];
const CONTACT_WORDS = [
  "contact",
  "email",
  "phone",
  "number",
  "call",
  "reach",
  "address",
  "location",
  "office hour",
  "office hours",
  "where are you",
  "talk to someone",
  "talk to a human",
];
const DEMO_WORDS = ["demo", "enroll", "enrol", "join", "admission", "sign up", "signup", "register"];
const PRICE_WORDS = ["price", "cost", "fee", "fees", "how much"];
const COURSES_LIST_WORDS = ["course", "courses", "track", "tracks", "program", "programs", "what do you teach"];
const FEATURE_WORDS = ["placement rate", "mentor", "job ready", "batch", "cohort"];

export function getBotReply(question: string): string {
  const q = normalize(question);

  if (!q) {
    return "Ask me about our courses (Front End, Backend, Full Stack, UI/UX, Mobile, Digital Marketing) or how to reach the Intitude team!";
  }

  if (includesAny(q, THANKS)) {
    return "You're welcome! Anything else you'd like to know about our courses or how to reach us?";
  }

  if (includesAny(q, GREETINGS) && q.length < 20) {
    return "Hey there 👋 I'm the Intitude assistant. Ask me about our courses (Front End, Backend, Full Stack, UI/UX, Mobile, Digital Marketing) or how to get in touch, and I'll point you in the right direction.";
  }

  // Contact-related question
  if (includesAny(q, CONTACT_WORDS)) {
    return `You can reach the Intitude team at ${BOT_CONTACT.email} or call ${BOT_CONTACT.phone}. Office hours: ${BOT_CONTACT.hours}. Or use the full contact form at ${BOT_CONTACT.contactPage}.`;
  }

  // Demo / enrollment question
  if (includesAny(q, DEMO_WORDS)) {
    return `You can book a free demo class right on the site — head to the "Book Free Demo" section (${BOT_CONTACT.demoLink}) and drop your email. A mentor will reach out to schedule it.`;
  }

  // Pricing question — we don't publish fixed pricing, so route to a human
  if (includesAny(q, PRICE_WORDS)) {
    return `Pricing depends on the track and batch, so the fastest way to get an exact number is to book a free demo (${BOT_CONTACT.demoLink}) or email us at ${BOT_CONTACT.email} — a mentor will walk you through the options.`;
  }

  // Try to match a specific course by keyword
  const matchedCourse = BOT_COURSES.find((c) => includesAny(q, c.keywords));
  if (matchedCourse) {
    return `${matchedCourse.title} (${matchedCourse.weeks}): ${matchedCourse.desc} Tech covered: ${matchedCourse.tags.join(
      ", "
    )}. Want to enroll? Head to ${BOT_CONTACT.demoLink} to book a free demo.`;
  }

  // General "what courses do you offer" question
  if (includesAny(q, COURSES_LIST_WORDS)) {
    const names = BOT_COURSES.map((c) => c.title).join(", ");
    return `We offer six career tracks: ${names}. Ask me about any one of them by name and I'll share more details!`;
  }

  // Try to match a known FAQ
  const matchedFaq = BOT_FAQS.find((f) => includesAny(q, f.keywords));
  if (matchedFaq) {
    return matchedFaq.a;
  }

  if (includesAny(q, FEATURE_WORDS)) {
    return "Intitude runs mentor-led, project-based cohorts with live code reviews, real Git workflows, and placement support after graduation — every track ends with a capstone you actually ship.";
  }

  // Fallback
  return `I can help with questions about our courses (${BOT_COURSES.map((c) => c.title).join(
    ", "
  )}) or how to contact us. Could you rephrase your question, or email ${BOT_CONTACT.email} for anything specific?`;
}
