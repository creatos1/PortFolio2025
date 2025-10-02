import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  const sampleProject = {
    id: 1,
    title: "Campaña de Salud Digital",
    category: "Diseño Digital" as const,
    date: "2024",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    description: "Diseño de campaña digital para servicios de salud, incluyendo banners web y contenido para redes sociales.",
    tools: ["Photoshop", "Illustrator"]
  };

  return (
    <div className="p-6 max-w-sm">
      <ProjectCard 
        project={sampleProject} 
        onClick={(project) => console.log('Project clicked:', project)}
      />
    </div>
  );
}
