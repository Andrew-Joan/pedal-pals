import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TornDivider } from "@/components/shared/TornDivider";
import { Button } from "@/components/shared/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="bg-ink text-cream py-20">
        <Container className="text-center">
          <h1 className="font-display text-4xl sm:text-6xl tracking-wider text-brand-amber mb-4">
            PEDAL PALS
          </h1>
          <p className="font-heading text-xl sm:text-2xl uppercase tracking-wider text-cream/90 max-w-2xl mx-auto">
            Ride More. Ride Together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="cream">Shop Now →</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </Container>
      </section>

      <TornDivider from="ink" to="cream" />

      <section className="bg-cream text-ink py-20 flex-1">
        <Container>
          <SectionHeading
            title="Shared Components Showcase"
            subtitle="Testing design system tokens, typography, and button variants."
            centered
            color="amber"
          />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2 p-6 bg-paper rounded-2xl shadow-sm border border-ink/5">
              <span className="text-sm font-semibold mb-2">Ink Variant</span>
              <Button variant="ink">Shop Bikes →</Button>
            </div>

            <div className="flex flex-col items-center gap-2 p-6 bg-ink text-cream rounded-2xl shadow-sm">
              <span className="text-sm font-semibold mb-2 text-cream">
                Cream Variant
              </span>
              <Button variant="cream">Explore Gear →</Button>
            </div>

            <div className="flex flex-col items-center gap-2 p-6 bg-paper rounded-2xl shadow-sm border border-ink/5">
              <span className="text-sm font-semibold mb-2">
                Outline Variant
              </span>
              <Button variant="outline">Learn More</Button>
            </div>

            <div className="flex flex-col items-center gap-2 p-6 bg-paper rounded-2xl shadow-sm border border-ink/5">
              <span className="text-sm font-semibold mb-2">Amber Variant</span>
              <Button variant="amber">Book Now →</Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer variant="full" />
    </div>
  );
}
