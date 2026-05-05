import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { CvPage } from "@/CvPage"

export default function App() {
  return (
    <ThemeProvider>
      <CvPage />
    </ThemeProvider>
  )
}
