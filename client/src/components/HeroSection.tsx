import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/hero_living_room_with_blinds.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[650px] md:min-h-[750px] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sala moderna com cortinas elegantes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 animate-slide-down">
            <div className="shape-accent-line mb-4" />
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">
              Bem-vindo à Shade Express
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-slide-up text-display-large">
            Transforme ambientes com{" "}
            <span className="text-primary">qualidade</span>, rapidez e preço
            acessível.
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed animate-slide-up animate-stagger-2">
            Cortinas e persianas modernas, produzidas com materiais duráveis e
            perfeitas para projetos residenciais e comerciais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-stagger-3">
            <Link href="/revendas">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6 font-semibold glow-primary-hover"
                data-testid="button-hero-reseller"
              >
                Seja Revendedor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/produtos">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6 font-semibold bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20 hover:border-white/60 transition-all"
                data-testid="button-hero-products"
              >
                Conheça nossos produtos
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/5 shape-blob opacity-30 pointer-events-none hidden md:block" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 shape-blob opacity-20 pointer-events-none hidden lg:block" />
    </section>
  );
}
