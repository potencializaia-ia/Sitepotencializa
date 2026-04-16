import { motion } from "framer-motion";
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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  const [isSaving, setIsSaving] = useState(false);

  const fullName =
    user?.user_metadata?.name ||
    user?.user_metadata?.full_name ||
    "";

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
        data: {
          name,
          phone,
          company,
          role,
          city,
        },
      });

      if (!error) {
        setSuccessMessage("Alterações salvas com sucesso.");
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-footer-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,133,27,0.2),transparent_40%)] pointer-events-none" />
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
                Minha conta
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Perfil de {firstName || "usuário"}
                <span className="text-[#ff851b]">.</span>
              </h1>

              <p className="text-white/70 mt-3 max-w-2xl">
                Gerencie seus dados de acesso, informações pessoais e assinatura.
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
            {/* CONTA */}
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
                    Dados da conta
                  </h2>
                  <p className="text-sm text-[#2D2D4A]/60 mt-1">
                    Informações principais para acesso e identificação.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm text-[#2D2D4A]/60">Nome completo</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#2D2D4A]/60 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-mail
                  </label>
                  <Input
                    value={user?.email || ""}
                    disabled
                    className="h-12 rounded-2xl opacity-80"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-[#2D2D4A]/60 flex items-center gap-2">
                    <LockKeyhole className="h-4 w-4" />
                    Senha
                  </label>

                  <div className="flex gap-3">
                    <Input
                      type="password"
                      value="123456789"
                      disabled
                      className="h-12 rounded-2xl opacity-80"
                    />

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate("/esqueci-senha")}
                      className="h-12 rounded-2xl"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      Alterar
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PLANO */}
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
                    Status atual da sua assinatura.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
                <p className="text-sm text-[#2D2D4A]/50">Plano atual</p>
                <p className="text-lg font-semibold text-[#2D2D4A] mt-1">
                  Nenhum plano contratado
                </p>

                <p className="text-sm text-[#2D2D4A]/60 mt-3 leading-relaxed">
                  Ao contratar um plano, você poderá acompanhar os detalhes da assinatura aqui.
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

            {/* INFORMAÇÕES PESSOAIS */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#7fdbff]/20 text-[#001f3f] flex items-center justify-center shrink-0">
                  <UserCircle2 className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#2D2D4A]">
                    Informações pessoais
                  </h2>
                  <p className="text-sm text-[#2D2D4A]/60 mt-1">
                    Complete seus dados para personalizar melhor sua experiência.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm text-[#2D2D4A]/60 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefone
                  </label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="h-12 rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#2D2D4A]/60 flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Empresa
                  </label>
                  <Input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nome da empresa"
                    className="h-12 rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#2D2D4A]/60 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Cargo
                  </label>
                  <Input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Seu cargo"
                    className="h-12 rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#2D2D4A]/60 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Cidade
                  </label>
                  <Input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Sua cidade"
                    className="h-12 rounded-2xl"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {successMessage && (
                  <p className="text-sm text-emerald-600">{successMessage}</p>
                )}

                <Button
                  type="button"
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="rounded-xl bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white sm:ml-auto"
                >
                  <span className="flex items-center gap-2">
                    {isSaving ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Pencil className="h-4 w-4" />
                    )}
                    {isSaving ? "Salvando..." : "Salvar alterações"}
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}