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
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 shape-blob pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-primary/5 shape-blob pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-white to-muted/30 hover-elevate transition-all border border-border hover:border-primary/30 group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`mvv-card-${index}`}
            >
              {/* Decorative blob inside card */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary/5 shape-blob pointer-events-none group-hover:bg-primary/10 transition-all" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-primary/20 rounded-full pointer-events-none group-hover:border-primary/40 transition-all" />

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/20 group-hover:border-primary/40 rounded-tl-lg transition-all" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/20 group-hover:border-primary/40 rounded-br-lg transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
