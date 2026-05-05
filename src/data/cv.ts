export const links = {
  linkedIn: "https://www.linkedin.com/in/silvak",
  email: "silvak.jeg@gmail.com",
  githubProfile: "https://github.com/Silvak",
} as const

export const heroBadges = [
  {
    label: "Frontend Engineer · Mid-level",
    variant: "secondary" as const,
  },
  {
    label: "4+ años · UI systems · React",
    variant: "outline" as const,
  },
] as const

export const identity = {
  name: "Jesús Silva",
  headline: "Frontend Engineer",
  focus: "React & TypeScript · UI Systems",
  currentRole: "Team Lead en Gravitad",
  location: "Venezuela",
  heroBlurb:
    "Me interesa el trabajo remoto con una buena cultura de equipo. Me apasionan las simulaciones y crear experiencias 3D en la web.",
} as const

export const aboutSummaryParagraphs = [
  "Soy un Frontend Engineer (Mid-level) con más de 4 años de experiencia construyendo productos digitales. Actualmente, me desempeño como Team Lead en Gravitad, donde combino el desarrollo activo con la toma de decisiones técnicas para garantizar productos escalables y de alto rendimiento.",
  "Enfocado en la eficiencia del desarrollo y la consistencia visual. He evolucionado desde la maquetación de interfaces hasta la gestión técnica integral, incluyendo infraestructuras con Docker y pipelines de CI/CD.",
] as const

export const aboutContributionsHeading = "Lo que puedo aportar a tu equipo:" as const

export const aboutContributionBullets = [
  {
    title: "Dominio Técnico",
    text: "Desarrollo avanzado en React y TypeScript, con un enfoque en la creación de componentes reutilizables y lógica de negocio eficiente.",
  },
  {
    title: "UI Systems & Tooling",
    text: "Creador de Liminal-UI, una librería de componentes headless que incluye una CLI personalizada para automatizar el versionado y las dependencias.",
  },
  {
    title: "Visión FullStack Pragática",
    text: "Manejo de Node.js, Express y despliegues en servidores mediante Docker y Dokploy.",
  },
  {
    title: "IA Aplicada",
    text: "Experiencia integrando sistemas RAG para análisis documental mediante embeddings y bases vectoriales.",
  },
] as const

export const aboutClosingParagraph =
  "Actualmente estoy cursando la carrera de Ingeniería de Sistemas (2025-2028) para formalizar y profundizar mis conocimientos teóricos. Busco oportunidades remotas en equipos que valoren la calidad del código, la automatización y el crecimiento constante." as const

export type ExperienceBullet = { text: string }

export type ExperienceEntry = {
  id: string
  company: string
  employmentType: string
  location: string
  remote?: boolean
  title: string
  period: string
  bullets: ExperienceBullet[]
  skillsNote?: string
}

export const experience: ExperienceEntry[] = [
  {
    id: "gravitad-lead",
    company: "Gravitad",
    employmentType: "Jornada completa",
    location: "España",
    remote: true,
    title: "Team Lead",
    period: "ago. 2023 – actualidad",
    bullets: [
      {
        text: "Coordino el desarrollo frontend y tomo decisiones técnicas para soluciones escalables en proyectos web.",
      },
      {
        text: "Superviso la calidad del código mediante code review y estándares técnicos para el equipo.",
      },
      {
        text: "Gestiono infraestructura y DevOps: servidores (OVH / Dokploy) y CI/CD para más de 80 sitios WordPress y 10 aplicaciones web personalizadas.",
      },
      {
        text: "Diseño flujos de automatización con n8n para optimizar procesos internos.",
      },
    ],
    skillsNote: "JavaScript, TypeScript y más",
  },
  {
    id: "gravitad-fe",
    company: "Gravitad",
    employmentType: "Jornada completa",
    location: "España",
    remote: true,
    title: "Frontend Developer",
    period: "ene. 2022 – ago. 2023",
    bullets: [
      {
        text: "Interfaces interactivas y componentes reutilizables con React, alineados a UI/UX.",
      },
      {
        text: "Integración de servicios REST y lógica de negocio en el cliente.",
      },
      {
        text: "Optimización de rendimiento y convenciones de código para mantenibilidad.",
      },
    ],
    skillsNote: "JavaScript, TypeScript y más",
  },
  {
    id: "contractor-dev",
    company: "Contratista independiente",
    employmentType: "Autónomo",
    location: "Estado Mérida, Venezuela",
    remote: true,
    title: "Software Developer",
    period: "abr. 2019 – dic. 2021",
    bullets: [
      {
        text: "Liminal-UI: librería headless y CLI propia con Node.js.",
      },
      {
        text: "ProTicket: sistema full stack de tickets con paneles admin, autenticación y datos asíncronos.",
      },
    ],
    skillsNote: "JavaScript, Node.js y más",
  },
  {
    id: "contractor-design",
    company: "Contratista independiente",
    employmentType: "Autónomo",
    location: "Argentina",
    title: "Diseñador gráfico",
    period: "feb. 2018 – mar. 2019",
    bullets: [
      {
        text: "Branding corporativo y material publicitario.",
      },
      {
        text: "Comunicación con clientes y entrega de activos digitales.",
      },
      {
        text: "Adobe Photoshop e Illustrator.",
      },
    ],
    skillsNote: "Adobe Photoshop, colaboración remota y más",
  },
]

