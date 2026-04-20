import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();

  const aboutOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.3, 0.6], [40, 0]);
  return (
    <motion.div
      style={{ opacity: aboutOpacity, y: aboutY }}
      className="absolute right-10 bottom-0 z-30 max-w-md bg-black flex items-center justify-center"
    >
      {/* dark backdrop */}
      <div className="absolute inset-0 -z-10 bg-black/40 rounded-xl" />

      <div className="relative z-10 w-[85%] max-w-4xl bg-[#121212] text-white p-10 flex gap-10 shadow-2xl"></div>
      <div className="flex-1">
        {" "}
        <p className="text-[#E8001D] text-xs tracking-widest uppercase mb-3 font-bold">
          About Us
        </p>
        <h2 className="text-white text-4xl font-impact uppercase leading-tight mb-4">
          Barbershop With Your Personality
        </h2>
      </div>
      <div className="flex-1">
        <p className="text-gray-400 text-sm leading-relaxed">
          We have everything a real man needs: atmosphere of masculinity, a
          spirit of good fellowship, professionalism of barbers and keeping
          Nepal&apos;s barbering traditions, as well as pleasant company.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
