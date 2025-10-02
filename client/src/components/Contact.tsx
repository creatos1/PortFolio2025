import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { SiGithub, SiLinkedin, SiYoutube, SiTiktok } from "react-icons/si";

export default function Contact() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/CV_Ian_Rodriguez 2025_1759422513347.pdf';
    link.download = 'CV_Ian_Rodriguez_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Contacto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? No dudes en contactarme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:ianrodsan.2004@gmail.com"
                className="flex items-center gap-4 hover-elevate active-elevate-2 p-3 rounded-md"
                data-testid="link-email"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">ianrodsaan.2004@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+524495526644"
                className="flex items-center gap-4 hover-elevate active-elevate-2 p-3 rounded-md"
                data-testid="link-phone"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium">+52 449 552 6644</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium">Aguascalientes, México</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Redes Sociales</h4>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  asChild
                  data-testid="button-github"
                >
                  <a
                    href="https://github.com/creatos1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button
                  size="icon"
                  variant="outline"
                  asChild
                  data-testid="button-youtube"
                >
                  <a
                    href="https://www.youtube.com/@AxlGamester/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiYoutube className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  asChild
                  data-testid="button-tiktok"
                >
                  <a
                    href="https://www.tiktok.com/@axlgamester"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiTiktok className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-8 flex flex-col justify-center">
            <div className="text-center">
              <div className="inline-block p-6 rounded-full bg-primary/10 mb-6">
                <Download className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Descarga mi CV</h3>
              <p className="text-muted-foreground mb-8">
                Descarga mi currículum vitae completo en formato PDF para
                conocer más detalles sobre mi experiencia y habilidades.
              </p>
              <Button
                size="lg"
                onClick={handleDownloadCV}
                data-testid="button-download-cv-section"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar CV
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
