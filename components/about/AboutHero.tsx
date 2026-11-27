import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { TornDivider } from "@/components/shared/TornDivider";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";

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
      {/* Lighter than before, so the warm shop lights show like in the design. */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-ink/55 via-ink/10 to-ink/60" />

      <InkSplatter
        tone="cream"
        variant={8}
        className="-left-10 bottom-16 z-10 w-64 opacity-20"
      />
      <InkSplatter
        tone="amber"
        variant={10}
        flip
        className="-right-10 top-10 z-10 hidden w-96 opacity-15 md:block"
      />

      <Doodle
        name="sparkle-1"
        className="absolute left-[10%] top-[24%] z-20 hidden w-10 text-cream/80 lg:block"
      />
      <Doodle
        name="sparkle-3"
        className="absolute right-[12%] top-[20%] z-20 hidden w-14 -rotate-12 text-cream/70 lg:block"
      />

      <Container className="relative z-20 py-24 text-center md:py-32">
        <div className="relative mx-auto w-fit">
          <h1 className="-rotate-2 font-display text-7xl tracking-wide text-cream drop-shadow-2xl sm:text-8xl lg:text-[9rem]">
            ABOUT US
          </h1>
          <Doodle
            name="crown"
            className="absolute -right-12 -top-6 w-16 rotate-65 text-brand-amber sm:-right-24 sm:-top-8 sm:w-24"
          />
        </div>
        <div className="relative mx-auto mt-6 w-fit">
          <p className="mx-auto max-w-3xl font-heading text-xl font-semibold tracking-wide text-cream drop-shadow-lg sm:text-2xl md:text-3xl">
            More than a bike shop. A community for every cyclist.
          </p>
          <Doodle
            name="dash-2"
            className="absolute w-1/2 -translate-x-1/2 text-brand-amber/90"
          />
        </div>
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
