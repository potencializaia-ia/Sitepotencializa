import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Header } from "@/components/Header";


export function SaaS() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001f3f] to-[#2D2D4A] text-white">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* COLUNA ESQUERDA: VISÃO GERAL + STATUS */}
          <div>
            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl font-bold tracking-tighter mb-4">
                Potencialize sua empresa com nosso SaaS de IA.
              </h1>
              <p className="text-lg text-white/80 mb-6">
                Plataforma tudo-em-um para automação inteligente, integração nativa e insights acionáveis. Transforme dados em decisões e potencialize resultados.
              </p>
              <Button variant="outline" size="lg" className="border-white/20 text-white/90 hover:bg-white/5">
                Saiba mais
              </Button>
            </AnimatedSection>
          </div>

          {/* COLUNA DIREITA: IMAGEM ILUSTRATIVA */}
          <div>
            <AnimatedSection delay={0.2}>
              <img
                src="/assets/saas-dashboard.png"
                alt="Dashboard do SaaS de IA"
                className="w-full rounded-lg shadow-lg border border-white/10"
              />
            </AnimatedSection>
          </div>
        </div>
    
        {/* SEÇÃO DE STATUS E INFORMAÇÕES ADICIONAIS */}
        <div className="mt-20 grid md:grid-cols-3 gap-12">
          <AnimatedSection delay={0.3}>
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/80">Status: Operacional</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h3 className="text-xl font-semibold mb-2">Recursos Principais</h3>
            <ul className="list-disc list-inside text-white/80">
              <li>Automação de Processos com IA</li>
              <li>Integração Nativa com Plataformas Populares</li>
              <li>Dashboard de Insights em Tempo Real</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <h3 className="text-xl font-semibold mb-2">Suporte e Contato</h3>
            <p className="text-white/80 mb-2">Precisa de ajuda? Nossa equipe de suporte está disponível 24/7.</p>
            <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/5">
              Contate o Suporte
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

export default SaaS;