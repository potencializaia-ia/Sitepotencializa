import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const products = [
  {
    title: 'Atendimento Inteligente 24/7',
    slug: 'atendimento-inteligente',
    description: 'Tira dúvidas e resolve problemas a qualquer momento, de forma rápida e automática.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
    
  },
  {
    title: 'Assistente Pré-Vendas',
    slug: 'assistente-pre-vendas',
    description: 'Captura e qualifica leads, entregando para sua equipe apenas quem está pronto para comprar.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=face',
    
  },
  {
    title: 'Copiloto de Vendas',
    slug: 'copiloto-de-vendas',
    description: 'Responde dúvidas, recomenda produtos e recupera carrinhos, fechando mais vendas sem sobrecarregar seu time.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop&crop=face',
    
  },
  {
    title: 'Suporte Turbo',
    slug: 'suporte-turbo',
    description: 'Atende a equipe técnica com respostas rápidas, passo a passo de uso e soluções imediatas para clientes e parceiros.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face',
    
  },
];

export function Products() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="nossos produtos" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D4A] mb-4">
              Do atendimento
              <br />
              ao suporte técnico<span className="text-[#FF0066]">.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/70">
              Nossa IA trabalha e você só acompanha.
            </p>
          </AnimatedSection>
        </div>

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
                    className="inline-flex items-center gap-2 text-[#FF0066] font-medium hover:gap-3 transition-all"
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
