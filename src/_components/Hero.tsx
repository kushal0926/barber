"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import DownButton from "./DownButton";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const height = useTransform(scrollYProgress, [0, 0.5], ["100vh", "100vh"]);
  const width = useTransform(scrollYProgress, [0, 0.5], ["45vw", "100vw"]);

  return (
    <section className="relative flex flex-col">
      {/* ── HERO PANEL ── */}
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* top right */}
        <div className="absolute top-8 right-8 z-30 font-bold text-right flex flex-col gap-1">
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
        </div>

        {/* Main content area */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Big title - left */}
          <div className="absolute left-0 z-30 px-8">
            <h1 className="text-[9vw] font-impact uppercase leading-none tracking-tighter">
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
            </h1>
          </div>

          {/* Hero image */}
          <motion.div
            style={{ scale, height, width }}
            className="relative z-20 w-[50vw] h-screen overflow-hidden mt-[6%]"
          >
            <Image
              src="/heroImage.jpg"
              alt="Barber"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <DownButton />

        {/* Since 2026 - bottom left */}
        <div className="absolute bottom-22 left-8 z-30 font-bold">
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Since 2026
          </p>
        </div>
      </div>

      {/* ── ABOUT PANEL ── sits right below hero, no overlay */}
      <div className="max-w-screen bg-[#262626] border-t border-white/10 flex p-[10%]">
        <div className="flex-1 p-10 border-r border-white/10">
          <p className="text-[#E8001D] text-xl tracking-widest uppercase mb-3 font-bold">
            About Us
          </p>
          <h2 className="text-white text-4xl font-impact font-bold uppercase leading-tight">
            Barbershop With Your Personality
          </h2>
        </div>
        <div className="flex-1 p-10 flex items-center">
          <p className="text-gray-400 text-sm leading-relaxed font-bold font-impact">
            We have everything a real man needs: atmosphere of masculinity, a
            spirit of good fellowship, professionalism of barbers and keeping
            Nepal&apos;s barbering traditions, as well as pleasant company.
          </p>
        </div>
      </div>
    </section>
  );
}
