import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import ChatBot from "@/components/ChatBot";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "CodIT — Learn to Build the Web",
  description:
    "CodIT is a leading coding academy offering industry-focused, project-based training in Front-End Development, Back-End Development, Full Stack Development, UI/UX Design, Mobile App Development, and Digital Marketing. Our mentor-led programs are designed to equip students with practical, job-ready skills through hands-on projects, real-world assignments, and personalized guidance from experienced industry professionals. Whether you're a beginner or looking to advance your career, CodIT provides the knowledge, experience, and support needed to succeed in today's competitive tech industry..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="font-body bg-ink">
        {children}
        {/* <ChatBot /> */}
      </body>
    </html>
  );
}
