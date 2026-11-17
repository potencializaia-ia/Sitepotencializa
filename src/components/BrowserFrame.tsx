import type { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  url?: string;
  className?: string;
  dark?: boolean;
}

/** Moldura de navegador usada para exibir sites do portfólio. */
export function BrowserFrame({ children, url = "seusite.com.br", className = "", dark = false }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        dark ? "border-white/10 bg-[#0f172a]" : "border-[#2D2D4A]/10 bg-white"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-3 px-4 h-9 border-b ${
          dark ? "border-white/10 bg-white/[0.04]" : "border-[#2D2D4A]/[0.06] bg-[#F5F5F7]"
        }`}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div
          className={`flex-1 min-w-0 max-w-[260px] mx-auto h-5 rounded-md text-[10px] font-medium flex items-center justify-center px-2 ${
            dark ? "bg-white/[0.06] text-white/40" : "bg-white text-[#2D2D4A]/40"
          }`}
        >
          <span className="truncate">{url}</span>
        </div>
        <div className="hidden sm:block w-[42px] shrink-0" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

interface MockSiteProps {
  accent?: string;
  variant?: number;
  title?: string;
}

/** Prévia ilustrativa de um site (usada enquanto não há print real). */
export function MockSite({ accent = "#ff851b", variant = 0, title = "Sua marca" }: MockSiteProps) {
  const v = variant % 3;

  return (
    <div className="aspect-[16/10] w-full bg-white p-[5%] flex flex-col gap-[6%] select-none" aria-hidden>
      {/* nav */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-md" style={{ background: accent }} />
          <span className="text-[9px] font-bold text-[#2D2D4A] truncate max-w-[90px]">{title}</span>
        </div>
        <div className="hidden sm:flex gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-6 h-1.5 rounded-full bg-[#2D2D4A]/10" />
          ))}
        </div>
        <span className="w-10 h-3.5 rounded-md" style={{ background: accent }} />
      </div>

      {v === 0 && (
        <div className="flex-1 grid grid-cols-2 gap-[6%] items-center">
          <div className="space-y-2">
            <span className="block h-2.5 w-[90%] rounded bg-[#2D2D4A]" />
            <span className="block h-2.5 w-[70%] rounded bg-[#2D2D4A]" />
            <span className="block h-1.5 w-[85%] rounded bg-[#2D2D4A]/15 mt-3" />
            <span className="block h-1.5 w-[60%] rounded bg-[#2D2D4A]/15" />
            <span className="block h-4 w-[45%] rounded-md mt-3" style={{ background: accent }} />
          </div>
          <div
            className="h-full min-h-[60px] rounded-xl"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}55)` }}
          />
        </div>
      )}

      {v === 1 && (
        <div className="flex-1 flex flex-col items-center justify-center gap-2 rounded-xl px-[8%]"
          style={{ background: `linear-gradient(160deg, ${accent}22, transparent 70%)` }}>
          <span className="block h-2.5 w-[60%] rounded bg-[#2D2D4A]" />
          <span className="block h-2.5 w-[45%] rounded bg-[#2D2D4A]" />
          <span className="block h-1.5 w-[55%] rounded bg-[#2D2D4A]/15 mt-2" />
          <div className="flex gap-2 mt-2">
            <span className="block h-4 w-14 rounded-md" style={{ background: accent }} />
            <span className="block h-4 w-14 rounded-md border border-[#2D2D4A]/15" />
          </div>
        </div>
      )}

      {v === 2 && (
        <div className="flex-1 flex flex-col gap-[6%]">
          <div className="space-y-1.5">
            <span className="block h-2.5 w-[50%] rounded bg-[#2D2D4A]" />
            <span className="block h-1.5 w-[35%] rounded bg-[#2D2D4A]/15" />
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-[#2D2D4A]/[0.07] p-1.5 flex flex-col gap-1">
                <div className="flex-1 rounded-md" style={{ background: `${accent}${i === 1 ? "cc" : "44"}` }} />
                <span className="block h-1.5 w-[70%] rounded bg-[#2D2D4A]/20" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
