import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { Doodle } from "@/components/shared/Doodle";

export function CommunityCta() {
  return (
    <section className="grain-cream relative overflow-hidden bg-cream pb-24 pt-12 text-ink sm:pb-32 sm:pt-16">
      <Container className="relative z-10">
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-heading text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl">
            We host weekly group rides, workshops, and events for all levels,
            from beginner to pro. Come join us and become part of the crew.
          </p>
          <ButtonLink href="/contact" variant="ink" size="lg" className="mt-10">
            JOIN THE COMMUNITY RIDE →
          </ButtonLink>
          <Doodle
            name="arrow-4"
            className="absolute -right-4 bottom-0 hidden w-24 rotate-12 text-brand-amber lg:block"
          />
        </div>
      </Container>
    </section>
  );
}
