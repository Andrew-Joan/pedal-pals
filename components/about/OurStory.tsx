import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Doodle } from "@/components/shared/Doodle";
import { InkSplatter } from "@/components/shared/InkSplatter";

export function OurStory() {
  return (
    <section className="grain-cream relative overflow-hidden bg-cream pb-28 pt-12 text-ink sm:pb-40 sm:pt-16">
      <InkSplatter
        tone="ink"
        variant={1}
        className="-left-16 bottom-4 w-64 opacity-10"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading title="Our Story" color="amber" />
            <div className="grid gap-6 text-lg leading-relaxed text-ink/80 sm:grid-cols-2 sm:gap-8">
              <p>
                Pedal Pals was born from a simple belief: cycling is better
                together. What started as a weekend group of riders who shared
                the same passion has grown into a community-driven shop
                dedicated to getting more people on bikes, feeling supported,
                and building connections that last.
              </p>
              <p>
                From our first pop-up repair stand in 2014 to the shop doors
                opening in 2016, we&apos;ve stayed true to one goal: a space
                where every cyclist feels welcome, no matter their pace, their
                bike, or their experience. We&apos;re riders, mechanics, and
                advocates building a community that shows up for each other, for
                the road, and for the trails.
              </p>
            </div>
          </div>

          <div className="relative -rotate-1">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border-4 border-brand-amber/80 shadow-xl">
              <Image
                src="/images/about-story.jpg"
                alt="A group of riders cycling together at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <Doodle
              name="star-1"
              className="absolute -right-6 -top-8 w-12 rotate-12 text-brand-amber"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
