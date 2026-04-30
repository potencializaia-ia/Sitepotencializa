import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/SectionBadge";
import { ArrowRight, Cpu, Sparkles, Zap } from "lucide-react";
import logotracado from "@/images/logotracado.png";

type ServiceHeroProps = {
  badgeText: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  activeService: number;
};

export function ServiceHero({
  badgeText,
  title,
  subtitle,
  ctaText,
  ctaHref = "/#contato",
  activeService = 0,
}: ServiceHeroProps) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const nodes = [
    { id: 0, icon: <Cpu className="w-5 h-5" />, label: "Consultoria", pos: "top-[-10%] left-1/2 -translate-x-1/2" },
    { id: 1, icon: <Zap className="w-5 h-5" />, label: "Automação", pos: "bottom-[10%] right-[-5%]" },
    { id: 2, icon: <Sparkles className="w-5 h-5" />, label: "Hiperautomação", pos: "bottom-[10%] left-[-5%]" },
  ];

  return (
    <section className="relative h-[800px] bg-[#050505] bg-hero-gradient flex items-center overflow-hidden pt-12">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff851b]/10 blur-[140px] rounded-full opacity-25" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7fdbff]/5 blur-[120px] rounded-full opacity-15" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start"> {/* Mudado para items-start para travar o topo */}
          
          {/* LADO ESQUERDO: TEXTO COM ANCORAGEM FIXA */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="show" 

            className="lg:h-[500px] flex flex-col items-center lg:items-start text-center lg:text-left pt-12"
          >
            {/* Box do Título e Subtítulo com altura mínima para "segurar" o espaço */}
            <div className="min-h-[320px] flex flex-col items-center lg:items-start space-y-6">
              <motion.div variants={itemVariants}>
                <SectionBadge text={badgeText} className="bg-white/10 border-white/60 text-[#ff851b]" />
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.1]"
              >
                {title}<span className="text-[#ff851b]">.</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg text-white/40 max-w-sm leading-relaxed font-medium"
              >
                {subtitle}
              </motion.p>
            </div>

            {/* O botão agora fica sempre na mesma distância do topo porque o box acima tem min-h fixo */}
            <motion.div variants={itemVariants} className="pt-6">
              <Button size="lg" className="h-16 px-10 rounded-2xl bg-[#ff851b] hover:bg-[#e07316] text-white font-black shadow-2xl shadow-orange-500/20 transition-all hover:scale-105 group">
                {ctaText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* LADO DIREITO: ILUSTRAÇÃO (TRAVADA NO MESMO PONTO DO TEXTO) */}
          <div className="relative flex justify-center items-center h-[400px] lg:h-[500px] pt-12">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              
              {/* Linhas Brancas Fortes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[2px] border-white/40 rounded-[60px]" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 border-[1.5px] border-white/30 rounded-[50px]" 
              />
              
              {/* Core Central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="w-24 h-24 bg-[#ff851b]/30 blur-2xl absolute"
                />
                <img
                  src={logotracado}
                  alt="Potencializa"
                  className="w-30 h-30 object-contain z-10"
                />
              </div>

              {/* Nodos */}
              {nodes.map((node, i) => {
                const isActive = activeService === node.id;
                return (
                  <motion.div
                    key={node.id}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${node.pos} p-4 rounded-2xl border-[2px] transition-all duration-700 backdrop-blur-xl flex flex-col items-center gap-2
                      ${isActive 
                        ? "bg-[#ff851b]/20 border-[#ff851b] text-[#ff851b] shadow-[0_0_50px_rgba(255,133,27,0.3)] scale-110 z-20" 
                        : "bg-white/5 border-white/60 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] scale-95 z-10 opacity-80"
                      }`}
                  >
                    {node.icon}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}