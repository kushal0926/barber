"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const scrollSpring = {
  stiffness: 110,
  damping: 28,
  mass: 0.25,
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, scrollSpring);

  const clipPath = useTransform(
    smoothProgress,
    [0, 0.75],
    ["inset(0% 0% 16% 0%)", "inset(0% 0% 0% 0%)"],
  );
  const imageScale = useTransform(smoothProgress, [0, 1], [1.02, 1.18]);
  const imageY = useTransform(smoothProgress, [0, 1], ["0vh", "12vh"]);
  const titleY = useTransform(smoothProgress, [0, 1], ["0vh", "-10vh"]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 0.82, 0.6]);
  const infoY = useTransform(smoothProgress, [0, 1], ["0vh", "-5vh"]);

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="relative mt-[12vh] flex flex-col">
      <div className="relative flex min-h-screen flex-col overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          style={{ y: infoY }}
          className="absolute top-8 right-8 z-30 flex flex-col gap-1 text-right font-bold"
        >
          <a
            href="https://maps.google.com/?q=Nayabazar,Pokhara,Nepal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs tracking-widest uppercase"
          >
            Pokhara, 9 Nayabazar
          </a>
          <a
            href="tel:+9779806779801"
            className="text-white/40 text-xs tracking-widest uppercase"
          >
            +977 9806779801
          </a>
        </motion.div>

        <div className="relative flex flex-1 items-center justify-center">
          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="absolute top-25 left-0 z-30 overflow-hidden px-8"
          >
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="text-[9vw] font-inknut uppercase leading-none tracking-tighter"
            >
              Man
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px white",
                }}
              >
                &apos;s Hairdres
              </span>
              ser
            </motion.h1>
          </motion.div>

          <motion.div
            style={{ y: imageY, scale: imageScale, clipPath }}
            className="relative z-20 mt-[6%] h-screen w-[40vw] overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1 }}
              className="relative h-full w-full rounded-2xl"
            >
              <Image
                src="/heroImage.jpg"
                alt="Barber"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.7 }}
        >
          <div className="absolute top-[50vh] left-[10%] z-30">
            <motion.button
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="flex h-30 w-30 cursor-pointer items-center justify-center rounded-full border border-white text-8xl text-white transition-colors"
              onClick={scrollToAbout}
            >
              ↓
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          style={{ y: infoY }}
          className="absolute bottom-[30vh] left-8 z-30 font-bold"
        >
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Since 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
