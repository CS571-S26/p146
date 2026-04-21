import { useState, useRef } from "react"
import { Image, Form, Button } from "react-bootstrap"

import chords from "../../../../shared/chords.js"

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default function NoteFreeplay(props) {


    const [note, setNote] = useState(random(chords.note));
    const [prevNote, setPrevNote] = useState(null);
    const [correctGuess, setGuessState] = useState("initial");

    const guessRef = useRef("");

    const isValidGuess = props.isValidGuess;
    const setGuessFormatted = props.setGuessFormatted;

    console.log(note);

    function handleGuess(e) {
        e.preventDefault();

        const guess = guessRef.current.value;

        if (!isValidGuess(guess)) {
            setGuessFormatted("invalid");
            setGuessState("initial");
            return;
        }
        setGuessFormatted("valid");
        console.log(guess);

        if (guess === note.name.replace(/^(chord|treble)/, "")) {
            setNote(random(chords.note));
            setPrevNote(note);
            setGuessState("true");
        } else {
            setGuessState("false");
        }

        guessRef.current.value = "";
    }

    return <div style={{ textAlign: "center" }}>
        <h1>Freeplya mode!</h1>
        <h2>play to your heart's content (if you have one)</h2>
        <Image
            src={`/p146/notes/${note.name.replaceAll("#", "sharp")}.svg`}
            alt={note.description}
            style={{ height: 400, width: 400 }} />

        <Form onSubmit={(e) => handleGuess(e, note)} style={{ maxWidth: 400, margin: "0 auto" }}>
            <Form.Label htmlFor="answer">enter a guess</Form.Label>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                    id="answer"
                    placeholder="e.g. C4, Bb3, F#5 etc."
                    ref={guessRef}
                />
                <Button type="submit">guess</Button>
            </div>
        </Form>
        {(correctGuess === "true") && <p>nice! the note was {prevNote.name.replace(/^(chord|treble)/, "")}</p>}
        {(correctGuess === "false") && <p>wrong!</p>}
    </div>
}