import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";

const categories = [
  {
    name: "Bikes",
    href: "/shop?category=bikes",
    image: "/images/categories/bikes.jpg",
  },
  {
    name: "Groupsets",
    href: "/shop?category=groupsets",
    image: "/images/categories/groupsets.jpg",
  },
  {
    name: "Wheels",
    href: "/shop?category=wheels",
    image: "/images/categories/wheels.jpg",
  },
  {
    name: "Accessories",
    href: "/shop?category=accessories",
    image: "/images/categories/accessories.jpg",
  },
];

export function FeaturedCategories() {
  return (
    <section className="grain-cream relative overflow-hidden bg-cream pb-28 pt-16 text-ink sm:pb-36 sm:pt-20">
      <InkSplatter
        tone="ink"
        variant={2}
        className="-left-16 top-10 w-64 opacity-10"
      />
      <InkSplatter
        tone="ink"
        variant={6}
        flip
        className="-right-10 bottom-32 w-56 opacity-20"
      />

      <Container className="relative z-10">
        <div className="relative inline-block">
          <SectionHeading title="Featured Categories" color="amber" />
          <Doodle
            name="star-2"
            className="absolute -right-14 -top-4 w-12 rotate-12 text-brand-amber sm:-right-20 sm:w-16"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
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

      <Doodle
        name="arrow-3"
        className="absolute bottom-12 right-10 hidden w-24 -rotate-12 text-ink/20 lg:block"
      />
    </section>
  );
}
