import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function BrandLogo({
  className,
  href = "/",
  priority,
  width = 200,
  height = 166,
}: BrandLogoProps) {
  const image = (
    <Image
      src="/images/brand/logo-circle.png"
      alt="Incredible Food and Fun"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-[110px] sm:w-[140px] lg:w-[160px]", className)}
    />
  );

  if (!href) return image;
  return (
    <Link
      href={href}
      className="relative z-20 inline-flex shrink-0"
      aria-label="Incredible Pizza — Inicio"
    >
      {image}
    </Link>
  );
}
