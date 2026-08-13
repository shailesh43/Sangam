import Image from "next/image";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import BentoSection from "./components/BentoSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <HeroSection />
      <BentoSection />
      <Footer />
    </div>
  );
}
