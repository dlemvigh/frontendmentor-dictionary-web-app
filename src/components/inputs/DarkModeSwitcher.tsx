import { useDarkMode } from "../../context/DarkModeContext"
import classes from "./DarkModeSwitcher.module.css"

export function DarkModeSwitcher() {
    const { darkMode, toggleDarkMode } = useDarkMode()


    return (
        <div className={classes["dark-mode-switcher"]}>
            <label className={classes["dark-mode-label"]}>
                <input type="checkbox" name="dark-mode" className={classes["dark-mode-input"]} checked={darkMode === "dark"} onChange={toggleDarkMode} />
                <div className={classes["dark-mode-knob"]}></div>
            </label>
            
            <svg className={classes["dark-mode-img"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
        </div>
    )
}