import { DataType } from "../DATA";
import classes from "./DictionaryResult.module.css"

interface DictionaryResultProps {
    data: DataType
}

export function DictionaryResult({ data }: DictionaryResultProps) {
    const { word, phonetic, meanings, sourceUrls } = data[0]

    return (
        <>
            <section className={classes["word-section"]}>
                <h1 className={classes.word}>{word}</h1>
                <span className={classes.phonetic}>{phonetic}</span>
                <button className={classes.pronounciation}>
                    {/* <img src="/images/icon-play.svg" alt="pronounce" /> */}
                    <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
                        <g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                            <path d="M29 27v21l21-10.5z" />
                        </g>
                    </svg>
                </button>
            </section>
            {meanings.map((meaning, index) => (
                <section className={classes["meaning-section"]} key={index}>
                    <h2 className={classes["meaning-part-of-speech"]}>
                        <span>{meaning.partOfSpeech}</span>
                        <hr className={classes["meaning-line"]} />
                    </h2>
                    <div className={classes["meaning-title"]}>Meaning</div>

                    <ul className={classes["definition-list"]}>
                        {meaning.definitions.map((definition, index) => (
                            <li key={index} className={classes["definition"]}>
                                {definition.definition}
                                {definition.example && <span className={classes.example}>{definition.example}</span>}
                            </li>
                        ))}
                    </ul>

                    {meaning.synonyms?.length > 0 && (
                        <section className={classes["synonyms-section"]}>
                            <span className={classes["synonyms-title"]}>Synonyms</span>
                            <span className={classes.synonyms}>{meaning.synonyms.join(", ")}</span>
                        </section>
                    )}
                </section>
            ))}
            {sourceUrls?.length > 0 && (
                <section className={classes["sources-section"]}>
                    <div className={classes["sources-title"]}>Source</div>
                    {sourceUrls.map((sourceUrl, index) => (
                        <a key={index} className={classes.source} href={sourceUrl}>{sourceUrl}</a>
                    ))}
                </section>
            )}
        </>
    )

}