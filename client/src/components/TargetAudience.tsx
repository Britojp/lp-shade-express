import { Store, Palette, Home, ShoppingBag, Building2, Users } from "lucide-react";

const audiences = [
  { icon: Store, label: "Revendas" },
  { icon: Palette, label: "Arquitetos e Designers" },
  { icon: Home, label: "Lojas de Decoração" },
  { icon: ShoppingBag, label: "Lojas de Planejados" },
  { icon: Building2, label: "Home Centers" },
  { icon: Users, label: "Consumidores Finais" },
];

export default function TargetAudience() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Público-Alvo
          </h2>
          <p className="text-lg text-muted-foreground">
            Atendemos diversos segmentos do mercado de decoração e construção
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
              data-testid={`audience-${index}`}
            >
              <div className="w-16 h-16 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
