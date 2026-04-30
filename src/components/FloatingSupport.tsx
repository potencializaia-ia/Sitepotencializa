import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function FloatingSupport() {
  return (
    <motion.a
      href="mailto:suporte@potencializa.ai"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#0d0d0d]/40 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 hover:border-[#ff851b]/30 hover:bg-[#0d0d0d]/60 transition-all duration-300 group"
    >
      {/* Ícone sutil que "acende" no hover */}
      <MessageSquare className="w-4 h-4 text-white/20 group-hover:text-[#ff851b] transition-colors" />
      
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white/70 transition-colors">
        Suporte
      </span>

      {/* Ponto de status estático - micro detalhe técnico */}
      <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-[#ff851b] transition-colors" />
    </motion.a>
  );
}