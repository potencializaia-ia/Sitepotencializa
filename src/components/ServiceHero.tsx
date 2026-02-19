import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/SectionBadge";
import { CheckCircle2, CalendarCheck, MessageCircleMore, Sparkles } from "lucide-react";

type ServiceHeroProps = {
  badgeText?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt?: string;
};

export function ServiceHero({
  badgeText = "atendimento inteligente",
  title,
  subtitle,
  ctaText,
  ctaHref = "/#contato",
  imageSrc,
  imageAlt = "Imagem do serviço",
}: ServiceHeroProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    // 1) começa no topo, mesmo nível do header (nada de padding-top aqui)
    <section className="relative overflow-hidden">
      {/* 2) wrapper mais largo + cantos arredondados */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-hero-gradient rounded-[28px] sm:rounded-[36px] overflow-hidden w-full">
          {/* 3) mantém a mesma disposição, só aumenta o tamanho do container */}
          <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 pb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              {/* LEFT */}
              <div className="text-center lg:text-left">
                <motion.div
                  variants={itemVariants}
                  className="flex justify-center lg:justify-start"
                >
                  <SectionBadge text={badgeText} />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D4A] leading-tight"
                >
                  {title}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="mt-5 text-lg text-[#2D2D4A]/80 max-w-xl mx-auto lg:mx-0"
                >
                  {subtitle}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="mt-8 flex justify-center lg:justify-start"
                >
                  <a href={ctaHref}>
                    <Button
                      size="lg"
                      className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white px-8 py-6 text-base font-medium rounded-lg transition-all hover:scale-105"
                    >
                      {ctaText}
                    </Button>
                  </a>
                </motion.div>

                {/* mini features (checks coloridos) */}
                <motion.div
                  variants={itemVariants}
                  className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0"
                >
                  {["Responde em segundos", "Agenda e direciona", "Escala para humano", "Opera 24/7"].map(
                    (t) => (
                      <div
                        key={t}
                        className="flex items-center gap-2 text-sm text-[#2D2D4A]/75 justify-center lg:justify-start"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF0066]/10">
                          <CheckCircle2 className="h-4 w-4 text-[#FF0066]" />
                        </span>
                        {t}
                      </div>
                    )
                  )}
                </motion.div>
              </div>

              {/* RIGHT */}
              <motion.div
                variants={itemVariants}
                className="relative w-full max-w-xl mx-auto"
              >
                {/* círculo rosa atrás (mantém, só ajusta posição levemente) */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 right-8 -translate-y-1/3 w-[360px] h-[360px] bg-[#FF0066] rounded-full -z-10"
                />

                {/* imagem */}
                <div className="relative z-10">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-auto object-cover rounded-2xl shadow-card"
                  />
                </div>

                {/* Floating badges (mesma disposição) */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-2 sm:left-0 top-1/4 z-20"
                >
                  <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="w-8 h-8 bg-[#FF0066]/10 rounded-lg flex items-center justify-center">
                      <MessageCircleMore className="w-4 h-4 text-[#FF0066]" />
                    </div>
                    <span className="text-sm font-medium text-[#2D2D4A]">
                      Respondendo <span className="font-bold">dúvidas</span> em tempo real
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute right-0 top-1/2 z-20"
                >
                  <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="w-8 h-8 bg-[#FF0066]/10 rounded-lg flex items-center justify-center">
                      <CalendarCheck className="w-4 h-4 text-[#FF0066]" />
                    </div>
                    <span className="text-sm font-medium text-[#2D2D4A]">
                      Agendando <span className="font-bold">atendimentos</span> automaticamente
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute left-1/3 -bottom-6 z-20"
                >
                  <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="w-8 h-8 bg-[#FF0066]/10 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#FF0066]" />
                    </div>
                    <span className="text-sm font-medium text-[#2D2D4A]">
                      Padrão de marca <span className="font-bold">consistente</span>
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
