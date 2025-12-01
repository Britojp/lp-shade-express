import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  produtos: [
    { label: "Cortinas Rolo", href: "/produtos" },
    { label: "Double Vision", href: "/produtos" },
    { label: "Romana", href: "/produtos" },
    { label: "Trilhos Motorizados", href: "/produtos" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "/empresa" },
    { label: "Diferenciais", href: "/empresa" },
    { label: "Blog", href: "/" },
  ],
  recursos: [
    { label: "Catálogo Digital", href: "/catalogo" },
    { label: "Seja Revenda", href: "/revendas" },
    { label: "Solicitar Mostruário", href: "/catalogo" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                Shade<span className="text-primary-foreground/70">Express</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Cortinas e persianas modernas com qualidade, rapidez e preço
              acessível.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover-elevate"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover-elevate"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover-elevate"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                contato@shadeexpress.com.br
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                (11) 9999-9999
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          <p>
            © {new Date().getFullYear()} Shade Express. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
