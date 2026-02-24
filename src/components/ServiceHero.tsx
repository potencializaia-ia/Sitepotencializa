import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/SectionBadge";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  MessageCircle,
  TrendingUp,
  Clock,
} from "lucide-react";

type ServiceHeroProps = {
  badgeText?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt?: string;
};

export function ServiceHero({ badgeText, title, subtitle, ctaText, ctaHref, imageSrc, imageAlt }: ServiceHeroProps) {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Fundo / Gradiente */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* blobs suaves */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#fc7500]/25 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-y-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <SectionBadge text={badgeText} />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-tight text-[#2D2D4A]"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-[#2D2D4A]/75 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* CTA principal usa ctaHref */}
              <a href={ctaHref} className="inline-flex">
                <Button
                  size="lg"
                  className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>

              {/* Botão secundário (opcional) */}
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Ver demonstração
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-[#2D2D4A]/70"
            >
              {["Setup rápido", "Sem compromisso", "Cancela quando quiser"].map(
                (t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#fc7500]" />
                    <span>{t}</span>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }}
            className="relative"
          >
            <div className="relative bg-white/35 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* header mock */}
                <div className="bg-gradient-to-r from-[#001f3f] to-sky-500 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Assistente Virtual</h3>
                    <p className="text-white/80 text-xs">Online agora</p>
                  </div>
                </div>

                {/* imagem do serviço (usa imageSrc) */}
                <div className="relative h-56 sm:h-64 bg-slate-50">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* input */}
                <div className="p-4 border-t border-slate-100 bg-white">
                  <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                    <div className="text-sm text-slate-500 flex-1">
                      Digite sua mensagem…
                    </div>
                    <div className="w-8 h-8 bg-[#fc7500] rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* cards flutuantes */}
              <div className="absolute -right-3 top-20 bg-white rounded-xl p-4 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Conversões</p>
                    <p className="text-lg font-bold text-slate-900">+147%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 bottom-20 bg-white rounded-xl p-4 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Tempo de resposta</p>
                    <p className="text-lg font-bold text-slate-900">&lt; 1s</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}