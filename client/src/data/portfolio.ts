export interface PortfolioProject {
  id: number;
  title: string;
  category: "Diseño Digital" | "Diseño Impreso" | "Branding" | "Redes Sociales";
  date: string;
  image: string;
  description: string;
  tools: string[];
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "Campaña de Salud Digital",
    category: "Diseño Digital",
    date: "2024",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    description: "Diseño de campaña digital para servicios de salud, incluyendo banners web y contenido para redes sociales enfocado en promover servicios médicos preventivos.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: 2,
    title: "Logo Clínica Moderna",
    category: "Branding",
    date: "2024",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
    description: "Identidad visual completa para clínica moderna, incluyendo logo principal, variaciones y manual de marca con paleta de colores profesional del sector salud.",
    tools: ["Illustrator", "InDesign"]
  },
  {
    id: 3,
    title: "Flyer Promocional Nutrición",
    category: "Diseño Impreso",
    date: "2024",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    description: "Flyer impreso para campaña de nutrición y bienestar, diseñado para distribución en centros de salud con información clara y visual atractiva.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: 4,
    title: "Banner Exterior Farmacia",
    category: "Diseño Impreso",
    date: "2024",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    description: "Banner de gran formato para fachada de farmacia, con diseño llamativo que comunica promociones y servicios disponibles las 24 horas.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: 5,
    title: "Tarjetas Médico Especialista",
    category: "Branding",
    date: "2025",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    description: "Diseño de tarjetas de presentación elegantes para médico especialista, con acabado premium y tipografía profesional que transmite confianza.",
    tools: ["Illustrator", "InDesign"]
  },
  {
    id: 6,
    title: "Contenido Instagram Wellness",
    category: "Redes Sociales",
    date: "2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    description: "Serie de posts para Instagram sobre bienestar y salud mental, con diseño cohesivo y paleta de colores relajante para engagement en redes sociales.",
    tools: ["Photoshop", "Canva"]
  },
  {
    id: 7,
    title: "Viniles Consultorio Dental",
    category: "Diseño Impreso",
    date: "2024",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=600&fit=crop",
    description: "Diseño de viniles decorativos para consultorio dental, combinando información educativa sobre higiene bucal con elementos visuales amigables.",
    tools: ["Illustrator", "Photoshop"]
  },
  {
    id: 8,
    title: "Infografía Servicios Médicos",
    category: "Diseño Digital",
    date: "2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    description: "Infografía digital explicando servicios médicos especializados, con iconografía clara y flujo de información optimizado para comprensión rápida.",
    tools: ["Illustrator", "Photoshop"]
  },
  {
    id: 9,
    title: "Lona Campaña Vacunación",
    category: "Diseño Impreso",
    date: "2024",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop",
    description: "Lona de gran formato para campaña de vacunación comunitaria, diseño con alta visibilidad y mensaje claro para informar a la población.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: 10,
    title: "Identidad Visual Hospital",
    category: "Branding",
    date: "2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    description: "Sistema completo de identidad visual para hospital privado, incluyendo papelería, señalética y aplicaciones digitales con enfoque en profesionalismo.",
    tools: ["Illustrator", "InDesign", "Photoshop"]
  },
  {
    id: 11,
    title: "Posts Facebook Salud Preventiva",
    category: "Redes Sociales",
    date: "2024",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    description: "Contenido visual para campaña en Facebook sobre medicina preventiva, con diseño educativo que fomenta la participación y compartir información.",
    tools: ["Photoshop", "Canva"]
  },
  {
    id: 12,
    title: "Banner Web Telemedicina",
    category: "Diseño Digital",
    date: "2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    description: "Banners responsivos para sitio web de telemedicina, comunicando facilidad de uso y accesibilidad de servicios médicos en línea.",
    tools: ["Photoshop", "Illustrator", "Adobe Animate"]
  }
];

export const categories = ["Todos", "Diseño Digital", "Diseño Impreso", "Branding", "Redes Sociales"] as const;

export const skills = [
  { name: "Adobe Photoshop", level: "Avanzado", icon: "image" },
  { name: "Adobe Illustrator", level: "Avanzado", icon: "pen-tool" },
  { name: "Adobe InDesign", level: "Avanzado", icon: "file-text" },
  { name: "Canva", level: "Avanzado", icon: "palette" },
  { name: "Adobe Animate", level: "Intermedio", icon: "play" },
  { name: "Filmora", level: "Avanzado", icon: "video" },
  { name: "After Effects", level: "Intermedio", icon: "film" },
  { name: "HTML/CSS", level: "Avanzado", icon: "code" },
  { name: "JavaScript", level: "Intermedio", icon: "code-2" },
  { name: "Angular", level: "Intermedio", icon: "layers" }
];

export const experience = [
  {
    id: 1,
    company: "Agencia Valore",
    position: "Diseñador web y gráfico, soporte técnico",
    period: "Agosto 2024 – Agosto 2025",
    location: "Aguascalientes",
    responsibilities: [
      "Diseño y desarrollo de páginas web con funcionalidades de e-commerce",
      "Atención directa a clientes y levantamiento de requerimientos",
      "Creación de piezas gráficas para campañas digitales",
      "Diseño para impresión en gran formato (banners, flyers, lonas)"
    ]
  },
  {
    id: 2,
    company: "White Lion Procurement",
    position: "Desarrollador de Aplicaciones Móviles",
    period: "Marzo – Abril 2024",
    location: "Remoto",
    responsibilities: [
      "Desarrollo de aplicaciones móviles durante prácticas profesionales",
      "Colaboración en proyectos de desarrollo multiplataforma"
    ]
  }
];

export const education = [
  {
    degree: "Ingeniería en Gestión de Software",
    institution: "Universidad Tecnológica de Aguascalientes",
    period: "2024 – Actualidad",
    location: "Aguascalientes, México"
  },
  {
    degree: "TSU en Tecnologías de la Información",
    institution: "Universidad Tecnológica de Aguascalientes",
    period: "2022 – 2024",
    location: "Aguascalientes, México"
  }
];

export const achievements = [
  "1er Lugar – Hackathon Smart Security Aguascalientes 2023",
  "4° Lugar – Hackathon The IoT Challenge 2024",
  "Creador de contenido en YouTube y TikTok (monetizado)"
];
