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
    <section className="py-16 md:py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Mais vendas, menos complicação
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Oferecemos mostruários, catálogo digital, atendimento exclusivo e
              treinamentos para fortalecer suas vendas e facilitar sua
              apresentação ao cliente final.
            </p>
            <Link href="/revendas">
              <Button
                size="lg"
                variant="secondary"
                className="text-base px-8 py-6"
                data-testid="button-cta-reseller"
              >
                Quero ser Revenda
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                data-testid={`reseller-benefit-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground font-medium">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
