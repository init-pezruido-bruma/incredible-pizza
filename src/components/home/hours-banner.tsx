"use client";

import { useEffect, useRef } from "react";

/**
 * Full-width hours strip: flat top, angled bottom.
 * Title follows the slope + scroll motion; hours styled to stand out.
 */
export function HoursBanner() {
  const frameRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const box = boxRef.current;
    const title = titleRef.current;
    if (!frame || !box || !title) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const progress = (viewH / 2 - (rect.top + rect.height / 2)) / viewH;
      const shiftY = Math.max(-10, Math.min(10, progress * 14));
      const titleShift = Math.max(-8, Math.min(8, progress * 12));
      box.style.transform = `translate3d(0, ${shiftY}px, 0)`;
      title.style.transform = `rotate(-8deg) translate3d(0, ${titleShift}px, 0)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="relative z-20 w-full overflow-x-clip"
      aria-label="Horarios de apertura"
    >
      <div
        ref={boxRef}
        className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 will-change-transform"
        style={{
          paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)",
          background: "linear-gradient(90deg, var(--brand-red) 0%, var(--brand-yellow) 100%)",
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - clamp(3.5rem, 6vw, 5.5rem)), 0 100%)",
          boxShadow: "0 10px 24px rgba(35, 31, 32, 0.16)",
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-8 sm:py-14 sm:text-left lg:px-10">
          <p
            ref={titleRef}
            className="origin-center font-display text-[clamp(2.4rem,7vw,4rem)] font-black leading-none text-white drop-shadow-[0_3px_0_rgba(35,31,32,0.25)] will-change-transform"
            style={{ transform: "rotate(-8deg)" }}
          >
            ¡Abrimos todos los días!
          </p>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[16rem]">
            <HourRow label="Lun – Vie" time="11:00 AM – 9:00 PM" />
            <HourRow label="Sáb – Dom" time="11:00 AM – 9:00 PM" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HourRow({ label, time }: { label: string; time: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-full bg-brand-ink/90 px-4 py-2.5 text-white shadow-[0_4px_0_0_rgba(255,194,14,0.85)] sm:min-w-[17rem] sm:justify-start sm:gap-5 sm:px-5">
      <span className="shrink-0 rounded-full bg-brand-yellow px-3 py-1 text-[0.7rem] font-black uppercase tracking-wide text-brand-ink sm:text-xs">
        {label}
      </span>
      <span className="text-sm font-extrabold tabular-nums tracking-wide sm:text-base">{time}</span>
    </div>
  );
}
