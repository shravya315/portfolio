"use client";
import { motion } from "framer-motion";
import { MapPin, Code2, BookOpen, Coffee } from "lucide-react";
import { about } from "@/lib/data";

const iconMap: Record<string, any> = { MapPin, Code2, BookOpen, Coffee };

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight mb-3">About Me</h2>
          <p className="text-neutral-400">Who I am and what I care about</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >

          {/* Bio */}
          <motion.div
            variants={item}
            className="md:col-span-2 rounded-xl border border-white/10 bg-neutral-900 p-6"
          >
            <h3 className="text-lg font-medium mb-3">Hello!</h3>
            <p className="text-neutral-400 leading-relaxed">{about.bio}</p>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={item}
            className="md:col-span-2 rounded-xl border border-white/10 bg-neutral-900 p-6"
          >
            <h3 className="text-lg font-medium mb-4">Education</h3>
            {about.education.map((edu, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-neutral-400">{edu.institute} • {edu.year}</p>
              </div>
            ))}
          </motion.div>

          {/* Highlights */}
          {about.highlights.map((highlight, i) => {
            const Icon = iconMap[highlight.icon];
            return (
              <motion.div
                key={i}
                variants={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900 p-5"
              >
                <div className="rounded-full bg-neutral-800 p-3">
                  <Icon size={18} className="text-white" />
                </div>
                <p className="text-sm text-neutral-300">{highlight.text}</p>
              </motion.div>
            );
          })}

          {/* Passions */}
          <motion.div
            variants={item}
            className="md:col-span-2 lg:col-span-4 rounded-xl border border-white/10 bg-neutral-900 p-6"
          >
            <h3 className="text-lg font-medium mb-4">What I'm passionate about</h3>
            <div className="flex flex-wrap gap-2">
              {about.passions.map((p, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-neutral-800 px-4 py-1.5 text-sm text-neutral-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
