import { useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BadgeCheck, ChevronLeft, ChevronRight, Check, Globe, LayoutTemplate, Hand, LayoutGrid } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SectionBadge } from "@/components/SectionBadge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BrowserFrame, MockSite } from "@/components/BrowserFrame";
import { portfolio, type PortfolioItem } from "@/data/portfolio";
import { whatsappLink } from "@/lib/contact";

function hostname(item: PortfolioItem) {
  if (item.url) {
    try {
      return new URL(item.url).hostname.replace(/^www\./, "");
    } catch {
      return item.url;
    }
  }
  return `${item.title.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "")}.com.br`;
}

function TypeTag({ type }: { type: PortfolioItem["type"] }) {
  const Icon = type === "Landing Page" ? LayoutTemplate : Globe;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2D2D4A]/[0.06] px-2.5 py-1 text-[11px] font-bold text-[#2D2D4A]/75">
      <Icon className="w-3.5 h-3.5 text-[#ff851b]" />
      {type}
    </span>
  );
}

function PortfolioCard({ item, index, featured = false }: { item: PortfolioItem; index: number; featured?: boolean }) {
  const Wrapper = item.url ? "a" : "div";
  const wrapperProps = item.url ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } : {};
  const isClient = item.kind === "Cliente";

  return (
    <Wrapper {...wrapperProps} className="group block h-full">
      <div
        className={`relative rounded-[24px] p-3 sm:p-4 transition-all duration-500 ${
          featured ? "bg-gradient-to-br from-[#ff851b]/15 to-[#7fdbff]/10 group-hover:from-[#ff851b]/25" : "bg-[#F5F5F7] group-hover:bg-[#2D2D4A]/[0.06]"
        }`}
      >
        <BrowserFrame
          url={hostname(item)}
          className="shadow-[0_20px_40px_-20px_rgba(45,45,74,0.35)] transition-transform duration-700 group-hover:-translate-y-1"
        >
          {item.image ? (
            <img
              src={item.image}
              alt={`Site ${item.title}`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-[1.03]"
            />
          ) : (
            <MockSite accent={item.accent} variant={index} title={item.title} />
          )}

          {item.url && (
            <div className="absolute inset-0 flex items-end justify-end p-3 md:p-0 md:items-center md:justify-center md:bg-[#0F172A]/0 md:group-hover:bg-[#0F172A]/40 transition-colors duration-500">
              <span className="md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-white px-3.5 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold text-[#2D2D4A] shadow-xl">
                Ver ao vivo <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          )}
        </BrowserFrame>

        <span
          className={`absolute top-6 right-6 sm:top-7 sm:right-7 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
            isClient ? "bg-[#ff851b] text-white shadow-lg shadow-orange-500/30" : "bg-[#0F172A]/80 backdrop-blur text-white"
          }`}
        >
          {isClient && <BadgeCheck className="w-3.5 h-3.5" />}
          {isClient ? "Cliente real" : "Modelo"}
        </span>
      </div>

      <div className="px-2 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff851b]">{item.segment}</p>
          <TypeTag type={item.type} />
        </div>
        <h3 className={`${featured ? "text-2xl" : "text-xl"} font-bold text-[#2D2D4A] mb-2 flex items-center gap-2`}>
          {item.title}
          {item.url && (
            <ArrowUpRight className="w-4 h-4 text-[#2D2D4A]/30 group-hover:text-[#ff851b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          )}
        </h3>
        <p className="text-sm text-[#2D2D4A]/60 leading-relaxed mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#2D2D4A]/10 px-3 py-1 text-xs font-medium text-[#2D2D4A]/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

/** Carrossel de arrastar para o celular: um card por vez, com a ponta do próximo aparecendo. */
function MobileSwipe({ items, render }: { items: PortfolioItem[]; render: (item: PortfolioItem, index: number) => ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el || !el.firstElementChild) return;
    const itemWidth = (el.firstElementChild as HTMLElement).offsetWidth + 16;
    setActive(Math.min(items.length - 1, Math.round(el.scrollLeft / itemWidth)));
  };

  const goTo = (i: number) => {
    const el = ref.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (el && child) el.scrollTo({ left: child.offsetLeft - el.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <div className="md:hidden">
      <div
        ref={ref}
        onScroll={onScroll}
        className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 scroll-px-4"
      >
        {items.map((item, i) => (
          <div key={item.title} className={`snap-start shrink-0 ${items.length > 1 ? "w-[86%]" : "w-full"}`}>
            {render(item, i)}
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <div className="flex flex-col items-center gap-3 mt-6">
          <div className="flex justify-center gap-2">
            {items.map((item, i) => (
              <button
                key={item.title}
                onClick={() => goTo(i)}
                aria-label={`Ver ${item.title}`}
                className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-[#ff851b]" : "w-2 bg-[#2D2D4A]/15"}`}
              />
            ))}
          </div>
          <p className="flex items-center gap-1.5 text-xs font-medium text-[#2D2D4A]/40">
            <Hand className="w-3.5 h-3.5" /> Arraste para o lado para ver mais
          </p>
        </div>
      )}
    </div>
  );
}

/** Mostra os itens em páginas (2 em 2, 3 em 3...), com setas e indicadores. */
function PagedGrid({
  items,
  perPage,
  gridClass,
  header,
  headerClass = "",
  render,
}: {
  items: PortfolioItem[];
  perPage: number;
  gridClass: string;
  header: ReactNode;
  headerClass?: string;
  render: (item: PortfolioItem, index: number) => ReactNode;
}) {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(page, pages - 1);
  const visible = items.slice(current * perPage, current * perPage + perPage);

  const go = (next: number) => {
    setDir(next > current ? 1 : -1);
    setPage((next + pages) % pages);
  };

  // Setas nas laterais, na altura do centro das imagens
  const arrowTop = perPage <= 2 ? "top-[36%]" : "top-[30%]";
  const arrowClass = `absolute ${arrowTop} -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#2D2D4A]/10 shadow-[0_12px_30px_-10px_rgba(45,45,74,0.35)] flex items-center justify-center text-[#2D2D4A] hover:bg-[#ff851b] hover:border-[#ff851b] hover:text-white hover:scale-105 transition-all`;

  return (
    <div>
      <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10 ${headerClass}`}>
        <div className="text-center md:text-left">{header}</div>
      </div>

      {/* Celular: um por vez, arrastando para o lado */}
      <MobileSwipe items={items} render={render} />

      {/* Tablet e computador: páginas com setas nas laterais */}
      <div className="hidden md:block relative">
        {pages > 1 && (
          <>
            <button onClick={() => go(current - 1)} className={`${arrowClass} -left-4 xl:-left-7`} aria-label="Anteriores">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => go(current + 1)} className={`${arrowClass} -right-4 xl:-right-7`} aria-label="Próximos">
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      <div className="relative overflow-hidden -mx-2 px-2 -my-4 py-4">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={`${current}-${items.length}`}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={gridClass}
          >
            {visible.map((item, i) => (
              <div key={item.title}>{render(item, current * perPage + i)}</div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      </div>

      {pages > 1 && (
        <div className="hidden md:flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Página ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-[#ff851b]" : "w-2 bg-[#2D2D4A]/15 hover:bg-[#2D2D4A]/30"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function PortfolioCTA() {
  const previews = portfolio.filter((p) => p.image).slice(0, 3);
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#2D2D4A]/[0.07] bg-gradient-to-br from-[#fff4ea] via-white to-[#eaf8ff] p-8 sm:p-12 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#ff851b]/15 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-72 h-72 bg-[#7fdbff]/25 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative text-center lg:text-left">
        <p className="text-xs font-bold uppercase tracking-widest text-[#ff851b] mb-3">Seu site pode ser o próximo</p>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D4A] mb-3">Gostou de algum estilo?</h3>
        <p className="text-lg text-[#2D2D4A]/60 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
          Conte sobre o seu negócio e criamos um site com a identidade da sua marca.
        </p>
        <a
          href={whatsappLink("Olá! Vi o portfólio de vocês e quero um site para a minha empresa.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 h-14 px-8 rounded-2xl bg-[#ff851b] hover:bg-[#e07316] text-white font-bold shadow-[0_20px_40px_rgba(255,133,27,0.3)] transition-all hover:-translate-y-0.5 active:scale-95"
        >
          <SiWhatsapp className="w-5 h-5" />
          Quero um site assim
        </a>
        <ul className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-medium text-[#2D2D4A]/60">
          {["Proposta sem compromisso", "Pronto em até 2 semanas"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#ff851b]" /> {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative hidden sm:block h-64 lg:h-72">
        {previews.map((item, i) => {
          const pos = [
            "left-0 top-8 w-[62%] -rotate-6 z-10",
            "left-1/2 -translate-x-1/2 top-0 w-[66%] z-20",
            "right-0 top-12 w-[62%] rotate-6 z-10",
          ][i];
          return (
            <div key={item.title} className={`absolute ${pos} transition-transform duration-700 hover:-translate-y-2`}>
              <BrowserFrame url={hostname(item)} className="shadow-[0_25px_50px_-20px_rgba(45,45,74,0.45)]">
                <img src={item.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
              </BrowserFrame>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const [group, setGroup] = useState<"clientes" | "modelos">(
    portfolio.some((p) => p.kind === "Cliente") ? "clientes" : "modelos"
  );

  const clients = portfolio.filter((p) => p.kind === "Cliente");
  const models = portfolio.filter((p) => p.kind === "Modelo");

  const groups = [
    {
      id: "clientes" as const,
      label: "Sites de clientes",
      icon: BadgeCheck,
      count: clients.length,
    },
    {
      id: "modelos" as const,
      label: "Modelos",
      icon: LayoutGrid,
      count: models.length,
    },
  ].filter((g) => g.count > 0);

  const availableFilters = ["Todos", ...new Set(models.map((p) => p.segment))];
  const visibleModels = filter === "Todos" ? models : models.filter((p) => p.segment === filter);

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 mx-auto md:mx-0 text-center md:text-left">
          <SectionBadge text="Portfólio" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D4A] mb-5">
              Veja o que já <span className="text-[#ff851b]">criamos.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/60 leading-relaxed">
              Sites reais de empresas que confiaram na gente e modelos criados pela nossa equipe. Clique em qualquer um para navegar ao vivo.
            </p>
          </AnimatedSection>
        </div>

        {/* SWITCH: clientes / modelos */}
        <AnimatedSection delay={0.15} className="mb-10 flex justify-center md:justify-start">
          <div
            role="tablist"
            aria-label="Tipo de projeto"
            className="grid grid-cols-2 w-full max-w-sm md:w-auto md:max-w-none md:inline-grid gap-1 rounded-full bg-white p-1.5 border border-[#2D2D4A]/10 shadow-[0_14px_40px_-18px_rgba(45,45,74,0.35)]"
          >
            {groups.map((g) => {
              const active = group === g.id;
              return (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setGroup(g.id)}
                  className={`relative flex items-center justify-center gap-2 rounded-full h-12 px-4 md:px-6 font-display text-[15px] font-bold whitespace-nowrap transition-colors ${
                    active ? "text-[#2D2D4A]" : "text-[#2D2D4A]/45 hover:text-[#2D2D4A]/75"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="portfolio-group"
                      className="absolute inset-0 rounded-full bg-[#eef0f4] border border-[#2D2D4A]/[0.08]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <g.icon className={`relative hidden sm:block w-4 h-4 shrink-0 ${active ? "text-[#ff851b]" : "text-[#2D2D4A]/35"}`} />
                  <span className="relative">
                    {g.id === "modelos" ? (
                      <>
                        Modelos<span className="hidden md:inline"> para inspirar</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden md:inline">Sites de c</span>
                        <span className="md:hidden">C</span>lientes
                      </>
                    )}
                  </span>
                  <span
                    className={`relative inline-flex items-center justify-center rounded-full min-w-[22px] h-[22px] px-1.5 text-[11px] font-bold ${
                      active ? "bg-white text-[#2D2D4A]/70 shadow-sm" : "bg-[#2D2D4A]/[0.06] text-[#2D2D4A]/45"
                    }`}
                  >
                    {g.count}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {group === "clientes" ? (
              /* CLIENTES REAIS: 2 em 2 */
              <PagedGrid
                items={clients}
                perPage={2}
                gridClass="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
                header={<p className="text-[#2D2D4A]/60">Projetos reais, no ar, feitos para empresas de verdade.</p>}
                render={(item, i) => <PortfolioCard item={item} index={i} featured />}
              />
            ) : (
              /* MODELOS: 3 em 3 */
              <PagedGrid
                key={filter}
                items={visibleModels}
                perPage={3}
                gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
                header={
                  <>
                    <p className="text-[#2D2D4A]/60 mb-5">Estilos prontos que podem ser adaptados com a identidade da sua marca.</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2" role="tablist" aria-label="Filtrar modelos">
                      {availableFilters.map((f) => (
                        <button
                          key={f}
                          role="tab"
                          aria-selected={filter === f}
                          onClick={() => setFilter(f)}
                          className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                            filter === f ? "text-white" : "text-[#2D2D4A]/60 hover:text-[#2D2D4A] bg-[#F5F5F7]"
                          }`}
                        >
                          {filter === f && (
                            <motion.span
                              layoutId="portfolio-filter"
                              className="absolute inset-0 rounded-full bg-[#ff851b]"
                              transition={{ type: "spring", stiffness: 400, damping: 32 }}
                            />
                          )}
                          <span className="relative">{f}</span>
                        </button>
                      ))}
                    </div>
                  </>
                }
                render={(item, i) => <PortfolioCard item={item} index={i} />}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection delay={0.1} className="mt-12 md:mt-14">
          <PortfolioCTA />
        </AnimatedSection>
      </div>
    </section>
  );
}
