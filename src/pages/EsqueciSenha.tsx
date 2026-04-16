import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";

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
        setErrorMessage("Não foi possível enviar o link de recuperação. Tente novamente.");
        return;
      }

      setSuccessMessage(
        "Enviamos um link de recuperação para o seu e-mail. Verifique sua caixa de entrada e spam."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-footer-gradient relative overflow-hidden flex flex-col">
      
      {/* efeitos de fundo */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,133,27,0.25),transparent_40%)]" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7fdbff]/10 rounded-full blur-3xl" />

      <Header />

      <div className="flex-1 flex items-center justify-center px-4 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-[32px] border border-white/15 bg-white/[0.08] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.25)] p-6 lg:p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)] pointer-events-none" />

          <div className="bg-white/95 rounded-[28px] p-8 border border-white/60 shadow-[0_12px_40px_rgba(15,23,42,0.12)] relative">

            {/* linha premium */}
            <div className="w-14 h-1.5 rounded-full bg-gradient-to-r from-[#7fdbff] to-[#ff851b] mb-6" />

            <h1 className="text-3xl font-bold text-[#1E2235] mb-2">
              Esqueceu sua senha?
            </h1>

            <p className="text-sm text-[#2D2D4A]/60 mb-6 leading-relaxed">
              Informe seu e-mail e enviaremos um link seguro para redefinir sua senha.
            </p>

            {/* ERRO */}
            {errorMessage && (
              <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
            )}

            {/* SUCESSO */}
            {successMessage ? (
              <div className="space-y-4">
                <p className="text-sm text-emerald-600 leading-relaxed">
                  {successMessage}
                </p>

                <div className="flex flex-col gap-3">
                  <Button
                    type="button"
                    onClick={() => {
                      setSuccessMessage("");
                      setEmail("");
                    }}
                    className="w-full h-12 rounded-2xl bg-[#2D2D4A] hover:bg-[#25253f] text-white shadow-lg"
                  >
                    Enviar novo link
                  </Button>

                  <Link
                    to="/login"
                    className="text-center text-sm text-[#ff851b] hover:underline"
                  >
                    Voltar para o login
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-4">

                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="h-12 bg-white border-slate-200 text-[#2D2D4A] placeholder:text-gray-400 focus-visible:border-[#7fdbff] focus-visible:ring-[#7fdbff]/25 disabled:opacity-60"
                  required
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-2xl bg-[#2D2D4A] hover:bg-[#25253f] text-white shadow-lg"
                >
                  {loading ? "Enviando..." : "Enviar link de recuperação"}
                </Button>

                <motion.p className="text-center text-sm text-[#2D2D4A]/50 mt-6">
                  Lembrou sua senha?{" "}
                  <Link to="/login" className="text-[#ff851b] hover:underline font-medium">
                    Voltar para o login
                  </Link>
                </motion.p>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}