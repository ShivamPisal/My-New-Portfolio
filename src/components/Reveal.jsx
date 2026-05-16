import { motion } from "framer-motion";

export const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({
  as = "section",
  id,
  className = "",
  children,
  amount = 0.2,
  eager = false,
}) {
  const Component = motion[as];

  return (
    <Component
      id={id}
      variants={sectionVariants}
      initial="hidden"
      animate={eager ? "visible" : undefined}
      whileInView={eager ? undefined : "visible"}
      viewport={eager ? undefined : { once: true, amount }}
      className={className}
    >
      {children}
    </Component>
  );
}

export default Reveal;
