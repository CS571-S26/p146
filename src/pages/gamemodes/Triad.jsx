import { useRef, useContext, useEffect, useState } from "react";

import GuessContext from "../../contexts/GuessContext";
import FreeplayContext from "../../contexts/FreeplayContext";

import TriadFreeplay from "./freeplay/TriadFreeplay";
import TriadDaily from "./daily/TriadDaily";

export default function Note(props) {
    const [isFreeplay] = useContext(FreeplayContext);

    const chord = props.triad;

    function isValidGuess(guess) {
        return props.guessPool.includes(guess);
    }

    const dataToPass = {
        isValidGuess,
        setGuessFormatted: props.setGuessFormatted,
    }

    return (isFreeplay) ? <TriadFreeplay {...dataToPass} /> : <TriadDaily {...dataToPass} chord={chord} />
}
