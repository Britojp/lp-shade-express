import { Card } from "@/components/ui/card";
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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-elevate"
              data-testid={`mvv-card-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
