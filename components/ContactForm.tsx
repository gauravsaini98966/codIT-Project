"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

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
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Request failed");

      setStatus("success");
      setStatusMessage(data?.message || "Message sent — a mentor will reach out shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        "Couldn't reach the server. Please make sure the backend is running, or email Kaushik.sushil00@gmail.com directly."
      );
    }
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className="card-3d rounded-2xl border border-line bg-surface p-6 sm:p-8 flex flex-col gap-5"
    // >
    //   <div className="grid sm:grid-cols-2 gap-5">
    //     <div className="flex flex-col gap-2">
    //       <label htmlFor="name" className="font-mono text-xs text-muted uppercase tracking-widest">
    //         Name
    //       </label>
    //       <input
    //         id="name"
    //         required
    //         value={form.name}
    //         onChange={update("name")}
    //         placeholder="Your full name"
    //         className="bg-ink border border-line focus:border-green outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-muted"
    //       />
    //     </div>
    //     <div className="flex flex-col gap-2">
    //       <label htmlFor="email" className="font-mono text-xs text-muted uppercase tracking-widest">
    //         Email
    //       </label>
    //       <input
    //         id="email"
    //         type="email"
    //         required
    //         value={form.email}
    //         onChange={update("email")}
    //         placeholder="you@email.com"
    //         className="bg-ink border border-line focus:border-green outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-muted"
    //       />
    //     </div>
    //   </div>

    //   <div className="flex flex-col gap-2">
    //     <label htmlFor="phone" className="font-mono text-xs text-muted uppercase tracking-widest">
    //       Phone
    //     </label>
    //     <input
    //       id="phone"
    //       type="tel"
    //       required
    //       value={form.phone}
    //       onChange={update("phone")}
    //       placeholder="+91 98765 43210"
    //       className="bg-ink border border-line focus:border-green outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-muted"
    //     />
    //   </div>

    //   <div className="flex flex-col gap-2">
    //     <label htmlFor="message" className="font-mono text-xs text-muted uppercase tracking-widest">
    //       Message
    //     </label>
    //     <textarea
    //       id="message"
    //       required
    //       rows={5}
    //       value={form.message}
    //       onChange={update("message")}
    //       placeholder="Tell us what you're looking to learn or build..."
    //       className="bg-ink border border-line focus:border-green outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-muted resize-none"
    //     />
    //   </div>

    //   <button
    //     type="submit"
    //     disabled={status === "loading"}
    //     className="btn-glow self-start bg-green text-ink font-semibold px-7 py-3.5 rounded-full text-sm disabled:opacity-60"
    //   >
    //     {status === "loading" ? "Sending..." : "Send Message"}
    //   </button>

    //   {status === "success" && (
    //     <p className="font-mono text-xs text-green">✓ {statusMessage}</p>
    //   )}
    //   {status === "error" && (
    //     <p className="font-mono text-xs text-red-400">⚠ {statusMessage}</p>
    //   )}
    // </form>



    <form
      onSubmit={handleSubmit}
      className="card-3d rounded-2xl border border-line bg-surface p-4 xs:p-5 sm:p-8 flex flex-col gap-4 xs:gap-5 w-full max-w-full box-border overflow-hidden"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 w-full">
        <div className="flex flex-col gap-1.5 xs:gap-2 min-w-0 w-full">
          <label htmlFor="name" className="font-mono text-[10px] xs:text-xs text-muted uppercase tracking-widest">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className="w-full box-border bg-ink border border-line focus:border-green outline-none rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm text-bone placeholder:text-muted"
          />
        </div>
        <div className="flex flex-col gap-1.5 xs:gap-2 min-w-0 w-full">
          <label htmlFor="email" className="font-mono text-[10px] xs:text-xs text-muted uppercase tracking-widest">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className="w-full box-border bg-ink border border-line focus:border-green outline-none rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm text-bone placeholder:text-muted"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 xs:gap-2 min-w-0 w-full">
        <label htmlFor="phone" className="font-mono text-[10px] xs:text-xs text-muted uppercase tracking-widest">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={form.phone}
          onChange={update("phone")}
          placeholder="+91 98765 43210"
          className="w-full box-border bg-ink border border-line focus:border-green outline-none rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm text-bone placeholder:text-muted"
        />
      </div>

      <div className="flex flex-col gap-1.5 xs:gap-2 min-w-0 w-full">
        <label htmlFor="message" className="font-mono text-[10px] xs:text-xs text-muted uppercase tracking-widest">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us what you're looking to learn or build..."
          className="w-full box-border bg-ink border border-line focus:border-green outline-none rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm text-bone placeholder:text-muted resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-glow w-full sm:w-auto sm:self-start bg-green text-ink font-semibold px-5 xs:px-7 py-3 xs:py-3.5 rounded-full text-xs xs:text-sm disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="font-mono text-[10px] xs:text-xs text-green break-words">✓ {statusMessage}</p>
      )}
      {status === "error" && (
        <p className="font-mono text-[10px] xs:text-xs text-red-400 break-words">⚠ {statusMessage}</p>
      )}
    </form>


  );
}