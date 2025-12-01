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
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Sobre nós
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-display-large text-foreground mb-6 leading-tight">
              Qualidade e agilidade para seu projeto.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Shade Express oferece cortinas e persianas modernas com fabricação precisa, materiais selecionados e preços competitivos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Somos a escolha ideal para revendas que desejam ampliar seu portfólio com produtos de alto giro.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  data-testid={`highlight-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={officeImg}
                alt="Escritório moderno com persianas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
