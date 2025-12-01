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
        description: "Verifique seu e-mail para o download.",
      });
    }
  };

  return (
    <section className="pt-20 pb-0">
      <div className="bg-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
                Catálogo
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-display-large text-white mb-6 leading-tight">
                Shade Express 2024
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Acesse nosso catálogo digital com todos os modelos, acabamentos e especificações técnicas. Ideal para revendas e profissionais.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    data-testid="input-catalog-name"
                  />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    data-testid="input-catalog-email"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-bold"
                    data-testid="button-download-catalog-submit"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Baixar Catálogo
                  </Button>
                </form>
              ) : (
                <div className="bg-white/5 rounded-lg p-6 max-w-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold">Download enviado!</p>
                      <p className="text-white/60 text-sm">Verifique seu e-mail</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:flex justify-end relative">
              <div className="relative w-64 h-80 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                <Package className="w-24 h-24 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
