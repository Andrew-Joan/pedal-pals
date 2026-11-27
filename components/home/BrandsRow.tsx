import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";
import { shopBrandHref } from "@/lib/routes";

const brands = ["Shimano", "SRAM", "Specialized", "Cannondale", "Trek"];

export function BrandsRow() {
  return (
    <section className="grain-cream relative overflow-hidden bg-cream pt-20 text-ink sm:pt-28">
      <InkSplatter
        tone="ink"
        variant={5}
        className="-right-12 top-0 w-56 opacity-60"
      />
      <InkSplatter
        tone="ink"
        variant={7}
        className="-left-6 bottom-24 hidden w-44 lg:block"
      />

      <Doodle
        name="crown-5"
        className="absolute left-[6%] top-10 hidden w-24 -rotate-12 lg:block"
      />
      <Doodle
        name="sparkle-4"
        className="absolute right-[12%] top-12 hidden w-10 text-brand-amber lg:block"
      />
      <Doodle
        name="zigzag-2"
        className="absolute left-[44%] top-8 hidden w-32 text-brand-amber/70 lg:block"
      />
      <Doodle
        name="tangle-3"
        className="absolute bottom-24 left-[46%] hidden w-40 opacity-40 lg:block"
      />

      <Container className="relative z-10">
        <div className="relative mb-8 inline-block sm:mb-12">
          <div className="font-heading font-semibold uppercase tracking-widest text-brand-amber sm:text-2xl">
            Our Brands
          </div>
          <Doodle
            name="dash-4"
            className="w-full text-brand-amber"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pb-24 sm:justify-between sm:pb-32">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={shopBrandHref(brand)}
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
