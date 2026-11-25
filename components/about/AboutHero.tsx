import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { TornDivider } from "@/components/shared/TornDivider";
import { Doodle } from "@/components/shared/Doodle";

export function AboutHero() {
  return (
    <section className="grain-ink relative flex min-h-130 items-center overflow-hidden bg-ink text-cream md:min-h-160">
      <Image
        src="/images/about-hero.jpg"
        alt="The Pedal Pals shopfront at night"
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-ink/80 via-ink/40 to-ink/70" />

      <Container className="relative z-20 py-24 text-center md:py-32">
        <div className="relative inline-block">
          <h1 className="-rotate-2 font-display text-7xl tracking-wide text-cream sm:text-8xl lg:text-[9rem]">
            ABOUT US
          </h1>
          <Doodle
            name="crown"
            className="absolute -right-12 -top-6 w-16 rotate-65 text-brand-amber sm:-right-24 sm:-top-8 sm:w-24"
          />
        </div>
        <p className="mx-auto mt-6 max-w-3xl font-heading text-xl font-semibold tracking-wide text-cream sm:text-2xl md:text-3xl">
          More than a bike shop. A community for every cyclist.
        </p>
      </Container>

      <TornDivider
        overlay
        from="ink"
        to="cream"
        variant="b"
        className="absolute inset-x-0 bottom-0 z-30"
      />
    </section>
  );
}
