import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: 100, // Slide in from right
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "anticipate",
    },
  },
  exit: {
    opacity: 0,
    x: -100, // Slide out to left
    transition: {
      duration: 0.5,
      ease: "anticipate",
    },
  },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen pt-20" // Add padding top for fixed navbar
    >
      {children}
    </motion.div>
  );
}
