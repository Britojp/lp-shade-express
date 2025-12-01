import { Zap, DollarSign, Award, Users, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const differentials = [
  {
    icon: Zap,
    title: "Agilidade",
    description:
      "Entregas rápidas e processos otimizados para você não perder tempo.",
  },
  {
    icon: DollarSign,
    title: "Custo-benefício",
    description:
      "Produtos de alta qualidade com preços competitivos para maximizar suas margens.",
  },
  {
    icon: Award,
    title: "Certificações",
    description:
      "Produtos certificados que garantem segurança e qualidade para seus clientes.",
  },
  {
    icon: Users,
    title: "Suporte completo",
    description:
      "Equipe especializada pronta para auxiliar revendas em todas as etapas.",
  },
  {
    icon: Shield,
    title: "Garantia",
    description:
      "Garantia estendida em todos os produtos para total tranquilidade.",
  },
];

export default function DifferentialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Shade Express?
          </h2>
          <p className="text-lg text-muted-foreground">
            Diferenciais que fazem a diferença no seu negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover-elevate"
              data-testid={`differential-card-${index}`}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
