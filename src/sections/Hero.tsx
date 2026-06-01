import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Instagram,
  Globe,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  BarChart3,
  Search,
  Target,
  ClipboardList,
  Users,
  FileText,
  Layers,
  BrainCircuit,
  Database,
  Bot,
  Plug,
  Settings,
  Wrench,
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

// --- DADOS DAS CENAS DO CAROUSEL ---
const scenes = [
  {
    id: "comercial",
    label: "Automação Comercial",
    icon: Zap,
    title: "Agente Comercial Potencializa",
    description:
      "Atenda leads, qualifique oportunidades, organize informações no CRM e mantenha follow-ups acontecendo 24 horas por dia.",
    feed: [
      { label: "Lead recebido", color: "text-[#71d7ff]" },
      { label: "Interesse identificado", color: "text-[#ff851b]" },
      { label: "Cliente atendido e satisfeito", color: "text-[#71d7ff]" },
    ],
    cards: [
      { icon: MessageCircle, name: "WhatsApp", stats: "Resposta rápida" },
      { icon: Instagram, name: "Instagram", stats: "Contato no momento certo" },
      { icon: Globe, name: "Status", stats: "Comercial ativo 24h" },
      { icon: BarChart3, name: "Dashboard", stats: "Gestão com clareza" },
    ],
  },
  {
    id: "imersao",
    label: "Imersão Potencializa",
    icon: Search,
    title: "Imersão Potencializa",
    description:
      "Mapeamos processos, identificamos gargalos e treinamos sua equipe para trabalhar com mais clareza, produtividade e autonomia.",
    feed: [
      { label: "Processos mapeados", color: "text-[#71d7ff]" },
      { label: "Oportunidades identificadas", color: "text-[#ff851b]" },
      { label: "Treinamento iniciado da equipe", color: "text-[#71d7ff]" },
    ],
    cards: [
      { icon: ClipboardList, name: "Diagnóstico", stats: "Inicial gratuito" },
      { icon: Users, name: "Treinamento", stats: "Por área da empresa" },
      { icon: FileText, name: "Plano de Ação", stats: "Personalizado" },
      { icon: CheckCircle2, name: "Entrega Final", stats: "Materiais prontos" },
    ],
  },
    {
    id: "hiper",
    label: "Hiperautomação Empresarial",
    icon: Target,
    title: "Hiperautomação Empresarial",
    description:
      "Criamos soluções sob medida para conectar áreas, integrar sistemas, automatizar processos e centralizar dados importantes para a gestão.",
    feed: [
      { label: "Equipe mais produtividade", color: "text-[#71d7ff]" },
      { label: "Sistemas conectados entre si", color: "text-[#ff851b]" },
      { label: "Relatórios personalizados para a gestão", color: "text-[#71d7ff]" },
    ],
    cards: [
      { icon: Layers, name: "Integração", stats: "Entre plataformas" },
      { icon: BrainCircuit, name: "Agentes", stats: "Por setor" },
      { icon: Database, name: "Centralização", stats: "Dados em um só lugar" },
      { icon: BarChart3, name: "Relatórios", stats: "Decisão com clareza" },
    ],
  },
  {
    id: "agente",
    label: "Agente sob Medida",
    icon: Bot,
    title: "Agente personalizado",
    description:
      "Quando soluções prontas não acompanham o que seu negócio precisa, criamos agentes personalizados para apoiar processos específicos da sua empresa.",
    feed: [
      { label: "Escopo ajustado", color: "text-[#71d7ff]" },
      { label: "Regras aplicadas para o agente", color: "text-[#ff851b]" },
      { label: "Sistemas conectados", color: "text-[#71d7ff]" },
    ],
    cards: [
      { icon: Bot, name: "Agente", stats: "Sob medida" },
      { icon: Plug, name: "Integrações", stats: "Com seus sistemas" },
      { icon: Wrench, name: "Configuração", stats: "Regras do negócio" },
      { icon: Settings, name: "Automação", stats: "Com supervisão" },
    ],
  },
];

// --- COMPONENTE DA ILUSTRAÇÃO (CAROUSEL) ---
function HeroIllustration() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % scenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scene = scenes[activeIndex];
  const SceneIcon = scene.icon;

  return (
    <div className="relative w-full max-w-5xl mt-20 mx-auto group">
      <div className="absolute inset-0 bg-[#ff851b]/10 blur-[120px] rounded-full scale-110 -z-10 group-hover:bg-[#ff851b]/20 transition-colors duration-1000" />

      <div className="relative w-full rounded-[40px] border border-white/10 bg-[#0c0c0c]/60 backdrop-blur-3xl p-8 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.6)] overflow-hidden min-h-[520px]">
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 200 300 Q 400 100 800 300" stroke="#ff851b" strokeWidth="0.5" fill="transparent" />
          <path d="M 100 400 Q 500 600 900 400" stroke="#ff851b" strokeWidth="0.5" fill="transparent" />
        </svg>

        {/* Conteúdo animado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-left w-full"
          >
            {/* HUB CENTRAL */}
            <div className="flex flex-col items-center lg:items-start space-y-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff851b] to-[#e07316] flex items-center justify-center shadow-[0_0_40px_rgba(255,133,27,0.4)] relative z-20">
                  <SceneIcon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-[#ff851b] animate-ping opacity-20" />
              </div>

              <div className="space-y-3 w-full max-w-sm">
                <h3 className="text-white text-2xl font-bold tracking-tight min-h-[64px] flex items-end">
                  {scene.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3 min-h-[72px]">
                  {scene.description}
                </p>
              </div>

              <div className="w-full space-y-3">
                {scene.feed.map((status, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm min-h-[44px]"
                  >
                    <Zap className={`w-3 h-3 flex-shrink-0 ${status.color}`} />
                    <span className="text-[11px] font-medium text-white/80">
                      {status.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CARDS DE CANAIS/RECURSOS */}
            <div className="relative grid grid-cols-2 gap-4">
              {scene.cards.map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all h-[90px] flex flex-col justify-between overflow-hidden min-w-0"
                >
                  <node.icon className="w-5 h-5 text-[#ff851b] flex-shrink-0" />
                  <div className="min-w-0 w-full">
                    <h4 className="text-white font-bold text-sm mb-1 truncate">{node.name}</h4>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <CheckCircle2 className="w-3 h-3 text-[#71d7ff] flex-shrink-0" />
                      <span className="text-white/40 text-[9px] font-bold uppercase tracking-wider truncate min-w-0">
                        {node.stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
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
              Bem-vindo a Potencializa
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl"
          >
             <span className="block text-[#ff851b]">Potencialize</span>seus processos, tecnologias e  
            <span className="block text-[#71d7ff]"> resultados.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-white/70 text-lg sm:text-xl max-w-3xl leading-relaxed"
          >
            Mapeamos sua operação, treinamos sua equipe e implementamos soluções inteligentes sob medida para automatizar rotinas, integrar ferramentas e transformar dados em decisões mais claras. Ajudando sua empresa a crescer com previsibilidade. 
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
              Falar com um especialista
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
            <span>Processos automatizados</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#71d7ff]/40" />
            <span>Equipe treinada</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#71d7ff]/40" />
            <span>Soluções personalizadas</span>
          </motion.div>

          {/* Ilustração Customizada Potencializa */}
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <HeroIllustration />
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}