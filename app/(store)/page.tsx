import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { UpgradePromo } from "@/components/home/UpgradePromo";
import { BrandsRow } from "@/components/home/BrandsRow";
import { TornDivider } from "@/components/shared/TornDivider";
import { Footer } from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <TornDivider from="cream" to="ink" seed={30} flip />
      <UpgradePromo />
      <TornDivider from="ink" to="cream" seed={11} />
      <BrandsRow />
      <Footer variant="full" />
    </>
  );
}
