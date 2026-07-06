import Link from "next/link";

const courseLinks = [
  "Front End Development",
  "UI/UX Designing",
  "Backend Development",
  "Mobile App Development",
  "Full Stack Development",
  "Digital Marketing",
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-display text-2xl text-bone">
              Int<span className="text-green">itude</span>
            </span>
            <p className="text-sm text-muted mt-4 leading-relaxed">
              A project-first coding academy for people who want to build, not
              just watch.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-xs text-green uppercase tracking-widest mb-4">
              Courses
            </h5>
            <ul className="space-y-3 text-sm text-muted">
              {courseLinks.map((c) => (
                <li key={c}>
                  <Link href="/#courses" className="hover:text-bone transition-colors">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-xs text-green uppercase tracking-widest mb-4">
              Company
            </h5>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-bone transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-bone transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-bone transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-bone transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bone transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#enroll" className="hover:text-bone transition-colors">
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-xs text-green uppercase tracking-widest mb-4">
              Get in touch
            </h5>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:Kaushik.sushil00@gmail.com"
                  className="hover:text-bone transition-colors"
                >
                  Kaushik.sushil00@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918570854537" className="hover:text-bone transition-colors">
                  +91 85708 54537
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href="#" aria-label="X" className="hover:text-green transition-colors">
                  X
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-green transition-colors">
                  IG
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-green transition-colors">
                  in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted font-mono">
          <span>© 2026 Intitude. All rights reserved.</span>
          <span>Built with Next.js · Tailwind · Node · Express</span>
        </div>
      </div>
    </footer>
  );
}
