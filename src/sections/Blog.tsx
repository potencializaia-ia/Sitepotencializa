import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export function Blog() {
  return (
    <section className="pt-20 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge text="Blog" className="mb-6" />
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D4A] mb-4">
            Insights e Tendências
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-lg text-[#2D2D4A]/70 mb-12">
            Fique atualizado com as últimas novidades e tendências de IA e automação.
          </p>
        </AnimatedSection>

        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-80 bg-[#2D2D4A]/70 backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff851b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <Lock className="w-12 h-12 text-[#ff851b] mb-6" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white text-center mb-3 relative z-10">
                    Em Breve
                  </h3>
                  <p className="text-white/50 text-center text-sm relative z-10">
                    Estamos preparando conteúdo exclusivo para você.
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
