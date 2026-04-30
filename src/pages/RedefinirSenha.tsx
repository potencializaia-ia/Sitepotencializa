import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";

export function RedefinirSenha() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    const hasTokens =
      hash.includes("access_token") || hash.includes("refresh_token") || hash.includes("type=recovery");

    if (hasTokens) {
      setReady(true);
    } else {
      setErrorMessage("Link de recuperação inválido ou expirado.");
    }
  }, []);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (password.length < 6) {
      setErrorMessage("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setErrorMessage("Não foi possível redefinir sua senha.");
        return;
      }

      setSuccessMessage("Senha redefinida com sucesso.");

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1200);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-footer-gradient relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,133,27,0.25),transparent_40%)]" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7fdbff]/10 rounded-full blur-3xl" />

      <Header />

      <div className="flex-1 flex items-center justify-center px-4 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-3xl border border-white/15 bg-white/[0.08] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.25)] p-4 sm:p-6 lg:p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)] pointer-events-none" />

          <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-white/60 shadow-[0_12px_40px_rgba(15,23,42,0.12)] relative">
            <div className="w-14 h-1.5 rounded-full bg-gradient-to-r from-[#7fdbff] to-[#ff851b] mb-6" />

            <h1 className="text-2xl sm:text-3xl font-bold text-[#1E2235] mb-2">
              Redefinir senha
            </h1>

            <p className="text-sm text-[#2D2D4A]/60 mb-6 leading-relaxed">
              Escolha uma nova senha para sua conta.
            </p>

            {errorMessage && (
              <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
            )}

            {successMessage && (
              <div className="rounded-xl bg-[#7fdbff]/10 border border-[#7fdbff]/20 p-4 mb-4">
                <p className="text-sm text-[#7fdbff] font-medium">
                  ✓ {successMessage}
                </p>
              </div>
            )}

            {ready && (
              <form onSubmit={handleUpdatePassword} className="space-y-4">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Nova senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="h-12 pr-11 bg-white border-slate-200 text-[#2D2D4A] placeholder:text-gray-400 focus-visible:border-[#7fdbff] focus-visible:ring-[#7fdbff]/25 disabled:opacity-60"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirmar nova senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                    className="h-12 pr-11 bg-white border-slate-200 text-[#2D2D4A] placeholder:text-gray-400 focus-visible:border-[#7fdbff] focus-visible:ring-[#7fdbff]/25 disabled:opacity-60"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={loading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white font-semibold text-base rounded-xl transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                >
                  <span className="flex items-center justify-center gap-2">
                    {loading && (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    )}
                    {loading ? 'Salvando...' : 'Salvar nova senha'}
                  </span>
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}