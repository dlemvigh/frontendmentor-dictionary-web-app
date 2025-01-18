import classes from "./Header.module.css"
import { DarkModeSwitcher } from "./inputs/DarkModeSwitcher"

export function Header() {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="/images/logo.svg" />
            <div>
                <DarkModeSwitcher />
            </div>
        </header>
    )
}