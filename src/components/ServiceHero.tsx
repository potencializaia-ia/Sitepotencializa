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
  messageUser?: string;
  messageBot?: string;
};

export function ServiceHero({
  badgeText = "atendimento inteligente",
  title,
  subtitle,
  ctaText,
  ctaHref = "/#contato",
  imageSrc,
  imageAlt = "Imagem do serviço",
  messageUser,
  messageBot,
}: ServiceHeroProps) {
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

  const userMsg = messageUser ?? "Quero automatizar meu atendimento no WhatsApp.";
  const botMsg =
    messageBot ?? "Entendi! Vamos automatizar seu atendimento no WhatsApp com IA.";

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fundo / Gradiente */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* blobs suaves */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#fc7500]/25 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-y-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20 sm:pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left space-y-8"
          >
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
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
              <a href={ctaHref} className="inline-flex">
                <Button
                  size="lg"
                  className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>

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
              {["Setup rápido", "Sem compromisso", "Cancela quando quiser"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#fc7500]" />
                  <span>{t}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }}
            className="relative"
          >
            {/* GLASS WRAPPER (deixa os floaters vazarem) */}
            <div className="relative bg-white/35 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 overflow-visible">
              {/* INNER CLIP (segura cantos do conteúdo do chat) */}
              <div className="relative rounded-3xl overflow-hidden">
                {/* CHAT CARD */}
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
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

                  {/* ÁREA DAS MENSAGENS COM WALLPAPER */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    {/* wallpaper */}
                    <div className="absolute inset-0">
                      <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-cover opacity-25 blur-sm"
                      />
                      {/* overlay pra leitura */}
                      <div className="absolute inset-0 bg-white/25" />
                    </div>

                    {/* mensagens */}
                    <div className="relative p-6 pt-8 pb-20 space-y-4 h-full overflow-y-auto">
                      {/* Bot */}
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                          <MessageCircle className="w-4 h-4 text-sky-600" />
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[82%]">
                          Olá! 👋 Como posso ajudar você hoje?
                        </div>
                      </div>

                      {/* Usuário */}
                      <div className="flex items-start gap-2 justify-end">
                        <div className="bg-[#2D2D4A] p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-white max-w-[82%]">
                          {userMsg}
                        </div>
                      </div>

                      {/* Bot */}
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                          <MessageCircle className="w-4 h-4 text-sky-600" />
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[82%]">
                          {botMsg}
                        </div>
                      </div>

                      {/* digitando */}
                      <div className="flex items-center justify-center gap-1 pt-1">
                        <span className="w-2 h-2 bg-[#fc7500] rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-[#fc7500] rounded-full animate-bounce [animation-delay:0.1s]" />
                        <span className="w-2 h-2 bg-[#fc7500] rounded-full animate-bounce [animation-delay:0.2s]" />
                      </div>

                      {/* espaço extra pra não “colar” no input */}
                      <div className="h-2" />
                    </div>
                  </div>

                  {/* input */}
                  <div className="p-4 border-t border-slate-100 bg-white">
                    <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                      <div className="text-sm text-slate-500 flex-1">Digite sua mensagem…</div>
                      <div className="w-8 h-8 bg-[#fc7500] rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tempo de resposta (FLOATER) — fora do card, dentro do wrapper */}
              <div className="absolute -left-4 bottom-32 z-20">
                <div className="bg-white rounded-xl p-4 shadow-xl border border-slate-100 w-[210px]">
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

              {/* Conversões (FLOATER) — fora do card, dentro do wrapper */}
              <div className="absolute -right-3 top-16 z-20 bg-white rounded-xl p-4 shadow-xl border border-slate-100">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}