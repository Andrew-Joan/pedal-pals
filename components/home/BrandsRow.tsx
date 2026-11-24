import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";

const brands = ["Shimano", "SRAM", "Specialized", "Cannondale", "Trek"];

export function BrandsRow() {
  return (
    <section className="grain-cream relative overflow-hidden bg-cream pt-20 text-ink sm:pt-28">
      <InkSplatter
        tone="ink"
        variant={5}
        className="-right-12 top-0 w-56 opacity-10"
      />
      <Doodle
        name="scribble-2"
        className="absolute left-10 top-8 hidden w-32 text-ink/15 lg:block"
      />

      <Container className="relative z-10">
        <p className="mb-8 text-center font-heading text-sm font-semibold uppercase tracking-widest text-brand-amber sm:mb-12 sm:text-left sm:text-base">
          Our Brands
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 pb-24 sm:justify-between sm:pb-32">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/shop?brand=${brand.toLowerCase()}`}
              className="font-heading text-3xl font-bold uppercase tracking-wide text-ink/70 transition-colors hover:text-brand-amber sm:text-4xl md:text-5xl"
            >
              {brand}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}