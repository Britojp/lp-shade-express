import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import rollerBlindImg from "@assets/generated_images/roller_blind_product_shot.png";
import doubleVisionImg from "@assets/generated_images/double_vision_blinds_product.png";
import romanBlindImg from "@assets/generated_images/roman_blinds_product_shot.png";
import motorizedTrackImg from "@assets/generated_images/motorized_track_system.png";
import officeImg from "@assets/generated_images/office_with_vertical_blinds.png";

// todo: remove mock functionality - replace with real product data from API
const products = [
  {
    id: 1,
    name: "Persiana Rolo",
    description:
      "Persiana de enrolar com tecido blackout ou translúcido. Ideal para quartos, salas e escritórios.",
    image: rollerBlindImg,
    category: "Persianas",
    benefits: [
      "Controle total de luminosidade",
      "Fácil manutenção e limpeza",
      "Disponível em várias cores",
      "Instalação simples",
    ],
  },
  {
    id: 2,
    name: "Double Vision",
    description:
      "Persiana com faixas alternadas que permite controle gradual da luz. Moderna e versátil.",
    image: doubleVisionImg,
    category: "Persianas",
    benefits: [
      "Controle graduado de luz",
      "Design moderno e elegante",
      "Privacidade ajustável",
      "Múltiplas opções de cores",
    ],
  },
  {
    id: 3,
    name: "Cortina Romana",
    description:
      "Cortina com pregas horizontais que cria um visual sofisticado. Perfeita para ambientes clássicos.",
    image: romanBlindImg,
    category: "Cortinas",
    benefits: [
      "Visual sofisticado",
      "Isolamento térmico",
      "Variedade de tecidos",
      "Alta durabilidade",
    ],
  },
  {
    id: 4,
    name: "Trilho Motorizado Evolve",
    description:
      "Sistema de automação para cortinas com controle remoto e integração smart home.",
    image: motorizedTrackImg,
    category: "Trilhos",
    benefits: [
      "Controle remoto incluso",
      "Integração smart home",
      "Motor silencioso",
      "Instalação profissional",
    ],
  },
  {
    id: 5,
    name: "Toldo Vertical",
    description:
      "Proteção solar para grandes vãos e fachadas. Ideal para áreas externas e comerciais.",
    image: officeImg,
    category: "Toldos",
    benefits: [
      "Proteção UV eficiente",
      "Resistente a intempéries",
      "Diversos tamanhos",
      "Manutenção simples",
    ],
  },
  {
    id: 6,
    name: "Trilho Somfy",
    description:
      "Sistema premium de motorização com tecnologia francesa. Qualidade e durabilidade superiores.",
    image: motorizedTrackImg,
    category: "Trilhos",
    benefits: [
      "Tecnologia francesa",
      "Alta durabilidade",
      "Garantia estendida",
      "Compatível com Alexa/Google",
    ],
  },
];

const categories = ["Todos", "Persianas", "Cortinas", "Trilhos", "Toldos"];

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
