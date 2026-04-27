import { useRef, useContext, useEffect, useState } from "react";

import GuessContext from "../../contexts/GuessContext";
import FreeplayContext from "../../contexts/FreeplayContext";

import NoteFreeplay from "./freeplay/NoteFreeplay";
import NoteDaily from "./daily/NoteDaily";

export default function Note(props) {
    const [isFreeplay] = useContext(FreeplayContext);

    const note = props.note;

    function isValidGuess(guess) {
        return /^[A-G](?:#|b)?[0-9]$/.test(guess);
    }

    const dataToPass = {
        isValidGuess,
        setGuessFormatted: props.setGuessFormatted,
    }

    return (isFreeplay) ? <NoteFreeplay {...dataToPass} /> : <NoteDaily {...dataToPass} note={note} />
}
