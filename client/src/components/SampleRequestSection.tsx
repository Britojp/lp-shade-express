import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, ArrowRight } from "lucide-react";

export default function SampleRequestSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12 bg-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Solicitar Mostruário Físico
                </h3>
                <p className="text-muted-foreground">
                  Receba amostras de tecidos e materiais para apresentar aos
                  seus clientes.
                </p>
              </div>
            </div>
            <Link href="/revendas">
              <Button size="lg" data-testid="button-request-sample">
                Solicitar Mostruário
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
