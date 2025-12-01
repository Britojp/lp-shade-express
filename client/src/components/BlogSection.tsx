import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

// todo: remove mock functionality - replace with real blog data
const blogPosts = [
  {
    id: 1,
    title: "Tendências de decoração 2024: Como escolher persianas modernas",
    excerpt:
      "Descubra as principais tendências de persianas e cortinas para transformar seus ambientes neste ano.",
    date: "15 Nov 2024",
    category: "Tendências",
  },
  {
    id: 2,
    title: "Guia completo: Double Vision vs Rolo - Qual escolher?",
    excerpt:
      "Compare as características, benefícios e indicações de cada modelo para fazer a melhor escolha.",
    date: "10 Nov 2024",
    category: "Dicas",
  },
  {
    id: 3,
    title: "Como aumentar suas vendas com mostruários profissionais",
    excerpt:
      "Estratégias práticas para revendas apresentarem produtos de forma mais efetiva aos clientes.",
    date: "05 Nov 2024",
    category: "Revendas",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Tendências, dicas e novidades
            </h2>
            <p className="text-lg text-muted-foreground">
              Fique por dentro do mundo das cortinas e persianas
            </p>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            Ver todos os posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover-elevate group"
              data-testid={`blog-card-${post.id}`}
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
