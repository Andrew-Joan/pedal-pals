import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { TornDivider } from "@/components/shared/TornDivider";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";

export function Hero() {
  return (
    <section className="grain-ink relative flex min-h-140 items-center overflow-hidden bg-ink text-cream md:min-h-190">
      <Image
        src="/images/hero.jpg"
        alt="Mountain biker riding a ridge in front of a large moon"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Fades keep the text readable and blend the photo into the dark. */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-ink via-ink/70 to-transparent" />

      <InkSplatter
        tone="cream"
        variant={4}
        className="-left-10 bottom-20 z-10 w-56 opacity-30 md:w-80"
      />

      <Container className="relative z-20 py-24 md:py-36">
        <div className="relative inline-block">
          <h1 className="-rotate-3 font-display text-8xl leading-[0.85] tracking-wide text-cream sm:text-9xl lg:text-[11rem]">
            PEDAL
            <br />
            PALS
          </h1>
          <Doodle
            name="crown"
            className="absolute -right-12 -top-6 w-20 rotate-45 text-brand-amber sm:-right-24 sm:-top-10 sm:w-28"
          />
        </div>

        <p className="mt-8 -rotate-2 font-heading text-2xl uppercase tracking-wider text-cream/90 sm:text-3xl md:text-4xl">
          Ride more. Ride together.
        </p>

        <ButtonLink href="/shop" variant="cream" size="lg" className="mt-8">
          Shop Now →
        </ButtonLink>

        <Doodle
          name="arrow-1"
          className="absolute bottom-24 left-72 hidden w-28 -rotate-12 text-cream/70 lg:block"
        />
        <Doodle
          name="star-1"
          className="absolute right-1/3 top-16 hidden w-10 rotate-12 text-cream/60 lg:block"
        />
      </Container>

      <TornDivider
        overlay
        from="ink"
        to="cream"
        variant="a"
        className="absolute inset-x-0 bottom-0 z-30"
      />
    </section>
  );
}
