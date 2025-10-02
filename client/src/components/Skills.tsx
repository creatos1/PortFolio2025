import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";
import {
  Image,
  PenTool,
  FileText,
  Palette,
  Play,
  Video,
  Film,
  Code,
  Code2,
  Layers,
} from "lucide-react";

const iconMap: Record<string, any> = {
  image: Image,
  "pen-tool": PenTool,
  "file-text": FileText,
  palette: Palette,
  play: Play,
  video: Video,
  film: Film,
  code: Code,
  "code-2": Code2,
  layers: Layers,
};

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-skills-title">
            Habilidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dominio avanzado de herramientas de diseño profesionales y
            tecnologías de desarrollo web modernas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const Icon = iconMap[skill.icon];
            return (
              <Card
                key={idx}
                className="p-6 text-center hover-elevate transition-all"
                data-testid={`card-skill-${idx}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2" data-testid={`text-skill-name-${idx}`}>
                  {skill.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {skill.level}
                </Badge>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 inline-block">
            <h3 className="text-xl font-semibold mb-4">Idiomas</h3>
            <div className="flex gap-6">
              <div>
                <p className="font-medium">Español</p>
                <Badge variant="default">Nativo</Badge>
              </div>
              <div>
                <p className="font-medium">Inglés</p>
                <Badge variant="secondary">B1</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
