"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Items {
  id: number;
  image: string;
  content?: React.ReactNode;
  title: string;
}
// cuts, shaves, styling, barber-spa
const items: Items[] = [
  { id: 1, image: "/chairView.jpg", title: "Cuts" },
  { id: 2, image: "/hero-section.jpg", title: "Shaves" },
  { id: 4, image: "/picture-one.jpg", title: "Styling" },
  { id: 5, image: "/picture-two.jpg", title: "Barber-Spa" },
];

const scrollSpring = {
  stiffness: 90,
  damping: 24,
  mass: 0.32,
};

const ImageSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, scrollSpring);

  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", `-${(items.length - 1) * 70}vw`],
  );
  const scale = useTransform(smoothProgress, [0, 0.2, 1], [0.96, 1, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.12], [0.5, 1]);

  return (
    <div ref={containerRef} className="mt-[50vh] h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x, scale, opacity }}
          className="flex will-change-transform gap-[10vw]"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative h-[90vh] w-[80vw] shrink-0 overflow-hidden"
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover rounded"
              />
              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center p-6">
                <h2 className="text-cream text-[9vw] font-inknut ">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSlider;
