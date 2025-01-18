import { FocusEvent, useCallback, useState } from "react";
import classes from "./FontSwitcher.module.css"
import { useUIContext } from "../../context/UIContext";

type Font = "sans-serif" | "serif" | "mono";

export function FontSwitcher() {
    const { font, setFont } = useUIContext();
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])

    const onOptionClick = useCallback((font: Font) => {
        setFont(font);
        setIsOpen(false);
    }, [])

    const onBlurOutside = useCallback((e: FocusEvent<HTMLElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsOpen(false);
        }
    }, [])

    return (
        <div className={classes["font-switcher-container"]} onBlur={onBlurOutside}>
            <button className={classes["font-switcher"]} onClick={toggleOpen}>
                <FontOption font={font} />
                <img src="/images/icon-arrow-down.svg" className={`${classes.chevron}`} />
            </button>
            {isOpen && (
                <div className={classes["dropdown"]}>
                    <button className={classes["option"]} onClick={() => onOptionClick("sans-serif")}><FontOption font="sans-serif" /></button>
                    <button className={classes["option"]} onClick={() => onOptionClick("serif")}><FontOption font="serif" /></button>
                    <button className={classes["option"]} onClick={() => onOptionClick("mono")}><FontOption font="mono" /></button>
                </div>
            )}
        </div>
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