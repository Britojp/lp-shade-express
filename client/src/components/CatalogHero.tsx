import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    <section className="pt-20">
      <div className="bg-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Material Completo
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Catálogo Shade Express
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Baixe nosso catálogo digital e conheça todos os modelos,
                acabamentos e especificações técnicas da Shade Express. Ideal
                para revendas, arquitetos e profissionais da área.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                  <div>
                    <Label htmlFor="name" className="text-white/80">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      data-testid="input-catalog-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white/80">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      data-testid="input-catalog-email"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    data-testid="button-download-catalog-submit"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Baixar Catálogo
                  </Button>
                </form>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center max-w-md">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Download iniciado!
                  </h3>
                  <p className="text-white/70">
                    Verifique seu e-mail para acessar o catálogo completo.
                  </p>
                </div>
              )}
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-72 h-96 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                  <div className="text-center p-8">
                    <Package className="w-20 h-20 mx-auto text-primary mb-4" />
                    <p className="text-xl font-bold text-white">
                      Catálogo Digital
                    </p>
                    <p className="text-white/60 mt-2">2024</p>
                    <p className="text-sm text-white/40 mt-4">
                      +50 páginas de produtos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
