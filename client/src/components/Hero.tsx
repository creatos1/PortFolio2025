import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/CV_Ian_Rodriguez 2025_1759422513347.pdf';
    link.download = 'CV_Ian_Rodriguez_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-white/20 shadow-2xl">
            <AvatarImage src="/images/profile.jpg" alt="Ian Rodríguez" />
            <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-pink-600">IR</AvatarFallback>
          </Avatar>
        </div>
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          data-testid="text-hero-title"
        >
          Ian Axel Rodríguez Santoyo
        </h1>
        <p
          className="text-xl md:text-2xl text-white/90 mb-4"
          data-testid="text-hero-subtitle"
        >
          Diseñador Gráfico & Desarrollador Web
        </p>
        <p
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12"
          data-testid="text-hero-description"
        >
          Más de 1 año de experiencia en agencia de marketing digital.
          Especializado en diseño visual y desarrollo web.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            onClick={() => scrollToSection("portfolio")}
            data-testid="button-view-portfolio"
          >
            Ver Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            onClick={handleDownloadCV}
            data-testid="button-download-cv"
          >
            <Download className="mr-2 h-5 w-5" />
            Descargar CV
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("portfolio")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="h-8 w-8 text-white/70" />
        </button>
      </div>
    </section>
  );
}