import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

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
    <section className="bg-cream text-ink pt-16 sm:pt-24 pb-0">
      <Container>
        <div className="flex items-center gap-3">
          <SectionHeading title="Featured Categories" color="amber" />
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 sm:w-8 sm:h-8 text-brand-amber rotate-12 -mt-6 sm:-mt-8 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 sm:pb-24">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group bg-paper rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-ink/5 flex flex-col"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-ink-soft">
                <Image
                  src={category.image}
                  alt={`${category.name} category`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex items-center justify-between mt-auto">
                <span className="font-heading text-xl font-bold uppercase tracking-wide text-ink group-hover:text-brand-amber transition-colors">
                  {category.name}
                </span>
                <ArrowRight className="w-5 h-5 text-ink group-hover:text-brand-amber group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
