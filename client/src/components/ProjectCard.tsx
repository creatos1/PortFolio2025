import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PortfolioProject } from "@/data/portfolio";
import { useState } from "react";

interface ProjectCardProps {
  project: PortfolioProject;
  onClick: (project: PortfolioProject) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all group"
      onClick={() => onClick(project)}
      data-testid={`card-project-${project.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse"></div>
        )}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          data-testid={`img-project-${project.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3
            className="text-xl font-semibold line-clamp-2"
            data-testid={`text-project-title-${project.id}`}
          >
            {project.title}
          </h3>
          <Badge variant="secondary" className="shrink-0">
            {project.category}
          </Badge>
        </div>

        <p
          className="text-sm text-muted-foreground line-clamp-2 mb-4"
          data-testid={`text-project-description-${project.id}`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="outline" className="text-xs">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
