import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroImage from "@assets/generated_images/hero_living_room_with_blinds.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sala moderna com cortinas elegantes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transforme ambientes com qualidade, rapidez e preço acessível.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Cortinas e persianas modernas, produzidas com materiais duráveis e
            perfeitas para projetos residenciais e comerciais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/revendas">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6"
                data-testid="button-hero-reseller"
              >
                Quero ser Revenda
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/produtos">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-products"
              >
                Conheça nossos produtos
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
