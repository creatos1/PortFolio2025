import { useState } from "react";
import { projects, categories } from "@/data/portfolio";
import type { PortfolioProject } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Button } from "@/components/ui/button";

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-portfolio-title"
          >
            Mi Portfolio
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-portfolio-subtitle"
          >
            Explora mi trabajo en diseño gráfico y desarrollo web, desde
            campañas digitales hasta materiales impresos de gran formato.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(" ", "-")}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No hay proyectos en esta categoría.
            </p>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
