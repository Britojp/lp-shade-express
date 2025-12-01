import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import rollerBlindImg from "@assets/generated_images/roller_blind_product_shot.png";
import motorizedTrackImg from "@assets/generated_images/motorized_track_system.png";

const categories = [
  {
    id: 1,
    title: "Cortinas e Persianas",
    description:
      "Rolo, Romana, Doublevision, Tripleshade, Celular e Toldos Verticais.",
    image: rollerBlindImg,
    href: "/produtos",
  },
  {
    id: 2,
    title: "Trilhos e Acessórios",
    description:
      "Trilhos Motorizados Evolve e Somfy, acionamento com corda, varões e perfis.",
    image: motorizedTrackImg,
    href: "/produtos",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Categorias
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluções para todos os tipos de ambiente
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <div
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                data-testid={`category-card-${category.id}`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/80 mb-4">{category.description}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                    Ver produtos
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
