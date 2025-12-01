import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  benefits: string[];
  category: string;
}

export default function ProductCard({
  id,
  name,
  description,
  image,
  benefits,
  category,
}: ProductCardProps) {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden group hover-elevate border border-border"
      data-testid={`product-card-${id}`}
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-4 left-4">{category}</Badge>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
        <Button className="w-full" data-testid={`button-quote-${id}`}>
          Solicitar Orçamento
        </Button>
      </div>
    </div>
  );
}
