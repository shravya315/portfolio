"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Zap } from "lucide-react";
import { experience } from "@/lib/data";

const iconMap = {
  Internship: Briefcase,
  Hackathon: Zap,
  Award: Trophy,
};

const formatDate = (date: string) =>
  date === "Present"
    ? "Present"
    : new Date(
      Number(date.split("-")[0]),
      Number(date.split("-")[1]) - 1
    ).toLocaleDateString("en-US", { month: "short", year: "numeric" });

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-semibold tracking-tight mb-3">
            Experience & Achievements
          </h2>
          <p className="text-neutral-400">
            Professional experiences and meaningful contributions along the way.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Dotted vertical line (mobile: left rail, desktop: center) */}
          <div
            className="
              pointer-events-none absolute inset-y-0
              left-8 md:left-1/2 md:-translate-x-1/2
              w-px
              bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.15)_0_6px,transparent_6px_14px)]
            "
          />

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const Icon = iconMap[exp.type];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="relative"
                >
                  {/* Timeline dot – perfectly aligns with line */}
                  <div
                    className="
                      absolute
                      left-8 md:left-1/2 md:-translate-x-1/2
                      top-6
                      h-3 w-3 rounded-full bg-white/70 border border-white/20
                      animate-[pulse_2s_ease-in-out_infinite]
                    "
                  />

                  {/* Card */}
                  <div
                    className="
                      group rounded-xl border border-white/10 bg-neutral-900 p-6
                      shadow-glow hover:shadow-glow-hover hover:-translate-y-1
                      transition-all duration-300
                      ml-10 md:ml-0
                    "
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon box */}
                      <div className="rounded-lg border border-white/10 bg-neutral-800 p-3 shadow-glow">
                        <Icon size={20} className="text-white" />
                      </div>

                      {/* Text content */}
                      <div className="flex-1">
                        <div className="flex justify-between flex-wrap gap-2">
                          <div>
                            <h3 className="text-lg font-semibold">{exp.title}</h3>
                            <p className="text-neutral-400 text-sm">{exp.org}</p>
                            {exp.location && (
                              <p className="text-neutral-500 text-sm">{exp.location}</p>
                            )}
                          </div>

                          <p className="text-xs text-neutral-400 border border-white/10 bg-neutral-800 px-2 py-1 rounded-lg">
                            {formatDate(exp.start)} — {formatDate(exp.end ?? "")}
                          </p>
                        </div>

                        <ul className="mt-4 space-y-2">
                          {exp.bullets.map((line, j) => (
                            <li key={j} className="text-sm text-neutral-400 leading-relaxed">
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
