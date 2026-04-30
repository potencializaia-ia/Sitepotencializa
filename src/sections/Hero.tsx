import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Instagram,
  Globe,
  Phone,
  ArrowRight,
  Sparkles,
  Cpu,
  Zap,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

// --- VARIANTES DE ANIMAÇÃO ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

// --- COMPONENTE DA ILUSTRAÇÃO (ORQUESTRAÇÃO) ---
function HeroIllustration() {
  const floatingVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full max-w-5xl mt-20 mx-auto group">
      {/* Glow de fundo dramático */}
      <div className="absolute inset-0 bg-[#ff851b]/10 blur-[120px] rounded-full scale-110 -z-10 group-hover:bg-[#ff851b]/20 transition-colors duration-1000" />

      <div className="relative rounded-[40px] border border-white/10 bg-[#0c0c0c]/60 backdrop-blur-3xl p-8 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Linhas de Conexão Decorativas */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 200 300 Q 400 100 800 300"
            stroke="#ff851b"
            strokeWidth="0.5"
            fill="transparent"
          />
          <path
            d="M 100 400 Q 500 600 900 400"
            stroke="#ff851b"
            strokeWidth="0.5"
            fill="transparent"
          />
        </svg>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-left">
          {/* HUB CENTRAL */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff851b] to-[#e07316] flex items-center justify-center shadow-[0_0_40px_rgba(255,133,27,0.4)] relative z-20">
                <Cpu className="w-10 h-10 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-[#ff851b] animate-ping opacity-20" />
            </div>

            <div className="space-y-3">
              <h3 className="text-white text-2xl font-bold tracking-tight">
                Potencializa Agentic Engine
              </h3>
              <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                Orquestração multi-agente processando dados e executando vendas
                em tempo real.
              </p>
            </div>

            {/* Status Live Feed */}
            <div className="w-full space-y-3">
              {[
                { label: "WhatsApp: Lead detectado", color: "text-emerald-400" },
                { label: "RAG: Consultando base", color: "text-[#ff851b]" },
                { label: "CRM: Cadastro atualizado", color: "text-blue-400" },
              ].map((status, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm"
                >
                  <Zap className={`w-3 h-3 ${status.color}`} />
                  <span className="text-[11px] font-medium text-white/80">
                    {status.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* REDE DE CANAIS */}
          <div className="relative grid grid-cols-2 gap-4">
            {[
              { icon: MessageCircle, name: "WhatsApp", stats: "98% conv.", d: 0 },
              { icon: Instagram, name: "Instagram", stats: "< 2s resp.", d: 0.2 },
              { icon: Globe, name: "Web Agent", stats: "Agente 24/7", d: 0.4 },
              { icon: BarChart3, name: "Dashboard", stats: "ROI +40%", d: 0.6 },
            ].map((node, i) => (
              <motion.div
                key={i}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: node.d }}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <node.icon className="w-5 h-5 text-[#ff851b] mb-3" />
                <h4 className="text-white font-bold text-sm mb-1">
                  {node.name}
                </h4>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span className="text-white/40 text-[9px] font-bold uppercase tracking-wider">
                    {node.stats}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL (EXPORT HERO) ---
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] bg-hero-gradient pt-32 pb-20 min-h-screen flex flex-col items-center justify-start">
      {/* Background Glows Centralizados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff851b]/15 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7fdbff]/10 blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/90 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-[#ff851b]" />
              Crescimento previsível com IA
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl"
          >
            Transforme atendimento em uma
            <span className="block text-[#ff851b]">máquina de crescimento.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-white/70 text-lg sm:text-xl max-w-3xl leading-relaxed"
          >
            Mapeamos processos e implementamos agentes de IA que operam 24/7 no
            WhatsApp, site e Instagram com precisão humana e escala infinita.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="h-14 px-10 rounded-2xl bg-[#ff851b] hover:bg-[#e07316] text-white text-base font-bold shadow-[0_20px_40px_rgba(255,133,27,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Falar com um consultor
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Ver como funciona
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Tags de Confiança */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 justify-center text-sm font-medium text-white/40 uppercase tracking-widest"
          >
            <span>Atendimento 24/7</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff851b]/40" />
            <span>Recuperação de leads</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff851b]/40" />
            <span>Integração Omnichannel</span>
          </motion.div>

          {/* Ilustração Customizada Potencializa */}
          <motion.div variants={itemVariants}>
            <HeroIllustration />
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}