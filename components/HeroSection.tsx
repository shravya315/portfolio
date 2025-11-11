"use client";

import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { motion } from "framer-motion";
import Link from "next/link";

function HeroSection() {
  return (

    <BackgroundLines className="relative flex flex-col items-center justify-center w-full text-center  bg-black min-h-[60vh]">
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-clip-text text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight z-10"
      >
        I'm <br /> <span className="font-serif italic">Shravya Atrey</span>.
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-clip-text text-neutral-300 mt-5 text-2xl font-bold tracking-tight leading-tight z-10"
      >
        DSA Enthusiast
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-sm md:max-w-lg text-neutral-400 text-sm md:text-lg mt-4 z-10"
      >
        I solve complex problems through structured thinking, algorithms, and data-driven logic.
      </motion.p>

      {/* Buttons (optional but recommended) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex gap-4 mt-8 z-10"
      >
        <Link href="#about">
          <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-all shadow-glow hover:shadow-glow-hover">
            More About Me
          </button>
        </Link>
        <Link href="#contact">

          <button className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all">
            Connect
          </button>
        </Link>
      </motion.div>
    </BackgroundLines>


  );
}

export default HeroSection;
