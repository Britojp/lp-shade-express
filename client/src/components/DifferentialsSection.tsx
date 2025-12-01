import { Zap, DollarSign, Award, Users, Shield } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Diferenciais
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Por que escolher a Shade Express?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="text-center group"
              data-testid={`differential-card-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
