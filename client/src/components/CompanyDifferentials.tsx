import { Lightbulb, TrendingUp, Headphones, Package, Truck } from "lucide-react";

const differentials = [
  {
    icon: Lightbulb,
    title: "Expertise técnica da Luxashade",
    description: "Know-how consolidado em proteção solar e cortinas premium.",
  },
  {
    icon: TrendingUp,
    title: "Qualidade a preço competitivo",
    description: "Produtos de alto padrão com preços que maximizam sua margem.",
  },
  {
    icon: Headphones,
    title: "Suporte comercial",
    description: "Equipe dedicada para auxiliar em vendas e especificações.",
  },
  {
    icon: Package,
    title: "Mostruário profissional",
    description: "Materiais de qualidade para apresentação ao cliente final.",
  },
  {
    icon: Truck,
    title: "Logística rápida",
    description: "Entregas ágeis para todo o Brasil com rastreamento.",
  },
];

export default function CompanyDifferentials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-muted-foreground">
            O que nos torna a escolha ideal para seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-lg bg-card border border-border hover-elevate"
              data-testid={`company-diff-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
