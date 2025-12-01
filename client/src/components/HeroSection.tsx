import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/hero_living_room_with_blinds.png";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16">
          <div className="animate-slide-right max-w-lg">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Bem-vindo
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-display-large text-foreground mb-6 leading-tight">
              Cortinas que transformam seu ambiente
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-2">
              Qualidade, rapidez e preço acessível para seu projeto.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cortinas e persianas modernas, ideais para residências e comércios em todo Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/revendas">
                <Button
                  size="lg"
                  className="text-base px-6 font-bold"
                  data-testid="button-hero-reseller"
                >
                  Seja Revendedor
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/produtos">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-6 font-bold"
                  data-testid="button-hero-products"
                >
                  Conhecer Produtos
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-scale-in hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
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
