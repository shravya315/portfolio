"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Send, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
import { site, contact } from "@/lib/data";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


const socialIcons = { github: Github, linkedin: Linkedin, leetcode: Code };

export const Contact = () => {
  // const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      // toast({ title: "Message sent!", description: contact.successMessage });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
    // toast({ title: "Copied!", description: "Email copied to clipboard" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-semibold tracking-tight mb-3">
            Get In Touch
          </h2>
          <p className="text-neutral-400">{contact.formPrompt}</p>
          <p className="mt-2 text-sm text-neutral-500">{contact.reassurance}</p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Email */}
            <div className="rounded-xl border border-white/10 bg-neutral-900 p-6 shadow-glow hover:shadow-glow-hover transition-all duration-300">
              <h3 className="text-lg font-medium mb-3">Email</h3>
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm">{site.email}</span>
              </button>
            </div>

            {/* Social */}
            <div className="rounded-xl border border-white/10 bg-neutral-900 p-6 shadow-glow hover:shadow-glow-hover transition-all duration-300">
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <div className="flex gap-4">
                {Object.entries(site.socialLinks).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons];
                  if (!Icon) return null;

                  return (
                    <Tooltip key={platform}>
                      <TooltipTrigger asChild>
                        <motion.a
                          href={url}
                          target="_blank"
                          whileHover={{ scale: 1.12, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-800 text-white hover:bg-neutral-700 transition-all"
                        >
                          <Icon size={18} />
                        </motion.a>
                      </TooltipTrigger>

                      <TooltipContent
                        className="bg-white text-black border-none px-3 py-1 text-xs font-medium rounded-md shadow-lg"
                        sideOffset={8}
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <label className="text-sm text-neutral-300 block mb-1">Name</label>
              <Input
                className="rounded-lg bg-neutral-900 border-white/10 text-white placeholder-neutral-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-300 block mb-1">Email</label>
              <Input
                type="email"
                className="rounded-lg bg-neutral-900 border-white/10 text-white placeholder-neutral-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-300 block mb-1">Message</label>
              <Textarea
                rows={6}
                className="rounded-lg bg-neutral-900 border-white/10 text-white placeholder-neutral-500 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-white text-black hover:bg-neutral-200 transition-all shadow-glow hover:shadow-glow-hover"
            >
              {isSubmitting ? "Sending..." : (
                <span className="flex items-center justify-center gap-2">
                  <Send size={15} />
                  Send Message
                </span>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
