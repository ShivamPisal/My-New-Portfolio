import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useSpring(cursorX, { stiffness: 700, damping: 44, mass: 0.16 });
  const dotY = useSpring(cursorY, { stiffness: 700, damping: 44, mass: 0.16 });

  useEffect(() => {
    const updateCursor = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, [cursorX, cursorY]);

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-2 w-2 rounded-full bg-metallic-gold shadow-[0_0_10px_rgba(212,175,55,0.35)] md:block"
      style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
    />
  );
}

export default CustomCursor;
