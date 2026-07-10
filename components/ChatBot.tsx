"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

const STARTER_PROMPTS = ["Tell me about Full Stack", "How do I contact you?", "What courses do you offer?"];

let idCounter = 1;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Hi 👋 I'm the CodIT assistant. Ask me anything about our courses or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { id: idCounter++, from: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      const reply =
        typeof data?.reply === "string"
          ? data.reply
          : "Sorry, I couldn't process that — try asking about a course or how to contact us.";
      setMessages((m) => [...m, { id: idCounter++, from: "bot", text: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          id: idCounter++,
          from: "bot",
          text: "I'm having trouble connecting right now — please email Kaushik.sushil00@gmail.com and we'll help directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60]">
      {open && (
        <div className="mb-3 w-[92vw] max-w-[360px] sm:w-[380px] h-[70vh] max-h-[520px] sm:h-[500px] rounded-2xl border border-line bg-surface shadow-2xl shadow-black/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-4 bg-gradient-to-r from-[#0A1330] via-[#15305F] to-[#0A1330] shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green/20 border border-green/40 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_10px_2px_rgba(57,255,140,0.7)]" />
              </div>
              <div>
                <p className="font-display text-sm text-white leading-tight">CodIT Assistant</p>
                <p className="font-mono text-[10px] text-white/50">courses · contact · faq</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 flex flex-col gap-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] text-sm leading-relaxed rounded-2xl px-4 py-2.5 ${m.from === "bot"
                  ? "self-start bg-green-dim/60 text-bone rounded-tl-sm"
                  : "self-end bg-green text-ink rounded-tr-sm"
                  }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="self-start bg-green-dim/60 text-bone rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm">
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-bounce [animation-delay:-0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-bounce [animation-delay:-0.1s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-bounce" />
                </span>
              </div>
            )}
          </div>

          {/* Starter prompts */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
              {STARTER_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  className="font-mono text-[11px] border border-line hover:border-green/50 text-muted hover:text-bone rounded-full px-3 py-1.5 transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-line shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a course or contact info..."
              className="flex-1 bg-ink border border-line focus:border-green outline-none rounded-full px-4 py-2.5 text-sm text-bone placeholder:text-muted min-w-0"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="shrink-0 w-10 h-10 rounded-full bg-green text-ink flex items-center justify-center disabled:opacity-50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="btn-glow w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green text-ink flex items-center justify-center shadow-xl shadow-black/20 ml-auto"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4h16v11H8l-4 4V4z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="9.5" r="1" fill="currentColor" />
            <circle cx="12" cy="9.5" r="1" fill="currentColor" />
            <circle cx="15" cy="9.5" r="1" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
