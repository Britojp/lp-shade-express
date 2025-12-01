import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções para todos os tipos de ambiente
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra nossa linha completa de produtos desenvolvidos para
            garantir praticidade, beleza e durabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group overflow-hidden hover-elevate"
              data-testid={`category-card-${category.id}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                <Link href={category.href}>
                  <Button variant="outline" className="group/btn">
                    Ver produtos
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
