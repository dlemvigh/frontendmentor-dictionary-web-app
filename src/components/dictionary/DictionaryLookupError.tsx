import { DictionaryApiError } from "../../hooks/useDictionaryApi"
import classes from "./DictionaryLookupError.module.css"

interface DictionaryLookupErrorProps {
    error: DictionaryApiError
}

export function DictionaryLookupError({ error }: DictionaryLookupErrorProps) {
    return (
        <div className={classes.container}>
            <div className={classes.icon}>😕</div>
            <h2 className={classes.title}>{error.title}</h2>
            <p className={classes.message}>{error.message}</p>
            <p className={classes.message}>{error.resolution}</p>
        </div>
    )
}