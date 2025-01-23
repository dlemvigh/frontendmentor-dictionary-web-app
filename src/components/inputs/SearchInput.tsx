import classes from "./SearchInput.module.css"

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string
}

export function SearchInput(props: SearchInputProps) {
    return (
        <>
            <div className={classes.container}>
                <input className={classes.input} {...props} aria-invalid={!!props.error} />
                <img src={import.meta.env.BASE_URL + "/images/icon-search.svg"} className={classes.icon} />
            </div>
            {props.error && <p className={classes.error}>{props.error}</p>}
        </>
    )
}