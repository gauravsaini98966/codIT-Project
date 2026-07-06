import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Portfolio from "@/components/Portfolio";
import Why from "@/components/Why";
import LearningPath from "@/components/LearningPath";
import Reviews from "@/components/Reviews";
import Enroll from "@/components/Enroll";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courses />
      <Portfolio />
      <Why />
      <LearningPath />
      <Reviews />
      <Enroll />
      <FAQ />
      <Footer />
    </main>
  );
}
