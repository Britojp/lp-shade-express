import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/produtos", label: "Produtos" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/revendas", label: "Revendas" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm md:text-base font-medium">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span>Atendimento em todo Brasil - Qualidade garantida</span>
          </div>
          <a href="tel:+551133334444" className="flex items-center gap-2 text-sm md:text-base font-medium hover:text-white/80 transition-colors" data-testid="header-phone">
            <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="hidden sm:inline">(11) 3333-4444</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary shadow-lg" 
          : "bg-transparent"
      } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center relative">
              <div className={`absolute -inset-2 rounded-lg transition-colors ${
                isScrolled ? "bg-white/10" : "bg-primary/5"
              }`} />
              <span className={`text-2xl font-bold tracking-tight relative z-10 transition-colors ${
                isScrolled ? "text-white" : "text-foreground"
              }`}>
                <span className={isScrolled ? "text-white" : "text-primary"}>SHADE</span>
                <span>{isScrolled ? "EXPRESS" : ""}</span>
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`px-4 py-2 text-sm font-medium transition-all relative ${
                    isScrolled
                      ? location === link.href
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : location === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  {location === link.href && (
                    <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r ${
                      isScrolled
                        ? "from-white/0 via-white to-white/0"
                        : "from-primary/0 via-primary to-primary/0"
                    }`} />
                  )}
                </button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/catalogo">
              <Button 
                variant={isScrolled ? "outline" : "outline"} 
                className={isScrolled ? "border-white text-white hover:bg-white/10" : ""}
                data-testid="button-download-catalog"
              >
                Baixar Catálogo
              </Button>
            </Link>
            <Link href="/revendas">
              <Button 
                className={isScrolled ? "bg-white text-primary hover:bg-white/90" : ""}
                data-testid="button-become-reseller"
              >
                Seja Revendedor
              </Button>
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 rounded-md hover-elevate transition-colors ${
              isScrolled ? "text-white" : "text-foreground"
            }`}
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
        <div className={`lg:hidden animate-slide-down ${
          isScrolled ? "bg-primary" : "bg-white"
        } ${isScrolled ? "border-t border-white/10" : "border-t border-border"}`}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isScrolled
                      ? location === link.href
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:bg-white/10"
                      : location === link.href
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
            <div className={`pt-4 space-y-2 ${
              isScrolled ? "border-t border-white/10" : "border-t border-border"
            } mt-4`}>
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
                  Seja Revendedor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
