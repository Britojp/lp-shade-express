import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube, ArrowRight } from "lucide-react";

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
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold">
                  <span className="text-primary">SHADE</span>
                  <span className="text-white">EXPRESS</span>
                </span>
              </Link>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Cortinas e persianas modernas com qualidade, rapidez e preço
                acessível para todo o Brasil.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 flex items-center justify-center group hover:scale-110"
                  data-testid="social-instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 flex items-center justify-center group hover:scale-110"
                  data-testid="social-facebook"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 flex items-center justify-center group hover:scale-110"
                  data-testid="social-linkedin"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 flex items-center justify-center group hover:scale-110"
                  data-testid="social-youtube"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key}>
                <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-white">
                  {key === "productos" ? "Produtos" : key === "empresa" ? "Empresa" : "Recursos"}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <span className="w-0 group-hover:w-3 h-0.5 bg-primary transition-all" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-white">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/60 hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <a href="mailto:contato@shadeexpress.com.br" className="hover:text-primary transition-colors">
                    contato@shadeexpress.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/60 hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <a href="tel:+551133334444" className="hover:text-primary transition-colors">
                    (11) 3333-4444
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/60 hover:text-primary transition-colors group">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <span>São Paulo, SP - Brasil</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Shade Express. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group" data-testid="footer-privacy">
              Política de Privacidade
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-all" />
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group" data-testid="footer-terms">
              Termos de Uso
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
