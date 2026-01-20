import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroImage from "@assets/generated_images/hero_living_room_with_blinds.png";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden pt-[110px] sm:pt-[115px] md:pt-[125px] lg:pt-[125px]">
      <div className="max-w-[1920px] mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center relative">
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center py-6 sm:py-8 md:py-10 lg:py-12 z-10 relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 order-2 lg:order-1">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6" 
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Transforme ambientes com qualidade, rapidez e preço acessível.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed">
              Cortinas e persianas modernas, produzidas com materiais duráveis e perfeitas para projetos residenciais e comerciais.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold mb-3 sm:mb-4">
              Book a free visit!
            </p>

            <div className="flex items-start sm:items-center gap-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base text-gray-700">
              <MapPin className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#F68D2E] flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="break-words">Brasil, Abu Dhabi, Sharjah, Ajman</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <Link href="/revendas" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#F68D2E] hover:bg-[#E87D1E] text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 font-bold uppercase tracking-wide rounded-lg transition-colors"
                  data-testid="button-hero-reseller"
                >
                  <span className="whitespace-nowrap">QUERO SER REVENDA</span>
                </Button>
              </Link>
              <Link href="/produtos" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 font-bold uppercase tracking-wide border-2 border-[#F68D2E] text-[#F68D2E] hover:bg-[#F68D2E]/5 rounded-lg transition-colors"
                  data-testid="button-hero-products"
                >
                  <span className="whitespace-nowrap">CONHEÇA NOSSOS PRODUTOS</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7 relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[700px] order-1 lg:order-2">
            <div className="absolute inset-0">
              <div className="hero-diagonal-overlay absolute inset-0 bg-white hidden lg:block" />
              <div className="hero-image-wrapper absolute inset-0">
                <img
                  src={heroImage}
                  alt="Sala moderna com cortinas elegantes"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}