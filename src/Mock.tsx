import { ThemeProvider } from "@/components/theme/ThemeProvider";

const GRID_CLASSES = "grid-cols-4 md:grid-cols-8 lg:grid-cols-12";
const MAX_W_CLASS = "max-w-[1100px]";

const overlay_grid = true;

// Columnas por breakpoint (para el overlay visual)
const COLS = { mobile: 4, tablet: 8, desktop: 12 };

export default function Mock() {
  return (
    <ThemeProvider>
      {/*OVERWORLD*/}
      <main className="relative h-screen w-full overflow-hidden bg-background">
        {/*Visual overlay */}
        {overlay_grid && (
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div
              className={`w-full ${MAX_W_CLASS} h-full grid ${GRID_CLASSES} grid-rows-12 gap-4 px-8`}
            >
              {Array.from({ length: COLS.desktop }).map((_, i) => (
                <div
                  key={i}
                  className={[
                    "row-span-12 bg-blue-500/5 border-x border-blue-500/15",
                    // cols 5-8: ocultas en mobile, visibles desde md
                    i >= COLS.mobile && i < COLS.tablet
                      ? "hidden md:block"
                      : "",
                    // cols 9-12: ocultas en mobile y tablet, visibles desde lg
                    i >= COLS.tablet ? "hidden lg:block" : "",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        )}

        {/*Grid de contenido */}
        <div className="absolute inset-0 flex justify-center">
          <div
            className={`w-full ${MAX_W_CLASS} h-full grid ${GRID_CLASSES} grid-rows-12 gap-4 px-8`}
          >
            {/* Ejemplo: full-width en mobile, 3 cols en desktop */}
            <div className="col-span-4 md:col-start-1 md:col-span-3 row-start-1 row-span-2 bg-red-200/80 rounded-lg flex items-center justify-center">
              asd
            </div>
          </div>
        </div>

        {/* Out-of-grid*/}
        <div className="hidden relative w-[50vw] h-[50vw] mx-auto drop-shadow-[12px_12px_0px_theme(colors.black)]">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105 hover:rotate-3 cursor-pointer"
            style={{
              backgroundImage: "url('/a.png')",
              WebkitMaskImage: "url('/cloud.svg')",
              maskImage: "url('/cloud.svg')",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          >
            <p>weqweqwe</p>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
