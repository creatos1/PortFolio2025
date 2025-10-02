import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { PortfolioProject } from "@/data/portfolio";
import { Calendar, Wrench } from "lucide-react";

interface ProjectModalProps {
  project: PortfolioProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl" data-testid="text-modal-title">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              data-testid="img-modal-project"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="gap-2">
              {project.category}
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Calendar className="h-3 w-3" />
              {project.date}
            </Badge>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-modal-description">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Herramientas utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="outline">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
