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
    <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Marcas que potencializam com a nossa IA
          </p>
        </AnimatedSection>
      </div>

      <div className="relative flex items-center">
        {/* Máscaras laterais para o fade suave */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-8 items-center"
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex-shrink-0 group">
              <div className="flex items-center gap-4 px-6 py-3 bg-[#F9F9FB] rounded-2xl border border-gray-100 group-hover:border-[#ff851b]/30 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-orange-500/5 transition-all duration-500">
                <div className="w-10 h-10 bg-[#2D2D4A] group-hover:bg-[#ff851b] rounded-xl flex items-center justify-center transition-colors duration-500">
                  <span className="text-white text-xs font-bold">{client.initials}</span>
                </div>
                <span className="text-sm font-semibold text-[#2D2D4A] whitespace-nowrap">
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