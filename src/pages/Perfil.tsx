import { motion, type Variants } from "framer-motion";
import {
  UserCircle2,
  Mail,
  Phone,
  Building2,
  MapPin,
  Briefcase,
  CreditCard,
  LogOut,
  ArrowLeft,
  Pencil,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Perfil() {
  const navigate = useNavigate();
  const { user, firstName } = useAuth();

  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const fullName = user?.user_metadata?.name || user?.user_metadata?.full_name || "";

  const [name, setName] = useState(fullName);
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogout = async () => {
    setIsSigningOut(true);
    try {
      await supabase.auth.signOut();
      navigate("/", { replace: true });
    } finally {
      setIsSigningOut(false);
    }
  };

  const handleSaveProfile = async () => {
    setIsSaving(true);
    setSuccessMessage("");
    try {
      const { error } = await supabase.auth.updateUser({
        data: { name, phone, company, role, city },
      });
      if (!error) setSuccessMessage("Alterações salvas com sucesso.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] bg-hero-gradient relative overflow-hidden flex flex-col">
      {/* Glows de Identidade */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff851b]/10 blur-[140px] rounded-full opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7fdbff]/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <Header />

      <main className="flex-1 pt-32 pb-14 px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* HEADER DO PERFIL */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-[#ff851b]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff851b]" />
                Command Center
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                Perfil de {firstName || "Usuário"}<span className="text-[#ff851b]">.</span>
              </h1>

              <p className="text-white/40 font-medium max-w-xl">
                Configurações de identidade e preferências da sua conta Neural.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="h-12 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Sair do Painel
              </Button>

              <Button
                onClick={handleLogout}
                disabled={isSigningOut}
                className="h-12 rounded-2xl bg-white text-black hover:bg-gray-200 font-bold px-8 shadow-xl"
              >
                {isSigningOut ? "Saindo..." : "Log out"}
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* CARD: DADOS DA CONTA */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-[#0d0d0d]/40 backdrop-blur-3xl rounded-[40px] border border-white/10 p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#ff851b]/10 border border-[#ff851b]/20 flex items-center justify-center shrink-0">
                  <UserCircle2 className="h-7 w-7 text-[#ff851b]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Dados de Acesso</h2>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Identidade Primária</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-black text-white/20 uppercase tracking-widest ml-1">Nome Completo</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-[#ff851b]/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-white/20 uppercase tracking-widest ml-1">E-mail de Login</label>
                  <Input
                    value={user?.email || ""}
                    disabled
                    className="h-14 bg-white/[0.02] border-white/5 text-white/30 rounded-2xl cursor-not-allowed"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-white/20 uppercase tracking-widest ml-1">Senha</label>
                  <div className="flex gap-4">
                    <Input
                      type="password"
                      value="123456789"
                      disabled
                      className="h-14 bg-white/[0.02] border-white/5 text-white/30 rounded-2xl flex-1 cursor-not-allowed"
                    />
                    <Button
                      variant="outline"
                      onClick={() => navigate("/esqueci-senha")}
                      className="h-14 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10"
                    >
                      <LockKeyhole className="h-4 w-4 mr-2" />
                      Alterar
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD: PLANO ATUAL */}
            <motion.div
              variants={itemVariants}
              className="bg-[#0d0d0d]/40 backdrop-blur-3xl rounded-[40px] border border-white/10 p-8 shadow-2xl flex flex-col"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Assinatura</h2>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Billing Status</p>
                </div>
              </div>

              <div className="flex-1 bg-white/[0.03] border border-dashed border-white/10 rounded-3xl p-6 flex flex-col justify-center text-center">
                <p className="text-xs font-black text-white/20 uppercase tracking-[0.2em] mb-2">Plano Ativo</p>
                <p className="text-lg font-bold text-white mb-6">Nenhum contrato ativo</p>
                
                <Button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" }), 100);
                  }}
                  className="w-full h-12 bg-[#ff851b] hover:bg-[#e07316] text-white font-bold rounded-xl shadow-lg shadow-orange-500/10"
                >
                  Ver Planos Disponíveis
                </Button>
              </div>
            </motion.div>

            {/* CARD: INFORMAÇÕES PESSOAIS (FULL WIDTH) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 bg-[#0d0d0d]/40 backdrop-blur-3xl rounded-[40px] border border-white/10 p-8 lg:p-12 shadow-2xl"
            >
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-[#7fdbff]/10 border border-[#7fdbff]/20 flex items-center justify-center shrink-0">
                  <Sparkles className="h-6 w-6 text-[#7fdbff]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Preferências de Experiência</h2>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Personalização de Dados</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-white/20 uppercase tracking-widest ml-1">Telefone</label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-[#ff851b]/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-white/20 uppercase tracking-widest ml-1">Empresa</label>
                  <Input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nome da organização"
                    className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-[#ff851b]/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-white/20 uppercase tracking-widest ml-1">Cargo</label>
                  <Input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Título profissional"
                    className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-[#ff851b]/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-white/20 uppercase tracking-widest ml-1">Localização</label>
                  <Input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Cidade"
                    className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-[#ff851b]/50 transition-all"
                  />
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  {successMessage && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#7fdbff] font-bold">
                      ● {successMessage}
                    </motion.p>
                  )}
                </div>

                <Button
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="h-14 px-12 rounded-2xl bg-[#ff851b] hover:bg-[#e07316] text-white font-black text-lg shadow-2xl shadow-orange-500/20 active:scale-95 transition-all w-full sm:w-auto"
                >
                  {isSaving ? "Sincronizando..." : "Salvar Configurações"}
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}