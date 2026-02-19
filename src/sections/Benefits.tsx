import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const benefitsLeft = [
  {
    title: 'Economia',
    description: 'Reduza custos operacionais ao automatizar atendimentos, processos e tarefas repetitivas com IA.',
  },
  {
    title: 'Conversão',
    description: 'Aumente em até 82% suas chances de venda com respostas rápidas, qualificadas e no momento certo.',
  },
  {
    title: 'Automação',
    description: 'Reduza erros, retrabalho e tarefas manuais com fluxos inteligentes sob medida.',
  },
];

const benefitsRight = [
  {
    title: 'Personalização',
    description: 'Mantenha conversas naturais, no tom da sua marca e adaptadas ao perfil de cada cliente.',
  },
  {
    title: 'Atendimento 24/7',
    description: 'Sua empresa funcionando todos os dias, em qualquer horário, sem perder oportunidades de venda.',
  },
  {
    title: 'Inteligência',
    description: 'Tome decisões estratégicas com relatórios e dados em tempo real sobre desempenho e resultados.',
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="Benefícios" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D4A] mb-4">
              Onde tecnologia vira crescimento<span className="text-[--azul]">.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/70">
              IA aplicada à realidade do seu negócio.
            </p>
          </AnimatedSection>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Benefits */}
          <StaggerContainer className="space-y-8">
            {benefitsLeft.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[--azul] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D2D4A] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#2D2D4A]/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Center Image */}
          <AnimatedSection delay={0.2} className="flex justify-center">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#FF0066]/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face"
                  alt="Mulher usando smartphone"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right Benefits */}
          <StaggerContainer className="space-y-8">
            {benefitsRight.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[--azul] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D2D4A] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#2D2D4A]/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
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
