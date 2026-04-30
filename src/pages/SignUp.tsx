import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Eye, EyeOff, Zap, Shield, TrendingUp, ArrowRight, Sparkles, UserPlus } from 'lucide-react';
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

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const isLoading = loadingEmail || loadingGoogle;

  const validateForm = () => {
    setNameError(''); setEmailError(''); setPasswordError(''); 
    setConfirmPasswordError(''); setTermsError(''); setGeneralError('');
    let valid = true;

    if (!name.trim()) { setNameError('Informe seu nome completo.'); valid = false; }
    if (!email.trim()) { setEmailError('Informe seu e-mail.'); valid = false; }
    if (password.length < 6) { setPasswordError('Mínimo de 6 caracteres.'); valid = false; }
    if (password !== confirmPassword) { setConfirmPasswordError('As senhas não coincidem.'); valid = false; }
    if (!acceptTerms) { setTermsError('Aceite os termos para continuar.'); valid = false; }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoadingEmail(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } },
      });

      if (error) {
        setGeneralError(error.message);
        return;
      }
      navigate('/login', { replace: true });
    } catch (err) {
      setGeneralError('Erro ao criar conta.');
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoadingGoogle(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      });
      if (error) { setGeneralError(error.message); setLoadingGoogle(false); }
    } catch (err) { setLoadingGoogle(false); }
  };

  return (
    <div className="min-h-screen bg-[#050505] bg-hero-gradient relative overflow-hidden flex flex-col">
      {/* Camada de Glows Profundos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#ff851b]/10 blur-[140px] rounded-full opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7fdbff]/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <Header />

      <main className="flex-1 flex items-center justify-center px-4 pt-32 pb-12 relative z-10">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: CONVITE & BRANDING */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
            className="hidden lg:flex flex-col gap-12"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-[#ff851b]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff851b] animate-pulse" />
                Nova Experiência
              </div>
              <h1 className="text-5xl xl:text-7xl font-bold text-white tracking-tighter leading-[0.95]">
                Comece sua <br /> <span className="text-[#ff851b]">jornada hoje.</span>
              </h1>
              <p className="text-xl text-white/40 max-w-md font-medium leading-relaxed">
                Crie sua conta em segundos e tenha acesso imediato à vanguarda da automação com IA.
              </p>
            </motion.div>

            {/* Ilustração Abstrata (Core de Expansão) */}
            <motion.div variants={itemVariants} className="relative w-64 h-64">
                <div className="absolute inset-0 border border-white/10 rounded-full scale-110 opacity-20 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-[#7fdbff]/10 blur-3xl absolute" />
                    <UserPlus className="w-16 h-16 text-white/10" />
                </div>
                <div className="absolute bottom-0 right-0 p-5 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                    <TrendingUp className="w-6 h-6 text-[#ff851b]" />
                </div>
            </motion.div>
          </motion.div>

          {/* LADO DIREITO: FORMULÁRIO DE CADASTRO (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#0d0d0d]/40 backdrop-blur-3xl rounded-[40px] p-8 lg:p-10 border border-white/10 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Criar conta</h2>
                <p className="text-white/40 font-medium">Junte-se a centenas de empresas que escalam com IA.</p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nome - Full width no mobile */}
                <div className="md:col-span-2 space-y-1">
                  <Input
                    placeholder="Nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:border-[#ff851b]/50 transition-all"
                  />
                  {nameError && <p className="text-[10px] text-red-500 font-bold uppercase ml-2 tracking-widest">{nameError}</p>}
                </div>

                {/* E-mail - Full width */}
                <div className="md:col-span-2 space-y-1">
                  <Input
                    type="email"
                    placeholder="E-mail profissional"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:border-[#ff851b]/50 transition-all"
                  />
                  {emailError && <p className="text-[10px] text-red-500 font-bold uppercase ml-2 tracking-widest">{emailError}</p>}
                </div>

                {/* Senha */}
                <div className="relative space-y-1">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:border-[#ff851b]/50 transition-all"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-white/20 hover:text-[#ff851b]">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  {passwordError && <p className="text-[10px] text-red-500 font-bold uppercase ml-2 tracking-widest">{passwordError}</p>}
                </div>

                {/* Confirmar Senha */}
                <div className="relative space-y-1">
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirmar"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isLoading}
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:border-[#ff851b]/50 transition-all"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-4 text-white/20 hover:text-[#ff851b]">
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  {confirmPasswordError && <p className="text-[10px] text-red-500 font-bold uppercase ml-2 tracking-widest">{confirmPasswordError}</p>}
                </div>

                {/* Termos */}
                <div className="md:col-span-2 py-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <Checkbox
                      checked={acceptTerms}
                      onCheckedChange={(v) => setAcceptTerms(v as boolean)}
                      className="mt-1 border-white/20 data-[state=checked]:bg-[#ff851b] data-[state=checked]:border-[#ff851b]"
                    />
                    <span className="text-xs text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                      Eu aceito os <span className="text-white font-bold underline">Termos de Uso</span> e autorizo o processamento dos meus dados conforme a Política de Privacidade.
                    </span>
                  </label>
                  {termsError && <p className="text-[10px] text-red-500 font-bold uppercase mt-2 tracking-widest">{termsError}</p>}
                </div>

                {/* Botão de Envio */}
                <div className="md:col-span-2 pt-2">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 bg-[#ff851b] hover:bg-[#e07316] text-white font-bold text-lg rounded-2xl shadow-xl shadow-orange-500/10 active:scale-[0.98] transition-all"
                  >
                    {loadingEmail ? 'Criando sua conta...' : 'Começar Agora'}
                  </Button>
                </div>
              </form>

              {/* Divisor */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-[10px] font-black text-white/10 uppercase tracking-widest">ou</span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {/* Google Sign Up */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                disabled={isLoading}
                className="w-full h-14 flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/10 transition-all active:scale-[0.98]"
              >
                <img src="https://www.google.com/favicon.ico" className="w-5 h-5 grayscale opacity-50" />
                Cadastrar com Google
              </button>

              <p className="text-center text-sm text-white/30 mt-8 font-medium">
                Já faz parte?{' '}
                <Link to="/login" className="text-white hover:text-[#ff851b] font-bold underline underline-offset-4 transition-colors">
                  Fazer login
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}