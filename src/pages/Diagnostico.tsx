import { Header } from "@/components/Header";
import { DiagnosticForm } from "@/components/DiagnosticForm";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Sparkles, ShieldCheck, Clock, TrendingUp } from "lucide-react";

export function Diagnostico() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] bg-hero-gradient">
      <Header />
      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff851b]/15 blur-[120px] rounded-full opacity-50" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7fdbff]/10 blur-[100px] rounded-full opacity-30" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge transparente (estilo Hero) */}
            <AnimatedSection>
              <div className="flex justify-center mb-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/90 text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-[#ff851b]" />
                  Análise Gratuita
                </div>
              </div>
            </AnimatedSection>

            {/* Prova social */}
            <AnimatedSection delay={0.05}>
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                  <p className="text-sm text-white/70">
                    <span className="font-bold text-white">210+ empresas</span> já descobriram suas automações
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Diagnóstico de <span className="text-[#ff851b]">Automação IA</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-white/70">
                Descubra em minutos quais processos da sua empresa podem ser automatizados com IA e quanto você pode economizar ao escalar sem contratar novos colaboradores.
              </p>
            </AnimatedSection>

            {/* Indicadores de confiança */}
            <AnimatedSection delay={0.15}>
              <div className="flex items-center justify-center gap-x-4 sm:gap-x-8 mt-8 text-xs sm:text-sm text-white/50">
                <span className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 text-[#7fdbff] shrink-0" />
                  Seus dados são protegidos
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <Clock className="w-4 h-4 text-[#7fdbff] shrink-0" />
                  Resultado em menos de 1 minuto
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <TrendingUp className="w-4 h-4 text-[#7fdbff] shrink-0" />
                  ROI estimado em R$
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <DiagnosticForm />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

export default Diagnostico;
