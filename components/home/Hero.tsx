import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { TornDivider } from "@/components/shared/TornDivider";

export function Hero() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden min-h-130 md:min-h-160 flex flex-col justify-between">
      <Image
        src="/images/hero.jpg"
        alt="Mountain biker against the moon"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-transparent z-10" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-ink to-transparent z-10" />

      <Container className="relative z-20 my-auto py-16 sm:py-24 flex flex-col items-start gap-6">
        <div className="relative inline-block">
          <h1 className="font-display text-7xl md:text-9xl tracking-wider text-cream">
            PEDAL PALS
          </h1>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute -top-4 -right-6 sm:-top-6 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 text-brand-amber rotate-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 18L4 8L9 12L12 4L15 12L20 8L22 18H2Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <p className="font-heading text-xl sm:text-2xl md:text-3xl uppercase tracking-wider text-cream/90 -rotate-2 origin-left">
          RIDE MORE. RIDE TOGETHER.
        </p>

        <Link href="/shop">
          <Button variant="cream">Shop Now →</Button>
        </Link>
      </Container>

      <div className="relative z-20">
        <TornDivider from="ink" to="cream" />
      </div>
    </section>
  );
}
