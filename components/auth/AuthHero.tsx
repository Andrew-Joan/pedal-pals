import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { BrushUnderline } from "@/components/shared/BrushUnderline";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";
import { TornDivider } from "@/components/shared/TornDivider";

interface AuthHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  /** The card (login or register) shown under the title. */
  children: ReactNode;
}

export function AuthHero({
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: AuthHeroProps) {
  return (
    <section className="grain-ink relative flex flex-1 flex-col justify-center overflow-hidden bg-ink text-cream">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark at the top for the title, lighter through the middle so the photo shows. */}
      <div className="absolute inset-0 bg-linear-to-b from-ink/85 via-ink/35 to-ink/80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent" />

      {/* Torn dark edge hanging from the header. */}
      <TornDivider
        overlay
        paper="above"
        from="ink"
        to="ink"
        variant="c"
        className="absolute inset-x-0 top-0 z-10"
      />
      <InkSplatter
        tone="amber"
        variant={11}
        flip
        className="-right-6 bottom-6 z-10 hidden w-52 opacity-15 md:block"
      />

      <Doodle
        name="arrow-1"
        className="absolute left-6 top-24 z-10 hidden w-20 -rotate-12 text-cream/60 lg:block"
      />
      <Doodle
        name="star-3"
        className="absolute right-10 top-28 z-10 hidden w-10 rotate-12 text-brand-amber lg:block"
      />
      <Doodle
        name="sparkle-1"
        className="absolute left-[22%] top-[22%] z-10 hidden w-10 text-cream/80 lg:block"
      />
      <Doodle
        name="tangle-2"
        className="absolute bottom-10 left-10 z-10 hidden w-36 text-cream/25 lg:block"
      />

      <Container className="relative z-20 py-16 sm:py-20">
        <div className="text-center">
          <div className="relative inline-block -rotate-2">
            <h1 className="font-display text-6xl tracking-wide text-cream drop-shadow-2xl sm:text-7xl lg:text-8xl">
              {title}
            </h1>
            <BrushUnderline
              variant={1}
              className="mx-auto mt-2 h-4 w-60 text-brand-amber sm:w-80"
            />
          </div>
          <p className="-rotate-1 font-display text-2xl text-cream drop-shadow-lg sm:text-3xl">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-lg">{children}</div>
      </Container>
    </section>
  );
}
