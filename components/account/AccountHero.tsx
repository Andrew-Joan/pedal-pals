import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { BrushUnderline } from "@/components/shared/BrushUnderline";
import { Doodle } from "@/components/shared/Doodle";

interface AccountHeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  children: ReactNode;
}

export function AccountHero({
  title = "MY ACCOUNT",
  subtitle = "Welcome back, rider!",
  image = "/images/auth-login.jpg",
  imageAlt = "Pedal Pals rider at sunset",
  children,
}: AccountHeroProps) {
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

      <Doodle
        name="arrow-1"
        className="absolute left-6 top-20 hidden w-20 -rotate-12 text-cream/50 lg:block"
      />
      <Doodle
        name="star-3"
        className="absolute right-10 top-24 hidden w-10 rotate-12 text-brand-amber/80 lg:block"
      />
      <Doodle
        name="scribble-2"
        className="absolute bottom-10 left-10 hidden w-28 text-cream/30 lg:block"
      />

      <Container className="relative z-10 py-16 sm:py-20">
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

        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
