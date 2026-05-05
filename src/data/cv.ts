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
  name: "Jesus Silva",
  headline: "Frontend Engineer",
  focus: "React & TypeScript · UI Systems",
  currentRole: "Team Lead en Gravitad",
  location: "Venezuela",
  heroBlurb:
    "Me interesa el trabajo remoto y equipos con cultura sana y transparente. Me apasiona el 3D en la web, las simulaciones y experimentar con Three.js.",
} as const

export const aboutIntro =
  "Soy un Frontend Engineer (Mid-level) con más de 4 años de experiencia construyendo productos digitales. Actualmente, me desempeño como Team Lead en Gravitad, donde combino el desarrollo activo con la toma de decisiones técnicas para garantizar productos escalables y de alto rendimiento."

export const aboutBody = [
  "Enfocado en la eficiencia del desarrollo y la consistencia visual. He evolucionado desde la maquetación de interfaces hasta la gestión técnica integral, incluyendo infraestructuras con Docker y pipelines de CI/CD.",
  "Actualmente estoy cursando la carrera de Ingeniería de Sistemas (2025-2028) para formalizar y profundizar mis conocimientos teóricos. Busco oportunidades remotas en equipos que valoren la calidad del código, la automatización y el crecimiento constante.",
]

export const valueProps = [
  {
    title: "Dominio técnico",
    text: "Desarrollo avanzado en React y TypeScript, con enfoque en componentes reutilizables y lógica de negocio eficiente.",
  },
  {
    title: "UI systems y tooling",
    text: "Creador de Liminal-UI, librería de componentes headless con CLI personalizada para versionado y dependencias.",
  },
  {
    title: "Visión full stack pragmática",
    text: "Node.js, Express y despliegues con Docker y Dokploy.",
  },
  {
    title: "IA aplicada",
    text: "Integración de sistemas RAG para análisis documental con embeddings y bases vectoriales.",
  },
] as const

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
    company: "Independent Contractor",
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
    company: "Independent Contractor",
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
      "Consolidación de fundamentos para potenciar mi rol como arquitecto de software.",
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
  credentialUrl: string
  credentialId?: string
  issuerKind: IssuerKind
}

export const certifications: Certification[] = [
  {
    id: "li-arch",
    name: "Arquitectura de software: patrones esencial",
    issuer: "LinkedIn Learning",
    date: "jun. 2022",
    credentialUrl: "https://www.linkedin.com/learning/",
    issuerKind: "linkedin",
  },
  {
    id: "platzi-fe",
    name: "Curso práctico de Frontend Developer",
    issuer: "Platzi",
    date: "ene. 2021",
    credentialUrl: "https://platzi.com/p/",
    credentialId: "21ea4c1e-cff1-4e42-a4f1-6b6ea324c3b3",
    issuerKind: "platzi",
  },
  {
    id: "google-mobile",
    name: "Development of mobile apps",
    issuer: "Google Actívate",
    date: "jun. 2019",
    credentialUrl: "https://skillshop.exceedlms.com/",
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
      "Sistema de diseño distribuido como código en el propio repositorio: componentes headless sobre Ark UI, tokens alineados con el ecosistema shadcn y una CLI que automatiza init, add y diff —pensado para equipos que quieren control total del UI kit sin depender de versiones opacas en node_modules.",
    repoUrl: "https://github.com/Silvak/liminal-ui",
    demoUrl: "https://liminal-ui.silvak.dev",
    period: "2025 – actualidad",
    stack: ["TypeScript", "React", "Tailwind CSS", "Ark UI", "CLI"],
  },
  {
    id: "ghosttype",
    name: "ghosttype",
    description:
      "Extensión de navegador orientada a la privacidad del autor: análisis e inferencia en local (WebGPU y Transformers.js) para visibilizar el riesgo estilométrico antes de publicar, con almacenamiento en IndexedDB y arquitectura explícitamente local-first, sin telemetría.",
    repoUrl: "https://github.com/Silvak/ghosttype",
    period: "2026",
    stack: ["TypeScript", "React", "WXT", "Tailwind CSS"],
  },
  {
    id: "proticket-front",
    name: "ProTicket-Front",
    description:
      "Interfaz web de un producto de gestión de rifas, tickets y talonarios: flujos administrativos exigentes, estado global con Zustand, stack Vite + React + Tailwind y despliegue containerizado con Docker para entornos predecibles en producción.",
    repoUrl: "https://github.com/Silvak/ProTicket-Front",
    period: "2021 – 2022",
    stack: ["TypeScript", "React", "Tailwind CSS", "Docker"],
  },
  {
    id: "proticket-back",
    name: "ProTicket-Back",
    description:
      "Backend del ecosistema Pro Ticket: API REST con Node, Express y TypeScript, reglas de negocio desacopladas de la capa HTTP, persistencia en MongoDB y empaquetado con Docker —diseñado para crecer de MVP a despliegues gestionados con contratos de API estables.",
    repoUrl: "https://github.com/Silvak/ProTicket-Back",
    period: "2021 – 2022",
    stack: ["TypeScript", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "zafir",
    name: "ZafirProjects-React",
    description:
      "Aplicación de organización de proyectos y tareas: prioriza tableros claros y flujos operativos repetibles para equipos pequeños; construida con React y Material UI sobre una base JavaScript consolidada, orientada a iteración rápida en la interfaz.",
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
