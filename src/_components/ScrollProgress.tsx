"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const progressSpring = {
  stiffness: 160,
  damping: 30,
  mass: 0.2,
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, progressSpring);
  const opacity = useTransform(scrollYProgress, [0, 0.03], [0, 1]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[#E8001D]"
      style={{ scaleX, opacity }}
    />
  );
};

export default ScrollProgress;
