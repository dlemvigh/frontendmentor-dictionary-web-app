import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { getPerferredColorScheme } from "../util/dark-mode"

export type DarkMode = "light" | "dark"
export type Font = "sans-serif" | "serif" | "mono"

type UIContextType = {
    darkMode: DarkMode
    font: Font
    setDarkMode: (darkMode: DarkMode) => void
    toggleDarkMode: () => void
    setFont: (font: Font) => void
}

export const UIContext = createContext<UIContextType | undefined>(undefined)

export function UIContextProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState<DarkMode>(() => getPerferredColorScheme())
    const [font, setFont] = useState<Font>("sans-serif") //TODO default font

    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => (prev === "dark" ? "light" : "dark"))
    }, [])

    useEffect(() => {
        document.body.classList.remove("dark-mode", "light-mode")
        document.body.classList.add(`${darkMode}-mode`)
    }, [darkMode])

    useEffect(() => {
        document.body.classList.remove("font-serif", "font-sans-serif", "font-mono")
        document.body.classList.add(`font-${font}`)
    }, [font])

    const value = useMemo(() => ({ 
        darkMode, 
        font, 
        setDarkMode, 
        toggleDarkMode,
        setFont
    }), [darkMode, font])

    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    )
}

export function useUIContext() {
    const context = useContext(UIContext)
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider")
    }
    return context
}