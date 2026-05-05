import type { IconType } from "react-icons"
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiNx,
  SiOvh,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiWordpress,
} from "react-icons/si"
import { TbBrandAdobe } from "react-icons/tb"

import type { TechIconKey } from "@/data/techStack"

const techIconMap: Record<TechIconKey, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGraphql,
  SiWordpress,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiNpm,
  SiOvh,
  SiFigma,
  TbBrandAdobe,
  SiThreedotjs,
  SiNx,
}

export function TechIcon({
  name,
  className,
  title,
}: {
  name: TechIconKey
  className?: string
  title?: string
}) {
  const Icon = techIconMap[name]
  return <Icon className={className} aria-hidden title={title} />
}
