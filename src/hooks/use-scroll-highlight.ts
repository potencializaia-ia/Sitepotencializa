import { useRef } from "react";
import { useInView } from "framer-motion";
import { useIsMobile } from "./use-mobile";

/**
 * No celular não existe "passar o mouse". Este hook devolve `true` enquanto o
 * elemento cruza a faixa central da tela, para o card ganhar o mesmo destaque
 * do hover do computador durante a rolagem. No computador devolve sempre `false`.
 */
export function useScrollHighlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const isMobile = useIsMobile();
  return [ref, isMobile && inView] as const;
}
