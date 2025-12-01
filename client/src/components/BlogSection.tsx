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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
              Blog
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-display-large text-foreground">
              Últimas notícias
            </h2>
          </div>
          <Button variant="outline">
            Ver mais
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
              data-testid={`blog-card-${post.id}`}
            >
              <div className="aspect-[16/9] bg-muted"></div>
              <div className="p-4">
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">
                  {post.category}
                </p>
                <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </p>
                <a href="#" className="text-sm text-primary font-bold hover:text-foreground transition-colors">
                  Ler mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
