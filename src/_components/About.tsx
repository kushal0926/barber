"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const scrollSpring = {
  stiffness: 100,
  damping: 24,
  mass: 0.28,
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 55%"],
  });
  const smoothProgress = useSpring(scrollYProgress, scrollSpring);

  const scale = useTransform(smoothProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.45, 1], [0, 0.7, 1]);
  const y = useTransform(smoothProgress, [0, 1], [96, 0]);

  return (
    <motion.div
      id="about"
      ref={ref}
      style={{ scale, opacity, y }}
      className="absolute top-[110vh] right-[5vw] left-[30vw] z-30 flex bg-cream p-[4%] text-charcol will-change-transform"
    >
      <div className="flex-1 p-10 border-r border-white/10">
        <p className="text-[#E8001D] text-xl tracking-widest uppercase mb-3 font-inknut">
          About Us
        </p>
        <h2 className="text-4xl font-impact font-bold uppercase leading-tight">
          Barbershop With Your Personality
        </h2>
      </div>
      <div className="flex-1 p-10 flex items-center">
        <p className="text-sm leading-relaxed font-bold font-impact">
          We have everything a real man needs: atmosphere of masculinity, a
          spirit of good fellowship, professionalism of barbers and keeping
          Nepal&apos;s barbering traditions, as well as pleasant company.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
