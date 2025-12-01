import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Download, Package, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CatalogHero() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
      toast({
        title: "Sucesso!",
        description: "O download do catálogo começará em instantes.",
      });
      // todo: remove mock functionality - integrate with backend
      console.log("Catalog download requested:", { name, email });
    }
  };

  return (
    <section className="pt-20 md:pt-24">
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Catálogo Shade Express
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Baixe nosso catálogo digital e conheça todos os modelos,
                acabamentos e especificações técnicas da Shade Express. Ideal
                para revendas, arquitetos e profissionais da área.
              </p>

              {!submitted ? (
                <Card className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        required
                        data-testid="input-catalog-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        required
                        data-testid="input-catalog-email"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      data-testid="button-download-catalog-submit"
                    >
                      <Download className="mr-2 w-5 h-5" />
                      Baixar Catálogo
                    </Button>
                  </form>
                </Card>
              ) : (
                <Card className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Download iniciado!
                  </h3>
                  <p className="text-muted-foreground">
                    Verifique seu e-mail para acessar o catálogo completo.
                  </p>
                </Card>
              )}
            </div>

            <div className="hidden lg:block">
              <Card className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <Package className="w-24 h-24 mx-auto text-primary/50 mb-4" />
                  <p className="text-lg font-medium text-muted-foreground">
                    Catálogo Digital 2024
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    +50 páginas de produtos
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
