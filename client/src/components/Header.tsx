import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Shade<span className="text-foreground">Express</span>
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/catalogo">
              <Button variant="outline" data-testid="button-download-catalog">
                Baixar Catálogo
              </Button>
            </Link>
            <Link href="/revendas">
              <Button data-testid="button-become-reseller">
                Quero ser Revenda
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover-elevate"
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

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium hover-elevate ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-border mt-2">
              <Link href="/catalogo">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Baixar Catálogo
                </Button>
              </Link>
              <Link href="/revendas">
                <Button
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quero ser Revenda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
