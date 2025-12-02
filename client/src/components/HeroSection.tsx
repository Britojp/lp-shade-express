import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroImage from "@assets/generated_images/hero_living_room_with_blinds.png";

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-8 md:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] md:min-h-[600px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-8 md:py-16">
            <div className="mb-6">
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                Bem-vindo à Shade Express
              </p>
              <div className="shape-accent-line" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-foreground leading-tight mb-6">
              Transforme ambientes com <span className="text-primary">qualidade</span>, rapidez e preço acessível.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-2 leading-relaxed font-semibold">
              Cortinas e persianas modernas, produzidas com materiais duráveis e perfeitas para projetos residenciais e comerciais.
            </p>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-semibold">
              Soluções prontas para revenda
            </p>

            <div className="flex items-center gap-2 mb-8 text-sm text-foreground">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Atendimento em todo Brasil</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/revendas">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm px-8 py-3 font-bold uppercase tracking-wider"
                  data-testid="button-hero-reseller"
                >
                  Seja Revendedor
                </Button>
              </Link>
              <Link href="/produtos">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-sm px-8 py-3 font-bold uppercase tracking-wider border-2 border-primary text-primary hover:bg-primary/5"
                  data-testid="button-hero-products"
                >
                  Conheça nossos Produtos
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Sala moderna com cortinas elegantes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/5 shape-blob rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
