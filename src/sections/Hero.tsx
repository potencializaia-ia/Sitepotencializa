import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HandHeart, ShoppingCart } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-[#2D2D4A] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ff851b]" />
              O que fazemos
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D4A] leading-tight max-w-4xl mb-6"
          >
            I.A. para negócios,
            <br />
            vendas e marketing
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#2D2D4A]/80 max-w-2xl mb-8"
          >
            Automação inteligente para atrair, converter e encantar clientes: 24/7, sem esforço, sem pausas e com a personalidade única da sua marca.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white px-8 py-6 text-base font-medium rounded-lg transition-all hover:scale-105"
            >
              Fale com um consultor
            </Button>
          </motion.div>

          {/* Hero Image with Floating Badges */}
          <motion.div
            variants={itemVariants}
            className="relative mt-12 w-full max-w-lg"
          >
            {/* Pink Circle Background */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[350px] h-[350px] bg-[#7fdbff] rounded-full -z-10"
            />

            {/* Hero Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=700&fit=crop&crop=face"
                alt="Mulher sorrindo usando smartphone"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            {/* Floating Badge 1 - Left */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-1/3 z-20"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="w-8 h-8 bg-[#7fdbff]/20 rounded-lg flex items-center justify-center">
                  <HandHeart className="w-4 h-4 text-[#0ea5e9]" />
                </div>
                <span className="text-sm font-medium text-[#2D2D4A]">
                  Oferecendo <span className="font-bold">6 ofertas</span> personalizadas
                </span>
              </div>
            </motion.div>

            {/* Floating Badge 2 - Right */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute right-0 top-1/2 z-20"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="w-8 h-8 bg-[#ff851b]/10 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-[#ff851b]" />
                </div>
                <span className="text-sm font-medium text-[#2D2D4A]">
                  Recuperando <span className="font-bold">11 carrinhos</span> abandonados
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
