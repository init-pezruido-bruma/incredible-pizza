"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** delay in ms when entering */
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

/**
 * Vertical reveal that re-triggers on scroll up and down.
 * Enter: fade + rise. Leave: fade + sink.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        // true al entrar (scroll abajo o arriba), false al salir
        setVisible(entry.isIntersecting);
      },
      {
        threshold: [0, 0.12, 0.2],
        rootMargin: "0px 0px -6% 0px",
      },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{
        // delay solo al entrar; al salir responde al instante
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
      className={cn("reveal reveal-up", visible && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}
