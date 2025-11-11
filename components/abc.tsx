"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.14 }
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-semibold tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-neutral-400">Things I’ve built recently</p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 sm:grid-cols-2"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl border border-white/10 bg-neutral-900 overflow-hidden shadow-glow hover:shadow-glow-hover transition-all duration-300"
            >

              {/* Thumbnail */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Title + Year */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-neutral-500 text-sm">{project.year}</span>
                </div>

                {/* Short Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                  {project.shortDescription}
                </p>

                {/* Highlight (Optional) */}
                {project.highlight && (
                  <div className="border border-white/10 bg-neutral-800/60 rounded-lg text-sm text-neutral-300 p-3 mb-5">
                    <span className="font-medium">Impact:</span> {project.highlight}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-neutral-800 px-3 py-1 text-xs text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.links.demo && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.links.demo, "_blank")}
                      className="rounded-lg bg-white text-black hover:bg-neutral-200 transition-all"
                    >
                      <ExternalLink size={15} className="mr-2" />
                      Live
                    </Button>
                  )}

                  {project.links.repo && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.links.repo, "_blank")}
                      className="rounded-lg border-white/20 text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all"
                    >
                      <Github size={15} className="mr-2" />
                      Code
                    </Button>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
