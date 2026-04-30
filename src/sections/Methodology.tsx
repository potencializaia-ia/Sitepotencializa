import { motion, type Variants } from 'framer-motion';
import { Search, Layout, Code2, LineChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const steps = [
  {
    number: '01',
    label: 'Diagnóstico',
    title: 'Entendemos seu negócio a fundo',
    description: 'Analisamos seus processos, canais, funil e objetivos para identificar oportunidades reais de automação.',
    icon: Search,
  },
  {
    number: '02',
    label: 'Estratégia',
    title: 'Desenhamos a solução ideal',
    description: 'Criamos a arquitetura da IA, os fluxos conversacionais e as integrações alinhadas ao seu modelo.',
    icon: Layout,
  },
  {
    number: '03',
    label: 'Implementação',
    title: 'Construímos e integramos tudo',
    description: 'Desenvolvemos e conectamos a IA aos seus sistemas, garantindo segurança e performance máxima.',
    icon: Code2,
  },
  {
    number: '04',
    label: 'Otimização',
    title: 'Aprimoramos com dados reais',
    description: 'Ajustamos a solução com base em métricas e comportamento real dos usuários para escala contínua.',
    icon: LineChart,
  },
];

export function Methodology() {
  return (
    <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      {/* Linha de Conexão (Workflow Path) - Visível apenas em Desktop */}
      <div className="absolute top-[60%] left-0 w-full h-[2px] border-t-2 border-dashed border-[#71d7ff]/80 hidden xl:block z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <SectionBadge text="Workflow de Sucesso" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2D2D4A] mb-6 tracking-tight">
              Modelo de <span className="text-[#ff851b]">operação.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/60 max-w-2xl mx-auto leading-relaxed">
              Da análise inicial à evolução contínua, estruturamos cada etapa para transformar sua tecnologia em faturamento.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative h-full bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Connector Dot (Desktop) */}
                <div className="absolute top-1/2 -right-4 w-8 h-8 hidden xl:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   {idx < steps.length - 1 && <ArrowRight className="text-[#ff851b] w-5 h-5" />}
                </div>

                {/* Step Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-[#2D2D4A] group-hover:bg-[#ff851b] rounded-2xl flex items-center justify-center transition-colors duration-500 shadow-lg shadow-blue-900/10 group-hover:shadow-orange-500/30">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-[#ff851b]/10 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#ff851b]">
                    {step.label}
                  </p>
                  <h3 className="text-xl font-bold text-[#2D2D4A] leading-tight group-hover:text-[#ff851b] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#2D2D4A]/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff851b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-20">
          <div className="inline-flex flex-col items-center">
            <Button
              size="lg"
              className="bg-[#2D2D4A] hover:bg-[#1a1a2e] text-white px-10 py-7 text-lg font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-blue-900/10"
            >
              Iniciar meu projeto
            </Button>
            <p className="mt-6 text-sm text-[#2D2D4A]/40 flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#71d7ff] animate-pulse" />
              Processo de implementação ágil (2-4 semanas)
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}