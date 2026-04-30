import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  UserCircle2, 
  Cpu, 
  MessageSquare, 
  Settings, 
  Sparkles, 
  ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
  { title: "Blog", href: "#blog" },
  { title: "SaaS", href: "/saas", isPage: true },
  { title: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent font-bold text-sm ${textColor}`}>
                  Soluções
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4 bg-[#0d0d0d]/98 backdrop-blur-3xl border border-white/10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {solucoesItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#ff851b]/30 transition-all group"
                          >
                            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:text-[#ff851b]">
                              {item.icon}
                            </div>
                            <span className="text-xs font-bold text-white/80 group-hover:text-white">{item.title}</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
              <Button variant="ghost" size="icon" className={isScrolled ? "text-white" : "text-slate-900"}>
                <Menu className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent 
              align="end" 
              sideOffset={15}
              className="w-[300px] p-4 bg-[#0d0d0d]/98 backdrop-blur-3xl border border-white/10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="space-y-6">
                {/* Seção de Soluções no Mobile */}
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] ml-1">Soluções Inteligentes</p>
                  <div className="grid gap-2">
                    {solucoesItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#ff851b]/30 transition-all group"
                      >
                        <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:text-[#ff851b]">
                          {item.icon}
                        </div>
                        <span className="text-xs font-bold text-white/80 group-hover:text-white">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Links de Navegação */}
                <div className="space-y-1 border-t border-white/5 pt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block px-2 py-2.5 text-sm font-medium text-white/40 hover:text-[#ff851b] transition-colors"
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
                        className="w-full h-12 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10"
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