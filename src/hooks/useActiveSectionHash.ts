import { useEffect, useMemo, useState } from "react"

/** Header sticky (`h-14`) + margen para decidir qué ancla está “activa”. */
const HEADER_FOCUS_PX = 72

function pickActiveByScroll(ids: readonly string[]): string | null {
  let current: string | null = null
  for (const id of ids) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= HEADER_FOCUS_PX) current = `#${id}`
  }
  return current
}

/**
 * Hash del ítem de menú activo: `IntersectionObserver` con ventana acotada bajo el header
 * (elige la sección más presente en la “banda” de lectura); el scroll con `pickActiveByScroll
 * refuerza la señal cuando la intersección es ambigua.
 */
export function useActiveSectionHash(
  sectionHrefs: readonly { href: string }[],
): string | null {
  const ids = useMemo(
    () => sectionHrefs.map((item) => item.href.slice(1)),
    [sectionHrefs],
  )

  const [activeHash, setActiveHash] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const ratios = new Map<string, number>()
    ids.forEach((id) => ratios.set(id, 0))

    const flush = () => {
      let bestId: string | null = null
      let bestRatio = -1
      ids.forEach((id) => {
        const r = ratios.get(id) ?? 0
        if (r > bestRatio) {
          bestRatio = r
          bestId = id
        }
      })
      const scrollPick = pickActiveByScroll(ids)
      if (bestRatio > 0.08 && bestId) setActiveHash(`#${bestId}`)
      else setActiveHash(scrollPick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio)
        }
        flush()
      },
      {
        root: null,
        rootMargin: "-72px 0px -38% 0px",
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      },
    )

    elements.forEach((el) => observer.observe(el))

    const onScrollOrResize = () => flush()
    onScrollOrResize()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [ids])

  return activeHash
}
