import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ResellerCTASection from "@/components/ResellerCTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <DifferentialsSection />
        <ResellerCTASection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
