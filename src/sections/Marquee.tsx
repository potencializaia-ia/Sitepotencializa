import { motion } from 'framer-motion';

export function Marquee() {
  const text = 'Mais resultado com menos esforço';
  
  return (
    <section className="py-16 bg-[#F5F5F7] overflow-hidden border-y border-gray-100">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#2D2D4A] tracking-tighter mx-8">
              {text}<span className="text-[#ff851b]">.</span>
            </span>
            {/* Versão Outline para variação visual */}
            <span 
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mx-8 opacity-10"
              style={{ WebkitTextStroke: '1px #2D2D4A', color: 'transparent' }}
            >
              {text}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}