import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";
import { shopCategoryHref } from "@/lib/routes";

const categories = [
  { name: "Bikes", image: "/images/categories/bikes.jpg" },
  { name: "Groupsets", image: "/images/categories/groupsets.jpg" },
  { name: "Wheels", image: "/images/categories/wheels.jpg" },
  { name: "Accessories", image: "/images/categories/accessories.jpg" },
];

export function FeaturedCategories() {
  return (
    <section className="grain-cream relative overflow-hidden bg-cream pb-28 pt-16 text-ink sm:pb-36 sm:pt-20">
      {/* Ink in the corners and margins. */}
      <InkSplatter
        tone="ink"
        variant={9}
        className="-left-12 top-4 w-72 opacity-60"
      />
      <InkSplatter
        tone="ink"
        variant={14}
        flip
        className="-right-16 bottom-24 w-72 opacity-60"
      />
      <InkSplatter
        tone="ink"
        variant={12}
        className="right-[30%] top-6 hidden w-20 opacity-80 lg:block"
      />

      {/* Doodles in the top and bottom bands, away from the cards. */}
      <Doodle
        name="crown-3"
        className="absolute right-[7%] top-10 hidden w-24 rotate-12 text-brand-amber lg:block"
      />
      <Doodle
        name="sparkle-1"
        className="absolute left-[46%] top-12 hidden w-8 text-brand-amber lg:block"
      />
      <Doodle
        name="tangle-1"
        className="absolute bottom-10 left-[5%] hidden w-44 lg:block"
      />
      <Doodle
        name="zigzag-3"
        className="absolute bottom-16 left-[42%] hidden w-44 text-brand-amber/80 lg:block"
      />
      <Doodle
        name="arrow-3"
        className="absolute bottom-12 right-10 hidden w-24 -rotate-12 lg:block"
      />
      <Doodle
        name="spiral-1"
        className="absolute left-[1%] top-[40%] hidden w-24 2xl:block"
      />

      <Container className="relative z-10">
        <div className="relative inline-block">
          <SectionHeading title="Featured Categories" color="amber" />
          <Doodle
            name="star-4"
            className="absolute -right-14 -top-5 w-12 rotate-12 text-brand-amber sm:-right-20 sm:w-16"
          />
          <Doodle
            name="sparkle-4"
            className="absolute -right-28 top-4 hidden w-8 text-brand-amber sm:block"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={shopCategoryHref(category.name)}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-paper shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-5/4 w-full overflow-hidden bg-ink-soft">
                <Image
                  src={category.image}
                  alt={`${category.name} category`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-auto flex items-center justify-between p-6 sm:p-8">
                <span className="font-heading text-2xl font-bold uppercase tracking-wide text-ink transition-colors group-hover:text-brand-amber sm:text-3xl">
                  {category.name}
                </span>
                <ArrowRight className="h-6 w-6 text-brand-amber transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
