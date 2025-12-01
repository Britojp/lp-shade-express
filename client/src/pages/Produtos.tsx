import Header from "@/components/Header";
import ProductsHero from "@/components/ProductsHero";
import ProductsGrid from "@/components/ProductsGrid";
import ProductSpecs from "@/components/ProductSpecs";
import ResellerCTASection from "@/components/ResellerCTASection";
import Footer from "@/components/Footer";

export default function Produtos() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductsHero />
        <ProductsGrid />
        <ProductSpecs />
        <ResellerCTASection />
      </main>
      <Footer />
    </div>
  );
}
