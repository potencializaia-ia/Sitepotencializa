import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const finishLogin = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        navigate('/login', { replace: true });
        return;
      }

      if (data.session) {
        const redirectPath = localStorage.getItem('postLoginRedirect') || '/';
        localStorage.removeItem('postLoginRedirect');
        navigate(redirectPath, { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    };

    finishLogin();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
      {/* Glows de Fundo para manter a identidade */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff851b]/10 blur-[140px] rounded-full opacity-30" />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Loader Estilo "Neural Core" */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Anéis giratórios */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-white/10 border-t-[#ff851b] rounded-[32px]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-white/5 border-b-[#7fdbff] rounded-[24px]"
          />
          
          {/* Ícone Central */}
          <div className="relative z-10 w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cpu className="w-6 h-6 text-[#ff851b]" />
            </motion.div>
          </div>
        </div>

        {/* Texto de Status Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-white font-bold tracking-widest text-[10px] uppercase mb-1">
            Autenticando Acesso
          </h2>
          <p className="text-white/20 text-[9px] font-mono tracking-widest animate-pulse">
            POTENCIALIZA_SECURE_GATEWAY...
          </p>
        </motion.div>
      </div>
    </div>
  );
}