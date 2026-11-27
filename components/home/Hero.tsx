import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { TornDivider } from "@/components/shared/TornDivider";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";
import { routes } from "@/lib/routes";

export function Hero() {
  return (
    <section className="relative flex min-h-140 items-center overflow-hidden bg-ink text-cream md:min-h-190">
      <Image
        src="/images/hero.jpg"
        alt="Mountain biker riding a ridge in front of a large moon"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Fade keeps the text readable and blends the photo into the dark. */}
      {/* <div className="absolute inset-0 z-10 bg-linear-to-r from-ink via-ink/70 to-transparent" /> */}

      {/* Spray and ink behind and around the title. */}
      <InkSplatter
        tone="cream"
        variant={15}
        className="-left-10 top-16 z-10 hidden w-136 opacity-50 md:block"
      />
      <InkSplatter
        tone="amber"
        variant={12}
        className="bottom-[22%] right-[14%] z-10 hidden w-24 opacity-70 lg:block"
      />

      {/* Doodles scattered over the dark and the photo (large screens). */}
      <Doodle
        name="sparkle-1"
        className="absolute left-[5%] top-[16%] z-20 hidden w-10 text-cream/80 lg:block"
      />
      <Doodle
        name="sparkle-3"
        className="absolute left-[40%] top-[12%] z-20 hidden w-14 -rotate-12 text-cream/60 lg:block"
      />
      <Doodle
        name="sparkle-2"
        className="absolute right-[34%] top-[8%] z-20 hidden w-8 text-cream/70 lg:block"
      />
      <Doodle
        name="star-5"
        className="absolute right-[8%] top-[46%] z-20 hidden w-9 rotate-12 text-brand-amber xl:block"
      />

      <Container className="relative z-20 py-24 md:py-36">
        <div className="relative w-fit">
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

        <div className="relative mt-8 w-fit">
          <p className="-rotate-2 font-heading text-2xl uppercase tracking-wider text-cream/90 sm:text-3xl md:text-4xl">
            Ride more. Ride together.
          </p>
          <Doodle
            name="dash-3"
            className="absolute -bottom-12 left-0 w-3/4 -rotate-2 text-brand-amber"
          />
        </div>

        <div className="mt-14">
          <ButtonLink href={routes.shop} variant="cream" size="lg">
            Shop Now →
          </ButtonLink>
        </div>

        <Doodle
          name="arrow-12"
          className="absolute bottom-22 left-72 hidden w-22 -rotate-12 text-cream/70 lg:block"
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
