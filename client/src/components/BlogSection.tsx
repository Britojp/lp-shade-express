import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import rollerBlindImg from "@assets/generated_images/roller_blind_product_shot.png";
import doubleVisionImg from "@assets/generated_images/double_vision_blinds_product.png";
import officeImg from "@assets/generated_images/office_with_vertical_blinds.png";

const blogPosts = [
  {
    id: 1,
    title: "Como escolher a cortina ideal",
    category: "Dicas",
    date: "12 Out, 2023",
    excerpt: "Guia completo com dicas práticas para escolher a cortina perfeita para cada ambiente da sua casa ou escritório.",
    image: rollerBlindImg,
  },
  {
    id: 2,
    title: "Tendências de decoração 2024",
    category: "Tendências",
    date: "05 Nov, 2023",
    excerpt: "Descubra as principais tendências em persianas e cortinas que vão dominar a decoração em 2024.",
    image: doubleVisionImg,
  },
  {
    id: 3,
    title: "Manutenção de persianas",
    category: "Cuidados",
    date: "28 Set, 2023",
    excerpt: "Aprenda como manter suas persianas sempre limpas e funcionando perfeitamente com dicas simples e práticas.",
    image: officeImg,
  },
];

export default function BlogSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#F68D2E] font-semibold text-sm uppercase tracking-wider mb-3">
            NOSSO BLOG
          </p>
          <div className="flex justify-center mb-6">
            <div className="shape-accent-line" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Tendências, dicas e novidades
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {blogPosts.map((post, index) => {
            const marginTopClasses = [
              "mt-0 sm:mt-0 lg:mt-0",
              "mt-8 sm:mt-12 lg:mt-16",
              "mt-0 sm:mt-0 lg:mt-0",
            ];

            return (
              <div
                key={post.id}
                className={`relative group cursor-pointer ${marginTopClasses[index]}`}
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm transition-all duration-500">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === post.id ? "scale-110 brightness-50" : ""
                    }`}
                  />
                  
                  <div
                    className={`absolute inset-0 bg-[#F68D2E] transition-all duration-500 ${
                      hoveredId === post.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div
                      className={`transition-all duration-500 ${
                        hoveredId === post.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                        {post.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-[200px] mb-6">
                        {post.excerpt}
                      </p>
                      <Link href={`/blog/${post.id}`}>
                        <span className="text-white text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:gap-3 transition-all">
                          Ler artigo <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                    
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-all duration-500 ${
                        hoveredId === post.id
                          ? "opacity-0 translate-y-4"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      <p className="text-white/80 text-xs md:text-sm font-medium mb-1 uppercase tracking-wider">
                        {post.category}
                      </p>
                      <p className="text-white/70 text-xs md:text-sm">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-2 border-[#F68D2E] text-[#F68D2E] hover:bg-[#F68D2E]/5 rounded-full px-8 py-6 text-base font-semibold transition-all duration-300"
            >
              Ver todos os artigos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
