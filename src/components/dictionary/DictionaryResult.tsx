import { DataType } from "../DATA";
import classes from "./DictionaryResult.module.css"

interface DictionaryResultProps {
    data: DataType
}

export function DictionaryResult({ data }: DictionaryResultProps) {
    const { word, phonetic } = data[0]

    return (
        <section className={classes["word-section"]}>
            <strong className={classes.word}>{word}</strong>
            <span className={classes.phonetic}>{phonetic}</span>
            <button className={classes.pronounciation}>
                {/* <img src="/images/icon-play.svg" alt="pronounce" /> */}
                <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
                    <g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/>
                        <path d="M29 27v21l21-10.5z"/>
                    </g>
                </svg>
            </button>
        </section>
    )
    
}