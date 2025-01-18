import classes from "./SearchInput.module.css"

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export function SearchInput(props: SearchInputProps) {
    return (
        <div className={classes["search-container"]}>
            <input className={classes["search-input"]} {...props} />
            <img src="/images/icon-search.svg" className={classes["search-icon"]} />
        </div>
    )
}