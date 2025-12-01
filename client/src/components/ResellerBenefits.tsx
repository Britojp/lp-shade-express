import { Card } from "@/components/ui/card";
import { TrendingUp, Package, BookOpen, Headphones, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Margens competitivas",
    description:
      "Preços que permitem margens atrativas para sua revenda crescer.",
  },
  {
    icon: Package,
    title: "Mostruário exclusivo",
    description:
      "Kit profissional com amostras de tecidos e materiais de qualidade.",
  },
  {
    icon: BookOpen,
    title: "Catálogo digital",
    description:
      "Material completo com especificações técnicas e fotos profissionais.",
  },
  {
    icon: Headphones,
    title: "Suporte técnico",
    description: "Equipe especializada para auxiliar em vendas e instalações.",
  },
  {
    icon: Zap,
    title: "Atendimento rápido",
    description: "Respostas ágeis e entregas no prazo para seu negócio.",
  },
];

export default function ResellerBenefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefícios para Revendas
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo que você precisa para vender mais e melhor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate"
              data-testid={`reseller-benefit-card-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
