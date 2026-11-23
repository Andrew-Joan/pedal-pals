import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export function UpgradePromo() {
  return (
    <section className="bg-ink text-cream py-16 sm:py-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-cream">
              UPGRADE YOUR RIDE
            </h2>
            <p className="font-body text-cream/80 text-lg sm:text-xl">
              Premium gear. Unbeatable performance.
            </p>
            <Link href="/shop?category=groupsets">
              <Button variant="cream">Explore Gear →</Button>
            </Link>
          </div>

          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-lg border border-cream/10">
            <Image
              src="/images/upgrade.jpg"
              alt="Close-up of bicycle drivetrain components for upgrade"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
