import { ArrowRight } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { whatsappLink } from '@/lib/contact';

export function FinalCTA() {
  return (
    <section id="contato" className="relative py-32 bg-[#0a0a0a] bg-hero-gradient overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-grid-dark mask-fade-y pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#ff851b]/10 blur-3xl rounded-full opacity-60" />
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-[#7fdbff]/10 blur-3xl rounded-full opacity-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionBadge text="Vamos começar?" className="mb-10 bg-white/5 border-white/10 text-white/70" />

          <AnimatedSection>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-8">
              Sua empresa merece um site <span className="whitespace-nowrap">à <span className="text-gradient-brand">altura dela.</span></span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Conte o que você precisa e receba uma proposta personalizada. A primeira conversa é rápida, sem compromisso e direto pelo WhatsApp.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 h-16 px-8 sm:px-10 rounded-2xl bg-[#ff851b] hover:bg-[#e07316] text-white text-lg font-bold shadow-[0_20px_50px_rgba(255,133,27,0.3)] transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <SiWhatsapp className="w-5 h-5" />
                Solicitar orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center h-16 px-8 sm:px-10 rounded-2xl border border-white/15 bg-white/5 text-white text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Ver portfólio
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
