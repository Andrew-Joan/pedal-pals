import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { UpgradePromo } from "@/components/home/UpgradePromo";
import { BrandsRow } from "@/components/home/BrandsRow";
import { Footer } from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <UpgradePromo />
      <BrandsRow />
      <Footer variant="full" />
    </>
  );
}
