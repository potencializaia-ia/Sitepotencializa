import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

export function FinalCTA() {
  return (
    <section id="contato" className="relative py-32 bg-[#0a0a0a] bg-hero-gradient overflow-hidden">
      
      {/* Glows idênticos aos do Hero para consistência total */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#ff851b]/10 blur-3xl rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-[#7fdbff]/10 blur-3xl rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          <SectionBadge text="O Poder do Simples" className="mb-10 bg-white/5 border-white/10 text-white/50" />

          <AnimatedSection>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-5xl mb-10">
              Simplificar não é reduzir. É <span className="text-[#ff851b]">ampliar</span>, abrir portas para mais resultados e encantamento.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center gap-10">
              <Button
                size="lg"
                className="h-16 px-12 rounded-2xl bg-[#ff851b] hover:bg-[#e07316] text-white text-lg font-bold shadow-[0_20px_50px_rgba(255,133,27,0.3)] transition-all hover:scale-105 active:scale-95 group"
              >
                Falar com um consultor
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-3 text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
                <Zap className="w-4 h-4 text-[#ff851b]" />
                Sua empresa no próximo nível com IA
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}