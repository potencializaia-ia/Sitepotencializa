import { useState, useEffect, useRef } from "react";
import { motion, } from "framer-motion";
import { 
  Menu, 
  Cpu, 
  MessageSquare, 
  Settings, 
  ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

// Itens de Soluções com ícones e descrições (Padrão SaaS Premium)
const solucoesItems = [
  { 
    title: "Consultoria em IA", 
    href: "/servicos/consultoria-ia",
    description: "Estratégia e implementação de modelos LLM.",
    icon: <Cpu className="w-5 h-5 text-[#ff851b]" />
  },
  { 
    title: "Atendimento Inteligente 24/7", 
    href: "/servicos/atendimento-inteligente",
    description: "Agentes autônomos para suporte e vendas.",
    icon: <MessageSquare className="w-5 h-5 text-[#ff851b]" />
  },
  { 
    title: "IA Sob Medida", 
    href: "/servicos/suporte-turbo",
    description: "Soluções personalizadas para fluxos complexos.",
    icon: <Settings className="w-5 h-5 text-[#ff851b]" />
  },
];

const navItems = [
  { title: "Cases", href: "#cases" },
  { title: "Planos", href: "#planos" },
  { title: "SaaS", href: "/saas", isPage: true },
  { title: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openSolutions = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setIsSolutionsOpen(true);
  };

  const closeSolutions = () => {
    closeTimer.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 120);
  };
  const navigate = useNavigate();
  const { isAuthenticated, firstName, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Estilo do Header (Pill Style)
  const pillClass = isScrolled
    ? "bg-white/55 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
    : "bg-white/90 border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.08)]";

  const textColor = isScrolled ? "text-[#1a2d4a] hover:text-[#0d1f35]" : "text-slate-700 hover:text-slate-900";
  const popoverTextColor = isScrolled
  ? "text-[#1a2d4a]"
  : "text-white/85";

const popoverMutedTextColor = isScrolled
  ? "text-[#1a2d4a]/70"
  : "text-white/70";

const popoverCardTextColor = isScrolled
  ? "text-[#1a2d4a]/90 group-hover:text-[#1a2d4a]"
  : "text-white/85 group-hover:text-white";

const popoverBorderColor = isScrolled
  ? "border-[#1a2d4a]/10"
  : "border-white/10";

const popoverCardBg = isScrolled
  ? "bg-white/15 hover:bg-white/55"
  : "bg-white/5 hover:bg-white/10";

const mobileMenuIconColor = isScrolled
  ? "text-[#1a2d4a]"
  : "text-black";

const mobileMutedTextColor = isScrolled
  ? "text-[#1a2d4a]/50"
  : "text-white/20";

const mobileCardTextColor = isScrolled
  ? "text-[#1a2d4a]/80 group-hover:text-[#1a2d4a]"
  : "text-white/80 group-hover:text-white";

const mobileNavTextColor = isScrolled
  ? "text-[#1a2d4a]/55 hover:text-[#ff851b]"
  : "text-white/40 hover:text-[#ff851b]";

const mobileCardBg = isScrolled
  ? "bg-white/15 hover:bg-white/55"
  : "bg-white/5 hover:bg-white/10";

const mobileBorderColor = isScrolled
  ? "border-[#1a2d4a]/10"
  : "border-white/5";

const mobileIconBg = isScrolled
  ? "bg-[#1a2d4a]/5"
  : "bg-white/5";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-4 px-4"
    >
      <div className={`mx-auto max-w-7xl h-16 rounded-2xl flex items-center justify-between px-4 sm:px-6 transition-all duration-500 ${pillClass}`}>
        
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className={`text-xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-[#1a2d4a]' : 'text-[#2D2D4A]'}`}>
            Potencializa<span className="text-[#ff851b]">.</span>ai
          </span>
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <div className="hidden lg:flex items-center gap-2">
          <Popover open={isSolutionsOpen} onOpenChange={setIsSolutionsOpen}>
            <div onMouseEnter={openSolutions} onMouseLeave={closeSolutions}>
              <PopoverTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:bg-white/60 ${textColor}`}
                >
                  Soluções
                  <ChevronDown 
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`} 
                  />
                </button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                sideOffset={10}
                onMouseEnter={openSolutions}
                onMouseLeave={closeSolutions}
                className="w-[255px] p-3 !bg-white/5 backdrop-blur-3xl border border-white/5 rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              >
                <div className="space-y-3">
                  <p className={`text-[9px] font-black uppercase tracking-[0.18em] ml-1 ${popoverMutedTextColor}`}>
                    Soluções Inteligentes
                  </p>

                  <div className="grid gap-2">
                    {solucoesItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className={`flex items-center gap-3 p-3 rounded-xl border hover:border-[#ff851b]/40 transition-all group ${popoverCardBg} ${popoverBorderColor}`}
                      >
                        <div
                          className={`h-8 w-8 flex items-center justify-center rounded-lg transition-colors ${
                            isScrolled
                              ? "bg-[#1a2d4a]/5 group-hover:bg-[#ff851b]/15"
                              : "bg-white/5 group-hover:bg-[#ff851b]/15"
                          }`}
                        >
                          {item.icon}
                        </div>

                        <span className={`text-[11px] font-bold leading-tight ${popoverCardTextColor}`}>
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </div>
          </Popover>

          {navItems.map((item) => (
            <Link 
              key={item.title} 
              to={item.href} 
              className={`px-4 py-2 text-sm font-bold transition-colors ${textColor}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* AUTH / MOBILE MENU */}
        <div className="flex items-center gap-3">
          {/* Botão de Auth Desktop */}
          <div className="hidden lg:block">
            {!loading && (
              isAuthenticated ? (
                <button
                  onClick={() => navigate("/perfil")}
                  className={`flex items-center gap-3 rounded-full px-3 py-1.5 transition-all border ${isScrolled ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200'}`}
                >
                  <div className="w-7 h-7 rounded-full bg-[#ff851b] text-white flex items-center justify-center text-xs font-black">
                    {firstName?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">{firstName}</span>
                </button>
              ) : (
                <Link to="/login">
                  <Button className="bg-[#ff851b] hover:bg-[#e07316] text-white px-6 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-transform active:scale-95">
                    Login
                  </Button>
                </Link>
              )
            )}
          </div>

          {/* MENU MOBILE (POPOVER - CONTAINER DISCRETO) */}
          <Popover>
            <PopoverTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={mobileMenuIconColor}>
                <Menu className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              sideOffset={15}
              className={`w-[300px] p-4 !bg-white/5 backdrop-blur-3xl rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border ${mobileBorderColor}`}
            >
              <div className="space-y-6">
                
                {/* Seção de Soluções no Mobile */}
                <div className="space-y-3">
                  <p className={`text-[10px] font-black uppercase tracking-[0.2em] ml-1 ${mobileMutedTextColor}`}>
                    Soluções Inteligentes
                  </p>

                  <div className="grid gap-2">
                    {solucoesItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className={`flex items-center gap-3 p-3 rounded-xl border hover:border-[#ff851b]/30 transition-all group ${mobileCardBg} ${mobileBorderColor}`}
                      >
                        <div className={`h-8 w-8 flex items-center justify-center rounded-lg group-hover:text-[#ff851b] ${mobileIconBg}`}>
                          {item.icon}
                        </div>

                        <span className={`text-xs font-bold ${mobileCardTextColor}`}>
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Links de Navegação */}
                <div className={`space-y-1 border-t pt-4 ${mobileBorderColor}`}>
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className={`block px-2 py-2.5 text-sm font-medium transition-colors ${mobileNavTextColor}`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                {/* Login Mobile */}
                <div className="pt-2">
                  {!loading && (
                    isAuthenticated ? (
                      <Button 
                        onClick={() => navigate("/perfil")}
                        className={`w-full h-12 rounded-xl ${
                          isScrolled
                            ? "bg-[#1a2d4a]/5 border border-[#1a2d4a]/10 text-[#1a2d4a] hover:bg-[#1a2d4a]/10"
                            : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                        }`}
                      >
                        Meu Perfil
                      </Button>
                    ) : (
                      <Link to="/login">
                        <Button className="w-full h-12 bg-[#ff851b] hover:bg-[#e07316] text-white rounded-xl font-bold">
                          Entrar na Plataforma
                        </Button>
                      </Link>
                    )
                  )}
                </div>

              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </motion.header>
  );
}