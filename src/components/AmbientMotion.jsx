import { motion, useReducedMotion } from "framer-motion";

const bands = [
  "left-[4%] top-[12%] w-32 rotate-[18deg] sm:w-44 md:left-[8%] md:top-[14%] md:w-56",
  "right-[2%] top-[36%] w-40 -rotate-[16deg] sm:w-52 md:right-[10%] md:top-[38%] md:w-72",
  "left-[10%] bottom-[12%] w-36 -rotate-[10deg] sm:w-48 md:left-[18%] md:bottom-[16%] md:w-64",
];

function AmbientMotion() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 block overflow-hidden opacity-60 md:opacity-100" aria-hidden="true">
      {bands.map((className, index) => (
        <motion.div
          key={className}
          className={`absolute h-px bg-gradient-to-r from-transparent via-metallic-gold/20 to-transparent ${className}`}
          animate={
            reduceMotion
              ? undefined
              : {
                x: index % 2 === 0 ? [0, 18, 0] : [0, -16, 0],
                y: [0, -8, 0],
              }
          }
          transition={{
            duration: 12 + index * 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
        />
      ))}
    </div>
  );
}

export default AmbientMotion;
