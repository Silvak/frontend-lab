export const THEME_STORAGE_KEY = "cv-theme"

export type ThemePreference = "light" | "dark" | "system"

export function resolveTheme(
  preference: ThemePreference,
  systemDark: boolean,
): "light" | "dark" {
  if (preference === "system") return systemDark ? "dark" : "light"
  return preference
}

export function applyThemeToDocument(resolved: "light" | "dark") {
  const root = document.documentElement
  root.classList.toggle("dark", resolved === "dark")
  root.style.colorScheme = resolved
}
