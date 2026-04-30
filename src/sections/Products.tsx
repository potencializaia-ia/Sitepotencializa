import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Zap, Target } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const consultoria = {
  title: 'Imersão Potencializa',
  slug: 'consultoria-ia',
  description: 'O primeiro passo para a eficiência. Mapeamos os processos que travam o seu crescimento e treinamos sua equipe para dominar as ferramentas que multiplicam a entrega. Transformamos o tempo gasto em tarefas repetitivas em foco no que realmente traz faturamento.',
  image: '/src/images/imersao.png',
};

const products = [
  {
    title: 'Automação Comercial',
    icon: Zap,
    description: 'Sua empresa ativa 24/7 com assistentes que qualificam leads, agendam reuniões e atendem com precisão humana. Tudo integrado ao seu CRM e com dashboards de performance para você ter controle total sobre cada venda e o crescimento da sua operação.',
    topics: ['Agentes de Vendas', 'Qualificação Automática', 'Integração CRM', 'Dashboards de Performance'],
    slug: 'automacao-agentic',
  },
  {
    title: 'Hiperautomação Personalizada',
    icon: Target,
    description: 'Onde a tecnologia se molda ao seu negócio. Criamos sistemas exclusivos para automatizar fluxos complexos e resolver desafios que só a sua operação conhece. A engenharia da eficiência desenhada sob medida para as dificuldades únicas da sua empresa.',
    topics: ['Automação Sob Medida', 'Soluções Híbridas', 'Integração Total', 'Escalabilidade Garantida'],
    slug: 'sistemas-inteligencia',
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      {/* Detalhe sutil de fundo claro */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,133,27,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionBadge text="Soluções Potencializa" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2D2D4A] mb-6">
              Do diagnóstico à <span className="text-[#ff851b]">hiperautomação.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/60 max-w-2xl mx-auto">
              A inteligência por trás de cada movimento. Da consultoria estratégica à implementação prática para uma transformação segura, eficiente e escalável.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid de Conteúdo */}
        <StaggerContainer className="flex flex-col gap-8">
          
          {/* CONSULTORIA - CARD DE DESTAQUE (FULL WIDTH) */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative bg-[#F9F9FB] rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
            >
              {/* Borda laranja sutil no hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ff851b]/20 rounded-[32px] transition-colors duration-500 z-20 pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-1/2 h-72 lg:h-auto overflow-hidden">
                  <img
                    src={consultoria.image}
                    alt={consultoria.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-transparent hidden lg:block" />
                </div>

                <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#ff851b] mb-4 text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" />
                    Destaque
                  </div>
                  <h3 className="text-3xl font-bold text-[#2D2D4A] mb-4">
                    {consultoria.title}
                  </h3>
                  <p className="text-[#2D2D4A]/70 mb-8 leading-relaxed text-lg">
                    {consultoria.description}
                  </p>
                  <Link
                    to={`/servicos/${consultoria.slug}`}
                    className="inline-flex items-center gap-3 text-white font-bold bg-[#ff851b] px-8 py-4 rounded-2xl w-fit hover:bg-[#e07316] transition-all shadow-lg shadow-orange-500/20 group/btn"
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* PRODUTOS - GRID 2 COLUNAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group"
                >
                  {/* Ícone com fundo de destaque */}
                  <div className="w-14 h-14 bg-[#ff851b]/5 rounded-2xl flex items-center justify-center mb-6 border border-[#ff851b]/10 group-hover:bg-[#ff851b] transition-all duration-500">
                    <product.icon className="w-7 h-7 text-[#ff851b] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2D2D4A] mb-4 group-hover:text-[#ff851b] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[#2D2D4A]/60 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {product.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#2D2D4A]/70">
                        <CheckCircle2 className="w-4 h-4 text-[#71d7ff]" />
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <Link to={`/servicos/${product.slug}`} className="inline-block">
                    <Button className="bg-[#ff851b] hover:bg-[#e07316] text-white font-semibold text-base rounded-xl transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 group/btn">
                      <span className="flex items-center gap-2">
                        Saiba mais
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}