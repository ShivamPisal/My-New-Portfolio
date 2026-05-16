import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 500 : 160,
    damping: reduceMotion ? 60 : 28,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-metallic-copper via-metallic-gold to-metallic-champagne shadow-[0_0_24px_rgba(212,175,55,0.38)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
