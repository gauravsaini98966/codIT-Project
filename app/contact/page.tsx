import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — CodIT",
  description:
    "Get in touch with CodIT — ask about tracks, batches, or book a free demo class with a mentor.",
};

const info = [
  {
    label: "Email",
    value: "Kaushik.sushil00@gmail.com",
    href: "mailto:Kaushik.sushil00@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#0E8F52" strokeWidth="1.8" />
        <path d="M3 7l9 6 9-6" stroke="#0E8F52" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 85708 54537",
    href: "tel:+918570854537",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5c0 8 7 15 15 15l3-4-6-3-2 2c-2-1-4-3-5-5l2-2-3-6-4 3z"
          stroke="#0E8F52"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Remote-first · India",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"
          stroke="#0E8F52"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9" r="2.4" stroke="#0E8F52" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero bg-grid border-b border-line">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-green/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative text-center">
          <span className="inline-flex items-center gap-2 border border-line rounded-full px-4 py-1.5 mb-6 font-mono text-xs text-green">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Get in touch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-bone">
            Let&apos;s talk about your next step.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Questions about a track, a batch, or pricing? Send us a message
            and a mentor will get back to you within a day.
          </p>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3">

            <ContactForm />
          </div>


          <div className="lg:col-span-2 flex flex-col gap-2 xs:gap-3 sm:gap-4 lg:gap-5">
            {info.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="card-3d flex items-center gap-2.5 rounded-xl border border-line bg-surface p-3 xs:gap-3 xs:rounded-2xl xs:p-4 sm:gap-4 sm:p-5 lg:p-6"
              >
                <div className="w-9 h-9 shrink-0 rounded-lg bg-green-dim flex items-center justify-center xs:w-10 xs:h-10 sm:w-11 sm:h-11">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] text-green uppercase tracking-widest xs:text-[10px] sm:text-[11px]">
                    {item.label}
                  </p>
                  <p className="text-bone font-medium text-xs mt-0.5 break-words xs:text-sm sm:text-base">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="card-3d rounded-xl border border-line bg-[#0A0F0C] p-3 xs:rounded-2xl xs:p-4 sm:p-5 lg:p-6">
              <p className="font-mono text-[9px] text-green uppercase tracking-widest mb-1.5 xs:text-[10px] xs:mb-2 sm:text-[11px]">
                Office hours
              </p>
              <p className="text-white/80 text-[11px] leading-relaxed xs:text-xs sm:text-sm">
                Monday – Saturday, 10:00 AM – 7:00 PM IST.
                <br />
                Mentor Q&amp;A sessions run weekly for every active batch.
              </p>
            </div>
          </div>




        </div>
      </section>

      <Footer />
    </main>
  );
}
