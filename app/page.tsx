"use client"

import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
