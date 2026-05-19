import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Eye, EyeOff, Cpu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { supabase } from '@/lib/supabase';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const isLoading = loadingEmail || loadingGoogle;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingEmail(true);
    try {
      const redirectPath = localStorage.getItem('postLoginRedirect') || '/';
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) { alert(error.message); return; }
      localStorage.removeItem('postLoginRedirect');
      navigate(redirectPath, { replace: true });
    } finally { setLoadingEmail(false); }
  };

  const handleGoogleLogin = async () => {
    setLoadingGoogle(true);
    try {
      localStorage.setItem('postLoginRedirect', window.location.pathname + window.location.search);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      });
      if (error) { alert(error.message); setLoadingGoogle(false); }
    } catch (error) { setLoadingGoogle(false); alert('Erro ao conectar com Google.'); }
  };

  return (
    <div className="min-h-screen bg-[#ff851b] bg-hero-gradient relative overflow-hidden flex flex-col">
      {/* Glows de Fundo Dinâmicos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff851b]/10 blur-[140px] rounded-full opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7fdbff]/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <Header />

      <main className="flex-1 flex items-center justify-center px-4 pt-28 pb-12 relative z-10">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: BRAND & VISUAL NEURAL */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
            className="hidden lg:flex flex-col gap-12"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-[#ff851b]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff851b] animate-pulse" />
                Acesso à Plataforma
              </div>
              <h1 className="text-5xl xl:text-7xl font-bold text-white tracking-tighter leading-[0.95]">
                Potencialize seus <br /> <span className="text-[#ff851b]">resultados.</span>
              </h1>
              <p className="text-xl text-white/40 max-w-md font-medium leading-relaxed">
                Entre na central de inteligência e gerencie seus agentes autonômos 24/7.
              </p>
            </motion.div>

            {/* Ilustração Abstrata Minimalista (Nodes) */}
            <motion.div variants={itemVariants} className="relative w-64 h-64">
                <div className="absolute inset-0 border border-white/10 rounded-[40px] rotate-12" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#ff851b]/10 blur-2xl absolute animate-pulse" />
                    <Cpu className="w-12 h-12 text-white/20" />
                </div>
                <div className="absolute -top-4 -right-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <Sparkles className="w-5 h-5 text-[#ff851b]" />
                </div>
            </motion.div>
          </motion.div>

          {/* LADO DIREITO: FORMULÁRIO (GLASSMORPHISM PRETO) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#0d0d0d]/40 backdrop-blur-3xl rounded-[40px] p-8 lg:p-12 border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Entrar</h2>
                <p className="text-white/40 font-medium">Bem-vindo de volta ao futuro do marketing.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="E-mail corporativo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:border-[#ff851b]/50 focus:ring-0 transition-all"
                  />
                </div>

                <div className="relative group">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Sua senha secreta"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:border-[#ff851b]/50 focus:ring-0 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#ff851b] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(v) => setRememberMe(v as boolean)}
                      className="border-white/20 data-[state=checked]:bg-[#ff851b] data-[state=checked]:border-[#ff851b]"
                    />
                    <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">Manter conectado</span>
                  </label>
                  <Link to="/esqueci-senha" className="text-sm text-[#ff851b] hover:text-[#e07316] font-bold">
                    Esqueceu?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 bg-[#ff851b] hover:bg-[#e07316] text-white font-bold text-lg rounded-2xl transition-all shadow-lg shadow-orange-500/10 active:scale-[0.98]"
                >
                  {loadingEmail ? 'Processando...' : 'Acessar Painel'}
                </Button>
              </form>

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-[10px] font-black text-white/10 uppercase tracking-widest">ou</span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full h-14 flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/10 transition-all active:scale-[0.98]"
              >
                <img src="https://www.google.com/favicon.ico" className="w-5 h-5 grayscale opacity-50 group-hover:opacity-100" />
                Continuar com Google
              </button>

              <p className="text-center text-sm text-white/30 mt-10 font-medium">
                Novo por aqui?{' '}
                <Link to="/signup" className="text-white hover:text-[#ff851b] transition-colors font-bold underline underline-offset-4">
                  Criar conta gratuita
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}