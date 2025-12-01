import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ResellerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    city: "",
    state: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // todo: remove mock functionality - integrate with backend
    console.log("Reseller form submitted:", formData);
    setSubmitted(true);
    toast({
      title: "Cadastro enviado!",
      description: "Nossa equipe entrará em contato em breve.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Cadastro realizado com sucesso!
            </h2>
            <p className="text-muted-foreground mb-2">
              Obrigado pelo seu interesse em ser uma revenda Shade Express.
            </p>
            <p className="text-muted-foreground">
              Nossa equipe comercial entrará em contato em até 48 horas úteis.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Formulário de Cadastro
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Nome da Empresa *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  placeholder="Razão social"
                  required
                  data-testid="input-company-name"
                />
              </div>
              <div>
                <Label htmlFor="contactName">Nome do Contato *</Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => handleChange("contactName", e.target.value)}
                  placeholder="Seu nome"
                  required
                  data-testid="input-contact-name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="empresa@email.com"
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="(11) 99999-9999"
                  required
                  data-testid="input-phone"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="businessType">Tipo de Negócio *</Label>
              <Select
                value={formData.businessType}
                onValueChange={(value) => handleChange("businessType", value)}
              >
                <SelectTrigger data-testid="select-business-type">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="loja-decoracao">
                    Loja de Decoração
                  </SelectItem>
                  <SelectItem value="arquiteto">
                    Arquiteto / Designer
                  </SelectItem>
                  <SelectItem value="loja-planejados">
                    Loja de Planejados
                  </SelectItem>
                  <SelectItem value="home-center">Home Center</SelectItem>
                  <SelectItem value="instalador">
                    Instalador / Profissional
                  </SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">Cidade *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  placeholder="Sua cidade"
                  required
                  data-testid="input-city"
                />
              </div>
              <div>
                <Label htmlFor="state">Estado *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  placeholder="UF"
                  required
                  data-testid="input-state"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Conte-nos mais sobre seu negócio..."
                rows={4}
                data-testid="input-message"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              data-testid="button-submit-reseller"
            >
              Enviar Cadastro
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
