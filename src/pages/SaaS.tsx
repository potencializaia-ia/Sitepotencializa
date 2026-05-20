import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, Cloud, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { SectionBadge } from '@/components/SectionBadge';
import { Header } from "@/components/Header";

export function SaaS() {
  return (
    <div className="bg-[#0a0a0a] bg-hero-gradient min-h-screen">
      <Header />

      {/* SEÇÃO HERO - OVERVIEW DO SAAS */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff851b]/15 blur-[120px] rounded-full opacity-50" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7fdbff]/10 blur-[100px] rounded-full opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <SectionBadge text="Plataforma Potencializa" className="mb-6" />
            <AnimatedSection>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Potencialize sua empresa com <span className="text-[#ff851b]">automação inteligente.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
                Plataforma tudo-em-um para automação de processos, integração nativa e insights acionáveis. Transforme dados em decisões estratégicas e potencialize resultados com IA.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Button className="bg-[#ff851b] hover:bg-[#e07316] text-white px-10 py-7 text-lg font-bold rounded-2xl transition-all hover:scale-105 shadow-[0_20px_40px_rgba(255,133,27,0.3)]">
                Começar diagnóstico
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </AnimatedSection>
          </div>

          {/* Features Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Automação de Processos',
                description: 'Automatize tarefas repetitivas com IA e libere sua equipe para focar no crescimento.'
              },
              {
                icon: Cloud,
                title: 'Integração Nativa',
                description: 'Conecte com as ferramentas que já usa: CRM, email, WhatsApp, planilhas e muito mais.'
              },
              {
                icon: BarChart3,
                title: 'Dashboard de Insights',
                description: 'Acompanhe em tempo real o desempenho da automação e tome decisões baseadas em dados.'
              }
            ].map((feature, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[32px] hover:border-[#ff851b]/40 hover:bg-white/[0.07] transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-[#ff851b]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#ff851b]/20 group-hover:bg-[#ff851b] transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-[#ff851b] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff851b] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SEÇÃO STATUS - OPERACIONAL */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#7fdbff]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <SectionBadge text="Status da Plataforma" className="mb-6" />
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Sempre <span className="text-[#71d7ff]">operacional e confiável.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Plataforma rodando 24/7 com 99.9% de uptime, pronta para automatizar seus processos sem interrupções.
              </p>
            </AnimatedSection>
          </div>

          {/* Status Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                label: 'Status',
                value: 'Operacional',
                status: 'online'
              },
              {
                icon: BarChart3,
                label: 'Uptime',
                value: '99.9%',
                status: 'online'
              },
              {
                icon: Zap,
                label: 'Performance',
                value: 'Ótima',
                status: 'online'
              }
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[32px] p-8 text-center group hover:border-[#ff851b]/40 hover:bg-white/[0.07] transition-all duration-500"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-[#ff851b]/10 rounded-2xl flex items-center justify-center border border-[#ff851b]/20 group-hover:bg-[#ff851b] transition-all duration-300">
                      <item.icon className="w-7 h-7 text-[#ff851b] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-sm text-white/50 font-medium mb-2">{item.label}</p>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff851b] transition-colors">
                    {item.value}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-white/60">Online</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SEÇÃO SUPORTE - CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff851b]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <SectionBadge text="Suporte e Contato" className="mb-6" />
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Precisamos de <span className="text-[#ff851b]">você próximo.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Nossa equipe de suporte está disponível 24/7 para ajudar com dúvidas, implementação e otimizações.
              </p>
            </AnimatedSection>
          </div>

          {/* Support Info */}
          <AnimatedSection delay={0.2} className="text-center">
            <div className="inline-flex flex-col items-center">
              <Button
                size="lg"
                className="bg-[#ff851b] hover:bg-[#e07316] text-white px-10 py-7 text-lg font-bold rounded-2xl transition-all hover:scale-105 shadow-[0_20px_40px_rgba(255,133,27,0.3)]"
              >
                Falar com Suporte
              </Button>
              <p className="mt-6 text-sm text-white/60 flex items-center gap-2 font-medium justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Resposta em até 2 horas durante o expediente
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default SaaS;
