import { Image, Form, Button } from "react-bootstrap"
import { useRef, useState, useContext, useEffect } from "react";

import DayContext from "../../../contexts/DayContext";
import DifficultyContext from "../../../contexts/DifficultyContext";
import FreeplayContext from "../../../contexts/FreeplayContext";


export default function NoteDaily(props) {
    const note = props.note;
    const isValidGuess = props.isValidGuess;
    const setGuessFormatted = props.setGuessFormatted;

    const [date] = useContext(DayContext);
    const [difficulty] = useContext(DifficultyContext);
    const [isFreeplay] = useContext(FreeplayContext);
 
    const guessRef = useRef("");
    const [correctGuess, setGuessState] = useState("initial");

    function handleGuess(e, note) {
        e.preventDefault("");

        const guess = guessRef.current.value;

        if (!isValidGuess(guess)) {
            setGuessFormatted("invalid");
            setGuessState("initial");
            return;
        }
        setGuessFormatted("valid");
        console.log(guess);

        if (guess === note.name.replace(/^(chord|treble)/, "")) {
            setGuessState("true");
        } else {
            setGuessState("false");
        }

        guessRef.current.value = "";
    }

    useEffect(() => {
        setGuessState("initial");
        setGuessFormatted("initial");
    }, [date, difficulty, isFreeplay]);


    return <div style={{ textAlign: "center" }}>
        <h1>daily or something sidk</h1>
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
        {(correctGuess === "true") && <p>nice! the note was {note.name.replace(/^(chord|treble)/, "")}</p>}
        {(correctGuess === "false") && <p>nope!</p>}
    </div>
}