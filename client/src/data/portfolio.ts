export interface PortfolioProject {
  id: number;
  title: string;
  category: "Diseño Digital" | "Diseño Impreso" | "Branding" | "Redes Sociales";
  date: string;
  image?: string;  
  video?: string; 
  description: string;
  tools: string[];
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "Flyers para publicidad de restaurante",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/flyer.jpg",
    description: "Diseño de Flyer digital.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: 2,
    title: "Etiquetas para botellas de agua",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/Agua.png",
    description: "Diseño de etiqueta digital.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: 3,
    title: "Creación e impresión de empaques para insumos de mascotas",
    category: "Diseño Impreso",
    date: "2025",
    image: "/images/blister.png",
    description: "Diseño e impresión de empaques tipo blister para insumos de mascotas, con enfoque en durabilidad y atractivo visual para el punto de venta.",
    tools: ["Photoshop", "Illustrator", "Atools"]
  },
  {
    id: 4,
    title: "Canal de Youtube",
    category: "Redes Sociales",
    date: "2025",
    image: "/images/canal.png",
    description: "Canal de youtube con 5 años de experiencia en creación de contenido audiovisual, edición de video y optimización para SEO en plataformas digitales.",
    tools: ["Photoshop", "Illustrator", "Filmora", "After Effects"]
  },
  {
    id: 5,
    title: "Diseño de lonas publicitarias",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/carnitas.jpg",
    description: "Creación y diseño de lonas publicitarias para restaurante de carnitas, enfocadas en atraer clientes mediante gráficos llamativos y mensajes claros.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: 6,
    title: "Creación de aaplicaciones nativas para aagilizar procesoss",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/folios.png",
    description: "Creacion de aplicaciones nativas para agilizar procesos internos en la empresa, mejorando la eficiencia y reduciendo errores operativos, tal como crear app para foliar y evitar hacerlo manual.",
    tools: ["Python", "Visual Studio Code"]
  },
  {
    id: 7,
    title: "Creación de logos personales y empresariales",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/logo.png",
    description: "Diseño de logotipos personalizados para individuos y empresas, enfocándose en la identidad de marca y la comunicación visual efectiva.",
    tools: ["Photoshop", "Adoebe Illustrator"]
  },
  {
    id: 8,
    title: "Creación de diseños para imanes publicitarios en vinil impreso",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/kaaj.png",
    description: "Creación de diseños atractivos para imanes publicitarios en vinil impreso, optimizados para alta visibilidad y durabilidad en diversas superficies.",
    tools: ["Photoshop", "Adoebe Illustrator"]
  },
  {
    id: 9,
    title: "Creación de diseño para rotulación de vehículos",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/maxigrua.png",
    description: " Diseño de rotulación para vehículos de empresa, asegurando que los gráficos sean llamativos y legibles desde la distancia, promoviendo la marca en movimiento.",
    tools: ["Photoshop", "Adoebe Illustrator"]
  },
  {
    id: 11,
    title: "Creación de menús digitales e impresos",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/menu.png",
    description: "Creación de menús tanto digitales como impresos para restaurantes, con un diseño atractivo y funcional que mejora la experiencia del cliente.",
    tools: ["Photoshop", "Adoebe Illustrator"]
  },
  {
    id: 12,
    title: "Creación de stickers con suaje personalizado",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/suaje.png",
    description: "Creación de stickers personalizados con suaje especial, ideales para promociones y branding, utilizando materiales de alta calidad para una mejor presentación.",
    tools: ["Photoshop", "Adoebe Illustrator"]
  },
  {
    id: 13,
    title: "Desarrollo de paginas web para pequeñas y medianas empresas",
    category: "Diseño Digital",
    date: "2025",
    image: "/images/web.png",
    description: "Es un ejemplo de una página web desarrollada para una pequeña empresa, incluyendo diseño responsivo y moderno.",
    tools: ["Visual Studio", "Photoshop", "Illustrator", "HTML", "CSS", "JavaScript", "Angular"]
  },
  {
    id: 14,
    title: "Producción de lona, vinil impreso y corte de vinil",
    category: "Diseño Impreso",
    date: "2025",
    image: "/images/vinil.jpg", 
    description: "Producción e impresión de lonas y vinil impreso, así como corte de vinil para diversas aplicaciones publicitarias, garantizando alta calidad y durabilidad.",
    tools: ["Photoshop", "Illustrator"]
  },
    {
    id: 15,
    title: "Corte de etiquetas con plotter de corte",
    category: "Diseño Impreso",
    date: "2025",
    image: "/images/plottercorte.png", 
    description: "Producción y corte de etiquetas utilizando plotter de corte, ideal para personalización y branding en productos diversos.",
    tools: ["Photoshop", "Illustrator"]
  },
];

export const categories = ["Todos", "Diseño Digital", "Diseño Impreso", "Branding", "Redes Sociales"] as const;

export const skills = [
  { name: "Adobe Photoshop", level: "", icon: "image" },
  { name: "Adobe Illustrator", level: "", icon: "pen-tool" },

  { name: "Canva", level: "", icon: "palette" },
  { name: "Adobe Animate", level: "", icon: "play" },
  { name: "Filmora", level: "", icon: "video" },
  { name: "After Effects", level: "", icon: "film" },
  { name: "HTML/CSS", level: "", icon: "code" },
  { name: "JavaScript", level: "", icon: "code-2" },
  { name: "Angular", level: "", icon: "layers" }
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
