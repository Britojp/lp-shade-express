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
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#F68D2E] font-semibold text-sm uppercase tracking-wider mb-3">
            Diferenciais
          </p>
          <div className="flex justify-center mb-6">
            <div className="shape-accent-line" />
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" 
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Por que escolher a Shade Express?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="text-center group"
                data-testid={`differential-card-${index}`}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#F68D2E]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F68D2E] group-hover:scale-110">
                  <IconComponent className="w-7 h-7 text-[#F68D2E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}