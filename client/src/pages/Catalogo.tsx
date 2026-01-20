import CatalogHero from "@/components/CatalogHero";
import SampleRequestSection from "@/components/SampleRequestSection";
import Footer from "@/components/Footer";

export default function Catalogo() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <CatalogHero />
        <SampleRequestSection />
      </main>
      <Footer />
    </div>
  );
}
