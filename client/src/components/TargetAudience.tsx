import { useState, useEffect, useRef } from "react";
import { Store, Palette, Home, ShoppingBag, Building2, Users } from "lucide-react";

const audiences = [
  {
    icon: Store,
    label: "Revendas",
    description: "Programa de revenda exclusivo com margens competitivas, materiais de apoio e suporte comercial dedicado para maximizar suas vendas.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    icon: Palette,
    label: "Arquitetos e Designers",
    description: "Mostruários exclusivos, texturas 3D para renderização e suporte técnico dedicado para seus projetos.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    icon: Home,
    label: "Lojas de Decoração",
    description: "Catálogo diversificado, condições especiais de pagamento e materiais visuais profissionais para exposição.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
  },
  {
    icon: ShoppingBag,
    label: "Lojas de Planejados",
    description: "Integração perfeita com móveis planejados, acabamentos premium e soluções sob medida para cada projeto.",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=600&fit=crop",
  },
  {
    icon: Building2,
    label: "Home Centers",
    description: "Parcerias estratégicas com produtos de alta rotatividade, logística eficiente e suporte de merchandising.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
  {
    icon: Users,
    label: "Consumidores Finais",
    description: "Atendimento personalizado, orçamentos sem compromisso e instalação profissional para transformar seu ambiente.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
  },
];

export default function TargetAudience() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % audiences.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#F68D2E] font-semibold text-sm uppercase tracking-wider mb-3">
            Segmentação de Mercado
          </p>
          <div className="flex justify-center mb-6">
            <div className="shape-accent-line" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Público-Alvo
          </h2>
          <p className="text-[#F68D2E] font-semibold text-sm uppercase tracking-wider mt-6">
            SOLUÇÕES PERSONALIZADAS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-5 space-y-4">
            {audiences.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => handleItemClick(index)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`
                    relative cursor-pointer transition-all duration-300 rounded-lg p-5 lg:p-6
                    ${isActive
                      ? "bg-white shadow-lg border-l-4 border-[#F68D2E] opacity-100"
                      : "bg-transparent opacity-70 hover:opacity-90"
                    }
                  `}
                  data-testid={`audience-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-[#F68D2E]/10 flex items-center justify-center">
                        <item.icon
                          className={`w-6 h-6 transition-colors duration-300 ${
                            isActive ? "text-[#F68D2E]" : "text-slate-400"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-bold mb-2 transition-colors duration-300 ${
                          isActive ? "text-gray-900" : "text-gray-700"
                        }`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.label}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-600 text-sm leading-relaxed pt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="hidden lg:block h-[600px] rounded-3xl overflow-hidden relative">
              {audiences.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="lg:hidden mt-6">
              <div className="h-[400px] rounded-2xl overflow-hidden relative">
                {audiences.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
