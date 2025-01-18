import classes from "./Header.module.css"

export function Header() {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="/images/logo.svg" />
            <span>
                controls
            </span>
        </header>
    )
}