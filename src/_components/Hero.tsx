"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"],
  );
  const scale = useTransform(scrollYProgress, [0, 1.5], [1.5, 2]);
  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section className="relative flex flex-col mt-[12vh]">
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="absolute top-8 right-8 z-30 font-bold text-right flex flex-col gap-1"
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

        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute left-0 z-30 px-8 top-25 overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="text-[9vw] font-impact uppercase leading-none tracking-tighter"
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
          </div>

          <motion.div
            style={{ scale: smoothScale, clipPath }}
            ref={ref}
            className="relative z-20 w-[40vw] h-screen overflow-hidden mt-[6%]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1 }}
              className="relative w-full h-full rounded-2xl"
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
              className="w-30 h-30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer text-8xl borde border-white"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              ↓
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
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
