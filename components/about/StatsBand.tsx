import { CalendarDays, HeartHandshake, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { TornDivider } from "@/components/shared/TornDivider";
import { InkSplatter } from "@/components/shared/InkSplatter";
import { Doodle } from "@/components/shared/Doodle";
import { cn } from "@/lib/utils";

const stats = [
  { icon: Users, value: "5k+", label: "Happy Customers" },
  { icon: CalendarDays, value: "10+", label: "Years Experience" },
  { icon: HeartHandshake, value: "1", label: "Community" },
];

export function StatsBand() {
  return (
    <section className="grain-ink relative overflow-hidden bg-ink py-36 text-cream sm:py-48">
      <TornDivider
        overlay
        from="cream"
        to="ink"
        variant="a"
        flip
        className="absolute inset-x-0 top-0 z-20"
      />

      <InkSplatter
        tone="cream"
        variant={10}
        className="left-[8%] top-1/3 w-96 opacity-20"
      />
      <InkSplatter
        tone="cream"
        variant={6}
        className="-right-10 top-16 w-56 opacity-20"
      />

      <Doodle
        name="sparkle-3"
        className="absolute bottom-[30%] left-[6%] hidden w-14 text-brand-amber/70 lg:block"
      />
      <Doodle
        name="sparkle-1"
        className="absolute right-[8%] top-[34%] hidden w-10 text-cream/60 lg:block"
      />
      <Doodle
        name="star-8"
        className="absolute left-[44%] top-[22%] hidden w-8 rotate-12 text-cream/40 lg:block"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-14 text-center sm:grid-cols-3 sm:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center px-6",
                index > 0 &&
                  "sm:border-l-[3px] sm:border-dotted sm:border-brand-amber/60",
              )}
            >
              <stat.icon
                className="h-14 w-14 text-brand-amber"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="mt-4 font-heading text-7xl font-bold sm:text-8xl">
                {stat.value}
              </p>
              <p className="mt-2 font-heading text-xl uppercase tracking-wide text-cream/90 sm:text-2xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <TornDivider
        overlay
        from="ink"
        to="cream"
        variant="c"
        className="absolute inset-x-0 bottom-0 z-20"
      />
    </section>
  );
}
