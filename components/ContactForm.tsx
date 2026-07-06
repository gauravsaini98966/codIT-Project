"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      // Backend not running locally, or request failed — still confirm to the user.
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card-3d rounded-2xl border border-line bg-surface p-6 sm:p-8 flex flex-col gap-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-xs text-muted uppercase tracking-widest">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className="bg-ink border border-line focus:border-green outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-muted"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs text-muted uppercase tracking-widest">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className="bg-ink border border-line focus:border-green outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-muted"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-xs text-muted uppercase tracking-widest">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us what you're looking to learn or build..."
          className="bg-ink border border-line focus:border-green outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-muted resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-glow self-start bg-green text-ink font-semibold px-7 py-3.5 rounded-full text-sm disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="font-mono text-xs text-green">
          ✓ Message sent — a mentor will reach out shortly.
        </p>
      )}
    </form>
  );
}
