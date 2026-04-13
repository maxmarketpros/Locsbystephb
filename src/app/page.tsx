import Hero from "@/components/Hero";
import BrandPromise from "@/components/BrandPromise";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import WhyGetRooted from "@/components/WhyGetRooted";
import Benefits from "@/components/Benefits";
import InvestmentSection from "@/components/InvestmentSection";
import GalleryTeaser from "@/components/GalleryTeaser";
import CTASection from "@/components/CTASection";
import DataCredibility from "@/components/DataCredibility";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandPromise />
      <Testimonials />
      <ServicesGrid />
      <WhyGetRooted />
      <Benefits />
      <InvestmentSection />
      <GalleryTeaser />
      <DataCredibility />
      <CTASection />
    </>
  );
}
