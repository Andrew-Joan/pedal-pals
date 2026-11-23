import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { TornDivider } from "@/components/shared/TornDivider";

const brands = ["Shimano", "SRAM", "Specialized", "Cannondale", "Trek"];

export function BrandsRow() {
  return (
    <section className="bg-cream text-ink pt-16 sm:pt-20 pb-0">
      <Container>
        <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-10">
          <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-brand-amber font-semibold">
            Our Brands
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 pb-12 sm:pb-16">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/shop?brand=${brand.toLowerCase()}`}
              className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-ink/70 hover:text-ink hover:text-brand-amber transition-colors"
            >
              {brand}
            </Link>
          ))}
        </div>
      </Container>

      <TornDivider from="cream" to="ink" seed={19} flip />
    </section>
  );
}
