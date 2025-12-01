import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsGridSection from "@/components/ProductsGridSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ResellerCTASection from "@/components/ResellerCTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductsGridSection />
      <AboutSection />
      <DifferentialsSection />
      <ResellerCTASection />
      <BlogSection />
    </div>
  );
}
