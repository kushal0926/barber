"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });


  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const smoothScale = useSpring(scale, { stiffness: 80, damping: 20 });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: smoothScale, opacity }}
      className="z-30 absolute left-[30vw] right-[5vw] top-[110vh] bg-cream text-charcol flex p-[4%]"
    >
      <div className="flex-1 p-10 border-r border-white/10">
        <p className="text-[#E8001D] text-xl tracking-widest uppercase mb-3 font-bold">
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
