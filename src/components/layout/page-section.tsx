import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  reveal?: boolean;
  /** Extra top space so absolute header/logo does not cover content */
  clearHeader?: boolean;
};

export function PageSection({
  id,
  children,
  className,
  innerClassName,
  reveal = true,
  clearHeader = false,
}: PageSectionProps) {
  const inner = (
    <div
      className={cn(
        "mx-auto px-5 sm:px-8 lg:px-10",
        innerClassName?.includes("max-w-") ? null : "max-w-6xl",
        innerClassName,
      )}
    >
      {children}
    </div>
  );

  return (
    <section
      id={id}
      className={cn("relative", clearHeader && "pt-28 sm:pt-32 lg:pt-40", className)}
    >
      {reveal ? <Reveal className="overflow-visible">{inner}</Reveal> : inner}
    </section>
  );
}

type PageHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark" | "ink";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function PageHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
  as: Tag = "h2",
}: PageHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 text-xs font-extrabold uppercase tracking-[0.18em] sm:text-sm",
            tone === "ink" ? "text-brand-ink/70" : "text-brand-yellow",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-display text-[clamp(2rem,5.5vw,3.25rem)] font-black leading-[0.95]",
          tone === "light" && "text-white",
          tone === "dark" && "text-brand-blue",
          tone === "ink" && "text-brand-ink",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-white/90" : "text-brand-ink/80",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
