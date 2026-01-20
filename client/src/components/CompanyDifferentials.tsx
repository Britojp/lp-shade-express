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
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(0, 0, 0) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#F68D2E] font-semibold text-sm uppercase tracking-wider mb-3">
            Diferenciais
          </p>
          <div className="flex justify-center mb-6">
            <div className="shape-accent-line" />
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" 
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-gray-600">
            O que nos torna a escolha ideal para seu negócio
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(30%-1rem)] bg-white border border-gray-100 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-[#F68D2E] hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1"
              data-testid={`company-diff-${index}`}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 lg:w-9 lg:h-9 text-[#F68D2E]" />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-lg lg:text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
