import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";
import { routes } from "@/lib/routes";

export function CommunityCta() {
  return (
    <section className="grain-cream relative overflow-hidden bg-cream pb-24 pt-12 text-ink sm:pb-32 sm:pt-16">
      <InkSplatter
        tone="ink"
        variant={13}
        className="-right-10 bottom-4 hidden w-52 lg:block"
      />

      <Doodle
        name="crown-5"
        className="absolute left-[10%] top-12 hidden w-28 -rotate-12 opacity-80 xl:block"
      />
      <Doodle
        name="heart-2"
        className="absolute right-[14%] top-14 hidden w-12 rotate-12 text-brand-amber md:block"
      />
      <Doodle
        name="zigzag"
        className="absolute bottom-16 left-[18%] hidden w-32 text-brand-amber/80 sm:block"
      />

      <Container className="relative z-10">
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-heading text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl">
            We host weekly group rides, workshops, and events for all levels,
            from beginner to pro. Come join us and become part of the crew.
          </p>
          <ButtonLink
            href={routes.contact}
            variant="ink"
            size="lg"
            className="mt-10"
          >
            JOIN THE COMMUNITY RIDE →
          </ButtonLink>
          <Doodle
            name="arrow-4"
            className="absolute -right-4 bottom-0 hidden w-24 rotate-12 text-brand-amber sm:block"
          />
        </div>
      </Container>
    </section>
  );
}
