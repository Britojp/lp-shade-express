import { Link } from "wouter";
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
    <section className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/5 shape-blob pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 animate-slide-down">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Blog
            </p>
            <div className="shape-accent-line mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-display-large">
              Tendências, dicas e novidades
            </h2>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            Ver todos os posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden group hover-elevate hover:scale-105 transition-transform animate-slide-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
              data-testid={`blog-card-${post.id}`}
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded animate-pulse">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
