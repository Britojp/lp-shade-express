import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import rollerBlindImg from "@assets/generated_images/roller_blind_product_shot.png";
import motorizedTrackImg from "@assets/generated_images/motorized_track_system.png";
import livingRoomImg from "@assets/generated_images/hero_living_room_with_blinds.png";
import officeImg from "@assets/generated_images/office_with_vertical_blinds.png";
import lifestyleImg from "@assets/generated_images/lifestyle_bedroom_setup.png";

const products = [
  {
    id: 1,
    title: "Cortinas Rolo",
    image: rollerBlindImg,
    href: "/produtos",
  },
  {
    id: 2,
    title: "Double Vision",
    image: motorizedTrackImg,
    href: "/produtos",
  },
  {
    id: 3,
    title: "Trilhos Motorizados",
    image: livingRoomImg,
    href: "/produtos",
  },
  {
    id: 4,
    title: "Persianas Verticals",
    image: officeImg,
    href: "/produtos",
  },
  {
    id: 5,
    title: "Cortinas Romanas",
    image: lifestyleImg,
    href: "/produtos",
  },
];

export default function ProductsGridSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
            Categorias
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-display-large text-foreground">
            Explore nossos produtos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <Link key={product.id} href={product.href}>
              <div
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
                data-testid={`product-grid-${product.id}`}
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold text-foreground text-center group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/produtos">
            <Button variant="outline" size="lg" data-testid="button-view-all-products">
              Ver todos os produtos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
