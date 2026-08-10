"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HeroParallaxImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  /** CSS object-position, e.g. "center top" or "50% 20%" */
  objectPosition?: string;
};

/**
 * Image framed with light parallax.
 * Keeps scale modest so the source stays sharp.
 */
export function HeroParallaxImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width:1024px) 100vw, 50vw",
  priority = true,
  quality = 95,
  objectPosition = "center center",
}: HeroParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      img.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const progress = (viewH / 2 - (rect.top + rect.height / 2)) / viewH;
      const shift = Math.max(-28, Math.min(28, progress * 40));
      img.style.transform = `translate3d(0, ${shift}px, 0) scale(1.04)`;
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
    <div ref={frameRef} className="absolute inset-0 overflow-hidden">
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        quality={quality}
        sizes={sizes}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{
          objectPosition,
          transform: "translate3d(0, 0, 0) scale(1.04)",
          transition: "transform 100ms linear",
        }}
      />
    </div>
  );
}
