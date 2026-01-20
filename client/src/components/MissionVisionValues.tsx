import { Target, Eye, Heart } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Oferecer cortinas e persianas modernas e acessíveis, com agilidade e suporte completo.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Tornar-se referência nacional em proteção solar com foco em qualidade acessível.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Qualidade, transparência, agilidade, suporte e compromisso com resultados.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(0, 0, 0) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0, 0, 0) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-lg p-6 lg:p-8 transition-all duration-300 hover:shadow-xl group"
              data-testid={`mvv-card-${index}`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg" />

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1 text-left">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
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
