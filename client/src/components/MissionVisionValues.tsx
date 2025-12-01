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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-white border border-border hover:border-primary/50 transition-all"
              data-testid={`mvv-card-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
