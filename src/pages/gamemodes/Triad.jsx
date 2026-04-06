import { Image, Form, Button } from "react-bootstrap"
import { useRef, useContext, useEffect } from "react";

import GuessContext from "../../contexts/GuessContext";

export default function Triad(props) {
    const guessRef = useRef("");
    const [correctGuess, setGuessState] = useContext(GuessContext);
    const chord = props.triad;

    function handleGuess(e) {
        e.preventDefault();
        const guess = guessRef.current.value.trim();

        if (guess === chord.name) {
            setGuessState(true);
        } else {
            setGuessState(false);
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
                    placeholder="e.g. chordC, chordCm, chordCaug, etc."
                    ref={guessRef}
                />
                <Button type="submit">guess</Button>
            </div>
        </Form>
        {
            correctGuess ? <p>yay you did it! the chord was {chord.name}</p> : <p>wrong or no guess yet</p>
        }
    </div>
}