export const education = [
  {
    id: "iupsm",
    institution: "Instituto Universitario Politécnico Santiago Mariño",
    degree: "Ingeniería de Sistemas",
    period: "ene. 2025 – dic. 2028",
    description:
      "Refuerzo de bases de computación y diseño de software; complementa lo que ya hago llevando frontend e infra en el día a día.",
    tags: [] as string[],
  },
  {
    id: "tm",
    institution: "Técnico medio",
    degree: "Mención informática",
    period: "",
    description: "Formación técnica en informática.",
    tags: [] as string[],
  },
] as const

export type IssuerKind = "linkedin" | "platzi" | "google" | "other"

export type Certification = {
  id: string
  name: string
  issuer: string
  date: string
  /** Enlace directo al diploma o certificado; si falta, no se muestra CTA en la UI. */
  credentialUrl?: string
  credentialId?: string
  issuerKind: IssuerKind
}

export const certifications: Certification[] = [
  {
    id: "li-arch",
    name: "Arquitectura de software: patrones esenciales",
    issuer: "LinkedIn Learning",
    date: "jun. 2022",
    issuerKind: "linkedin",
  },
  {
    id: "platzi-fe",
    name: "Curso práctico de Frontend Developer",
    issuer: "Platzi",
    date: "ene. 2021",
    credentialId: "21ea4c1e-cff1-4e42-a4f1-6b6ea324c3b3",
    issuerKind: "platzi",
  },
  {
    id: "google-mobile",
    name: "Desarrollo de aplicaciones móviles",
    issuer: "Google Actívate",
    date: "jun. 2019",
    credentialId: "FRQ ZHA LFC",
    issuerKind: "google",
  },
]

export type ProjectEntry = {
  id: string
  name: string
  description: string
  repoUrl: string
  demoUrl?: string
  period?: string
  stack: readonly string[]
}

export const projects: ProjectEntry[] = [
  {
    id: "liminal-ui",
    name: "liminal-ui",
    description:
      "UI kit que vive en tu repo: componentes headless con Ark UI, tokens tipo shadcn y una CLI para añadir piezas y ver diferencias. Lo uso cuando quiero dueñar el código del diseño, no solo consumirlo desde node_modules.",
    repoUrl: "https://github.com/Silvak/liminal-ui",
    demoUrl: "https://liminal-ui.silvak.dev",
    period: "2025 – actualidad",
    stack: ["TypeScript", "React", "Tailwind CSS", "Ark UI", "CLI"],
  },
  {
    id: "ghosttype",
    name: "ghosttype",
    description:
      "Extensión para revisar texto antes de publicar: corre modelos en local con WebGPU y Transformers.js y estima riesgo estilométrico. Todo en IndexedDB; sin telemetría.",
    repoUrl: "https://github.com/Silvak/ghosttype",
    period: "2026",
    stack: ["TypeScript", "React", "WXT", "Tailwind CSS"],
  },
  {
    id: "proticket-front",
    name: "ProTicket-Front",
    description:
      "Frontend de rifas, tickets y talonarios: flujos admin exigentes y estado con Zustand. Vite, React y Tailwind; Docker para que staging y producción se parezcan.",
    repoUrl: "https://github.com/Silvak/ProTicket-Front",
    period: "2021 – 2022",
    stack: ["TypeScript", "React", "Tailwind CSS", "Docker"],
  },
  {
    id: "proticket-back",
    name: "ProTicket-Back",
    description:
      "API REST con Node, Express y TypeScript; reglas de negocio fuera de los controladores. MongoDB abajo y Docker para empaquetar. Pensado para crecer desde un MVP sin romper contratos a quien consuma la API.",
    repoUrl: "https://github.com/Silvak/ProTicket-Back",
    period: "2021 – 2022",
    stack: ["TypeScript", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "zafir",
    name: "ZafirProjects-React",
    description:
      "Organización de proyectos y tareas para equipos pequeños: tableros simples y React + MUI sobre JavaScript. De 2021; prioricé iterar rápido en la interfaz.",
    repoUrl: "https://github.com/Silvak/ZafirProjects-React",
    period: "2021",
    stack: ["JavaScript", "React", "MUI"],
  },
]

export const navItems = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
] as const
