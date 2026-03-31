import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const blogPosts = [
  {
    category: 'Inteligência Artificial',
    title: 'Era dos copilotos: sua próxima colega de trabalho é uma IA.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    link: '#',
  },
  {
    category: 'Vendas & Marketing',
    title: 'Seu atendimento no piloto automático: comece agora.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    link: '#',
  },
  {
    category: 'Vendas & Marketing',
    title: 'Como a IA está transformando o atendimento ao cliente.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
    link: '#',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <SectionBadge text="nosso blog" className="mb-6" />
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D4A]">
                Conteúdos que podem
                <br />
                mudar suas decisões<span className="text-[#ff851b]">.</span>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.1}>
            <Button
              variant="outline"
              className="border-gray-200 text-[#2D2D4A] hover:bg-[#F5F5F7] self-start sm:self-auto"
            >
              Veja todos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>

        {/* Blog Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <StaggerItem key={post.title}>
              <motion.a
                href={post.link}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#F5F5F7] rounded-full text-xs font-medium text-[#2D2D4A]/70 mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#2D2D4A] leading-snug group-hover:text-[#7fdbff] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
