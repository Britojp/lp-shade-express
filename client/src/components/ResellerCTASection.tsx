import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, BookOpen, Headphones, GraduationCap } from "lucide-react";

const benefits = [
  { icon: Package, text: "Mostruário exclusivo" },
  { icon: BookOpen, text: "Catálogo digital" },
  { icon: Headphones, text: "Atendimento dedicado" },
  { icon: GraduationCap, text: "Treinamentos" },
];

export default function ResellerCTASection() {
  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Para revendas
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-display-large text-white mb-6 leading-tight">
              Mais vendas, menos complicação
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Mostruários profissionais, catálogo digital, atendimento exclusivo e treinamentos completos para fortalecer suas vendas.
            </p>
            <Link href="/revendas">
              <Button
                size="lg"
                className="text-base px-6 font-bold"
                data-testid="button-cta-reseller"
              >
                Seja Revendedor
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
                data-testid={`reseller-benefit-${index}`}
              >
                <benefit.icon className="w-8 h-8 text-primary" />
                <span className="text-white font-medium text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
