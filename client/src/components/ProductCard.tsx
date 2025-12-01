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
      className="bg-white rounded-2xl overflow-hidden group hover-elevate border border-border hover:border-primary/30 transition-all animate-scale-in"
      data-testid={`product-card-${id}`}
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-muted">
        {/* Decorative shapes on image */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-primary/5 shape-blob pointer-events-none z-10 group-hover:bg-primary/10 transition-all" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border border-primary/20 rounded-full pointer-events-none z-10 group-hover:border-primary/40 transition-all" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent group-hover:from-primary/10 transition-all" />

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-primary/30 pointer-events-none z-20" />

        <Badge className="absolute top-4 left-4 z-20">{category}</Badge>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
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
        <Button className="w-full hover:shadow-lg transition-all" data-testid={`button-quote-${id}`}>
          Solicitar Orçamento
        </Button>
      </div>

      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 group-hover:via-primary transition-all" />
    </div>
  );
}
