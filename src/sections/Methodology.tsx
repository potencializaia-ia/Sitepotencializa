import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const steps = [
  {
    number: 'Diagnóstico',
    title: 'Entendemos seu negócio a fundo',
    description: 'Analisamos seus processos, canais, funil, público e objetivos para identificar oportunidades reais de automação e crescimento.',
  },
  {
    number: 'Estratégia',
    title: 'Desenhamos a solução ideal',
    description: 'Criamos a arquitetura da IA, fluxos conversacionais, integrações e automações alinhadas ao seu modelo de negócio.',
  },
  {
    number: 'Implementação',
    title: 'Construímos e integramos tudo',
    description: 'Desenvolvemos, treinamos e conectamos a IA aos seus sistemas, garantindo estabilidade, segurança e performance.',
  },
  {
    number: 'Otimização',
    title: 'Aprimoramos com dados reais',
    description: 'Ajustamos a solução com base em métricas, comportamento dos usuários e resultados obtidos.',
  }
];

export function Methodology() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="Como trabalhamos" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D4A] mb-4">
              Modelo de operação<span className="text-[#fc7500]">®</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Steps Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-gray-100"
              >
                {/* Number */}
                <div className="inline-flex items-center justify-center bg-[#46c5f7] rounded-full px-4 py-2 min-w-[3.5rem] min-h-[3.5rem] shadow-md ring-4 ring-pink-100 mx-auto mb-6">
                  <span className="text-sm sm:text-base font-bold text-white whitespace-nowrap"> {step.number} </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#2D2D4A] mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#2D2D4A]/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white px-8 py-6 text-base font-medium rounded-lg transition-all hover:scale-105"
          >
            Fale com um consultor
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
