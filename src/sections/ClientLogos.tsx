import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';

const clients = [
  { name: 'Município de Caçapava', initials: 'MC' },
  { name: 'IBRACESP', initials: 'IB' },
  { name: 'CMDPRO', initials: 'CM' },
  { name: 'Município de Santa Isabel', initials: 'MS' },
  { name: 'Prefeitura de Barueri', initials: 'PB' },
  { name: 'Fraternidade do Coração', initials: 'FC' },
  { name: 'Nômade', initials: 'NO' },
  { name: 'Kiddy', initials: 'KI' },
  { name: 'Thaís Poças', initials: 'TP' },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-lg text-[#2D2D4A]/80">
            Marcas que potencializam com a nossa IA:
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Logos */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-16 items-center"
        >
          {/* Double the items for seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-10 h-10 bg-[#2D2D4A] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{client.initials}</span>
                </div>
                <span className="text-sm font-medium text-[#2D2D4A] whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
