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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Vantagens
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Benefícios para Revendas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-muted/50 hover-elevate group"
              data-testid={`reseller-benefit-card-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <benefit.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
