import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, KeyRound, Mail, Sparkles } from "lucide-react";

export function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/redefinir-senha`,
      });

      if (error) {
        setErrorMessage("Falha na solicitação. Verifique o e-mail informado.");
        return;
      }

      setSuccessMessage(
        "Protocolo enviado. Verifique sua caixa de entrada para redefinir sua credencial."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] bg-hero-gradient relative overflow-hidden flex flex-col">
      
      {/* Camada de Glows Potencializa */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff851b]/10 blur-[120px] rounded-full opacity-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7fdbff]/5 blur-[100px] rounded-full opacity-15" />
      </div>

      <Header />

      <div className="flex-1 flex items-center justify-center px-4 pt-28 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[440px]"
        >
          {/* Card Glassmorphism Deep Dark */}
          <div className="bg-[#0d0d0d]/40 backdrop-blur-3xl rounded-[40px] border border-white/10 p-8 lg:p-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
            
            {/* Badge de Contexto */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    <KeyRound className="w-3 h-3 text-[#ff851b]" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Recuperação de Acesso</span>
                </div>
            </div>

            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-white tracking-tighter mb-3">
                Reset de Credencial<span className="text-[#ff851b]">.</span>
              </h1>
              <p className="text-sm text-white/40 font-medium leading-relaxed">
                Insira seu e-mail institucional para receber um link de redefinição seguro.
              </p>
            </div>

            {/* FEEDBACK DE ERRO */}
            {errorMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-center"
              >
                <p className="text-[11px] text-red-500 font-bold uppercase tracking-widest">{errorMessage}</p>
              </motion.div>
            )}

            {/* SUCESSO: VISÃO DO PROTOCOLO ENVIADO */}
            {successMessage ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="rounded-[32px] bg-[#7fdbff]/5 border border-[#7fdbff]/20 p-6 text-center">
                  <div className="w-12 h-12 bg-[#7fdbff]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-[#7fdbff]" />
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed font-medium">
                    {successMessage}
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => { setSuccessMessage(""); setEmail(""); }}
                    className="w-full h-14 bg-white text-black hover:bg-gray-200 font-bold text-base rounded-2xl transition-all"
                  >
                    Tentar outro e-mail
                  </Button>

                  <Link to="/login" className="flex items-center justify-center gap-2 text-sm text-white/30 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Voltar ao login
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-6">
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#ff851b] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail cadastrado"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:border-[#ff851b]/50 transition-all shadow-inner"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-[#ff851b] hover:bg-[#e07316] text-white font-black text-lg rounded-2xl shadow-xl shadow-orange-500/10 active:scale-[0.98] transition-all"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sincronizando...
                    </span>
                  ) : 'Enviar Link Seguro'}
                </Button>

                <div className="text-center pt-4">
                    <Link to="/login" className="text-sm text-white/20 hover:text-[#ff851b] transition-colors font-bold flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Lembrei minha senha
                    </Link>
                </div>
              </form>
            )}
          </div>

          {/* Rodapé técnico sutil */}
          <p className="text-center text-[10px] font-black text-white/10 uppercase tracking-[0.3em] mt-8">
            Secure Authentication Protocol v3.0
          </p>
        </motion.div>
      </div>
    </div>
  );
}