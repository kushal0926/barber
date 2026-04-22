import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Items {
  id: number;
  image: string;
  content?: React.ReactNode;
}
// cuts, shaves, styling, barber-spa
const items: Items[] = [
  { id: 1, image: "/chairView.jpg" },
  { id: 2, image: "/hero-section.jpg" },
  { id: 4, image: "/picture-one.jpg" },
  { id: 5, image: "/picture-two.jpg" },

];

const ImageSlider = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);

  return (
    <div ref={containerRef} className="h-[200vh] mt-[50vh]">
      <div className="sticky top-5 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-140 h-150 relative overflow-hidden"
            >
              <Image src={item.image} alt="" fill className="object-cover rounded" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSlider;
