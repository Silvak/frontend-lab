import { ThemeProvider } from "@/components/theme/ThemeProvider"


export default function Mock(){
    return(
        <ThemeProvider>
            <div className="flex">
            <h1>HOLA</h1>
            </div>
        </ThemeProvider>
    )
}