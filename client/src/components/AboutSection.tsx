import { Award } from "lucide-react";
import officeImg from "@assets/generated_images/office_with_vertical_blinds.png";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="relative">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight text-display" 
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              A{" "}
              <span className="text-[#F68D2E]">praticidade</span>{" "}
              que seu projeto precisa.
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[65ch]">
              A Shade Express oferece soluções modernas em cortinas e persianas
              para quem busca qualidade e agilidade. Com fabricação precisa,
              materiais selecionados e preços competitivos, somos a escolha
              ideal para revendas que desejam ampliar seu portfólio com produtos
              de alto giro.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0 lg:pl-8 px-4 sm:px-0">
            <div className="relative aspect-[4/3] group">
              <div 
                className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-full h-full rounded-2xl border-4 border-[#F68D2E]/40 bg-gradient-to-br from-[#F68D2E]/5 to-transparent -z-10"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(246, 141, 46, 0.12) 1px, transparent 1px)`,
                  backgroundSize: '28px 28px',
                }}
              />

              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(246, 141, 46, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div 
                  className="absolute inset-0 opacity-15 -z-10"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(246, 141, 46, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '36px 36px',
                  }}
                />

                <img
                  src={officeImg}
                  alt="Escritório moderno com persianas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
              </div>

              <div 
                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-20 h-20 md:w-28 md:h-28 rounded-2xl border-4 border-[#F68D2E] bg-white/95 backdrop-blur-sm shadow-xl flex items-center justify-center z-20 transition-transform duration-300 group-hover:scale-105"
              >
                <div className="flex flex-col items-center gap-0.5 md:gap-1">
                  <Award className="w-6 h-6 md:w-9 md:h-9 text-[#F68D2E]" />
                  <span className="text-[10px] md:text-xs font-bold text-gray-900 leading-tight">Qualidade</span>
                  <span className="text-[10px] md:text-xs font-semibold text-[#F68D2E] leading-tight">Garantida</span>
                </div>
              </div>

              <div 
                className="absolute top-1/2 -right-3 md:-right-6 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#F68D2E]/40 bg-white/95 backdrop-blur-sm shadow-lg -z-10"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(246, 141, 46, 0.15) 1px, transparent 1px)`,
                  backgroundSize: '8px 8px',
                }}
              />
            </div>

            <div 
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#F68D2E]/5 blur-3xl -z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}