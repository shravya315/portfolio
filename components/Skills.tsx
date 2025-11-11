"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { skills } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const Skills = () => {
  const categories = ["Web Dev", "Programming", "Cloud/DevOps", "Tools", "Soft Skills"] as const;

  return (
    <section id="skills" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight mb-3">
            Skills & Technologies
          </h2>
          <p className="text-neutral-400">
            Tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-14">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <div key={category}>
                <h3 className="text-lg mb-6 font-medium tracking-wide text-neutral-300">{category}</h3>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {categorySkills.map((skill) => {
                    const Icon = (Icons as any)[skill.icon];

                    return (
                      <motion.div
                        key={skill.name}
                        variants={container}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="group relative"
                      >
                        {/* Skill Chip */}
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900 px-4 py-2.5 text-sm text-neutral-300 shadow-glow hover:shadow-glow-hover transition-all duration-300 cursor-default">
                          {Icon && <Icon size={17} className="text-white/80" />}
                          <span>{skill.name}</span>
                        </div>

                        {/*
                        {skill.level && (
                          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-white text-black px-3 py-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity w-max">
                            {skill.level}
                          </div>
                        )} */}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
