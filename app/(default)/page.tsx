export const metadata = {
  title: "Kıblegâh",
  description: "Namaz Vakitleri",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import AboutProject from "@/components/about_project";
export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <AboutProject />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
