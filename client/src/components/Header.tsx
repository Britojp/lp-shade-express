import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/produtos", label: "Produtos" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/revendas", label: "Revendas" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-display-large">
                <span className="text-primary">SHADE</span>
                <span className="text-foreground">EXPRESS</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button
                    className={`text-sm font-medium transition-colors ${
                      location === link.href
                        ? "text-primary font-bold"
                        : "text-foreground hover:text-primary"
                    }`}
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+551133334444"
                className="flex items-center gap-2 text-primary font-semibold"
              >
                <Phone className="w-4 h-4" />
                +55 (11) 3333-4444
              </a>
            </div>

            <button
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-border lg:hidden">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-4">
              <a
                href="tel:+551133334444"
                className="block px-4 py-3 text-primary font-semibold"
              >
                +55 (11) 3333-4444
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
