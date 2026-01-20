import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ProductSpecs() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#F68D2E] font-semibold text-sm uppercase tracking-wider mb-3">
            Especificações
          </p>
          <div className="flex justify-center mb-6">
            <div className="shape-accent-line" />
          </div>
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Especificações Técnicas
          </h2>
          <p className="text-lg text-gray-600">
            Todos os nossos produtos seguem rigorosos padrões de qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Materiais</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tecidos importados de alta qualidade</li>
              <li>Alumínio anodizado resistente</li>
              <li>Componentes em aço inox</li>
              <li>PVC anti-UV</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Dimensões</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Largura: até 3,00m (modelo)</li>
              <li>Altura: até 4,00m (modelo)</li>
              <li>Sob medida disponível</li>
              <li>Tolerância: +/- 5mm</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Acionamento</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Manual com corrente</li>
              <li>Motorizado com controle</li>
              <li>Smart home compatível</li>
              <li>Sensor solar opcional</li>
            </ul>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/catalogo">
            <Button size="lg" data-testid="button-specs-catalog">
              Ver Catálogo Completo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/revendas">
            <Button size="lg" variant="outline" data-testid="button-specs-contact">
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar com Consultor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
