import ResellerHero from "@/components/ResellerHero";
import ResellerBenefits from "@/components/ResellerBenefits";
import ResellerSteps from "@/components/ResellerSteps";
import ResellerForm from "@/components/ResellerForm";
import Footer from "@/components/Footer";

export default function Revendas() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ResellerHero />
        <ResellerBenefits />
        <ResellerSteps />
        <ResellerForm />
      </main>
      <Footer />
    </div>
  );
}
