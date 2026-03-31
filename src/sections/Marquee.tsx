import { motion } from 'framer-motion';

export function Marquee() {
  const text = 'Mais resultado com menos esforço.';
  const repeatedText = Array(6).fill(text).join(' ');

  return (
    <section className="py-12 bg-white overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
      >
        <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2D2D4A] mx-4">
          {repeatedText}
          <span className="text-[#ff851b]">.</span>
        </span>
        <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2D2D4A] mx-4">
          {repeatedText}
          <span className="text-[#ff851b]">.</span>
        </span>
      </motion.div>
    </section>
  );
}
