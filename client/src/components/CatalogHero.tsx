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
      console.log("Catalog download requested:", { name, email });
    }
  };

  return (
    <section className="pt-20">
      <div className="bg-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 shape-blob pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 shape-blob pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Material Completo
              </p>
              <div className="shape-accent-line mb-6" />
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
                    className="w-full glow-primary-hover"
                    data-testid="button-download-catalog-submit"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Baixar Catálogo
                  </Button>
                </form>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center max-w-md animate-scale-in">
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

            <div className="hidden lg:flex justify-center relative animate-scale-in">
              {/* Decorative shapes */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 shape-blob pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-primary/20 rounded-full pointer-events-none" />
              <div className="absolute top-1/2 -left-20 h-32 w-1 bg-gradient-to-b from-transparent via-primary/40 to-transparent pointer-events-none" />

              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-3xl" />
                <div className="relative w-72 h-96 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-white/30" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-white/30" />
                  
                  <div className="text-center p-8 relative z-10">
                    <Package className="w-20 h-20 mx-auto text-primary mb-4 animate-float" />
                    <p className="text-xl font-bold text-white">Catálogo Digital</p>
                    <p className="text-white/60 mt-2">2024</p>
                    <p className="text-sm text-white/40 mt-4">+50 páginas de produtos</p>
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
