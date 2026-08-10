import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-extrabold uppercase tracking-wide transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-yellow text-brand-ink border-2 border-brand-ink shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:brightness-105",
        secondary:
          "bg-white text-brand-ink border-2 border-brand-ink hover:bg-brand-cream",
        outline:
          "bg-transparent text-white border-2 border-white hover:bg-white/10",
        outlineDark:
          "bg-transparent text-brand-ink border-2 border-brand-ink hover:bg-brand-ink hover:text-white",
        red: "bg-brand-red text-white border-2 border-brand-ink hover:brightness-110",
        green:
          "bg-brand-whatsapp text-white border-2 border-brand-ink hover:brightness-110",
        ghost: "bg-transparent text-inherit hover:opacity-80",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
