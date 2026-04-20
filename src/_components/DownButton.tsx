import { motion } from "framer-motion";

const DownButton = () => {
  return (
    <div>
      {/* Down arrow */}
      <div className="absolute bottom-30 left-[20%] z-30 border-none">
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-30 h-30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer text-8xl border border-white"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          ↓
        </motion.button>
      </div>
    </div>
  );
};

export default DownButton;
