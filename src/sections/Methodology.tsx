import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const steps = [
  {
    number: '1',
    label: 'Diagnóstico',
    title: 'Entendemos seu negócio a fundo',
    description:
      'Analisamos seus processos, canais, funil, público e objetivos para identificar oportunidades reais de automação e crescimento.',
  },
  {
    number: '2',
    label: 'Estratégia',
    title: 'Desenhamos a solução ideal',
    description:
      'Criamos a arquitetura da IA, os fluxos conversacionais, integrações e automações alinhadas ao seu modelo de negócio.',
  },
  {
    number: '3',
    label: 'Implementação',
    title: 'Construímos e integramos tudo',
    description:
      'Desenvolvemos, treinamos e conectamos a IA aos seus sistemas, garantindo estabilidade, segurança e performance.',
  },
  {
    number: '4',
    label: 'Otimização',
    title: 'Aprimoramos com dados reais',
    description:
      'Ajustamos a solução com base em métricas, comportamento dos usuários e resultados obtidos.',
  },
];

export function Methodology() {
  return (
    <section className="py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="como trabalhamos" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D4A] mb-4">
              Modelo de operação<span className="text-[#ff851b]">.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/70 max-w-2xl mx-auto">
              Da análise inicial à evolução contínua, estruturamos cada etapa para transformar atendimento em resultado.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Number */}
                <div className="w-14 h-14 bg-[#ff851b] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>

                {/* Label */}
                <p className="text-sm font-semibold uppercase tracking-wide text-[#ff851b] mb-3">
                  {step.label}
                </p>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#2D2D4A] mb-4 leading-snug">
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