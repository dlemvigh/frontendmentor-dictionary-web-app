import { FocusEvent, useCallback, useState } from "react";
import classes from "./FontSwitcher.module.css"
import { useUIContext } from "../../context/UIContext";

type Font = "sans-serif" | "serif" | "mono";

export function FontSwitcher() {
    const { font, setFont } = useUIContext();
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])

    const onBlurOutside = useCallback((e: FocusEvent<HTMLButtonElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsOpen(false);
        }
    }, [])

    return (
        <button className={classes["font-switcher"]} onClick={toggleOpen} onBlur={onBlurOutside}>
            <FontOption font={font} />
            <img src="/images/icon-arrow-down.svg" className={`${classes.chevron}`} />
            {isOpen && (
                <div className={classes["dropdown"]}>
                    <button className={classes["option"]} onClick={() => setFont("sans-serif")}><FontOption font="sans-serif" /></button>
                    <button className={classes["option"]} onClick={() => setFont("serif")}><FontOption font="serif" /></button>
                    <button className={classes["option"]} onClick={() => setFont("mono")}><FontOption font="mono" /></button>
                </div>
            )}
        </button>
    );   
}

interface FontOptionProps {
    font: Font;
}

function FontOption({ font }: FontOptionProps) {
    return (
        <span className={classes[`font-${font}`]}>{toTitleCase(font)}</span>
    );
}

function toTitleCase(str: string) {
    return str.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}