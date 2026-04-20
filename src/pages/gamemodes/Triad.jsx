import { Image, Form, Button } from "react-bootstrap"
import { useRef, useContext, useEffect, useState } from "react";

import GuessContext from "../../contexts/GuessContext";

export default function Triad(props) {
    const guessRef = useRef("");
    const [correctGuess, setGuessState] = useContext(GuessContext);

    const chord = props.triad;

    const setGuessFormatted = props.setGuessFormatted;

    function isValidGuess(guess) {
        return props.guessPool.includes(guess);
    }

    function handleGuess(e) {
        e.preventDefault();

        const guess = guessRef.current.value;

        if (!isValidGuess(guess)) {
            setGuessFormatted("invalid");
            return;
        }
        setGuessFormatted("valid");
        console.log(guess);

        if (guess === chord.name.replace(/^(chord|treble)/, "")) {
            setGuessState("true");
        } else {
            setGuessState("false");
        }

        guessRef.currentValue = "";
    }

    return <div style={{ textAlign: "center" }}>
        <h1>daily or something sidk</h1>
        <Image
            src={`/p146/triads/${chord.name.replaceAll("#", "sharp")}.svg`}
            alt={chord.description}
            style={{ height: 400, width: 400 }} />

        <Form onSubmit={handleGuess} style={{ maxWidth: 400, margin: "0 auto" }}>
            <Form.Label htmlFor="answer">enter a guess</Form.Label>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                    id="answer"
                    placeholder="e.g. C, Cm, Caug, Cdim etc."
                    ref={guessRef}
                />
                <Button type="submit">guess</Button>
            </div>
        </Form>
    </div>
}
