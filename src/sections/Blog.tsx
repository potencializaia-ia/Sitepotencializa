import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const blogPosts = [
  {
    category: 'Inteligência Artificial',
    title: 'A era dos agentes: por que sua próxima contratação será uma IA.',
    description: 'Entenda como os agentes agentic estão substituindo automações simples por execução autônoma.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    date: '24 Abr, 2026',
    readTime: '5 min',
    link: '#',
  },
  {
    category: 'Vendas & Marketing',
    title: 'Escalando o atendimento no WhatsApp sem perder a humanidade.',
    description: 'Como treinar IAs para manter o tom de voz da sua marca e converter 3x mais leads.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    date: '20 Abr, 2026',
    readTime: '4 min',
    link: '#',
  },
  {
    category: 'Automação',
    title: 'RAG e LLMs: a combinação que mudou o suporte técnico.',
    description: 'Como usar sua própria base de conhecimento para criar assistentes ultra-precisos.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
    date: '15 Abr, 2026',
    readTime: '6 min',
    link: '#',
  },
];

export function Blog() {
  // Variantes para garantir que o grid e os itens apareçam
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section id="blog" className="py-24 bg-[#F9F9FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Assimétrico */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionBadge text="Insights & Inteligência" className="mb-6" />
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2D2D4A] leading-tight">
                Conteúdos para quem busca<br />
                liderar a <span className="text-[#ff851b]">nova economia.</span>
              </h2>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.1}>
            <Button
              variant="outline"
              className="border-gray-200 text-[#2D2D4A] hover:bg-white hover:border-[#ff851b] hover:text-[#ff851b] rounded-2xl px-8 h-14 transition-all group"
            >
              Explorar todos os artigos
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </AnimatedSection>
        </div>

        {/* Grid de Blog - Usando motion.div diretamente para evitar bugs de Stagger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.title} variants={cardVariants}>
              <a
                href={post.link}
                className="group block h-full bg-white rounded-[32px] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D4A]/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-[#2D2D4A] shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#2D2D4A] leading-snug mb-4 group-hover:text-[#ff851b] transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#2D2D4A]/60 text-sm leading-relaxed mb-8 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#2D2D4A] group-hover:text-[#ff851b] transition-colors">
                      Ler artigo completo
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#ff851b] transition-all duration-500">
                      <ArrowRight className="w-4 h-4 text-[#2D2D4A] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}