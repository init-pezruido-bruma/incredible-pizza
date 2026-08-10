import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { FullImage } from "@/components/ui/full-image";
import { HeroParallaxImage } from "@/components/ui/hero-parallax-image";
import { Reveal } from "@/components/ui/reveal";
import { HoursBanner } from "@/components/home/hours-banner";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Juegos Increíbles en Monterrey`,
  },
  description:
    "Conoce nuestros Juegos Increíbles: tickets, premios, buffet, fiestas y atracciones en Incredible Pizza Monterrey.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Buffet Ilimitado",
    description:
      "Disfruta el buffet ilimitado. Come, merienda y cena todo por un mismo precio, contamos con buffet de postres, pizzas, sopas y ensaladas. Además bebidas ilimitadas como café, té y refrescos.",
    image: "/images/home/card-buffet.jpg",
    width: 1700,
    height: 1700,
    href: "/menu",
  },
  {
    title: "Juegos y Atracciones",
    description:
      "Pasa un excelente día en nuestra increíble área de juegos y atracciones, contamos con máquina de tickets, video juegos, go karts, laser tag, mini golf, mini boliche, resbaladeros gigantes y mucho más.",
    image: "/images/home/card-juegos.jpg",
    width: 1700,
    height: 1700,
    href: "/juegos",
  },
  {
    title: "Comida para llevar",
    description:
      "Contamos con un menú exclusivo con comida para llevar, llama, ordena y recoge en sucursal, pide a domicilio (área limitada con costo extra) o encuéntranos en tu App de delivery favorita.",
    image: "/images/home/card-togo.jpg",
    width: 1700,
    height: 1700,
    href: "/menu",
  },
] as const;

const gallery = [
  { src: "/images/home/gallery-1.jpg", alt: "Cumpleaños en Incredible Pizza" },
  { src: "/images/home/gallery-2.jpg", alt: "Amigos en Incredible Pizza" },
  { src: "/images/home/gallery-3.jpg", alt: "Trampolines" },
  { src: "/images/home/gallery-4.jpg", alt: "Arcade en familia" },
  { src: "/images/home/gallery-5.jpg", alt: "Máquina de tickets" },
] as const;

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — foto a altura natural en móvil; en desktop iguala el panel de texto */}
      <section className="relative overflow-hidden bg-[#1a2b56]">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[280px] overflow-hidden bg-[#1a2038] sm:min-h-[320px] lg:min-h-0">
            <HeroParallaxImage
              src="/images/home/hero-juegos-increibles.jpg"
              alt="Niño celebrando su cumpleaños frente a la Incredible Wheel of Fun"
              width={2852}
              height={4340}
              sizes="(max-width:1024px) 100vw, 960px"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent lg:h-32" />
          </div>

          <div className="relative flex min-h-[34rem] flex-col justify-center bg-gradient-to-b from-[#6a3f5c] via-[#3f508f] to-[#2b5899] px-6 py-16 sm:min-h-[38rem] sm:px-10 sm:py-[4.75rem] lg:min-h-[48rem] lg:px-12 lg:py-24 xl:min-h-[53rem] xl:px-16">
            <div className="mx-auto w-full max-w-lg lg:mx-0">
              <p className="hero-copy-in text-xs font-bold uppercase tracking-[0.22em] text-white sm:text-sm">
                Conoce nuestros
              </p>
              <h1 className="hero-copy-in hero-copy-in-delay-1 mt-2 font-display text-[clamp(2.75rem,7vw,4.15rem)] font-black leading-[0.9] text-white">
                Juegos
                <br />
                Increíbles
              </h1>
              <p className="hero-copy-in hero-copy-in-delay-2 mt-5 max-w-[38ch] text-base leading-relaxed text-white/95 sm:text-lg">
                Demuestra tu destreza con nuestros juegos, con los que podrás obtener montones de
                tickets electrónicos. Lo mejor es que puedes cambiar tus tickets por grandiosos
                premios en nuestro mostrador de redención.
              </p>
              <div className="hero-copy-in hero-copy-in-delay-3 mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-h-12 w-full border-2 border-white px-8 text-base text-white sm:w-auto"
                >
                  <Link href="/juegos">Ver más</Link>
                </Button>
                <Button asChild size="lg" className="min-h-12 w-full border-2 border-black px-8 text-base sm:w-auto">
                  <Link href="/menu">Compra aquí</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2+3. Horarios + Fiesta (foto se mete bajo el ángulo del banner) */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative z-20">
          <HoursBanner />
        </div>

        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <Reveal className="order-2 flex flex-col items-start justify-center space-y-6 bg-white px-5 pb-14 pt-10 sm:px-8 lg:order-1 lg:min-h-[36rem] lg:px-12 lg:pb-16 lg:pt-12 xl:px-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2b5899] sm:text-sm">
                Celebra con nosotros tu
              </p>
              <h2 className="mt-2 font-display text-[clamp(3.25rem,9vw,5.75rem)] font-black leading-[0.9] text-[#2b5899]">
                Fiesta
                <br />
                Increíble
              </h2>
            </div>
            <Button
              asChild
              variant="outlineDark"
              size="xl"
              className="h-auto w-fit self-start rounded-full border-2 border-black bg-white px-8 py-3.5 text-base font-extrabold uppercase tracking-wide text-black hover:bg-brand-ink hover:text-white sm:px-10 sm:py-4 sm:text-lg"
            >
              <Link href="/fiestas">Envía tu solicitud</Link>
            </Button>
          </Reveal>

          <div className="relative order-1 z-10 min-h-[380px] overflow-hidden sm:min-h-[460px] lg:order-2 lg:min-h-[36rem] lg:-mt-[clamp(3.5rem,6vw,5.5rem)] xl:min-h-[40rem]">
            <HeroParallaxImage
              src="/images/home/fiesta-increible.jpg"
              alt="Niño disfrutando su fiesta en Incredible Pizza"
              width={3592}
              height={3516}
              sizes="(max-width:1024px) 100vw, 50vw"
              priority={false}
              quality={90}
              objectPosition="center top"
            />
          </div>
        </div>
      </section>

      {/* 4. Cards — buffet / juegos / to-go */}
      <section className="bg-brand-red py-12 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 lg:px-10">
          {services.map((item, i) => (
            <Reveal key={item.title} as="article" delay={i * 80} className="flex flex-col">
              <div className="hover-lift relative aspect-square w-full overflow-hidden rounded-3xl bg-brand-red">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 360px"
                  quality={90}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 font-display text-[clamp(1.5rem,3.2vw,1.85rem)] font-black text-brand-yellow">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-white/95">{item.description}</p>
              <Button
                asChild
                variant="secondary"
                size="default"
                className="mt-4 min-h-10 w-full border-2 border-white bg-white px-6 text-brand-ink hover:bg-white/90 sm:w-fit"
              >
                <Link href={item.href}>Ver más</Link>
              </Button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Rápido y Furioso */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]">
          <Image
            src="/images/home/rapido-y-furioso.jpg"
            alt="Madre e hijo en go-kart Rápido y Furioso"
            width={3840}
            height={1680}
            sizes="100vw"
            quality={90}
            priority={false}
            className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
          />
          {/* Oscurece solo la zona del copy; la foto del kart queda limpia */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent lg:via-black/30" />
          <div className="relative mx-auto flex min-h-[320px] max-w-6xl items-center px-5 py-10 sm:min-h-[400px] sm:px-8 lg:min-h-[480px] lg:px-10">
            <Reveal className="max-w-md space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-yellow sm:text-sm">
                ¿Estás listo para la velocidad y la emoción de
              </p>
              <h2 className="font-display text-[clamp(2.2rem,5.5vw,3.4rem)] font-black leading-none">
                Rápido y Furioso?
              </h2>
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                Únete a la acción y utiliza nuestro hashtag #IncredibleRápidoYFurioso para compartir
                tus momentos favoritos del juego.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-11 w-full border-2 border-white px-8 text-white sm:w-auto"
              >
                <Link href="/juegos">Ver más</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Galería */}
      <section className="bg-gradient-to-b from-[#fff8e0] via-[#f5d84a] to-[#f5d84a] py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5 sm:gap-3.5">
              {gallery.map((item) => (
                <FullImage
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  width={480}
                  height={583}
                  sizes="(max-width:640px) 33vw, 18vw"
                  maxHeightClass="max-h-[150px] sm:max-h-[190px] lg:max-h-[210px]"
                  rounded="rounded-[1.25rem] sm:rounded-[1.5rem]"
                  className="shadow-lg"
                />
              ))}
            </div>
          </Reveal>
          <div className="mt-5 flex justify-center gap-2" aria-hidden>
            {gallery.map((_, i) => (
              <span
                key={i}
                className={`rounded-full bg-white shadow-sm ${i === 2 ? "size-2.5" : "size-2 opacity-75"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Equipo — bowtie azul sobre amarillo */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f5d84a] via-[#f0c83a] to-[#6ba3d4] py-14 sm:py-20">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center">
          <Reveal className="relative w-full max-w-xl">
            <div className="bowtie-shape relative mx-auto bg-[#1e4f9c] px-8 py-10 text-white shadow-2xl sm:px-14 sm:py-12">
              <p className="font-display text-base font-black uppercase tracking-wide text-brand-yellow sm:text-lg">
                Únete a nuestro
              </p>
              <h2 className="mt-1 font-display text-[clamp(2rem,6vw,3.25rem)] font-black uppercase leading-none">
                Equipo Increíble
              </h2>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-6 min-h-11 w-full border-2 border-white px-8 text-white sm:w-auto"
              >
                <Link href="/contacto">Envía tu solicitud</Link>
              </Button>
            </div>

            <Image
              src="/images/home/staff-circle.jpg"
              alt="Equipo Incredible Pizza"
              width={900}
              height={900}
              sizes="112px"
              className="absolute -left-2 bottom-0 z-20 size-[4.5rem] rounded-full border-[5px] border-brand-yellow object-contain shadow-lg sm:-left-8 sm:size-24 sm:border-[6px] md:size-28"
            />
            <Image
              src="/images/home/staff-checkered.jpg"
              alt="Staff Incredible Pizza"
              width={900}
              height={900}
              sizes="112px"
              className="absolute -right-2 top-0 z-20 size-[4.5rem] rounded-full border-[5px] border-white object-contain shadow-lg [border-style:double] sm:-right-8 sm:size-24 sm:border-[6px] md:size-28"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
