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
 * One-shot vertical reveal on scroll.
 * Stays visible after the first enter so content doesn't flicker
 * when sections sit near the bottom of the page.
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
        if (!entry.isIntersecting) return;
        setVisible(true);
        io.disconnect();
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -4% 0px",
      },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn("reveal reveal-up", visible && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}
