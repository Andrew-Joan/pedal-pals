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
        variant={7}
        className="-left-14 bottom-10 w-64 opacity-80"
      />
      <InkSplatter
        tone="ink"
        variant={13}
        className="bottom-6 right-[4%] hidden w-40 opacity-80 lg:block"
      />
      <Doodle
        name="tangle-2"
        className="absolute bottom-8 left-[40%] hidden w-40 lg:block"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="relative inline-block">
              <SectionHeading title="Our Story" color="amber" />
              <Doodle
                name="sparkle-4"
                className="absolute -right-12 -top-2 w-9 text-brand-amber"
              />
            </div>
            <div className="grid gap-6 text-lg leading-relaxed text-ink sm:grid-cols-2 sm:gap-8">
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
            <Doodle name="arrow-9" className="mt-6 w-8" />
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
              name="star-5"
              className="absolute -right-6 -top-8 w-12 rotate-12 text-brand-amber"
            />
            <Doodle
              name="sparkle-3"
              className="absolute -bottom-8 -left-8 w-12 text-brand-amber"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
