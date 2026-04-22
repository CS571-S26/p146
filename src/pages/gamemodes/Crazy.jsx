import { useRef, useContext, useEffect, useState } from "react";

import GuessContext from "../../contexts/GuessContext";
import FreeplayContext from "../../contexts/FreeplayContext";

import CrazyFreeplay from "./freeplay/CrazyFreeplay";
import CrazyDaily from "./daily/CrazyDaily";

export default function Note(props) {
    const [isFreeplay] = useContext(FreeplayContext);

    const chord = props.crazy;

    function isValidGuess(guess) {
        return props.guessPool.includes(guess);
    }

    const dataToPass = {
        isValidGuess,
        setGuessFormatted: props.setGuessFormatted,
    }

    return (isFreeplay) ? <CrazyFreeplay {...dataToPass} /> : <CrazyDaily {...dataToPass} chord={chord} />
}
