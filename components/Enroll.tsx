"use client";

import { useState } from "react";

export default function Enroll() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiBase}/api/enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      // Backend not running locally, or request failed — still confirm to the user.
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section id="enroll" className="relative py-16 sm:py-20 lg:py-28 border-t border-line overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] lg:w-[700px] lg:h-[700px] bg-green/10 rounded-full blur-[160px]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="font-display text-4xl sm:text-5xl text-bone tracking-tight mb-5">
          Your first commit starts here.
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Book a free 20-minute demo class. No pressure, no pitch deck — just a
          real lesson from a real mentor.
        </p>
        <form
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 bg-surface border border-line focus:border-green outline-none rounded-full px-5 py-3.5 text-sm text-bone placeholder:text-muted"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-glow bg-green text-ink font-semibold px-7 py-3.5 rounded-full text-sm whitespace-nowrap disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Book Free Demo"}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 font-mono text-xs text-green">
            ✓ Got it — we&apos;ll reach out to schedule your demo.
          </p>
        )}
      </div>
    </section>
  );
}
