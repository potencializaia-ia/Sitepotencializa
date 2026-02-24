import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const solucoesItems = [
  { title: "Atendimento Inteligente", href: "#" },
  { title: "Assistente Pré-Vendas", href: "#" },
  { title: "Copiloto de Vendas", href: "#" },
  { title: "Suporte Turbo", href: "#" },
];

const segmentosItems = [
  { title: "Clínicas de Saúde", href: "#" },
  { title: "E-commerce", href: "#" },
  { title: "Salões de Beleza", href: "#" },
  { title: "Imobiliárias", href: "#" },
  { title: "Academias", href: "#" },
];

const navItems = [
  { title: "Planos", href: "#planos" },
  { title: "Cases", href: "#cases" },
  { title: "Blog", href: "#blog" },
  { title: "Sobre", href: "#products" },
  { title: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillClass = isScrolled
    ? "bg-white/55 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
    : "bg-white/90 border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.08)]";

  const linkClass = isScrolled
    ? "text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
    : "text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors";

  const triggerClass = isScrolled
    ? "text-sm font-medium text-slate-700 hover:text-slate-900 bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:text-slate-900"
    : "text-sm font-medium text-slate-700 hover:text-slate-900 bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:text-slate-900";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div
          className={[
            "flex items-center justify-between",
            "h-16 rounded-2xl px-4 sm:px-6",
            "transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
            pillClass,
          ].join(" ")}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            className="flex items-center"
          >
            <span className="text-xl font-bold tracking-tight text-[#001f3f]">
              Potencializa<span className="text-[#fc7500]">.</span>ia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    Soluções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-64 gap-1 p-2">
                      {solucoesItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block rounded-lg p-3 text-sm transition-colors hover:bg-black/5 text-slate-700 hover:text-slate-900"
                            >
                              {item.title}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    Segmentos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-64 gap-1 p-2">
                      {segmentosItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block rounded-lg p-3 text-sm transition-colors hover:bg-black/5 text-slate-700 hover:text-slate-900"
                            >
                              {item.title}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navItems.map((item) => (
              <a key={item.title} href={item.href} className={`px-4 py-2 ${linkClass}`}>
                {item.title}
              </a>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden lg:block">
            <Button className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white px-6 rounded-xl shadow-sm">
              Login
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col gap-4 mt-8">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-500 px-2">Soluções</p>
                  {solucoesItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block px-2 py-2 text-[#2D2D4A] hover:text-slate-900 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-500 px-2">Segmentos</p>
                  {segmentosItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block px-2 py-2 text-[#2D2D4A] hover:text-slate-900 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block px-2 py-2 text-[#2D2D4A] hover:text-slate-900 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>

                <Button className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white mt-4 rounded-xl">
                  Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
