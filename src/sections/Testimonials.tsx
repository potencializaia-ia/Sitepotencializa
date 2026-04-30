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
    <section id="cases" className="py-20 bg-section-gradient relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg
          className="w-full h-full opacity-80" // Antes era 0.4
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradiente para a linha Cyan - Focamos em opacidade total */}
            <linearGradient id="highPerfCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7fdbff" stopOpacity="0" />
              <stop offset="20%" stopColor="#7fdbff" stopOpacity="1" /> // Curva de nitidez mais rápida
              <stop offset="80%" stopColor="#7fdbff" stopOpacity="1" /> // Segura a nitidez
              <stop offset="100%" stopColor="#7fdbff" stopOpacity="0" />
            </linearGradient>

            {/* Gradiente para a linha Laranja - AJUSTE 2: Aumentamos a opacidade total (de 0.8 para 1.0) */}
            <linearGradient id="highPerfOrange" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff851b" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff851b" stopOpacity="1.0" /> // Antes era 0.8
              <stop offset="100%" stopColor="#ff851b" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Linha Neural 1 (Cyan) */}
          <motion.path
            d="M-100 200 C 200 400, 500 0, 800 300 S 1200 600, 1600 400"
            stroke="url(#highPerfCyan)"
            // AJUSTE 3: Aumentamos a espessura da linha (de 1.5 para 3.0)
            strokeWidth="3.0"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 1, 0],
              //strokeDashoffset: [0, -100] // Removido para simplificar e focar na velocidade pura
            }}
            transition={{
              // AJUSTE 4: Diminuímos a duração (de 12s para 5s) - MUITO MAIS RÁPIDO
              duration: 5, // Antes era 12
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Linha Neural 2 (Laranja) */}
          <motion.path
            d="M1600 800 C 1200 600, 900 900, 600 600 S 200 300, -200 500"
            stroke="url(#highPerfOrange)"
            // AJUSTE 3: Aumentamos a espessura da linha (de 1.5 para 3.0)
            strokeWidth="3.0"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 1, 0], // Intensidade máxima
            }}
            transition={{
              // AJUSTE 4: Diminuímos a duração (de 15s para 6s) - MUITO MAIS RÁPIDO
              duration: 6, // Antes era 15
              repeat: Infinity,
              ease: "linear",
              delay: 1 // Delay reduzido
            }}
          />

          {/* Pontos de conexão (Nodos) - Ajustados para acompanhar a intensidade */}
          <motion.circle
            cx="800" cy="300" r="3" fill="#7fdbff" // Raio maior
            animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }} // Mais rápido
          />
          <motion.circle
            cx="600" cy="600" r="3" fill="#ff851b" // Raio maior
            animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} // Mais rápido
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
