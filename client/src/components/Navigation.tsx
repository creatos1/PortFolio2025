import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-bold hover-elevate active-elevate-2 rounded-md px-3 py-2"
            data-testid="button-home"
          >
            Ian Rodríguez
          </button>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
              data-testid="button-nav-portfolio"
            >
              Portfolio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("sobre-mi")}
              data-testid="button-nav-about"
            >
              Sobre Mí
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("habilidades")}
              data-testid="button-nav-skills"
            >
              Habilidades
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contacto")}
              data-testid="button-nav-contact"
            >
              Contacto
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle-mobile"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => scrollToSection("portfolio")}
              data-testid="button-mobile-portfolio"
            >
              Portfolio
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => scrollToSection("sobre-mi")}
              data-testid="button-mobile-about"
            >
              Sobre Mí
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => scrollToSection("habilidades")}
              data-testid="button-mobile-skills"
            >
              Habilidades
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => scrollToSection("contacto")}
              data-testid="button-mobile-contact"
            >
              Contacto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
