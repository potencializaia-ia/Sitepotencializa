import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const plans = [
  {
    name: 'Essencial',
    subtitle: 'Configure você mesmo!',
    price: '390',
    setup: '990',
    setupOptional: true,
    setupNote: 'E nós configuramos para você!',
    cta: 'Comece agora',
    ctaStyle: 'pink' as const,
    highlighted: false,
    features: [
      { text: '1 agente incluso', included: true },
      { text: 'Respostas instantâneas em qualquer canal', included: true },
      { text: 'Agendamentos automáticos', included: true },
      { text: 'Personalização do tom de voz da sua marca', included: true },
      { text: 'Resolução automática de dúvidas frequentes', included: true },
      { text: 'Disponibilidade contínua sem interrupções', included: true },
      { text: 'Enviar arquivos para clientes', included: false },
      { text: 'Enviar links de pagamentos', included: false },
      { text: 'Enviar lembretes', included: false },
      { text: 'Alimentar banco de dados', included: false },
      { text: 'Diagnóstico exclusivo para o seu negócio', included: false },
      { text: 'Desenvolvimento de solução costumizada', included: false },
      { text: 'Novas funcionalidades sob medida', included: false },
      { text: 'Integração com sistemas já existentes', included: false },
      { text: 'Prova de teste e ajustes', included: false },
      { text: 'Lançamento e acompanhamento', included: false },
    ],
  },
  {
    name: 'Avançado',
    subtitle: 'Nós configuramos pra você.',
    price: '690',
    setup: '2.000',
    setupOptional: false,
    setupNote: 'Para a configuração inicial',
    cta: 'Fale com um Consultor',
    ctaStyle: 'dark' as const,
    highlighted: true,
    features: [
      { text: '1 agente incluso', included: true },
      { text: 'Respostas instantâneas em qualquer canal', included: true },
      { text: 'Agendamentos automáticos', included: true },
      { text: 'Personalização do tom de voz da sua marca', included: true },
      { text: 'Resolução automática de dúvidas frequentes', included: true },
      { text: 'Disponibilidade contínua sem interrupções', included: true },
      { text: 'Enviar arquivos para clientes', included: true },
      { text: 'Enviar links de pagamentos', included: true },
      { text: 'Enviar lembretes', included: true },
      { text: 'Alimentar banco de dados', included: true },
      { text: 'Diagnóstico exclusivo para o seu negócio', included: false },
      { text: 'Desenvolvimento de solução costumizada', included: false },
      { text: 'Novas funcionalidades sob medida', included: false },
      { text: 'Integração com sistemas já existentes', included: false },
      { text: 'Prova de teste e ajustes', included: false },
      { text: 'Lançamento e acompanhamento', included: false },
    ],
  },
  {
    name: 'Customizado',
    subtitle: 'Vamos desenvolver a solução perfeita!',
    price: 'Sob consulta',
    setup: '',
    setupOptional: false,
    setupNote: 'Diagnóstico personalizado',
    setupNote2: 'Agendaremos uma reunião inicial!',
    cta: 'Fale com um Consultor',
    ctaStyle: 'dark' as const,
    highlighted: false,
    features: [
      { text: 'Múltiplos agentes', included: true },
      { text: 'Respostas instantâneas em qualquer canal', included: true },
      { text: 'Agendamentos automáticos', included: true },
      { text: 'Personalização do tom de voz da sua marca', included: true },
      { text: 'Resolução automática de dúvidas frequentes', included: true },
      { text: 'Disponibilidade contínua sem interrupções', included: true },
      { text: 'Enviar arquivos para clientes', included: true },
      { text: 'Enviar links de pagamentos', included: true },
      { text: 'Enviar lembretes', included: true },
      { text: 'Alimentar banco de dados', included: true },
      { text: 'Diagnóstico exclusivo para o seu negócio', included: true },
      { text: 'Desenvolvimento de solução costumizada', included: true },
      { text: 'Novas funcionalidades sob medida', included: true },
      { text: 'Integração com sistemas já existentes', included: true },
      { text: 'Prova de teste e ajustes', included: true },
      { text: 'Lançamento e acompanhamento', included: true },
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="planos e preços" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D4A] mb-4">
              Planos inteligentes para cada objetivo<span className="text-[#FF0066]">.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/70 max-w-2xl mx-auto">
              Escolha a solução ideal para transformar seu negócio com a potência da IA.
            </p>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-[#FF0066] shadow-xl'
                    : 'border-gray-100 shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${plan.name === 'Essencial' ? 'border-2 border-[#FF0066]' : 'bg-[#FF0066]'}`} />
                    <h3 className="text-xl font-semibold text-[#2D2D4A]">{plan.name}</h3>
                  </div>
                  {plan.price !== 'Sob consulta' && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">ANUAL</span>
                      <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
                    </div>
                  )}
                </div>

                <p className="text-sm text-[#2D2D4A]/70 mb-4">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-4">
                  {plan.price === 'Sob consulta' ? (
                    <span className="text-3xl font-bold text-[#2D2D4A]">{plan.price}</span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-[#2D2D4A]/70">Apenas</span>
                      <span className="text-4xl font-bold text-[#2D2D4A]">R$ {plan.price}</span>
                      <span className="text-sm text-[#2D2D4A]/70">/mês</span>
                    </div>
                  )}
                </div>

                {/* Setup */}
                {plan.setup && (
                  <div className="mb-2">
                    <p className="text-sm text-[#2D2D4A]">
                      + Setup R$ {plan.setup} {plan.setupOptional ? '(opcional)' : '(obrigatório)'}
                    </p>
                  </div>
                )}

                {plan.setupNote && (
                  <p className="text-sm text-[#2D2D4A]/70 mb-6">{plan.setupNote}</p>
                )}
                {plan.setupNote2 && (
                  <p className="text-sm text-[#2D2D4A]/70 mb-6">{plan.setupNote2}</p>
                )}

                {/* CTA Button */}
                <Button
                  className={`w-full mb-6 py-6 font-medium ${
                    plan.ctaStyle === 'pink'
                      ? 'bg-[#FF0066] hover:bg-[#E6005C] text-white'
                      : 'bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white'
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Secondary CTA for Essencial */}
                {plan.name === 'Essencial' && (
                  <Button
                    variant="outline"
                    className="w-full mb-6 border-[#2D2D4A] text-[#2D2D4A] hover:bg-[#2D2D4A] hover:text-white"
                  >
                    Fale com um consultor
                  </Button>
                )}

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-[#2D2D4A] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-gray-300" />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-[#2D2D4A]' : 'text-[#2D2D4A]/40'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
