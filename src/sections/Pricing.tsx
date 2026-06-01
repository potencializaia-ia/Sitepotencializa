import { motion } from 'framer-motion';
import { Clock, Check, Search, Zap, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const services = [
  {
    badge: 'Automação Comercial',
    name: 'Automação Comercial',
    slug: 'atendimento-inteligente',
    description: 'Para empresas que querem atender mais, perder menos oportunidades e ter o comercial ativo 24 horas.',
    time: 'A  partir de 30 dias',
    icon: Zap,
    highlighted: false,
    cta: 'Falar com especialista',
    features: [
      'Diagnóstico inicial gratuito',
      'Agentes comerciais personalizados',
      'Atendimento 24/7 em múltiplos canais',
      'Qualificação e follow-up automáticos',
      'Integração com CRM e canais',
      'Acompanhamento mensal (opcional)',
    ],
  },
  {
    badge: 'Consultoria & Estratégia',
    name: 'Imersão Potencializa',
    slug: 'consultoria-ia',
    description: 'Para empresas que querem entender onde estão perdendo eficiência e sair do improviso operacional.',
    time: '1 mês',
    icon: Search,
    highlighted: true,
    cta: 'Solicitar diagnóstico gratuito',
    features: [
      'Diagnóstico inicial gratuito',
      'Mapeamento de processos e gargalos',
      'Treinamento prático da equipe',
      'Plano de ação personalizado',
      'Documentação e materiais de apoio',
      'Acompanhamento pós-imersão (opcional)',
    ],
  },
  {
    badge: 'Operação & Sistemas',
    name: 'Hiperautomação Empresarial',
    slug: 'suporte-turbo',
    description: 'Para empresas que querem conectar áreas, integrar sistemas e automatizar processos internos sob medida.',
    time: 'Definido em contrato',
    icon: Target,
    highlighted: false,
    cta: 'Solicitar análise inicial',
    features: [
      'Diagnóstico inicial gratuito',
      'Automação de processos sob medida',
      'Integração entre sistemas e áreas',
      'Agentes para diferentes setores',
      'Centralização de dados e relatórios',
      'Acompanhamento mensal (opcional)',
    ],
  },
];

export function Pricing() {
  return (
    <section id="planos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="Como Trabalhamos" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2D2D4A] mb-6 tracking-tight">
              Escolha o ponto de partida <span className="text-[#ff851b]">certo para você.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/60 max-w-2xl mx-auto">
              Cada serviço foi pensado para um momento diferente da sua empresa. Compare e descubra qual faz mais sentido agora.
            </p>
          </AnimatedSection>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <StaggerItem key={service.name} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                className={`relative flex flex-col h-full rounded-[40px] p-8 md:p-10 border transition-all duration-500 hover:border-[#ff851b] ${
                  service.highlighted
                    ? 'bg-[#2D2D4A] border-[#2D2D4A] shadow-[0_30px_60px_rgba(45,45,74,0.2)] hover:shadow-[0_30px_60px_rgba(255,133,27,0.2)]'
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/10'
                }`}
              >
                {service.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff851b] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                    Recomendado para começar
                  </div>
                )}

                {/* Cabeçalho do card */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${service.highlighted ? 'bg-[#ff851b]' : 'bg-[#ff851b]/10'}`}>
                    <service.icon className={`w-6 h-6 ${service.highlighted ? 'text-white' : 'text-[#ff851b]'}`} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#ff851b] mb-2">
                    {service.badge}
                  </p>
                  <h3 className={`text-2xl font-bold mb-3 ${service.highlighted ? 'text-white' : 'text-[#2D2D4A]'}`}>
                    {service.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${service.highlighted ? 'text-white/70' : 'text-[#2D2D4A]/60'}`}>
                    {service.description}
                  </p>
                </div>

                {/* Prazo estimado */}
                <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl mb-8 w-fit ${service.highlighted ? 'bg-white/10' : 'bg-[#F5F5F7]'}`}>
                  <Clock className="w-4 h-4 text-[#ff851b]" />
                  <span className={`text-sm font-bold ${service.highlighted ? 'text-white' : 'text-[#2D2D4A]'}`}>
                    {service.time}
                  </span>
                </div>

                {/* Lista de características */}
                <div className="space-y-3 flex-1 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${service.highlighted ? 'bg-[#ff851b]/20' : 'bg-[#71d7ff]/20'}`}>
                        <Check className={`w-3 h-3 ${service.highlighted ? 'text-[#ff851b]' : 'text-[#2D2D4A]'}`} />
                      </div>
                      <span className={`text-sm font-medium ${service.highlighted ? 'text-white/90' : 'text-[#2D2D4A]/80'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link to={`/servicos/${service.slug}`} className="block">
                  <button className={`w-full py-4 rounded-2xl font-bold text-base transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group ${
                    service.highlighted
                      ? 'bg-[#ff851b] hover:bg-[#e07316] text-white shadow-lg shadow-orange-500/20'
                      : 'bg-[#F5F5F7] hover:bg-[#2D2D4A] text-[#2D2D4A] hover:text-white'
                  }`}>
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
