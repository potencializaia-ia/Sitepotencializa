import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsappLink } from "@/lib/contact";

const navItems = [
  { title: "Portfólio", href: "/#portfolio" },
  { title: "Serviços", href: "/#servicos" },
  { title: "Como funciona", href: "/#processo" },
  { title: "Planos", href: "/#planos" },
  { title: "FAQ", href: "/#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // No celular, o menu some ao rolar para baixo e volta ao rolar para cima.
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);

      if (window.innerWidth >= 1024 || y < 80) {
        setIsHidden(false);
      } else {
        const delta = y - lastY.current;
        if (delta > 6) setIsHidden(true);
        else if (delta < -6) setIsHidden(false);
      }
      lastY.current = y;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const hidden = isHidden && !isMobileOpen;

  // Destaca no menu a seção que está na tela
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const ids = navItems.map((n) => n.href.split("#")[1]);
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    const onTop = () => window.scrollY < 200 && setActiveSection("");
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? "-130%" : 0 }}
      transition={{ duration: hidden ? 0.3 : 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-4 px-4"
    >
      <div
        className={`mx-auto max-w-7xl h-16 rounded-2xl flex items-center justify-between pl-5 pr-2 sm:pl-6 transition-all duration-500 border ${
          isScrolled
            ? "bg-[#0F172A]/75 backdrop-blur-xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            : "bg-white/[0.04] backdrop-blur-md border-white/10"
        }`}
      >
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-extrabold tracking-tighter text-white"
        >
          Potencializa<span className="text-[#ff851b]">.</span>ia
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.split("#")[1];
            return (
              <a
                key={item.title}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? "text-white" : "text-white/65 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
                <span className="relative">{item.title}</span>
                {isActive && <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-1 h-1 rounded-full bg-[#ff851b]" />}
              </a>
            );
          })}

        </nav>

        {/* AÇÕES */}
        <div className="flex items-center gap-2">

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 h-11 px-5 rounded-xl bg-[#ff851b] hover:bg-[#e07316] text-white text-sm font-bold shadow-[0_10px_30px_rgba(255,133,27,0.35)] transition-all active:scale-95"
          >
            Pedir orçamento
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors"
            aria-label="Abrir menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-auto max-w-7xl mt-2 rounded-2xl border border-white/10 bg-[#0F172A]/95 backdrop-blur-xl p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
          >
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-3 py-3 rounded-xl text-base font-semibold text-white/80 hover:bg-white/5"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-white/10 grid gap-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 rounded-xl bg-[#ff851b] text-white font-bold flex items-center justify-center gap-2"
              >
                Pedir orçamento <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
