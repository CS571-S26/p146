import { useState, useRef } from "react"
import { Image, Form, Button } from "react-bootstrap"

import chords from "../../../../shared/chords.js"

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default function TriadFreeplay(props) {

    const [chord, setChord] = useState(random(chords.triad));
    const [prevChord, setPrevChord] = useState(null);
    const [correctGuess, setGuessState] = useState("initial");

    const guessRef = useRef("");

    const isValidGuess = props.isValidGuess;
    const setGuessFormatted = props.setGuessFormatted;

    console.log(chord);

    function handleGuess(e) {
        e.preventDefault();

        const guess = guessRef.current.value.trim();

        if (!isValidGuess(guess)) {
            setGuessFormatted("invalid");
            setGuessState("initial");
            return;
        }
        setGuessFormatted("valid");
        console.log(guess);

        if (guess === chord.name.replace(/^(chord|treble)/, "")) {
            setChord(random(chords.triad));
            setPrevChord(chord);
            setGuessState("true");
        } else {
            setGuessState("false");
        }

        guessRef.current.value = "";
    }

    function refresh() {
        setChord(random(chords.triad));
        setGuessState("initial");
        setGuessFormatted("initial");
    }

    return <div style={{ textAlign: "center" }}>
        <h1>Freeplya mode!</h1>
        <h2>play to your heart's content (if you have one)</h2>
        <Image
            src={`/p146/triads/${chord.name.replaceAll("#", "sharp")}.svg`}
            alt={chord.description}
            style={{ height: 400, width: 400 }} />

        <Form onSubmit={(e) => handleGuess(e, chord)} style={{ maxWidth: 400, margin: "0 auto" }}>
            <Form.Label htmlFor="answer">enter a guess</Form.Label>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Button variant="secondary" onClick={refresh}>
                    <i className="bi bi-arrow-clockwise"></i>
                </Button>
                <Form.Control
                    id="answer"
                    placeholder="e.g. C, Cm, Caug, Cdim etc."
                    ref={guessRef}
                />
                <Button type="submit">guess</Button>
            </div>
        </Form>
        {(correctGuess === "true" && prevChord) && <p>nice! the chord was {prevChord.name.replace(/^(chord|treble)/, "")}</p>}
        {(correctGuess === "false") && <p>wrong!</p>}
    </div>
}