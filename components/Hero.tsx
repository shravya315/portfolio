"use client"

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "./Spotlight";
import { Meteors } from "./Meteors";
import { site } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      <Spotlight />
      <Meteors number={8} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="relative h-32 w-32 rounded-full ring-2 ring-glow/20 ring-offset-4 ring-offset-background">
            <img
              src="/images/profile.jpg"
              alt={site.name}
              className="h-full w-full rounded-full object-cover"
              style={{
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-4 text-xl text-muted-foreground sm:text-2xl"
        >
          {site.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mb-12 text-lg text-muted-foreground sm:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#projects")}
            className="group relative overflow-hidden rounded-2xl px-8 shadow-glow transition-all hover:shadow-glow-hover"
          >
            See my work
            <motion.div
              className="absolute inset-0 -z-10 bg-linear-to-r from-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="rounded-2xl border-border px-8 shadow-glow hover:bg-accent hover:shadow-glow-hover"
          >
            Let's talk
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
