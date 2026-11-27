import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { TornDivider } from "@/components/shared/TornDivider";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";
import { shopCategoryHref } from "@/lib/routes";

export function UpgradePromo() {
  return (
    <section className=" relative flex min-h-150 items-center overflow-hidden bg-ink text-cream md:min-h-190">
      <Image
        src="/images/upgrade.jpg"
        alt="Close-up of a bicycle chain and cassette"
        fill
        sizes="100vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 z-10 bg-linear-to-r from-ink/80 via-ink/60 to-transparent" />

      <TornDivider
        overlay
        from="cream"
        to="ink"
        variant="b"
        flip
        className="absolute inset-x-0 top-0 z-20"
      />

      <InkSplatter
        tone="amber"
        variant={11}
        className="left-[34%] top-20 z-10 w-56 opacity-90"
      />
      <Doodle
        name="sparkle-2"
        className="absolute left-[46%] top-[34%] z-20 hidden w-10 text-cream/80 lg:block"
      />
      <Doodle
        name="star-7"
        className="absolute bottom-[24%] left-[40%] z-20 hidden w-10 -rotate-12 text-brand-amber lg:block"
      />

      <Container className="relative z-20 py-32 md:py-44">
        <div className="relative max-w-3xl">
          <Doodle
            name="arrow-2"
            className="absolute -top-20 left-0 hidden w-20 -rotate-12 text-brand-amber sm:block"
          />
          <h2 className="-rotate-2 font-display text-6xl leading-[0.9] tracking-wide text-cream sm:text-7xl lg:text-9xl">
            UPGRADE
            <br />
            YOUR RIDE
          </h2>
          <p className="mt-6 font-body text-lg text-cream/85 sm:text-2xl">
            Premium gear. Unbeatable performance.
          </p>
          <div className="relative mt-8 inline-block">
            <ButtonLink
              href={shopCategoryHref("groupsets")}
              variant="cream"
              size="lg"
            >
              Explore Gear →
            </ButtonLink>
            <Doodle
              name="wave-3"
              className="absolute -bottom-9 left-2 hidden w-40 text-brand-amber/90 sm:block"
            />
          </div>
          <Doodle
            name="star-3"
            className="absolute -bottom-10 right-0 hidden w-12 rotate-12 text-brand-amber lg:block"
          />
        </div>
      </Container>

      <TornDivider
        overlay
        from="ink"
        to="cream"
        variant="c"
        className="absolute inset-x-0 bottom-0 z-20"
      />
    </section>
  );
}
