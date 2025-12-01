import { CheckCircle } from "lucide-react";

const highlights = [
  "Fabricação precisa",
  "Materiais selecionados",
  "Preços competitivos",
  "Ideal para revendas",
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
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
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Anos de experiência no mercado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
