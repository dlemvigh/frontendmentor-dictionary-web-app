import classes from "./Header.module.css"
import { DarkModeSwitcher } from "./inputs/DarkModeSwitcher"
import { FontSwitcher } from "./inputs/FontSwitcher"

export function Header() {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={import.meta.env.BASE_URL + "/images/logo.svg"} />
            <div className={classes.spacer} />
            <FontSwitcher />
            <div className={classes.divider} />
            <DarkModeSwitcher />
        </header>
    )
}