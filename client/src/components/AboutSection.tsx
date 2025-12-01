import { CheckCircle } from "lucide-react";
import officeImg from "@assets/generated_images/office_with_vertical_blinds.png";

const highlights = [
  "Fabricação precisa",
  "Materiais selecionados",
  "Preços competitivos",
  "Ideal para revendas",
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Sobre a marca
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A praticidade que seu projeto precisa.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A Shade Express oferece soluções modernas em cortinas e persianas
              para quem busca qualidade e agilidade. Com fabricação precisa,
              materiais selecionados e preços competitivos, somos a escolha
              ideal para revendas que desejam ampliar seu portfólio com produtos
              de alto giro.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  data-testid={`highlight-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={officeImg}
                alt="Escritório moderno com persianas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-4xl font-bold">10+</div>
              <p className="text-sm text-white/90">Anos de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
