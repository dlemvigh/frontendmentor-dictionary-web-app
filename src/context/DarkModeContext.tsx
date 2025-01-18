import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { getPerferredColorScheme } from "../util/dark-mode"

type DarkMode = "light" | "dark"

type DarkModeContextType = {
    darkMode: DarkMode
    setDarkMode: (darkMode: DarkMode) => void
    toggleDarkMode: () => void
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState<DarkMode>(() => getPerferredColorScheme())
    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => (prev === "dark" ? "light" : "dark"))
    }, [])

    const value = useMemo(() => ({ darkMode, setDarkMode, toggleDarkMode }), [darkMode])

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider")
    }
    return context
}