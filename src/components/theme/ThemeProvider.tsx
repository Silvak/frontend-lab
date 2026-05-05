import * as React from "react"

import {
  THEME_STORAGE_KEY,
  type ThemePreference,
  applyThemeToDocument,
  resolveTheme,
} from "@/lib/theme"

type ThemeContextValue = {
  theme: ThemePreference
  resolvedTheme: "light" | "dark"
  setTheme: (t: ThemePreference) => void
  cycleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function readStoredTheme(): ThemePreference {
  const raw = localStorage.getItem(THEME_STORAGE_KEY)
  if (raw === "light" || raw === "dark" || raw === "system") return raw
  return "system"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<ThemePreference>(() =>
    typeof window !== "undefined" ? readStoredTheme() : "system",
  )
  const [systemDark, setSystemDark] = React.useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false,
  )

  const resolvedTheme = resolveTheme(theme, systemDark)

  React.useEffect(() => {
    applyThemeToDocument(resolvedTheme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme, resolvedTheme])

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => setSystemDark(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const setTheme = React.useCallback((t: ThemePreference) => {
    setThemeState(t)
  }, [])

  const cycleTheme = React.useCallback(() => {
    setThemeState((prev) =>
      prev === "system" ? "light" : prev === "light" ? "dark" : "system",
    )
  }, [])

  const value = React.useMemo(
    () => ({ theme, resolvedTheme, setTheme, cycleTheme }),
    [theme, resolvedTheme, setTheme, cycleTheme],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider")
  return ctx
}
