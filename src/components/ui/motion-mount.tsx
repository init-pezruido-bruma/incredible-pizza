"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Soft mount animation for hero / header chrome */
export function MotionMount({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setOn(true);
      return;
    }
    const id = window.setTimeout(() => setOn(true), 40 + delay);
    return () => window.clearTimeout(id);
  }, [delay]);

  return (
    <div
      className={cn(
        "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        on ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      style={{ transitionDelay: on ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
