export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Ian Rodríguez</h3>
            <p className="text-sm text-muted-foreground">
              Diseñador gráfico y desarrollador web especializado en crear
              experiencias visuales atractivas y funcionales.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("portfolio")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("sobre-mi")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-about"
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("habilidades")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-skills"
                >
                  Habilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Aguascalientes, México</li>
              <li>
                <a
                  href="mailto:ianrodsaan.2004@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  ianrodsaan.2004@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+524495526644"
                  className="hover:text-foreground transition-colors"
                >
                  +52 449 552 6644
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Ian Axel Rodríguez Santoyo. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
