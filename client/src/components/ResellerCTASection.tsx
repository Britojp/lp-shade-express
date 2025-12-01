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
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Para Revendas
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Mais vendas, menos complicação
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Oferecemos mostruários, catálogo digital, atendimento exclusivo e
              treinamentos para fortalecer suas vendas e facilitar sua
              apresentação ao cliente final.
            </p>
            <Link href="/revendas">
              <Button
                size="lg"
                className="text-base px-8 py-6 font-semibold"
                data-testid="button-cta-reseller"
              >
                Seja Revendedor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                data-testid={`reseller-benefit-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
