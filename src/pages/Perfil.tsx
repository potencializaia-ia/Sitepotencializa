import { motion } from "framer-motion";
import {
  UserCircle2,
  Mail,
  Shield,
  CreditCard,
  LogOut,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function Perfil() {
  const navigate = useNavigate();
  const { user, firstName } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const fullName =
    user?.user_metadata?.name ||
    user?.user_metadata?.full_name ||
    "Usuário";

  const provider =
    user?.app_metadata?.provider ||
    user?.user_metadata?.provider ||
    "email";

  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("pt-BR")
    : "Não disponível";

  const lastSignIn = user?.last_sign_in_at
    ? new Date(user.last_sign_in_at).toLocaleDateString("pt-BR")
    : "Não disponível";

  const isEmailProvider = provider === "email";
  const emailVerified =
    !!user?.email_confirmed_at ||
    user?.user_metadata?.email_verified === true;

  const handleLogout = async () => {
    setIsSigningOut(true);

    try {
      await supabase.auth.signOut();
      navigate("/", { replace: true });
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-footer-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff851b]/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#7fdbff]/10 rounded-full blur-3xl pointer-events-none" />

      <Header />

      <main className="pt-32 pb-14 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ff851b]" />
                Área da conta
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Olá, {firstName || "usuário"}
                <span className="text-[#ff851b]">.</span>
              </h1>

              <p className="text-white/70 mt-3 max-w-2xl">
                Gerencie suas informações de acesso, acompanhe o status da sua conta
                e visualize os detalhes do seu plano.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
                className="rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>

              <Button
                type="button"
                onClick={handleLogout}
                disabled={isSigningOut}
                className="rounded-xl bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white"
              >
                <span className="flex items-center gap-2">
                  {isSigningOut ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <LogOut className="h-4 w-4" />
                  )}
                  {isSigningOut ? "Saindo..." : "Sair"}
                </span>
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2D2D4A] text-white flex items-center justify-center shrink-0">
                  <UserCircle2 className="h-7 w-7" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2D2D4A]">
                    Informações da conta
                  </h2>
                  <p className="text-sm text-[#2D2D4A]/60 mt-1">
                    Dados principais do usuário autenticado.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">Nome</p>
                  <p className="text-base font-semibold text-[#2D2D4A] mt-1">
                    {fullName}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">Primeiro nome</p>
                  <p className="text-base font-semibold text-[#2D2D4A] mt-1">
                    {firstName || "Não disponível"}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <div className="flex items-center gap-2 text-[#2D2D4A]/50">
                    <Mail className="h-4 w-4" />
                    <p className="text-sm">E-mail</p>
                  </div>
                  <p className="text-base font-semibold text-[#2D2D4A] mt-1 break-all">
                    {user?.email || "Não informado"}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">Método de acesso</p>
                  <p className="text-base font-semibold text-[#2D2D4A] mt-1 capitalize">
                    {provider === "google" ? "Google" : provider}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">Conta criada em</p>
                  <p className="text-base font-semibold text-[#2D2D4A] mt-1">
                    {createdAt}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">Último acesso</p>
                  <p className="text-base font-semibold text-[#2D2D4A] mt-1">
                    {lastSignIn}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ff851b]/10 text-[#ff851b] flex items-center justify-center shrink-0">
                  <CreditCard className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#2D2D4A]">Plano</h2>
                  <p className="text-sm text-[#2D2D4A]/60 mt-1">
                    Situação atual da assinatura.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
                <p className="text-sm text-[#2D2D4A]/50">Plano atual</p>
                <p className="text-lg font-semibold text-[#2D2D4A] mt-1">
                  Nenhum plano contratado
                </p>

                <p className="text-sm text-[#2D2D4A]/60 mt-3 leading-relaxed">
                  Quando houver uma assinatura ativa, ela aparecerá aqui com detalhes
                  como nome do plano, status, renovação e recursos disponíveis.
                </p>

                <Button
                  type="button"
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("planos");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                  className="mt-5 w-full rounded-xl bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white"
                >
                  Ver planos
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#7fdbff]/20 text-[#001f3f] flex items-center justify-center shrink-0">
                  <Shield className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#2D2D4A]">Segurança</h2>
                  <p className="text-sm text-[#2D2D4A]/60 mt-1">
                    Informações básicas sobre autenticação.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">Status do e-mail</p>
                  <p className="text-base font-semibold text-[#2D2D4A] mt-1">
                    {emailVerified ? "Confirmado" : "Não confirmado"}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">Login com senha</p>
                  <p className="text-base font-semibold text-[#2D2D4A] mt-1">
                    {isEmailProvider ? "Disponível" : "Não aplicável"}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">Provedor atual</p>
                  <p className="text-base font-semibold text-[#2D2D4A] mt-1 capitalize">
                    {provider === "google" ? "Google" : provider}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#2D2D4A]">Status da conta</h2>
                  <p className="text-sm text-[#2D2D4A]/60 mt-1">
                    Resumo rápido do acesso.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">Sessão</p>
                  <p className="text-base font-semibold text-emerald-600 mt-1">
                    Ativa
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm text-[#2D2D4A]/50">ID do usuário</p>
                  <p className="text-sm font-medium text-[#2D2D4A] mt-1 break-all">
                    {user?.id || "Não disponível"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}