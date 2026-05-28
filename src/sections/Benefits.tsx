import { motion } from 'framer-motion';
import { 
  TrendingUp, Clock, Settings, 
  UserCheck, ShieldCheck, BarChart3, 
  Zap, ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const benefits = [
  {
    title: 'Economia Operacional',
    description: 'Reduza custos drásticos ao automatizar processos e tarefas repetitivas.',
    icon: TrendingUp,
    side: 'left'
  },
  {
    title: 'Conversão em Escala',
    description: 'Aumente em até 82% suas chances de venda com respostas qualificadas no exato momento do interesse.',
    icon: Zap,
    side: 'left'
  },
  {
    title: 'Automação sob Medida',
    description: 'Fluxos inteligentes desenhados para a realidade específica do seu modelo de negócio.',
    icon: Settings,
    side: 'left'
  },
  {
    title: 'Personalização Humana',
    description: 'Nossa IA mantém o tom de voz da sua marca, garantindo empatia e naturalidade em cada conversa.',
    icon: UserCheck,
    side: 'right'
  },
  {
    title: 'Disponibilidade Total',
    description: 'Sua empresa operando 24/7, sem pausas, feriados ou perda de oportunidades por demora.',
    icon: Clock,
    side: 'right'
  },
  {
    title: 'Inteligência de Dados',
    description: 'Transforme interações em relatórios estratégicos e insights para decisões em tempo real.',
    icon: BarChart3,
    side: 'right'
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Detalhe de fundo - Glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionBadge text="Por que a Potencializa?" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2D2D4A] mb-6">
              Tecnologia para quem <span className="text-[#ff851b]">decide crescer.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/60 max-w-2xl mx-auto">
              Mais do que sistemas, entregamos a estrutura necessária para sua empresa escalar sem que você precise estar em todos os lugares ao mesmo tempo.
            </p>
          </AnimatedSection>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Lado Esquerdo */}
          <StaggerContainer className="space-y-12">
            {benefits.filter(b => b.side === 'left').map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group flex flex-col items-center gap-6 text-center"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F9F9FB] rounded-2xl flex items-center justify-center border border-gray-100 group-hover:border-[#ff851b]/30 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-orange-500/10 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-[#ff851b]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2D2D4A] mb-2 group-hover:text-[#ff851b] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[#2D2D4A]/65 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CENTRO: O "CORE" TECNOLÓGICO */}
          <AnimatedSection delay={0.2} className="flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Círculos de pulso decorativos */}
              <div className="absolute inset-0 border border-orange-500/10 rounded-full animate-[ping_3s_linear_infinite]" />
              <div className="absolute inset-8 border border-orange-500/20 rounded-full animate-[ping_4s_linear_infinite]" />
              
              {/* Frame Principal (Efeito Glass) */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-[#2D2D4A] to-[#1E2235] rounded-[60px] shadow-2xl border border-white/20 flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,133,27,0.2),transparent)]" />

                {/* Visual Central: Placeholder para algo que remeta a IA/Dados */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#ff851b] rounded-3xl flex items-center justify-center shadow-[0_15px_35px_rgba(255,133,27,0.4)] mb-6">
                    <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-white font-bold tracking-tighter text-xl">SISTEMA ATIVO</span>
                  <div className="mt-2 flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#71d7ff]/80 animate-pulse" />)}
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Lado Direito */}
          <StaggerContainer className="space-y-12">
            {benefits.filter(b => b.side === 'right').map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  whileHover={{ x: -10 }}
                  className="group flex flex-col items-center gap-6 text-center"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F9F9FB] rounded-2xl flex items-center justify-center border border-gray-100 group-hover:border-[#ff851b]/30 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-orange-500/10 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-[#ff851b]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2D2D4A] mb-2 group-hover:text-[#ff851b] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[#2D2D4A]/65 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA FINAL */}
        <AnimatedSection delay={0.4} className="text-center mt-24">
          <div className="inline-flex flex-col items-center">
            <Button
              size="lg"
              className="bg-[#2D2D4A] hover:bg-[#1a1a2e] text-white px-10 py-7 text-lg font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-blue-900/10"
            >
              Começar minha transformação
            </Button>
            <p className="mt-4 text-sm text-[#2D2D4A]/40 font-medium flex items-center gap-2">
              <Zap className="w-3 h-3 text-[#71d7ff]" /> 
              Diagnóstico inicial gratuito disponível!
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}