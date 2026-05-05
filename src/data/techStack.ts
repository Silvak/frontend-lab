export type TechIconKey =
  | "SiReact"
  | "SiNextdotjs"
  | "SiTypescript"
  | "SiJavascript"
  | "SiHtml5"
  | "SiCss"
  | "SiTailwindcss"
  | "SiGraphql"
  | "SiWordpress"
  | "SiNodedotjs"
  | "SiExpress"
  | "SiPython"
  | "SiMongodb"
  | "SiMysql"
  | "SiDocker"
  | "SiGithubactions"
  | "SiGit"
  | "SiGithub"
  | "SiNpm"
  | "SiOvh"
  | "SiFigma"
  | "TbBrandAdobe"
  | "SiThreedotjs"
  | "SiNx"

export type TechStackItem = {
  id: string
  label: string
  icon: TechIconKey
  /** Destacadas en la vista colapsada inicial */
  featured?: boolean
}

/** ~20 tecnologías resumidas (LinkedIn / experiencia), sin duplicar sinónimos */
export const techStack: TechStackItem[] = [
  { id: "react", label: "React", icon: "SiReact", featured: true },
  { id: "next", label: "Next.js", icon: "SiNextdotjs", featured: true },
  { id: "ts", label: "TypeScript", icon: "SiTypescript", featured: true },
  { id: "js", label: "JavaScript", icon: "SiJavascript" },
  { id: "html", label: "HTML", icon: "SiHtml5" },
  { id: "css", label: "CSS", icon: "SiCss" },
  { id: "tailwind", label: "Tailwind CSS", icon: "SiTailwindcss", featured: true },
  { id: "graphql", label: "GraphQL", icon: "SiGraphql" },
  { id: "wordpress", label: "WordPress", icon: "SiWordpress" },
  { id: "node", label: "Node.js", icon: "SiNodedotjs", featured: true },
  { id: "express", label: "Express.js", icon: "SiExpress" },
  { id: "python", label: "Python", icon: "SiPython" },
  { id: "mongo", label: "MongoDB", icon: "SiMongodb" },
  { id: "mysql", label: "MySQL", icon: "SiMysql" },
  { id: "docker", label: "Docker", icon: "SiDocker", featured: true },
  { id: "cicd", label: "CI/CD", icon: "SiGithubactions", featured: true },
  { id: "git", label: "Git", icon: "SiGit", featured: true },
  { id: "github", label: "GitHub", icon: "SiGithub" },
  { id: "npm", label: "NPM / CLI", icon: "SiNpm" },
  { id: "ovh", label: "OVH / infra", icon: "SiOvh" },
  { id: "figma", label: "Figma", icon: "SiFigma" },
  { id: "adobe", label: "Adobe", icon: "TbBrandAdobe" },
  { id: "three", label: "Three.js", icon: "SiThreedotjs" },
  { id: "nx", label: "Monorepos", icon: "SiNx" },
]
