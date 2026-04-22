import { Image, Form, Button } from "react-bootstrap"
import { useRef, useState, useContext, useEffect } from "react";

import DayContext from "../../../contexts/DayContext";
import DifficultyContext from "../../../contexts/DifficultyContext";
import FreeplayContext from "../../../contexts/FreeplayContext";

import WinModal from "../../../components/WinModal";

export default function TriadDaily(props) {
    const chord = props.chord;
    const isValidGuess = props.isValidGuess;
    const setGuessFormatted = props.setGuessFormatted;

    const [date] = useContext(DayContext);
    const [difficulty] = useContext(DifficultyContext);
    const [isFreeplay] = useContext(FreeplayContext);

    const guessRef = useRef("");
    const [correctGuess, setGuessState] = useState("initial");
    const [modalStatus, setModalStatus] = useState(false);

    function handleGuess(e, chord) {
        e.preventDefault("");

        const guess = guessRef.current.value.trim();

        if (!isValidGuess(guess)) {
            setGuessFormatted("invalid");
            setGuessState("initial");
            return;
        }
        setGuessFormatted("valid");
        console.log(guess);

        if (guess === chord.name.replace(/^(chord|treble)/, "")) {
            setGuessState("true");
            setModalStatus(true);
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
            src={`/p146/triads/${chord.name.replaceAll("#", "sharp")}.svg`}
            alt={chord.description}
            style={{ height: 400, width: 400 }} />

        <Form onSubmit={(e) => handleGuess(e, chord)} style={{ maxWidth: 400, margin: "0 auto" }}>
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
        {
            (modalStatus) && <WinModal
                show={modalStatus}
                onHide={() => setModalStatus(false)}
                item={chord.name.replace(/^(chord|treble)/, "")}
            />
        }
        {(correctGuess === "true") && <p>you did it!</p>}
        {(correctGuess === "false") && <p>nope!</p>}
    </div>
}