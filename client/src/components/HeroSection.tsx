import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroImage from "@assets/generated_images/hero_living_room_with_blinds.png";

export default function HeroSection() {
  return (
    <section className="relative bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-4 md:py-8">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground leading-snug mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              Cortinas que refletem seu estilo e potencializam seu lar!
            </h1>

            <p className="text-sm md:text-base text-foreground mb-3 leading-relaxed font-medium">
              Cortinas e persianas modernas, produzidas com materiais duráveis e perfeitas para projetos residenciais e comerciais.
            </p>

            <p className="text-sm text-foreground mb-4 leading-relaxed font-bold">
              Soluções prontas para revenda
            </p>

            <div className="flex items-center gap-2 mb-6 text-sm text-foreground">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Atendimento em todo Brasil, Abu Dhabi, Sharjah, Ajman</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/revendas">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-xs md:text-sm px-6 md:px-8 py-2.5 md:py-3 font-bold uppercase tracking-widest"
                  data-testid="button-hero-reseller"
                >
                  Seja Revendedor
                </Button>
              </Link>
              <Link href="/produtos">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-xs md:text-sm px-6 md:px-8 py-2.5 md:py-3 font-bold uppercase tracking-widest border-2 border-primary text-primary hover:bg-primary/5"
                  data-testid="button-hero-products"
                >
                  Conheça nossos Produtos
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] md:aspect-[5/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Sala moderna com cortinas elegantes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
