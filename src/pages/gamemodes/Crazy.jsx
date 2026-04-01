import { Image, Form, Button } from "react-bootstrap"
import { useRef, useState } from "react";

export default function Crazy(props) {
    const guessRef = useRef("");
    const [correctGuess, setGuessState] = useState(false);
    const chord = props.crazy;

    function handleGuess() {
        e.preventDefault();
        const guess = guessRef.current.value.trim();

        if (guess === note.name){
            setGuessState(true);
        } else {
            setGuessState(false);
        }

        guessRef.currentValue = "";
    }

    return <div style={{ textAlign: "center" }}>
        <h1>daily or something sidk</h1>
        <Image
            src={`/p146/crazy/${chord.name}.svg`}
            alt={chord.description}
            style={{ height: 400, width: 400 }} />

        <Form onSubmit={handleGuess} style={{ maxWidth: 400, margin: "0 auto" }}>
            <Form.Label htmlFor="answer">enter a guess</Form.Label>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                    id="answer"
                    placeholder="e.g. chordC7, chordCm(maj7,b9), chordCsus4(maj7,b9,#5), etc."
                    ref={guessRef}
                />
                <Button type="submit">guess</Button>
            </div>
        </Form>
        {
            correctGuess ? <p>yay you did it</p> : <p>wrong or no guess yet</p>
        }
    </div>
}
