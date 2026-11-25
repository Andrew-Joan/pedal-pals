import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { StatsBand } from "@/components/about/StatsBand";
import { CommunityCta } from "@/components/about/CommunityCta";
import { TornDivider } from "@/components/shared/TornDivider";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "About Us | Pedal Pals",
  description:
    "More than a bike shop. Pedal Pals is a community for every cyclist in Jakarta.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <OurStory />
        <StatsBand />
        <CommunityCta />
      </main>
      <TornDivider from="cream" to="ink" variant="b" flip />
      <Footer variant="slim" />
    </>
  );
}
