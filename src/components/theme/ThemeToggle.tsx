import { Monitor, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, cycleTheme } = useTheme()

  const icon =
    theme === "system" ? (
      <Monitor className="size-4" aria-hidden />
    ) : theme === "dark" ? (
      <Moon className="size-4" aria-hidden />
    ) : (
      <Sun className="size-4" aria-hidden />
    )

  const label =
    theme === "system"
      ? "Tema: según el sistema (clic para claro)"
      : theme === "dark"
        ? "Tema: oscuro (clic para sistema)"
        : "Tema: claro (clic para oscuro)"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      className="shrink-0 border-border/80"
      onClick={cycleTheme}
      aria-label={label}
      title={label}
    >
      {icon}
    </Button>
  )
}
