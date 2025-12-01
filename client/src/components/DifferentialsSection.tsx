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
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
            Por que nós
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-display-large text-foreground">
            Diferenciais Shade Express
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`differential-card-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
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
