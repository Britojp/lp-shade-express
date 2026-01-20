import CompanyHero from "@/components/CompanyHero";
import MissionVisionValues from "@/components/MissionVisionValues";
import TargetAudience from "@/components/TargetAudience";
import CompanyDifferentials from "@/components/CompanyDifferentials";
import ResellerCTASection from "@/components/ResellerCTASection";
import Footer from "@/components/Footer";

export default function Empresa() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <CompanyHero />
        <MissionVisionValues />
        <TargetAudience />
        <CompanyDifferentials />
        <ResellerCTASection />
      </main>
      <Footer />
    </div>
  );
}
