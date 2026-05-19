import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { fetchUserTestimonials, submitTestimonial, type Testimonial } from '@/lib/testimonialService';

const initialTestimonials: Testimonial[] = [
];

interface DisplayCard extends Testimonial {
  isForm?: boolean;
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [formData, setFormData] = useState({ label: '', quote: '', name: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    setIsLoading(true);
    try {
      const userTestimonials = await fetchUserTestimonials();
      setTestimonials([...initialTestimonials, ...userTestimonials]);
      setError(null);
    } catch (err) {
      console.error('Erro ao carregar testimonials:', err);
      setTestimonials(initialTestimonials);
    } finally {
      setIsLoading(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length + 1)) % (testimonials.length + 1));
  };

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.label.trim() || !formData.quote.trim() || !formData.name.trim() || !formData.company.trim()) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await submitTestimonial({
        label: formData.label,
        quote: formData.quote,
        name: formData.name,
        company: formData.company,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=random&color=fff`,
      });

      setFormData({ label: '', quote: '', name: '', company: '' });
      await loadTestimonials();
      setCurrentIndex(1);
    } catch (err) {
      console.error('Erro ao enviar feedback:', err);
      setError('Erro ao enviar seu feedback. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayCards: DisplayCard[] = [
    {
      id: 0,
      isForm: true,
      label: '',
      quote: '',
      name: '',
      company: '',
      avatar: '',
    },
    ...testimonials,
  ];

  const currentCard = displayCards[currentIndex];

  return (
    <section id="cases" className="py-20 bg-section-gradient relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg
          className="w-full h-full opacity-80"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="highPerfCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7fdbff" stopOpacity="0" />
              <stop offset="20%" stopColor="#7fdbff" stopOpacity="1" />
              <stop offset="80%" stopColor="#7fdbff" stopOpacity="1" />
              <stop offset="100%" stopColor="#7fdbff" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="highPerfOrange" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff851b" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff851b" stopOpacity="1.0" />
              <stop offset="100%" stopColor="#ff851b" stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.path
            d="M-100 200 C 200 400, 500 0, 800 300 S 1200 600, 1600 400"
            stroke="url(#highPerfCyan)"
            strokeWidth="3.0"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M1600 800 C 1200 600, 900 900, 600 600 S 200 300, -200 500"
            stroke="url(#highPerfOrange)"
            strokeWidth="3.0"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />

          <motion.circle
            cx="800"
            cy="300"
            r="3"
            fill="#7fdbff"
            animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="600"
            cy="600"
            r="3"
            fill="#ff851b"
            animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-center gap-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <AnimatePresence mode="wait">
              {currentCard?.isForm ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2D4A] mb-2">
                    Compartilhe sua história
                  </h3>
                  <p className="text-[#2D2D4A]/60 mb-8">
                    Deixe seu comentário e feedback sobre como podemos ajudar você
                  </p>

                  <form onSubmit={handleSubmitFeedback} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-[#2D2D4A] mb-2">
                        Título do seu feedback
                      </label>
                      <input
                        type="text"
                        value={formData.label}
                        onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                        placeholder="Ex: Aumento de 50% em conversões"
                        className="w-full px-4 py-3 border border-[#2D2D4A]/20 rounded-lg focus:outline-none focus:border-[--laranja] focus:ring-2 focus:ring-[--laranja]/20 transition-all text-[#2D2D4A]"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D2D4A] mb-2">
                        Seu comentário
                      </label>
                      <textarea
                        value={formData.quote}
                        onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                        placeholder="Conte-nos como a Potencializa ajudou seu negócio..."
                        rows={4}
                        className="w-full px-4 py-3 border border-[#2D2D4A]/20 rounded-lg focus:outline-none focus:border-[--laranja] focus:ring-2 focus:ring-[--laranja]/20 transition-all text-[#2D2D4A] resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D4A] mb-2">
                          Seu nome
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Nome"
                          className="w-full px-4 py-3 border border-[#2D2D4A]/20 rounded-lg focus:outline-none focus:border-[--laranja] focus:ring-2 focus:ring-[--laranja]/20 transition-all text-[#2D2D4A]"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2D2D4A] mb-2">
                          Sua empresa
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Empresa"
                          className="w-full px-4 py-3 border border-[#2D2D4A]/20 rounded-lg focus:outline-none focus:border-[--laranja] focus:ring-2 focus:ring-[--laranja]/20 transition-all text-[#2D2D4A]"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ff851b] hover:bg-[#e07316] text-white py-3 px-4 rounded-lg font-medium transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? 'Enviando...' : 'Enviar seu feedback'}
                    </button>
                  </form>
                </motion.div>
              ) : isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex items-center justify-center min-h-[300px]"
                >
                  <p className="text-[#2D2D4A]">Carregando comentários...</p>
                </motion.div>
              ) : (
                <motion.div
                  key={currentCard?.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                >
                  {currentCard && 'label' in currentCard && (
                    <>
                      <p className="text-sm font-medium text-[--laranja] mb-4">
                        {currentCard.label}
                      </p>

                      <blockquote className="text-xl sm:text-2xl text-[#2D2D4A] font-medium leading-relaxed mb-8">
                        "{currentCard.quote}"
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <img
                          src={currentCard.avatar}
                          alt={currentCard.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-[#2D2D4A]">{currentCard.name}</p>
                          <p className="text-sm text-[#2D2D4A]/60">{currentCard.company}</p>
                          {currentCard.isUserSubmitted && (
                            <p className="text-xs text-[--laranja] font-medium mt-1">✓ Comentário da comunidade</p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

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

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: displayCards.length }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

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
