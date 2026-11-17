import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check, Sparkles, Smartphone, Search, MessageCircle } from "lucide-react";
import { BrowserFrame } from "@/components/BrowserFrame";
import { whatsappLink } from "@/lib/contact";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const highlights = ["Pronto em até 2 semanas", "1º mês de suporte grátis", "Seguro e otimizado"];

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto lg:mx-0 aspect-[5/4]">
      {/* glow */}
      <div className="absolute inset-[10%] bg-[#ff851b]/25 blur-[90px] rounded-full" />

      {/* janela de trás */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-[4%] w-[72%] opacity-80"
      >
        <BrowserFrame url="modelos.potencializaai.com" className="shadow-2xl">
          <img src="/portfolio/delicias-mamae.jpg" alt="" className="aspect-[16/10] w-full object-cover object-top" />
        </BrowserFrame>
      </motion.div>

      {/* janela principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-[20%] w-[80%]"
      >
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
          <BrowserFrame url="modelos.potencializaai.com" className="shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
            <img
              src="/portfolio/dgustame.jpg"
              alt="Site do D'Gustame Restaurante, criado pela Potencializa"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </BrowserFrame>
        </motion.div>
      </motion.div>

      {/* celular */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[6%] bottom-0 w-[24%]"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <div className="rounded-[22px] border-[5px] border-[#1e293b] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            <img
              src="/portfolio/dgustame-mobile.jpg"
              alt="Versão para celular do site do D'Gustame"
              className="aspect-[9/17] w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* chips flutuantes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute right-[4%] top-[8%] flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
      >
        <span className="w-7 h-7 rounded-lg bg-[#28c840]/15 flex items-center justify-center">
          <Search className="w-3.5 h-3.5 text-[#1a9e35]" />
        </span>
        <div className="leading-tight">
          <p className="text-[10px] text-[#2D2D4A]/50 font-medium">SEO</p>
          <p className="text-xs font-bold text-[#2D2D4A]">Pronto pro Google</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute right-[10%] bottom-[6%] flex items-center gap-2 rounded-xl bg-[#0F172A]/90 border border-white/10 backdrop-blur px-3 py-2 shadow-xl"
      >
        <span className="w-7 h-7 rounded-lg bg-[#25D366]/15 flex items-center justify-center">
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
        </span>
        <div className="leading-tight">
          <p className="text-[10px] text-white/50 font-medium">Novo contato</p>
          <p className="text-xs font-bold text-white">via WhatsApp</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute left-[24%] bottom-[30%] hidden sm:flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-xl"
      >
        <Smartphone className="w-3.5 h-3.5 text-[#ff851b]" />
        <span className="text-[11px] font-bold text-[#2D2D4A]">Mobile first</span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] bg-hero-gradient pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* grade de fundo */}
      <div className="absolute inset-0 bg-grid-dark mask-fade-y pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-[#ff851b]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[600px] h-[500px] bg-[#7fdbff]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-10 items-center">
        <motion.div variants={container} initial="hidden" animate="visible" className="text-center lg:text-left">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/85 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-[#ff851b]" />
              Criação de sites para empresas
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-white text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] xl:text-7xl font-extrabold"
          >
            <span className="block">Seu cliente procura.</span> <span className="block text-gradient-brand">Sua empresa aparece.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 text-white/65 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Criamos sites modernos e feitos sob medida para a sua marca, que passam credibilidade, aparecem no Google e levam
            o visitante direto para uma conversa no seu WhatsApp.
          </motion.p>

          <motion.div variants={item} className="mt-10 hidden sm:flex flex-row gap-3 justify-center lg:justify-start">
            <a
              href={whatsappLink("Olá! Quero criar um site para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-[#ff851b] hover:bg-[#e07316] text-white text-base font-bold shadow-[0_20px_40px_rgba(255,133,27,0.3)] transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Quero meu site
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center h-14 px-8 rounded-2xl border border-white/15 bg-white/5 text-white text-base font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors"
            >
              Ver portfólio
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-white/55"
          >
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#7fdbff]/15 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#7fdbff]" />
                </span>
                {h}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
