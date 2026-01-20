import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const headerHeight = '64px';
  const headerHeightDesktop = '80px';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-lg" 
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 gap-2 sm:gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center relative">
              <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight relative z-10 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <span className="text-[#F68D2E]">SHADE</span>
                <span className="text-gray-900 hidden sm:inline"> EXPRESS</span>
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`px-3 xl:px-4 py-2 text-sm font-medium transition-all relative ${
                    location === link.href
                      ? "text-[#F68D2E]"
                      : "text-gray-700 hover:text-[#F68D2E]"
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  {location === link.href && (
                    <div className="absolute bottom-0 left-3 xl:left-4 right-3 xl:right-4 h-0.5 bg-gradient-to-r from-[#F68D2E]/0 via-[#F68D2E] to-[#F68D2E]/0" />
                  )}
                </button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Link href="/catalogo">
              <Button 
                variant="outline" 
                className="border-[#F68D2E] text-[#F68D2E] hover:bg-[#F68D2E]/5 text-xs sm:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
                data-testid="button-download-catalog"
              >
                <span className="hidden lg:inline">Baixar Catálogo</span>
                <span className="lg:hidden">Catálogo</span>
              </Button>
            </Link>
            <Link href="/revendas">
              <Button 
                className="bg-[#F68D2E] hover:bg-[#E87D1E] text-white text-xs sm:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
                data-testid="button-become-reseller"
              >
                <span className="hidden lg:inline">Seja Revendedor</span>
                <span className="lg:hidden">Revenda</span>
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700 flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
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
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            style={{ top: headerHeight }}
          />
          <div 
            className="fixed left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 animate-slide-down overflow-y-auto"
            style={{ 
              top: headerHeight,
              maxHeight: `calc(100vh - ${headerHeight})`
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button
                    className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                      location === link.href
                        ? "bg-[#F68D2E]/10 text-[#F68D2E]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
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
                    className="w-full bg-[#F68D2E] hover:bg-[#E87D1E] text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Seja Revendedor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}