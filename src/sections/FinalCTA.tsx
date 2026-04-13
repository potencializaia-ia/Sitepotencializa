import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

export function FinalCTA() {
  return (
    <section id="contato" className="py-20 bg-footer-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge text="o poder do simples" className="mb-6 bg-white/10 border-white/20 text-white" />
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Simplificar não é reduzir. É ampliar, abrir portas para mais vendas, mais resultados e mais encantamento.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#2D2D4A] px-8 py-6 text-base font-medium rounded-lg transition-all hover:scale-105"
            >
              Fale com um consultor
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
