import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useSpring(cursorX, { stiffness: 900, damping: 52, mass: 0.18 });
  const dotY = useSpring(cursorY, { stiffness: 900, damping: 52, mass: 0.18 });
  const ringX = useSpring(cursorX, { stiffness: 420, damping: 38, mass: 0.28 });
  const ringY = useSpring(cursorY, { stiffness: 420, damping: 38, mass: 0.28 });
  const [isHoveringAction, setIsHoveringAction] = useState(false);

  useEffect(() => {
    const updateCursor = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const updateHoverState = (event) => {
      setIsHoveringAction(Boolean(event.target.closest("a, button, input, textarea, select")));
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });
    window.addEventListener("pointerover", updateHoverState, { passive: true });
    window.addEventListener("pointerout", updateHoverState, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("pointerover", updateHoverState);
      window.removeEventListener("pointerout", updateHoverState);
    };
  }, [cursorX, cursorY]);

  if (reduceMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-2.5 w-2.5 rounded-full bg-metallic-gold shadow-[0_0_18px_rgba(212,175,55,0.45)] md:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[79] hidden rounded-full border border-metallic-gold/70 bg-transparent md:block"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
        animate={{
          width: isHoveringAction ? 34 : 26,
          height: isHoveringAction ? 34 : 26,
          borderColor: isHoveringAction ? "rgba(212, 175, 55, 0.95)" : "rgba(212, 175, 55, 0.65)",
          boxShadow: isHoveringAction
            ? "0 0 0 6px rgba(212, 175, 55, 0.12)"
            : "0 0 0 0 rgba(212, 175, 55, 0)",
        }}
        transition={{ type: "spring", stiffness: 240, damping: 24 }}
      />
    </>
  );
}

export default CustomCursor;
