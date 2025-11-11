import { motion } from "framer-motion";

export const Spotlight = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="pointer-events-none absolute -top-40 left-0 h-[600px] w-[600px] lg:h-[800px] lg:w-[800px]"
    >
      <div className="absolute inset-0 bg-linear-to-r from-white/20 via-white/5 to-transparent blur-3xl" />
    </motion.div>
  );
};
