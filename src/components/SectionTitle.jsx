import { motion } from "framer-motion";
import { itemVariants } from "./Reveal";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      variants={itemVariants}
      className="mb-12 text-center md:mb-16"
    >
      <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.42em] text-metallic-copper dark:text-metallic-champagne">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl font-bold text-vintage-dark dark:text-vintage-base md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-vintage-dark/80 dark:text-vintage-base/72 md:text-lg">
        {subtitle}
      </p>
      <motion.div
        className="metal-line-animated mx-auto mt-7 w-40"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

export default SectionTitle;
