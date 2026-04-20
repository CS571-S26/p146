import { Image, Form, Button } from "react-bootstrap"
import { useRef, useContext, useEffect } from "react";

import GuessContext from "../../contexts/GuessContext";

export default function Crazy(props) {
    const guessRef = useRef("");
    const [correctGuess, setGuessState] = useContext(GuessContext);
    const chord = props.crazy;
    const [guessFormatted, setGuessFormatted] = useState(false);

    function handleGuess(e) {
        e.preventDefault();
        const guess = guessRef.current.value.trim().substring(5);
        console.log(guess);

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
            src={`/p146/crazy/${chord.name.replaceAll("#", "sharp")}.svg`}
            alt={chord.description}
            style={{ height: 400, width: 400 }} />

        <Form onSubmit={handleGuess} style={{ maxWidth: 400, margin: "0 auto" }}>
            <Form.Label htmlFor="answer">enter a guess</Form.Label>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                    id="answer"
                    placeholder="e.g. chordC7, chordCsus4(maj7,b9,#5), etc."
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
