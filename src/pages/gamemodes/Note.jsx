import { Image, Form, Button } from "react-bootstrap"
import { useRef, useState } from "react";

export default function Note(props) {
    const guessRef = useRef("");
    const [correctGuess, setGuessState] = useState(false);
    const note = props.note;

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
            src={`/p146/notes/${note.name}.svg`}
            alt={note.description}
            style={{ height: 400, width: 400 }} />

        <Form onSubmit={handleGuess} style={{ maxWidth: 400, margin: "0 auto" }}>
            <Form.Label htmlFor="answer">enter a guess</Form.Label>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                    id="answer"
                    placeholder="e.g. trebleA4"
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
