import { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';
import { Image, Form, Button } from "react-bootstrap";


export default function Chordle(props) {
    const [notes, setNotes] = useState([]);
    const guessRef = useRef("");

    useEffect(() => {
        getDocs(collection(db, `dailies`))
            .then(snapshot => {
                const data = snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    ...doc.data()
                })
                )
                setNotes(data);
                console.log(data);
            })
    }, []);

    function getTodayId() {
        const today = new Date();

        const month = today.getMonth() + 1;
        const day = today.getDate();
        const year = today.getFullYear().toString().slice(-2);

        return `${month}-${day}-${year}`;
    }

    function handleGuess(e) {
        e.preventDefault();
        return;
    }

    const date = getTodayId();
    const noteToday = notes.find(daily => daily.id === date);

    if (!noteToday) {
        return <p>Loading... (you just lost the game)</p>
    } else {
        return <div style={{ textAlign: "center" }}>
            <h1>daily or something idk</h1>
            <Image
                src={`/p146/notes/${noteToday.name}.svg`}
                alt={noteToday.description}
                style={{ height: 500, width: 500 }} />

            <Form onSubmit={handleGuess} style={{ maxWidth: 400, margin: "0 auto" }}>
                <Form.Label htmlFor="answer">enter a guess</Form.Label>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Form.Control
                        id="answer"
                        placeholder="e.g. A4 or A (both work)"
                        ref={guessRef}
                    />
                    <Button type="submit">guess</Button>
                </div>
            </Form>
        </div>
    }

}