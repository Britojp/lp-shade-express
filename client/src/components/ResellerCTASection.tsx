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
    <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 shape-blob pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 shape-blob pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Para Revendas
            </p>
            <div className="shape-accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight text-display-large">
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
                className="text-base px-8 py-6 font-semibold glow-primary-hover"
                data-testid="button-cta-reseller"
              >
                Seja Revendedor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 animate-scale-in">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`reseller-benefit-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110">
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
