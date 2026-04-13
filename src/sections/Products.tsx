import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const consultoria = {
  title: 'Consultoria em IA',
  slug: 'consultoria-ia',
  description: 'Diagnóstico completo do seu negócio para identificar onde a IA gera mais impacto. Mapeamos processos, definimos prioridades e entregamos um plano de implementação personalizado — do zero à escala.',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
};

const products = [
  {
    title: 'Atendimento Inteligente 24/7',
    slug: 'atendimento-inteligente',
    description: 'IA treinada para atender, resolver dúvidas, registrar informações e escalar seu suporte sem perder qualidade.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
    
  },
  {
    title: 'Vendas & Pré-Vendas com IA',
    slug: 'assistente-pre-vendas',
    description: 'Funil conversacional que qualifica leads, agenda contatos e entrega oportunidades prontas para seu time.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=face',
    
  },
  {
    title: 'Integração & Operação Digital',
    slug: 'copiloto-de-vendas',
    description: 'Conectamos sua IA aos seus sistemas para centralizar dados, automatizar processos e gerar controle.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop&crop=face',
    
  },
  {
    title: 'IA Sob Medida',
    slug: 'suporte-turbo',
    description: 'Desenvolvemos soluções personalizadas para necessidades específicas do seu negócio.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face',
    
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="nossos produtos" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D4A] mb-4">
              Do atendimento
              <br />
              ao suporte técnico<span className="text-[#ff851b]">.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/70">
              Nossa IA trabalha e você só acompanha.
            </p>
          </AnimatedSection>
        </div>

        {/* Consultoria — featured */}
        <AnimatedSection className="mb-6">
          <motion.div
            whileHover={{ scale: 1.01, y: -4 }}
            transition={{ duration: 0.3 }}
            className="group bg-[#2D2D4A] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative md:w-2/5 h-56 md:h-64 overflow-hidden flex-shrink-0">
                <img
                  src={consultoria.image}
                  alt={consultoria.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2D2D4A]/60 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D4A]/60 to-transparent md:hidden" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#ff851b] mb-3">
                  Serviço principal
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {consultoria.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed text-base">
                  {consultoria.description}
                </p>
                <Link
                  to={`/servicos/${consultoria.slug}`}
                  className="inline-flex items-center gap-2 text-[#ff851b] font-medium hover:gap-3 transition-all"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <StaggerItem key={product.title}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2D2D4A] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-[#2D2D4A]/70 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    to={`/servicos/${product.slug}`}
                    className="inline-flex items-center gap-2 text-[#ff851b] font-medium hover:gap-3 transition-all"
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
