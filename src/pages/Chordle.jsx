import { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';
import { Image, Form, Button } from "react-bootstrap";


export default function Chordle(props) {
    const [notes, setNotes] = useState([]);
    const guessRef = useRef("");
    const [correctGuess, setCorrectGuess] = useState(false);
    const [date, setDate] = useState(getTodayId());

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

        const guess = guessRef.current.value;
        if (guess === noteToday.name) {
            setCorrectGuess(true);
        } else {
            setCorrectGuess(false);
        }
        return;
    }

    function changeDate(action) {
        setDate(prev => {
            
            const [month, day, year] = prev.split("-").map(Number);

            const fullYear = 2000 + year;

            const d = new Date(fullYear, month - 1, day);

            if (action === "decrement") {
                d.setDate(d.getDate() - 1);
            } else {
                d.setDate(d.getDate() + 1);
            }

            const newMonth = d.getMonth() + 1;
            const newDay = d.getDate();
            const newYear = d.getFullYear().toString().slice(-2);

            setCorrectGuess(false);
            guessRef.current.value="";
            return `${newMonth}-${newDay}-${newYear}`;
        });
    }

    const noteToday = notes.find(daily => daily.id === date);

    if (!noteToday) {
        return <p>Loading... (you just lost the game)</p>
    } else {
        return <div style={{ textAlign: "center" }}>
            <h1>daily or something idk</h1>
            <Image
                src={`/p146/notes/${noteToday.name}.svg`}
                alt={noteToday.description}
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
            <Button onClick={() => changeDate("decrement")}>prev day</Button>
            <Button 
            onClick={() => changeDate("increment")}
            disabled={date === getTodayId()}
            >next day</Button>
        </div>
    }

}