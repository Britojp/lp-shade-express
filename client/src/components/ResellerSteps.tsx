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
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Passo a passo
          </p>
          <div className="flex justify-center mb-6">
            <div className="shape-accent-line" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Como se tornar uma revenda
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative text-center"
              data-testid={`reseller-step-${index}`}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
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
