import { ClipboardList, Phone, Package, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Preencha o formulário",
    description: "Informe seus dados e tipo de negócio.",
  },
  {
    icon: Phone,
    step: "2",
    title: "Nossa equipe entra em contato",
    description: "Apresentamos condições e tiramos dúvidas.",
  },
  {
    icon: Package,
    step: "3",
    title: "Receba o mostruário",
    description: "Kit profissional enviado para sua loja.",
  },
  {
    icon: TrendingUp,
    step: "4",
    title: "Comece a vender",
    description: "Inicie suas vendas com suporte completo.",
  },
];

export default function ResellerSteps() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como se tornar uma revenda
          </h2>
          <p className="text-lg text-muted-foreground">
            Processo simples e rápido em 4 passos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative text-center"
              data-testid={`reseller-step-${index}`}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
