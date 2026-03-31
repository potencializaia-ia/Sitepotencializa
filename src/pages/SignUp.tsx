import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const } },
};

const highlights = [
  { icon: Zap,        text: 'Automação inteligente 24/7' },
  { icon: TrendingUp, text: 'Aumente suas conversões' },
  { icon: Shield,     text: 'Segurança e privacidade' },
];

export function SignUp() {
  const [name, setName]                         = useState('');
  const [email, setEmail]                       = useState('');
  const [password, setPassword]                 = useState('');
  const [confirmPassword, setConfirmPassword]   = useState('');
  const [showPassword, setShowPassword]         = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms]           = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SignUp attempt:', { name, email, password, acceptTerms });
  };

  return (
    <div className="min-h-screen bg-footer-gradient relative overflow-hidden flex flex-col">
      {/* Glows */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff851b]/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7fdbff]/10 rounded-full blur-3xl pointer-events-none" />

      <Header />

      <div className="flex-1 flex items-center justify-center px-4 pt-28 pb-12">
        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* ── LEFT — brand + destaques ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex flex-col gap-10"
            >
              {/* Logo */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <img
                  src="/dist/assets/images/logo.png"
                  alt="Potencializa.ai"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-white font-bold text-xl tracking-tight">
                  Potencializa<span className="text-[#ff851b]">.</span>ai
                </span>
              </motion.div>

              {/* Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white">
                  <span className="w-2 h-2 rounded-full bg-[#ff851b]" />
                  Plataforma de marketing com IA
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Comece a gerar{' '}
                  <span className="text-[#ff851b]">resultados reais</span> para o seu negócio
                  <span className="text-[#ff851b]">.</span>
                </h1>
                <p className="mt-4 text-lg text-white/70 leading-relaxed">
                  Crie sua conta gratuitamente e descubra como a IA pode transformar o seu marketing.
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div variants={itemVariants} className="flex flex-col gap-4">
                {highlights.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/20">
                      <Icon className="w-5 h-5 text-[#ff851b]" />
                    </div>
                    <p className="text-white/80 font-medium">{text}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT — formulário ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="bg-[#F5F5F7] rounded-3xl p-8 lg:p-10 border border-slate-200">

                {/* Logo mobile */}
                <motion.div variants={itemVariants} className="flex lg:hidden items-center gap-3 mb-8">
                  <img
                    src="/dist/assets/images/logo.png"
                    alt="Potencializa.ai"
                    className="h-8 w-auto object-contain"
                  />
                  <span className="text-[#2D2D4A] font-bold text-lg tracking-tight">
                    Potencializa<span className="text-[#ff851b]">.</span>ai
                  </span>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-[#2D2D4A] mb-1">Criar conta</h2>
                  <p className="text-[#2D2D4A]/50 text-sm mb-8">Preencha os dados abaixo para começar.</p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nome */}
                  <motion.div variants={itemVariants}>
                    <Input
                      type="text"
                      placeholder="Nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 bg-white border-slate-200 text-[#2D2D4A] placeholder:text-gray-400 focus-visible:border-[#7fdbff] focus-visible:ring-[#7fdbff]/25"
                      required
                    />
                  </motion.div>

                  {/* E-mail */}
                  <motion.div variants={itemVariants}>
                    <Input
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-white border-slate-200 text-[#2D2D4A] placeholder:text-gray-400 focus-visible:border-[#7fdbff] focus-visible:ring-[#7fdbff]/25"
                      required
                    />
                  </motion.div>

                  {/* Senha */}
                  <motion.div variants={itemVariants} className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 pr-11 bg-white border-slate-200 text-[#2D2D4A] placeholder:text-gray-400 focus-visible:border-[#7fdbff] focus-visible:ring-[#7fdbff]/25"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </motion.div>

                  {/* Confirmar senha */}
                  <motion.div variants={itemVariants} className="relative">
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirmar senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="h-12 pr-11 bg-white border-slate-200 text-[#2D2D4A] placeholder:text-gray-400 focus-visible:border-[#7fdbff] focus-visible:ring-[#7fdbff]/25"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </motion.div>

                  {/* Termos */}
                  <motion.div variants={itemVariants}>
                    <label className="flex items-start gap-2 cursor-pointer select-none">
                      <Checkbox
                        id="terms"
                        checked={acceptTerms}
                        onCheckedChange={(v) => setAcceptTerms(v as boolean)}
                        className="mt-0.5 border-slate-300 data-[state=checked]:bg-[#ff851b] data-[state=checked]:border-[#ff851b]"
                      />
                      <span className="text-sm text-[#2D2D4A]/60 leading-snug">
                        Concordo com os{' '}
                        <a href="#" className="text-[#ff851b] hover:underline">Termos de Uso</a>
                        {' '}e a{' '}
                        <a href="#" className="text-[#ff851b] hover:underline">Política de Privacidade</a>
                      </span>
                    </label>
                  </motion.div>

                  {/* Botão */}
                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white font-semibold text-base rounded-xl transition-all hover:scale-[1.02]"
                    >
                      Criar conta
                    </Button>
                  </motion.div>
                </form>

                {/* Divider */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-sm text-[#2D2D4A]/40">ou</span>
                  <div className="flex-1 h-px bg-slate-200" />
                </motion.div>

                {/* Google */}
                <motion.div variants={itemVariants}>
                  <button
                    type="button"
                    className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-xl text-[#2D2D4A] hover:bg-gray-50 transition-all hover:scale-[1.02]"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.39a4.6 4.6 0 01-2 3.02v2.5h3.23c1.89-1.74 2.98-4.3 2.98-7.31z" fill="#4285F4" />
                      <path d="M10 20c2.7 0 4.96-.89 6.62-2.41l-3.23-2.5c-.9.6-2.04.96-3.39.96-2.6 0-4.81-1.76-5.6-4.12H1.07v2.58A10 10 0 0010 20z" fill="#34A853" />
                      <path d="M4.4 11.93A5.99 5.99 0 014.08 10c0-.67.11-1.32.32-1.93V5.49H1.07A10 10 0 000 10c0 1.61.38 3.13 1.07 4.51l3.33-2.58z" fill="#FBBC05" />
                      <path d="M10 3.96c1.47 0 2.79.5 3.82 1.5l2.86-2.86A9.95 9.95 0 0010 0 10 10 0 001.07 5.49L4.4 8.07C5.19 5.72 7.4 3.96 10 3.96z" fill="#EA4335" />
                    </svg>
                    <span className="text-sm font-medium">Continuar com Google</span>
                  </button>
                </motion.div>

                {/* Já tem conta */}
                <motion.p variants={itemVariants} className="text-center text-sm text-[#2D2D4A]/50 mt-6">
                  Já tem uma conta?{' '}
                  <Link to="/login" className="text-[#ff851b] hover:underline font-medium">
                    Entrar
                  </Link>
                </motion.p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
