import { Image, Form, Button } from "react-bootstrap"
import { useRef, useState } from "react";

export default function Note(props) {
    const guessRef = useRef("");
    const [correctGuess, setGuessState] = useState(false);
    function handleGuess() {
        return;
    }

    console.log("props", props);

    return (props && props.note) ? (
        <div style={{ textAlign: "center" }}>
            <h1>daily or something sidk</h1>
            <Image
                src={`/p146/notes/${props.note.name}.svg`}
                alt={props.note.description}
                style={{ height: 400, width: 400 }} />

            <Form onSubmit={handleGuess} style={{ maxWidth: 400, margin: "0 auto" }}>
                <Form.Label htmlFor="answer">enter a guess</Form.Label>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Form.Control
                        id="answer"
                        placeholder="e.g. A4 or A (both work)"
                        ref={guessRef}
                    />
                    <Button type="submit">guess</Button>
                </div>
            </Form>
            {
                correctGuess ? <p>yay you did it</p> : <p>wrong or no guess yet</p>
            }
        </div>
    ) : <p>Loading</p>


}

// export default function Note(props){
//     return <p>note</p>
// }