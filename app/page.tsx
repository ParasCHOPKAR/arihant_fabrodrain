import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import ProductsSection from "./components/ProductsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Loader from "./components/Loader";


// import IndustriesSection from "./components/IndustriesSection";
// import FeaturesSection from "./components/FeaturesSection";
// import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>

         <Loader />
      <HeroSection />
      <AboutSection />
         
      <ProductsSection />
         <CTASection />
      <TestimonialsSection/>
  
      {/*
  
      <IndustriesSection />
      <FeaturesSection />
      <ContactSection />
      */}
    </>
  );
}
