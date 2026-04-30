import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Check, X, Zap, Crown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const plans = [
  {
    name: 'Consultoria',
    icon: Zap,
    subtitle: 'Configure você mesmo!',
    price: '390',
    priceMonthly: '490',
    setup: '990',
    setupOptional: true,
    setupNote: 'E nós configuramos para você!',
    cta: 'Começar agora',
    highlighted: false,
    features: [
      { text: '1 agente incluso', included: true },
      { text: 'Respostas instantâneas em qualquer canal', included: true },
      { text: 'Agendamentos automáticos', included: true },
      { text: 'Personalização do tom de voz', included: true },
      { text: 'Resolução de dúvidas frequentes', included: true },
      { text: 'Disponibilidade contínua 24/7', included: true },
      { text: 'Enviar ficheiros e lembretes', included: false },
      { text: 'Alimentar base de dados externa', included: false },
      { text: 'Desenvolvimento customizado', included: false },
    ],
  },
  {
    name: 'Automação Simples',
    icon: Rocket,
    subtitle: 'Nós configuramos para si.',
    price: '690',
    priceMonthly: '870',
    setup: '2.000',
    setupOptional: false,
    setupNote: 'Taxa de configuração inicial',
    cta: 'Falar com um Consultor',
    highlighted: true,
    features: [
      { text: '1 agente incluso', included: true },
      { text: 'Respostas instantâneas em qualquer canal', included: true },
      { text: 'Agendamentos automáticos', included: true },
      { text: 'Personalização do tom de voz', included: true },
      { text: 'Enviar ficheiros para clientes', included: true },
      { text: 'Enviar links de pagamentos', included: true },
      { text: 'Enviar lembretes automáticos', included: true },
      { text: 'Alimentar banco de dados', included: true },
      { text: 'Desenvolvimento customizado', included: false },
    ],
  },
  {
    name: 'Hiperautomação',
    icon: Crown,
    subtitle: 'A solução perfeita para escala.',
    price: 'Sob consulta',
    priceMonthly: 'Sob consulta',
    setup: '',
    setupOptional: false,
    setupNote: 'Diagnóstico personalizado',
    setupNote2: 'Agendaremos uma reunião inicial',
    cta: 'Fale com um Consultor',
    highlighted: false,
    features: [
      { text: 'Múltiplos agentes inteligentes', included: true },
      { text: 'Respostas instantâneas omnichannel', included: true },
      { text: 'Agendamentos automáticos', included: true },
      { text: 'Personalização profunda da marca', included: true },
      { text: 'Alimentar banco de dados', included: true },
      { text: 'Diagnóstico exclusivo de negócio', included: true },
      { text: 'Desenvolvimento costumizado', included: true },
      { text: 'Integração com sistemas legados', included: true },
      { text: 'Lançamento e acompanhamento', included: true },
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="planos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="Investimento" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2D2D4A] mb-6 tracking-tight">
              Planos para cada <span className="text-[#ff851b]">objetivo.</span>
            </h2>
          </AnimatedSection>
          
          {/* Billing Toggle Customizado */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-center justify-center gap-6 mt-10">
              <span className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-[#2D2D4A]' : 'text-gray-300'}`}>Mensal</span>
              <div className="flex items-center gap-3 bg-[#F5F5F7] p-1.5 rounded-full border border-gray-200">
                <Switch
                  checked={isAnnual}
                  onCheckedChange={setIsAnnual}
                  className="data-[state=checked]:bg-[#ff851b] data-[state=unchecked]:bg-gray-400"
                />
              </div>
              <span className={`text-sm font-bold transition-colors ${isAnnual ? 'text-[#2D2D4A]' : 'text-gray-300'}`}>
                Anual 
                <span className="ml-2 inline-block px-2 py-0.5 bg-[#71d7ff]/30 text-[#2D2D4A] text-[10px] rounded-md font-black uppercase">
                  -20% OFF
                </span>
              </span>
            </div>
          </AnimatedSection>
        </div>

        {/* Pricing Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                className={`relative flex flex-col h-full bg-white rounded-[40px] p-8 md:p-10 border transition-all duration-500 ${
                  plan.highlighted 
                    ? 'border-[#ff851b] shadow-[0_30px_60px_rgba(255,133,27,0.1)]' 
                    : 'border-gray-100 shadow-sm hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff851b] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Mais Escolhido
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.highlighted ? 'bg-[#ff851b] text-white' : 'bg-gray-100 text-[#2D2D4A]'}`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D4A] mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 font-medium">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  {plan.price === 'Sob consulta' ? (
                    <div className="h-[60px] flex items-center">
                       <span className="text-3xl font-black text-[#2D2D4A]">{plan.price}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-[#2D2D4A]">
                          R$ {isAnnual ? plan.price : plan.priceMonthly}
                        </span>
                        <span className="text-gray-400 font-medium">/mês</span>
                      </div>
                      {plan.setup && (
                        <p className="text-[11px] text-[#ff851b] font-bold mt-2 uppercase tracking-wider">
                          + R$ {plan.setup} Setup {plan.setupOptional ? '(Opcional)' : '(Inicial)'}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Button
                  className={`w-full py-7 rounded-2xl font-bold text-base mb-10 transition-all ${
                    plan.highlighted 
                      ? 'bg-[#ff851b] hover:bg-[#e07316] text-white shadow-lg shadow-orange-500/20' 
                      : 'bg-[#2D2D4A] hover:bg-[#1a1a2e] text-white'
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-[#71d7ff]/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#2D2D4A]" />
                        </div>
                      ) : (
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-gray-300" />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-[#2D2D4A] font-medium' : 'text-gray-300 line-through'}`}>
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