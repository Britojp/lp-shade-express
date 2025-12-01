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
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Público
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Público-Alvo
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg hover-elevate"
              data-testid={`audience-${index}`}
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
