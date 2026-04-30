import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const testimonials = [
  {
    id: 1,
    label: 'Redução de custos com atendimento por IA',
    quote: 'Reduzimos 60% dos custos com atendimento. Antes, eu precisava de secretárias que atendiam apenas no horário comercial. Agora a IA resolve tudo 24/7 e com alta qualidade.',
    name: 'Thais Poças',
    company: 'Clínica de Nutrição',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    label: 'Aumento de conversão em vendas',
    quote: 'Nossa taxa de conversão aumentou 3x desde que implementamos o Assistente Pré-Vendas. A IA qualifica os leads perfeitamente.',
    name: 'Carlos Mendes',
    company: 'E-commerce Moda',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    label: 'Atendimento 24/7 sem pausas',
    quote: 'Nossos clientes adoram ter respostas imediatas a qualquer hora. A Simplifique transformou nosso atendimento completamente.',
    name: 'Ana Paula',
    company: 'Clínica Estética',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="cases" className="py-20 bg-section-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionBadge text="Resultados incríveis" className="mb-6 bg-white/10 border-white/20 text-white" />
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Quem potencializa cresce<span className="text-[--laranja]">.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-white/80">
              Amplie seus resultados também
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonial Card */}
        <AnimatedSection delay={0.2}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                {/* Label */}
                <p className="text-sm font-medium text-[--laranja] mb-4">
                  {currentTestimonial.label}
                </p>

                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl text-[#2D2D4A] font-medium leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#2D2D4A]">{currentTestimonial.name}</p>
                    <p className="text-sm text-[#2D2D4A]/60">{currentTestimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#ff851b] hover:bg-[#e07316] text-white px-8 py-6 text-base font-medium rounded-lg transition-all hover:scale-105"
          >
            Fale com um consultor
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
